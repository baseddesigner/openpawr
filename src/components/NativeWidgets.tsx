import { listNativeWidgets } from '../lib/native-catalog'

/**
 * native widgets – the set built into every pawr.link page.
 * simple cards linking out, not live previews.
 */
export function NativeWidgets() {
  const widgets = listNativeWidgets()

  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        native widgets
      </h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
        built into every pawr.link page – no code needed.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4">
        {widgets.map((widget) => (
          <a
            key={widget.type}
            href="https://pawr.link"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-border bg-background p-4 transition-colors hover:bg-muted"
          >
            <p className="text-sm font-semibold text-foreground">
              {widget.label.toLowerCase()}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {widget.category}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              default {widget.defaultSize} · {widget.allowedSizes.length}{' '}
              {widget.allowedSizes.length === 1 ? 'size' : 'sizes'}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
