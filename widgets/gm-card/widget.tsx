import type { WidgetProps } from '../../src/lib/types'
import type { GmCardConfig } from './manifest'

export default function GmCardWidget({ config, profile }: WidgetProps<GmCardConfig>) {
  const today = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date())

  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-accent" aria-hidden="true">
        <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
      </svg>
      <p className="text-3xl leading-tight font-semibold tracking-tight text-foreground">
        {config.greeting}, {profile.displayName}
      </p>
      <p className="text-xs leading-snug text-muted-foreground">{today}</p>
    </div>
  )
}
