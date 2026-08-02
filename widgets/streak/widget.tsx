import type { WidgetProps } from '../../src/lib/types'
import type { StreakConfig } from './manifest'

export default function StreakWidget({ config }: WidgetProps<StreakConfig>) {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path
          className="fill-accent"
          d="M12 2c.9 4.2-4.5 5.8-4.5 10a4.5 4.5 0 009 0c0-1.9-1-3-1-3s3.2 1.4 3.2 4.8a6.7 6.7 0 11-13.4 0C5.3 8.2 12 6.5 12 2z"
        />
        <path
          className="fill-muted"
          d="M12 12.5c.4 2-1.9 2.9-1.9 4.6a2.4 2.4 0 004.8 0c0-2-1.4-2.9-1.9-4.6-.3 1-.7 1.4-1 1.4s-.7-.4 0-1.4z"
        />
      </svg>
      <p className="text-5xl leading-none font-semibold tracking-tight text-foreground tabular-nums">
        {config.count}
      </p>
      <p className="text-xs leading-snug text-muted-foreground">{config.label}</p>
    </div>
  )
}
