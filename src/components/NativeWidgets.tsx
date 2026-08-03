import { listNativeWidgets } from '../lib/native-catalog'
import { NATIVE_EMBEDS, embedUrl } from '../lib/native-embeds'
import { NativePreview } from './native-previews'
import { WidgetTile } from './WidgetTile'

/**
 * native widgets – the default-1x1 set built into every pawr.link page.
 * every preview renders pixel-true at 175×176 (the real 1x1 cell size),
 * centered in its grid square. types with a public embed id render the
 * real production widget live; the rest show hardcoded example previews.
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

      <div className="hairline-grid fade-up mt-6 grid grid-cols-1 md:grid-cols-4">
        {widgets.map((widget) => {
          const embedId = NATIVE_EMBEDS[widget.type]
          return (
            <a
              key={widget.type}
              href="https://pawr.link"
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square w-full bg-background"
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <WidgetTile
                  padded={!embedId}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                >
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
                </WidgetTile>
              </div>

              <p className="absolute top-4 left-4 z-10 truncate text-xs font-semibold tracking-wider text-foreground uppercase">
                {widget.label}
              </p>
              <p className="absolute top-4 right-4 z-10 shrink-0 text-xs text-muted-foreground">
                {widget.category}
              </p>
              <span className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5">
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
              <span className="absolute right-4 bottom-4 z-10 text-xs text-muted-foreground tabular-nums">
                1x1
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
