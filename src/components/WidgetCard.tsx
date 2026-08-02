import type { RegistryEntry } from '../lib/types'
import { demoProfile } from '../lib/registry'
import { WidgetFrame } from './WidgetFrame'

interface WidgetCardProps {
  entry: RegistryEntry
  onOpen: (slug: string) => void
}

const AVATAR_COLORS = [
  '#ffd9b3',
  '#d7e8ff',
  '#e5d9ff',
  '#d3f2df',
  '#ffe0e0',
  '#fbf3c9',
]

function authorColor(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) | 0
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length]
}

function HeartIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="text-secondary transition-colors group-hover:text-accent"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

export function WidgetCard({ entry, onOpen }: WidgetCardProps) {
  const { manifest, Component, fixtures } = entry
  const config = (fixtures[0]?.config ?? manifest.defaultConfig) as never

  return (
    <button
      type="button"
      onClick={() => onOpen(manifest.slug)}
      className="group cursor-pointer rounded-3xl border border-border bg-card p-4 text-left transition-colors hover:border-secondary"
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold tracking-wider text-foreground uppercase">
          {manifest.name}
        </p>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <HeartIcon />
          {manifest.likeCount}
        </span>
      </div>

      <div className="mt-3">
        <WidgetFrame shrinkOnMobile>
          <Component config={config} profile={demoProfile} size="1x1" isPreview />
        </WidgetFrame>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="flex min-w-0 items-center gap-2">
          <span
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-foreground"
            style={{ backgroundColor: authorColor(manifest.author.name) }}
          >
            {manifest.author.name.charAt(0).toLowerCase()}
          </span>
          <span className="truncate text-xs text-muted-foreground">
            {manifest.author.name}
          </span>
        </span>
        <span className="shrink-0 text-xs text-muted-foreground">
          {manifest.category}
        </span>
      </div>
    </button>
  )
}
