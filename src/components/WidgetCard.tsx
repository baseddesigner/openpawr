import type { RegistryEntry } from '../lib/types'
import { demoProfile } from '../lib/registry'

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

/**
 * community card – a border-outline square with the live widget
 * centered at a fixed size and metadata pinned to the corners.
 */
export function WidgetCard({ entry, onOpen }: WidgetCardProps) {
  const { manifest, Component, fixtures } = entry
  const config = (fixtures[0]?.config ?? manifest.defaultConfig) as never

  return (
    <button
      type="button"
      onClick={() => onOpen(manifest.slug)}
      className="group relative aspect-square w-full cursor-pointer text-left"
    >
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="aspect-square w-full max-w-[260px] transition-transform duration-200 group-hover:-translate-y-0.5">
          <Component config={config} profile={demoProfile} size="1x1" isPreview />
        </div>
      </div>

      <p className="absolute top-4 left-4 z-10 text-xs font-semibold tracking-wider text-foreground uppercase">
        {manifest.name}
      </p>
      <span className="absolute top-4 right-4 z-10 flex items-center gap-1 text-xs text-muted-foreground">
        <HeartIcon />
        {manifest.likeCount}
      </span>
      <span className="absolute bottom-4 left-4 z-10 flex min-w-0 items-center gap-2">
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
      <span className="absolute right-4 bottom-4 z-10 text-xs text-muted-foreground">
        {manifest.category}
      </span>
    </button>
  )
}
