import type { RegistryEntry } from '../lib/types'
import { demoProfile } from '../lib/registry'
import { WidgetFrame } from './WidgetFrame'

interface WidgetCardProps {
  entry: RegistryEntry
  onOpen: (slug: string) => void
}

export function WidgetCard({ entry, onOpen }: WidgetCardProps) {
  const { manifest, Component, fixtures } = entry
  const config = (fixtures[0]?.config ?? manifest.defaultConfig) as never

  return (
    <button
      type="button"
      onClick={() => onOpen(manifest.slug)}
      className="group flex cursor-pointer flex-col text-left"
    >
      <div className="transition-transform duration-200 group-hover:-translate-y-1">
        <WidgetFrame>
          <Component config={config} profile={demoProfile} size="1x1" isPreview />
        </WidgetFrame>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-2 px-1">
        <p className="text-sm font-semibold text-foreground">{manifest.name}</p>
        <p className="text-xs text-muted-foreground">{manifest.category}</p>
      </div>
    </button>
  )
}
