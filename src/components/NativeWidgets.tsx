import { listNativeWidgets } from '../lib/native-catalog'
import { NATIVE_EMBEDS, embedUrl } from '../lib/native-embeds'
import { NativePreview, BLEED_TYPES } from './native-previews'

/**
 * native widgets – the 1x1-capable set built into every pawr.link page.
 * border-outline square cards with metadata pinned to the corners.
 * types with a public embed id render the real production widget live;
 * the rest show hardcoded example previews. bleed previews fill the
 * square edge-to-edge.
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

      <div className="fade-up mt-6 grid grid-cols-1 gap-5 md:grid-cols-4">
        {widgets.map((widget) => {
          const embedId = NATIVE_EMBEDS[widget.type]
          const bleed = BLEED_TYPES.has(widget.type)
          const preview = embedId ? (
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
          )
          // over art, corner metadata needs a glassy chip to stay readable
          const cornerChip = bleed ? 'rounded-full bg-white/75 px-2 py-0.5 backdrop-blur-sm' : ''

          return (
            <a
              key={widget.type}
              href="https://pawr.link"
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square w-full overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-secondary"
            >
              {bleed ? (
                <div className="absolute inset-0">{preview}</div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="aspect-square w-full max-w-[260px] transition-transform duration-200 group-hover:-translate-y-0.5">
                    {preview}
                  </div>
                </div>
              )}

              <p className={`absolute top-4 left-4 z-10 truncate text-xs font-semibold tracking-wider text-foreground uppercase ${cornerChip}`}>
                {widget.label}
              </p>
              <p className={`absolute top-4 right-4 z-10 shrink-0 text-xs text-muted-foreground ${cornerChip}`}>
                {widget.category}
              </p>
              <span className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5">
                <span className={`rounded-full px-2 py-0.5 text-[10px] text-muted-foreground ${bleed ? 'bg-white/75 backdrop-blur-sm' : 'bg-muted'}`}>
                  built in
                </span>
                {embedId && (
                  <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] text-muted-foreground ${bleed ? 'bg-white/75 backdrop-blur-sm' : 'bg-muted'}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    live
                  </span>
                )}
              </span>
              <span className={`absolute right-4 bottom-4 z-10 text-xs text-muted-foreground tabular-nums ${cornerChip}`}>
                {widget.defaultSize}
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
