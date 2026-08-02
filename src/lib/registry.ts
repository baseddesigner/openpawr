import type { ComponentType } from 'react'
import type {
  RegistryEntry,
  WidgetFixture,
  WidgetManifest,
  WidgetProfile,
  WidgetProps,
} from './types'

/**
 * The registry auto-discovers every widgets/<slug>/ directory.
 * No registration step – add the three files and the widget shows up.
 */
const manifestModules = import.meta.glob<{ manifest: WidgetManifest }>(
  '../../widgets/*/manifest.ts',
  { eager: true },
)
const widgetModules = import.meta.glob<{
  default: ComponentType<WidgetProps<never>>
}>('../../widgets/*/widget.tsx', { eager: true })
const fixtureModules = import.meta.glob<Record<string, unknown>>(
  '../../widgets/*/fixture.ts',
  { eager: true },
)

function dirSlug(path: string): string {
  const match = path.match(/widgets\/([^/]+)\//)
  return match ? match[1] : path
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

const entries: RegistryEntry[] = []

for (const [manifestPath, manifestModule] of Object.entries(manifestModules)) {
  const slug = dirSlug(manifestPath)
  const widgetPath = Object.keys(widgetModules).find((p) => dirSlug(p) === slug)
  const fixturePath = Object.keys(fixtureModules).find((p) => dirSlug(p) === slug)
  if (!widgetPath) continue

  const fixtureModule = fixturePath ? fixtureModules[fixturePath] : {}
  const fixtures: WidgetFixture[] = Object.entries(fixtureModule)
    .filter(([, value]) => isPlainObject(value))
    .map(([name, value]) => ({ name, config: value }))

  entries.push({
    manifest: manifestModule.manifest,
    Component: widgetModules[widgetPath].default,
    fixtures,
  })
}

entries.sort((a, b) => a.manifest.name.localeCompare(b.manifest.name))

/** profile passed to every widget while previewing on openpawr */
export const demoProfile: WidgetProfile = {
  displayName: 'pawr',
  slug: 'bento',
  avatarUrl: null,
  ensName: 'pawr.eth',
  walletAddress: null,
}

export function listWidgets(): RegistryEntry[] {
  return entries
}

export function getWidget(slug: string): RegistryEntry | undefined {
  return entries.find((entry) => entry.manifest.slug === slug)
}
