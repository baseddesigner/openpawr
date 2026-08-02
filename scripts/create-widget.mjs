#!/usr/bin/env node
/**
 * create-widget – scaffold a new community widget.
 *
 *   pnpm create-widget <slug>
 *
 * Creates widgets/<slug>/{widget.tsx,manifest.ts,fixture.ts}.
 * The registry auto-discovers the folder, so there is no registration step.
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const slug = process.argv[2]

if (!slug) {
  console.error('usage: pnpm create-widget <slug>')
  process.exit(1)
}

if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error(`invalid slug "${slug}" – use lowercase kebab-case, e.g. my-widget`)
  process.exit(1)
}

const dir = join(root, 'widgets', slug)
if (existsSync(dir)) {
  console.error(`widgets/${slug} already exists – pick another slug.`)
  process.exit(1)
}

const pascal = slug
  .split('-')
  .map((part) => part[0].toUpperCase() + part.slice(1))
  .join('')

const manifest = `import type { WidgetManifest } from '../../src/lib/types'

export interface ${pascal}Config {
  // keep fields short strings – see CONTRIBUTING.md for config guidance
  title: string
}

export const manifest: WidgetManifest<${pascal}Config> = {
  slug: '${slug}',
  version: '1.0.0',
  name: '${slug.replace(/-/g, ' ')}',
  description: 'one line on what this widget shows and who it helps.',
  category: 'utility',
  allowedSizes: ['1x1'],
  defaultSize: '1x1',
  author: { name: 'your name', url: 'https://your.site' },
  likeCount: 0,
  addCount: 0,
  defaultConfig: {
    title: 'hello from ${slug}',
  },
}
`

const widget = `import type { WidgetProps } from '../../src/lib/types'
import type { ${pascal}Config } from './manifest'

export default function ${pascal}Widget({ config }: WidgetProps<${pascal}Config>) {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <p className="text-base leading-tight font-semibold text-foreground">{config.title}</p>
      <p className="text-sm leading-snug text-muted-foreground">
        build something visitors can act on.
      </p>
    </div>
  )
}
`

const fixture = `import { manifest } from './manifest'
import type { ${pascal}Config } from './manifest'

export const defaultConfig: ${pascal}Config = manifest.defaultConfig

// add one realistic custom variant so reviewers can see the widget
// with real content, not just the defaults
export const example: ${pascal}Config = {
  title: 'a realistic example',
}
`

mkdirSync(dir, { recursive: true })
writeFileSync(join(dir, 'manifest.ts'), manifest)
writeFileSync(join(dir, 'widget.tsx'), widget)
writeFileSync(join(dir, 'fixture.ts'), fixture)

console.log(`created widgets/${slug}/ – manifest.ts, widget.tsx, fixture.ts`)
console.log('run `pnpm dev` to see it live – the registry picks it up automatically, no registration step.')
console.log('before opening a PR: update the manifest (name, description, author), tune the fixtures, then run `pnpm check` and `pnpm check-boundary`.')
