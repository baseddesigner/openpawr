import { listNativeWidgets } from '../lib/native-catalog'
import { NativePreview, BLEED_TYPES } from './native-previews'
import { WidgetFrame } from './WidgetFrame'

/**
 * native widgets – the 1x1-capable set built into every pawr.link page.
 * same card chrome as the community grid, with hardcoded example
 * previews instead of live widgets.
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

      <div className="fade-up mt-6 grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {widgets.map((widget) => (
          <a
            key={widget.type}
            href="https://pawr.link"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-border bg-card p-4 transition-colors hover:border-secondary"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-xs font-semibold tracking-wider text-foreground uppercase">
                {widget.label}
              </p>
              <p className="shrink-0 text-xs text-muted-foreground">
                {widget.category}
              </p>
            </div>

            <div className="mt-3">
              <WidgetFrame shrinkOnMobile bleed={BLEED_TYPES.has(widget.type)}>
                <NativePreview type={widget.type} />
              </WidgetFrame>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                built in
              </span>
              <span className="text-xs text-muted-foreground tabular-nums">
                {widget.defaultSize}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
