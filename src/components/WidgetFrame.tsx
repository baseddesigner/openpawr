import type { ReactNode } from 'react'

/**
 * Shared cell chrome for every widget preview – same look in the
 * grid and in the detail view.
 */
export function WidgetFrame({ children }: { children: ReactNode }) {
  return (
    <div className="aspect-square w-full overflow-hidden rounded-3xl border border-border bg-background p-4">
      {children}
    </div>
  )
}
