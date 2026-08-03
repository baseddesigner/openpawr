import { useState } from 'react'
import type { RegistryEntry } from '../lib/types'
import { listWidgets } from '../lib/registry'
import { WidgetCard } from './WidgetCard'

type SortKey = 'newest' | 'most-liked' | 'most-added'

const SORTERS: Record<SortKey, (a: RegistryEntry, b: RegistryEntry) => number> =
  {
    newest: () => 0,
    'most-liked': (a, b) => b.manifest.likeCount - a.manifest.likeCount,
    'most-added': (a, b) => b.manifest.addCount - a.manifest.addCount,
  }

interface CommunityWidgetsProps {
  onOpen: (slug: string) => void
}

export function CommunityWidgets({ onOpen }: CommunityWidgetsProps) {
  const [sort, setSort] = useState<SortKey>('newest')
  const widgets = [...listWidgets()].sort(SORTERS[sort])

  return (
    <section id="widgets" className="scroll-mt-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="display text-2xl text-foreground md:text-3xl">
            community widgets
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {widgets.length} {widgets.length === 1 ? 'widget' : 'widgets'} –
            click one to see it up close
          </p>
        </div>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          sort by
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="cursor-pointer rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground"
          >
            <option value="newest">newest</option>
            <option value="most-liked">most liked</option>
            <option value="most-added">most added</option>
          </select>
        </label>
      </div>

      <div
        key={sort}
        className="fade-up mt-6 grid grid-cols-1 gap-5 md:grid-cols-4"
      >
        {widgets.map((entry) => (
          <WidgetCard
            key={entry.manifest.slug}
            entry={entry}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  )
}
