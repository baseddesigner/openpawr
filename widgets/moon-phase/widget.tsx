import { useId } from 'react'
import type { WidgetProps } from '../../src/lib/types'
import type { MoonPhaseConfig } from './manifest'

const SYNODIC_MONTH_DAYS = 29.530588853
// a known new moon: 2000-01-06 18:14 UTC
const REFERENCE_NEW_MOON_MS = Date.UTC(2000, 0, 6, 18, 14)

const PHASE_NAMES = [
  'new moon',
  'waxing crescent',
  'first quarter',
  'waxing gibbous',
  'full moon',
  'waning gibbous',
  'last quarter',
  'waning crescent',
]

function currentPhase(): { phase: number; name: string; illumination: number } {
  const ageDays =
    (((Date.now() - REFERENCE_NEW_MOON_MS) / 86400000) % SYNODIC_MONTH_DAYS +
      SYNODIC_MONTH_DAYS) %
    SYNODIC_MONTH_DAYS
  const phase = ageDays / SYNODIC_MONTH_DAYS
  const illumination = Math.round(((1 - Math.cos(2 * Math.PI * phase)) / 2) * 100)
  const name = PHASE_NAMES[Math.floor(((phase + 1 / 16) % 1) * 8)]
  return { phase, name, illumination }
}

export default function MoonPhaseWidget({
  config,
}: WidgetProps<MoonPhaseConfig>) {
  const clipId = useId()
  const { phase, name, illumination } = currentPhase()

  // waxing moon is lit on the right in the northern hemisphere,
  // mirrored in the southern one
  const litOnRight = phase < 0.5 !== (config.hemisphere === 'south')
  // between the quarters the terminator bulges toward the lit side
  const terminatorLit = phase > 0.25 && phase < 0.75
  const terminatorRx = Math.abs(Math.cos(2 * Math.PI * phase)) * 40

  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">tonight</p>

      <div className="grid min-h-0 flex-1 place-items-center">
        <svg viewBox="0 0 100 100" className="h-full max-h-20 w-auto" aria-hidden="true">
          <defs>
            <clipPath id={clipId}>
              <rect x={litOnRight ? 50 : 0} y="0" width="50" height="100" />
            </clipPath>
          </defs>
          {/* shadow side */}
          <circle cx="50" cy="50" r="40" className="fill-muted-foreground/25" />
          {/* lit half */}
          <circle cx="50" cy="50" r="40" clipPath={`url(#${clipId})`} className="fill-card" />
          {/* terminator */}
          <ellipse
            cx="50"
            cy="50"
            rx={terminatorRx}
            ry="40"
            className={terminatorLit ? 'fill-card' : 'fill-muted-foreground/25'}
          />
          <circle cx="50" cy="50" r="40" fill="none" className="stroke-border" />
        </svg>
      </div>

      <div>
        <p className="text-base leading-tight font-semibold text-foreground">{name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{illumination}% illuminated</p>
      </div>
    </div>
  )
}
