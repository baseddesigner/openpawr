#!/usr/bin/env node
/**
 * build-llms-full – generate public/llms-full.txt, the complete current
 * picture of the playground for agents: every community widget, the
 * displayed native 1x1 types, and the full contribution guide.
 *
 * community widget data comes from the widgets/<slug>/manifest.ts files
 * (uniform single-object literals – fields are regex-extracted; node has
 * no ts loader). native types come from the committed catalog snapshot.
 *
 * resilience rule: never fail the build. on any error, keep the existing
 * file and exit 0 with a warning.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const outPath = join(root, 'public', 'llms-full.txt')

function warn(message) {
  console.warn(`build-llms-full: ${message} – keeping the existing file.`)
}

function field(source, name) {
  const match =
    source.match(new RegExp(`${name}:\\s*'((?:[^'\\\\]|\\\\.)*)'`)) ??
    source.match(new RegExp(`${name}:\\s*"((?:[^"\\\\]|\\\\.)*)"`))
  return match ? match[1].replace(/\\(.)/g, '$1') : null
}

function numberField(source, name) {
  const match = source.match(new RegExp(`${name}:\\s*(\\d+)`))
  return match ? Number(match[1]) : null
}

function readManifests() {
  const dir = join(root, 'widgets')
  const slugs = readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()
  const manifests = []
  for (const slug of slugs) {
    const path = join(dir, slug, 'manifest.ts')
    if (!existsSync(path)) continue
    const source = readFileSync(path, 'utf8')
    const authorMatch = source.match(/author:\s*\{\s*name:\s*'((?:[^'\\]|\\.)*)'/)
    manifests.push({
      slug: field(source, 'slug') ?? slug,
      version: field(source, 'version') ?? '1.0.0',
      name: field(source, 'name'),
      description: field(source, 'description'),
      category: field(source, 'category'),
      author: authorMatch ? authorMatch[1] : 'unknown',
      likeCount: numberField(source, 'likeCount'),
      addCount: numberField(source, 'addCount'),
    })
  }
  return manifests
}

function readNativeTypes() {
  const catalog = JSON.parse(
    readFileSync(join(root, 'src', 'generated', 'native-catalog.json'), 'utf8'),
  )
  return catalog.widgets
    .filter(
      (entry) =>
        entry.renderable !== false &&
        !['community', 'codex-pet'].includes(entry.type) &&
        entry.defaultSize === '1x1',
    )
    .map((entry) => `${entry.type} (${entry.category})`)
    .sort()
}

const GUIDE = `## how to contribute

widget anatomy – every widget is widgets/<slug>/ with exactly three files:
manifest.ts (slug, version, name, description, category, author, defaultConfig),
widget.tsx (the component – presentation only), fixture.ts (named config
variants for previews: the default config plus one realistic example).

data rules – presentation-only. all data comes from the widget's own config
and the public profile object (displayName, slug, avatarUrl, ensName,
walletAddress). no fetch, XMLHttpRequest, WebSocket, sendBeacon, localStorage,
sessionStorage, document.cookie, window.ethereum, dangerouslySetInnerHTML,
createPortal, <iframe>, <form>, process.env, or node built-ins. the boundary
check (pnpm check-boundary) scans every file under widgets/ and CI fails on
any hit. timers and Date/Intl math are allowed.

sizing – 1x1 only. fill the cell (h-full on the root element), no fixed
pixel widths, semantic tailwind tokens only (bg-background, text-foreground,
text-muted-foreground, bg-muted, border-border).

pr flow – fork https://github.com/baseddesigner/openpawr, clone,
pnpm install, pnpm create-widget <slug>, build with pnpm dev, then
pnpm check && pnpm check-boundary. open a PR with screenshots of each
fixture state. review covers design fit, the rules, and no spam. merged
widgets go live on open.pawr.link immediately and are ported into the
pawr.link app with author credit.`

function main() {
  let manifests, nativeTypes
  try {
    manifests = readManifests()
    nativeTypes = readNativeTypes()
  } catch (err) {
    warn(`generation failed (${err instanceof Error ? err.message : String(err)})`)
    process.exit(0)
  }
  if (manifests.length === 0) {
    warn('no widget manifests found')
    process.exit(0)
  }

  const lines = [
    '# openpawr – full context',
    '',
    '> community widgets for pawr.link pages – every widget, the native set, and the complete contribution guide. generated at build time, always current.',
    '',
    `generated: ${new Date().toISOString()}`,
    '',
    `## community widgets (${manifests.length})`,
    '',
  ]
  for (const manifest of manifests) {
    lines.push(
      `- ${manifest.name} – \`widget:${manifest.slug}\` – v${manifest.version} – ${manifest.category} – by ${manifest.author} – ${manifest.description} (likes ${manifest.likeCount}, adds ${manifest.addCount})`,
    )
  }
  lines.push(
    '',
    'add any of these to a pawr.link page by pasting its `widget:<slug>` shortcut into the page action bar.',
    '',
    `## native widgets (${nativeTypes.length})`,
    '',
    'built into every pawr.link page – no code needed. shown at 1x1:',
    '',
  )
  for (const type of nativeTypes) {
    lines.push(`- ${type}`)
  }
  lines.push('', GUIDE, '')

  writeFileSync(outPath, lines.join('\n'))
  console.log(`build-llms-full: wrote ${manifests.length} community widgets + ${nativeTypes.length} native types to public/llms-full.txt.`)
}

main()
