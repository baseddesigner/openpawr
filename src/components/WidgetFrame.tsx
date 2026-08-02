import type { ReactNode } from 'react'

/**
 * inner preview tile – previews render inside this, filling it.
 * shared by grid cards and the detail view.
 *
 * shrinkOnMobile: grid tiles get narrow on small screens; zoom the
 * preview down a touch so content isn't clipped. detail-view
 * tiles stay full size.
 * bleed: preview fills the tile edge-to-edge (full-bleed media),
 * otherwise it gets padded.
 */
export function WidgetFrame({
  children,
  shrinkOnMobile = false,
  bleed = false,
}: {
  children: ReactNode
  shrinkOnMobile?: boolean
  bleed?: boolean
}) {
  return (
    <div
      className={`aspect-square w-full overflow-hidden rounded-2xl bg-muted transition-transform duration-200 group-hover:-translate-y-0.5 ${bleed ? '' : 'p-3'}`}
    >
      <div className={shrinkOnMobile ? 'tile-shrink h-full' : 'h-full'}>
        {children}
      </div>
    </div>
  )
}
