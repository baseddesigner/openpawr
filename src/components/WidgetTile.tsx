import type { ReactNode } from 'react'
import { WIDGET_PX } from '../lib/types'

/**
 * the pixel-true widget tile – every preview (community widget, native
 * mock, live embed iframe) renders inside this at exactly 175×176 px,
 * the size of a real 1x1 cell on a pawr.link page.
 *
 * padded (default): adds the p-3 inner padding the real cell chrome
 * provides – widgets are built to render inside it. live embed iframes
 * pass padded={false}: they already include the app's own card chrome.
 */
export function WidgetTile({
  children,
  className = '',
  padded = true,
}: {
  children: ReactNode
  className?: string
  padded?: boolean
}) {
  return (
    <div
      className={`overflow-hidden rounded-3xl ${padded ? 'p-3' : ''} ${className}`}
      style={{ width: WIDGET_PX.width, height: WIDGET_PX.height }}
    >
      {children}
    </div>
  )
}
