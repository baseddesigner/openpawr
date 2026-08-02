import { useEffect, useState } from 'react'
import type { WidgetProps } from '../../src/lib/types'
import type { CountdownConfig } from './manifest'

function targetMs(date: string): number {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(year, (month ?? 1) - 1, day ?? 1).getTime()
}

export default function CountdownWidget({
  config,
}: WidgetProps<CountdownConfig>) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60000)
    return () => clearInterval(id)
  }, [])

  const diff = targetMs(config.date) - now
  const isToday = diff <= 0
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)

  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">{config.title}</p>
      {isToday ? (
        <p className="text-4xl leading-none font-semibold tracking-tight text-foreground">today</p>
      ) : (
        <p className="leading-none text-foreground">
          <span className="text-5xl font-semibold tracking-tight tabular-nums">{days}</span>{' '}
          <span className="text-sm text-muted-foreground">
            {days === 1 ? 'day' : 'days'}
          </span>
        </p>
      )}
      <p className="rounded-2xl bg-muted px-3 py-2 text-sm leading-snug text-muted-foreground">
        {isToday
          ? 'the day has arrived.'
          : `${hours}h ${minutes}m to go – ${config.date}`}
      </p>
    </div>
  )
}
