import { useEffect, useState } from 'react'
import type { WidgetProps } from '../../src/lib/types'
import type { ClockConfig } from './manifest'

export default function ClockWidget({ config }: WidgetProps<ClockConfig>) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const time = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: config.timeZone,
  }).format(now)
  const date = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: config.timeZone,
  }).format(now)

  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">{config.label}</p>
      <p className="text-3xl leading-none font-semibold tracking-tight text-foreground tabular-nums">{time}</p>
      <p className="text-xs leading-snug text-muted-foreground">{date}</p>
    </div>
  )
}
