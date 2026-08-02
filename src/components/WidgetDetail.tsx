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
    <div className="flex items-center gap-2">
      <code className="rounded-lg bg-muted px-3 py-2 text-sm text-foreground">
        {shortcut}
      </code>
      <button
        type="button"
        onClick={copy}
        className="cursor-pointer rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
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
    <div>
      <button
        type="button"
        onClick={onBack}
        className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← all widgets
      </button>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          {previews.map((fixture) => (
            <div key={fixture.name}>
              <WidgetFrame>
                <Component
                  config={fixture.config as never}
                  profile={demoProfile}
                  size="1x1"
                  isPreview
                />
              </WidgetFrame>
              <p className="mt-2 px-1 text-xs text-muted-foreground">
                {fixture.name}
              </p>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              {manifest.name}
            </h1>
            <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              v{manifest.version}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {manifest.category} · by{' '}
            <a
              href={manifest.author.url}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              {manifest.author.name}
            </a>
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            {manifest.description}
          </p>

          <div className="mt-8 space-y-3">
            <p className="text-sm font-medium text-foreground">
              add it to your page
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              paste this shortcut on your pawr page to use the widget.
            </p>
            <CopyShortcut slug={manifest.slug} />
          </div>

          <div className="mt-8 flex gap-6 text-sm text-muted-foreground">
            <span>{manifest.likeCount} likes</span>
            <span>{manifest.addCount} adds</span>
          </div>
        </div>
      </div>
    </div>
  )
}
