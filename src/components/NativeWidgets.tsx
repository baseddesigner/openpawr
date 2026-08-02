import { listNativeWidgets } from '../lib/native-catalog'

/**
 * native widgets – the set built into every pawr.link page.
 * quiet cards linking out, not live previews.
 */
export function NativeWidgets() {
  const widgets = listNativeWidgets()

  return (
    <section className="mt-20">
      <h2 className="display text-2xl text-foreground md:text-3xl">
        native widgets
      </h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        built into every pawr.link page – no code needed. {widgets.length}{' '}
        widgets.
      </p>

      <div className="fade-up mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
        {widgets.map((widget) => (
          <a
            key={widget.type}
            href="https://pawr.link"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-border bg-card p-4 transition-colors hover:border-secondary"
          >
            <p className="text-xs font-semibold tracking-wider text-foreground uppercase">
              {widget.label}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {widget.category}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              default {widget.defaultSize} · {widget.allowedSizes.length}{' '}
              {widget.allowedSizes.length === 1 ? 'size' : 'sizes'}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
