#!/usr/bin/env node
/**
 * check-boundary – keeps community widgets presentation-only.
 *
 * Scans every source file under widgets/ and fails on forbidden patterns:
 * network calls, storage, wallet prompts, raw HTML, portals, iframes,
 * forms, env access, and node built-in imports.
 *
 * exit 1 with a per-file report when anything is found.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const widgetsDir = join(root, 'widgets')

const RULES = [
  { rule: 'fetch', pattern: /\bfetch\s*\(/, message: 'widgets cannot make network calls – data comes from config and the public profile only.' },
  { rule: 'XMLHttpRequest', pattern: /\bXMLHttpRequest\b/, message: 'widgets cannot make network calls – data comes from config and the public profile only.' },
  { rule: 'WebSocket', pattern: /\bWebSocket\b/, message: 'widgets cannot open sockets.' },
  { rule: 'sendBeacon', pattern: /\bsendBeacon\b/, message: 'widgets cannot write analytics beacons.' },
  { rule: 'localStorage', pattern: /\blocalStorage\b/, message: 'widgets cannot use localStorage.' },
  { rule: 'sessionStorage', pattern: /\bsessionStorage\b/, message: 'widgets cannot use sessionStorage.' },
  { rule: 'document.cookie', pattern: /\bdocument\.cookie\b/, message: 'widgets cannot read or write cookies.' },
  { rule: 'window.ethereum', pattern: /\bwindow\.ethereum\b/, message: 'widgets cannot prompt wallets.' },
  { rule: 'dangerouslySetInnerHTML', pattern: /\bdangerouslySetInnerHTML\b/, message: 'widgets cannot inject raw HTML.' },
  { rule: 'createPortal', pattern: /\bcreatePortal\b/, message: 'widgets cannot escape their grid cell with portals.' },
  { rule: '<iframe', pattern: /<iframe\b/i, message: 'widgets cannot embed iframes.' },
  { rule: '<form', pattern: /<form\b/i, message: 'widgets cannot submit forms from a page cell.' },
  { rule: 'process.env', pattern: /\bprocess\.env\b/, message: 'widgets cannot read environment variables.' },
  {
    rule: 'node builtin import',
    pattern: /(?:from\s+|import\s*\(\s*|import\s+|require\s*\(\s*)['"](?:node:|fs\b|child_process\b)/,
    message: 'widgets cannot import node built-ins (fs, child_process, node:*).',
  },
]

function collectFiles(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      out.push(...collectFiles(full))
    } else if (/\.(ts|tsx)$/.test(entry)) {
      out.push(full)
    }
  }
  return out
}

let violations = 0

for (const file of collectFiles(widgetsDir)) {
  const source = readFileSync(file, 'utf8')
  const rel = relative(root, file)
  for (const { rule, pattern, message } of RULES) {
    if (!pattern.test(source)) continue
    violations += 1
    console.error(`✗ ${rel} – ${rule}: ${message}`)
  }
}

if (violations > 0) {
  console.error(`\nboundary check failed – ${violations} violation(s). widgets are presentation-only; see CONTRIBUTING.md.`)
  process.exit(1)
}

console.log('boundary check passed – all widgets are presentation-only.')
