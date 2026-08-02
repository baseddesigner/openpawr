import type { WidgetProps } from '../../src/lib/types'
import type { GoalTrackerConfig } from './manifest'

export default function GoalTrackerWidget({
  config,
}: WidgetProps<GoalTrackerConfig>) {
  const percent =
    config.goal > 0
      ? Math.min(100, Math.round((config.current / config.goal) * 100))
      : 0

  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">{config.title}</p>
        <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-foreground tabular-nums">
          {percent}%
        </span>
      </div>

      <p className="leading-none text-foreground">
        <span className="text-4xl font-semibold tracking-tight tabular-nums">{config.current}</span>{' '}
        <span className="text-sm text-muted-foreground">{config.unit}</span>
      </p>

      <div className="space-y-2">
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-foreground"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          of {config.goal} {config.unit}
        </p>
      </div>
    </div>
  )
}
