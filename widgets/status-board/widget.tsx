import type { WidgetProps } from '../../src/lib/types'
import type { StatusBoardConfig } from './manifest'

export default function StatusBoardWidget({
  config,
}: WidgetProps<StatusBoardConfig>) {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div>
        <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">{config.label}</p>
        <p className="mt-2 text-3xl leading-none font-semibold text-foreground">{config.status}</p>
      </div>
      <p className="rounded-2xl bg-muted px-3 py-2 text-sm leading-snug text-muted-foreground">{config.detail}</p>
    </div>
  )
}
