#!/usr/bin/env node
/**
 * check-native-previews – every 1x1-capable native widget shown on the
 * playground must have a hardcoded example preview mapped in
 * src/lib/native-preview-map.json.
 *
 * fails (exit 1) when a catalog type lacks a preview mapping, so future
 * catalog additions can't silently render empty tiles.
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))

const catalog = JSON.parse(
  readFileSync(join(root, 'src', 'generated', 'native-catalog.json'), 'utf8'),
)
const previewMap = JSON.parse(
  readFileSync(join(root, 'src', 'lib', 'native-preview-map.json'), 'utf8'),
)

const EXCLUDED_TYPES = new Set(['community', 'codex-pet'])

const expected = catalog.widgets
  .filter(
    (entry) =>
      entry.renderable !== false &&
      !EXCLUDED_TYPES.has(entry.type) &&
      entry.defaultSize === '1x1',
  )
  .map((entry) => entry.type)
  .sort()

const missing = expected.filter((type) => !(type in previewMap))
const stale = Object.keys(previewMap).filter((type) => !expected.includes(type))

if (stale.length > 0) {
  console.warn(`check-native-previews: ${stale.length} mapped type(s) not currently displayed (${stale.join(', ')}) – kept as fallbacks.`)
}

if (missing.length > 0) {
  console.error('check-native-previews: missing preview mappings:')
  for (const type of missing) {
    console.error(`✗ ${type} – add it to src/lib/native-preview-map.json and give it a sample in native-preview-data.ts.`)
  }
  process.exit(1)
}

console.log(`native preview coverage ok – ${expected.length} types mapped.`)
