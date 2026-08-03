import { listNativeWidgets } from '../lib/native-catalog'
import { NATIVE_EMBEDS, embedUrl } from '../lib/native-embeds'
import { NativePreview, BLEED_TYPES } from './native-previews'
import { WidgetFrame } from './WidgetFrame'

/**
 * native widgets – the 1x1-capable set built into every pawr.link page.
 * same card chrome as the community grid. types with a public embed id
 * render the real production widget live; the rest show hardcoded
 * example previews.
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
        {widgets.map((widget) => {
          const embedId = NATIVE_EMBEDS[widget.type]
          return (
            <a
              key={widget.type}
              href="https://pawr.link"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-border bg-card p-4 transition-colors hover:border-secondary md:flex md:aspect-square md:flex-col"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-xs font-semibold tracking-wider text-foreground uppercase">
                  {widget.label}
                </p>
                <p className="shrink-0 text-xs text-muted-foreground">
                  {widget.category}
                </p>
              </div>

              <div className="mt-3 md:flex md:min-h-0 md:flex-1 md:items-center md:justify-center">
                <div className="w-full md:aspect-square md:h-full md:max-h-[260px] md:w-auto">
                  <WidgetFrame shrinkOnMobile bleed={BLEED_TYPES.has(widget.type)}>
                    {embedId ? (
                      <iframe
                        src={embedUrl(embedId)}
                        title={`${widget.label} live example`}
                        loading="lazy"
                        scrolling="no"
                        tabIndex={-1}
                        className="pointer-events-none h-full w-full border-0"
                      />
                    ) : (
                      <NativePreview type={widget.type} />
                    )}
                  </WidgetFrame>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5">
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                    built in
                  </span>
                  {embedId && (
                    <span className="flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      live
                    </span>
                  )}
                </span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  {widget.defaultSize}
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
