#!/usr/bin/env node
/**
 * fetch-native-catalog – snapshot the pawr.link native widget catalog.
 *
 * Downloads https://pawr.link/api/widgets/catalog and writes it to
 * src/generated/native-catalog.json. Runs before `pnpm dev` and `pnpm build`.
 *
 * resilience rule: this script NEVER fails the build. if the fetch fails or
 * the payload doesn't look like a catalog, the existing committed snapshot
 * stays in place and we exit 0 with a warning.
 *
 * override the source with PAWR_CATALOG_URL (used for testing the fallback).
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const outPath = join(root, 'src', 'generated', 'native-catalog.json')
const url = process.env.PAWR_CATALOG_URL ?? 'https://pawr.link/api/widgets/catalog'

function warn(message) {
  console.warn(`fetch-native-catalog: ${message} – keeping the committed snapshot.`)
}

function validate(payload) {
  if (typeof payload !== 'object' || payload === null || !Array.isArray(payload.widgets)) {
    return { ok: false, reason: 'payload is not an object with a widgets array' }
  }
  const widgets = []
  let dropped = 0
  for (const entry of payload.widgets) {
    const valid =
      typeof entry === 'object' &&
      entry !== null &&
      typeof entry.type === 'string' &&
      typeof entry.label === 'string' &&
      typeof entry.category === 'string' &&
      typeof entry.defaultSize === 'string' &&
      Array.isArray(entry.allowedSizes)
    if (valid) widgets.push(entry)
    else dropped += 1
  }
  if (widgets.length === 0) {
    return { ok: false, reason: 'widgets array has no valid entries' }
  }
  return { ok: true, widgets, dropped }
}

async function main() {
  let payload
  try {
    const res = await fetch(url, {
      headers: { accept: 'application/json' },
      signal: AbortSignal.timeout(15000),
    })
    if (!res.ok) {
      warn(`GET ${url} returned ${res.status}`)
      process.exit(0)
    }
    payload = await res.json()
  } catch (err) {
    warn(`fetch failed (${err instanceof Error ? err.message : String(err)})`)
    process.exit(0)
  }

  const result = validate(payload)
  if (!result.ok) {
    warn(`invalid catalog payload: ${result.reason}`)
    process.exit(0)
  }
  if (result.dropped > 0) {
    console.warn(`fetch-native-catalog: dropped ${result.dropped} malformed entr${result.dropped === 1 ? 'y' : 'ies'}.`)
  }

  const snapshot = {
    schema: typeof payload.schema === 'string' ? payload.schema : 'pawr.widget-catalog.v1',
    fetchedAt: new Date().toISOString(),
    widgets: result.widgets,
  }

  let unchanged = false
  try {
    const current = JSON.parse(readFileSync(outPath, 'utf8'))
    unchanged =
      JSON.stringify({ ...current, fetchedAt: null }) ===
      JSON.stringify({ ...snapshot, fetchedAt: null })
  } catch {
    // no snapshot yet – fine, we write one
  }

  if (unchanged) {
    console.log(`fetch-native-catalog: catalog unchanged (${snapshot.widgets.length} widgets).`)
    return
  }

  mkdirSync(join(root, 'src', 'generated'), { recursive: true })
  writeFileSync(outPath, JSON.stringify(snapshot, null, 2) + '\n')
  console.log(`fetch-native-catalog: wrote ${snapshot.widgets.length} widgets to src/generated/native-catalog.json.`)
}

await main()
