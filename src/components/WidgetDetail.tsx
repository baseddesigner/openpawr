import { useState } from 'react'
import type { RegistryEntry } from '../lib/types'
import { demoProfile } from '../lib/registry'
import { WidgetFrame } from './WidgetFrame'

interface WidgetDetailProps {
  entry: RegistryEntry
  onBack: () => void
}

function CopyShortcut({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false)
  const shortcut = `widget:${slug}`

  async function copy() {
    try {
      await navigator.clipboard.writeText(shortcut)
    } catch {
      // clipboard can be unavailable (permissions, non-secure context) –
      // the shortcut text is right there to select manually
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <code className="rounded-full bg-muted px-4 py-2.5 text-sm text-foreground">
        {shortcut}
      </code>
      <button
        type="button"
        onClick={copy}
        className="cursor-pointer rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        {copied ? 'copied' : 'copy'}
      </button>
    </div>
  )
}

export function WidgetDetail({ entry, onBack }: WidgetDetailProps) {
  const { manifest, Component, fixtures } = entry
  const previews =
    fixtures.length > 0
      ? fixtures
      : [{ name: 'default', config: manifest.defaultConfig }]

  return (
    <div className="fade-up">
      <button
        type="button"
        onClick={onBack}
        className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← all widgets
      </button>

      <div className="mx-auto mt-8 max-w-md">
        <WidgetFrame>
          <Component
            config={previews[0].config as never}
            profile={demoProfile}
            size="1x1"
            isPreview
          />
        </WidgetFrame>
      </div>

      <div className="mt-8 text-center">
        <div className="flex items-center justify-center gap-3">
          <h1 className="display text-3xl text-foreground md:text-4xl">
            {manifest.name}
          </h1>
          <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
            v{manifest.version}
          </span>
        </div>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          {manifest.description}
        </p>
      </div>

      <dl className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4 text-center sm:grid-cols-4">
        {[
          ['author', manifest.author.name],
          ['category', manifest.category],
          ['likes', String(manifest.likeCount)],
          ['adds', String(manifest.addCount)],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-border bg-card p-3">
            <dt className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
              {label}
            </dt>
            <dd className="mt-1 truncate text-sm text-foreground">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 space-y-3 text-center">
        <p className="text-sm text-muted-foreground">
          paste this shortcut on your pawr page to add it.
        </p>
        <CopyShortcut slug={manifest.slug} />
      </div>

      {previews.length > 1 && (
        <div className="mx-auto mt-12 max-w-2xl">
          <p className="text-center text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            more ways it looks
          </p>
          <div className="mt-4 grid grid-cols-2 gap-5">
            {previews.slice(1).map((fixture) => (
              <div key={fixture.name} className="group">
                <WidgetFrame>
                  <Component
                    config={fixture.config as never}
                    profile={demoProfile}
                    size="1x1"
                    isPreview
                  />
                </WidgetFrame>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  {fixture.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
