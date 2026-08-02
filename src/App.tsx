import { useState } from 'react'
import { listWidgets, getWidget } from './lib/registry'
import { WidgetCard } from './components/WidgetCard'
import { WidgetDetail } from './components/WidgetDetail'

export function App() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)
  const widgets = listWidgets()
  const selected = selectedSlug ? getWidget(selectedSlug) : undefined

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5">
      <header className="py-10">
        <button
          type="button"
          onClick={() => setSelectedSlug(null)}
          className="cursor-pointer text-left"
        >
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            openpawr
          </h1>
        </button>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          community widgets for pawr.link pages, rendered live. click one to
          see it up close and add it to your page.
        </p>
      </header>

      <main className="flex-1 pb-16">
        {selected ? (
          <WidgetDetail entry={selected} onBack={() => setSelectedSlug(null)} />
        ) : (
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4">
            {widgets.map((entry) => (
              <WidgetCard
                key={entry.manifest.slug}
                entry={entry}
                onOpen={setSelectedSlug}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-border py-6 text-sm text-muted-foreground">
        built by the community · powered by{' '}
        <a
          href="https://pawr.link"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          pawr.link
        </a>
      </footer>
    </div>
  )
}
