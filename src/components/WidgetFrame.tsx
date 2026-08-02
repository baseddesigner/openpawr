import type { ReactNode } from 'react'

/**
 * inner preview tile – the widget renders inside this, filling it.
 * shared by grid cards and the detail view.
 *
 * shrinkOnMobile: grid tiles get narrow on small screens; zoom the
 * preview down a touch so widget content isn't clipped. detail-view
 * tiles stay full size.
 */
export function WidgetFrame({
  children,
  shrinkOnMobile = false,
}: {
  children: ReactNode
  shrinkOnMobile?: boolean
}) {
  return (
    <div className="aspect-square w-full overflow-hidden rounded-2xl bg-muted p-3 transition-transform duration-200 group-hover:-translate-y-0.5">
      <div className={shrinkOnMobile ? 'tile-shrink h-full' : 'h-full'}>
        {children}
      </div>
    </div>
  )
}
