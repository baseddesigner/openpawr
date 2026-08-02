import { useId } from 'react'
import previewMap from '../lib/native-preview-map.json'
import {
  PROFILE_SAMPLES,
  MEDIA_SAMPLES,
  FINANCE_SAMPLES,
  NFT_SAMPLES,
  LINK_SAMPLE,
  ENS_SAMPLE,
  TIP_JAR_SAMPLE,
  COUNTDOWN_SAMPLE,
  QUOTE_SAMPLE,
  FILE_SAMPLE,
  CHANNEL_SAMPLE,
  PROFILE_LINK_SAMPLE,
  COLLECTION_SAMPLE,
} from '../lib/native-preview-data'
import { BrandGlyph } from './brand-glyphs'
import type { BrandGlyphName } from './brand-glyphs'

/**
 * premium hardcoded example previews for native widgets – static mocks
 * with sample data, everything local/inline (svg, gradients, glyphs).
 * rendered inside the shared inner tile; BLEED_TYPES fill it edge-to-edge.
 */

/** types whose preview fills the inner tile edge-to-edge (no padding) */
export const BLEED_TYPES = new Set([
  'image',
  'apple-podcast',
  'tracks',
  'video',
  'youtube-video',
  'opensea-item',
  'opensea-collection',
  'unsplash-collection',
])

function hexA(hex: string, alpha: number): string {
  return `${hex}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, '0')}`
}

/* ---------------------------------------------------------------- profile */

function ProfilePreview({ type }: { type: string }) {
  const sample = PROFILE_SAMPLES[type]
  if (!sample) return null
  const orb = sample.orb ?? `linear-gradient(135deg, ${sample.brand}, ${hexA(sample.brand, 0.55)})`
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="relative">
        <div
          className="h-9 rounded-xl"
          style={{ background: `linear-gradient(120deg, ${hexA(sample.brand, 0.85)}, ${hexA(sample.brand, 0.35)})` }}
        />
        <div className="absolute -bottom-4 left-1.5">
          <span
            className="grid h-10 w-10 place-items-center rounded-full text-xs font-semibold text-white ring-2 ring-card"
            style={{ background: orb }}
          >
            {sample.name.slice(0, 1)}
          </span>
          {sample.chipBg === null ? (
            <span className="absolute -right-1 -bottom-1 grid h-4 w-4 place-items-center overflow-hidden rounded-md shadow-sm ring-1 ring-card">
              <BrandGlyph glyph={sample.glyph} className="h-4 w-4" />
            </span>
          ) : (
            <span
              className="absolute -right-1 -bottom-1 grid h-4 w-4 place-items-center rounded-md shadow-sm ring-1 ring-card"
              style={{ backgroundColor: sample.chipBg, color: sample.chipIcon }}
            >
              <BrandGlyph glyph={sample.glyph} className="h-2.5 w-2.5" />
            </span>
          )}
        </div>
      </div>
      <div className="mt-4.5 min-w-0 flex-1">
        <p className="flex items-center gap-1 truncate text-sm font-semibold text-foreground">
          {sample.name}
          {sample.verified && (
            <BrandGlyph glyph="verified" className="h-3 w-3 shrink-0 text-[#1d9bf0]" />
          )}
        </p>
        <p className="truncate text-xs text-muted-foreground">{sample.handle}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] text-muted-foreground tabular-nums">
          {sample.followers}
        </span>
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-medium text-white shadow-sm"
          style={{ backgroundColor: sample.brand }}
        >
          follow
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------- link */

function LinkPreview() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center gap-1 border-b border-border px-2.5 py-1.5">
        {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
          <span key={color} className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
        ))}
        <span className="ml-1.5 flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[8px] text-muted-foreground">
          <BrandGlyph glyph="globe" className="h-2 w-2" />
          {LINK_SAMPLE.domain}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2 p-2.5">
        <p className="text-xs leading-snug font-semibold text-foreground">{LINK_SAMPLE.title}</p>
        <div className="flex items-center gap-1.5">
          <span className="grid h-4 w-4 place-items-center rounded bg-foreground">
            <BrandGlyph glyph="globe" className="h-2.5 w-2.5 text-background" />
          </span>
          <p className="text-[10px] text-muted-foreground">{LINK_SAMPLE.domain}</p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ image */

function ImagePreview() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="img-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="55%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#img-sky)" />
      <circle cx="142" cy="62" r="26" fill="#fff7ed" opacity="0.35" />
      <circle cx="142" cy="62" r="15" fill="#fffbeb" />
      <path d="M-10 200 L55 108 L95 152 L130 116 L210 200 Z" fill="#d6d3d1" opacity="0.55" />
      <rect y="118" width="200" height="82" fill="#ffffff" opacity="0.14" />
      <path d="M-10 200 L35 132 L70 172 L108 128 L150 168 L210 200 Z" fill="#78716c" opacity="0.6" />
      <path d="M-10 200 L20 162 L55 200 Z M120 200 L165 150 L210 200 Z" fill="#44403c" opacity="0.55" />
    </svg>
  )
}

/* ----------------------------------------------------------- media player */

function PlayerGlyph({ glyph }: { glyph: BrandGlyphName | 'play' }) {
  if (glyph === 'play') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white/90" aria-hidden="true">
        <path d="M8 5.5v13l11-6.5-11-6.5z" />
      </svg>
    )
  }
  return <BrandGlyph glyph={glyph} className="h-4 w-4 text-white/90" />
}

function MediaPlayerPreview({ type }: { type: string }) {
  const sample = MEDIA_SAMPLES[type]
  if (!sample) return null
  return (
    <div className="flex h-full w-full flex-col gap-2 bg-[#101013] p-3">
      <div className="flex items-center gap-2.5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg shadow-md" style={{ background: sample.art }}>
          <PlayerGlyph glyph={sample.glyph} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold text-white">{sample.title}</p>
          <p className="truncate text-[10px] text-white/50">{sample.artist}</p>
        </div>
      </div>
      <div className="flex-1" />
      <div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-white/15">
          <div className="h-full rounded-full" style={{ width: `${sample.progress * 100}%`, backgroundColor: sample.accent }} />
        </div>
        <div className="mt-1 flex justify-between text-[8px] text-white/40 tabular-nums">
          <span>{sample.elapsed}</span>
          <span>{sample.total}</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white/60" aria-hidden="true">
          <path d="M6 5h2v14H6V5zm12 0v14l-9-7 9-7z" />
        </svg>
        <span className="grid h-7 w-7 place-items-center rounded-full shadow-md" style={{ backgroundColor: sample.accent }}>
          <svg viewBox="0 0 24 24" className="ml-0.5 h-3 w-3 fill-white" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5-11-6.5z" />
          </svg>
        </span>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white/60" aria-hidden="true">
          <path d="M16 5h2v14h-2V5zM6 5v14l9-7-9-7z" />
        </svg>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------- map */

function MapPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl" style={{ background: '#e9efe2' }}>
      <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M-5 78 C 25 70, 60 88, 105 76 L 105 105 L -5 105 Z" fill="#bfd9ea" />
        <rect x="8" y="10" width="26" height="20" rx="4" fill="#c8e0bb" />
        {/* road casings */}
        <path d="M-5 34 C 25 28, 55 44, 105 36" stroke="#d5dccd" strokeWidth="8.5" fill="none" strokeLinecap="round" />
        <path d="M22 -5 C 27 30, 17 62, 30 105" stroke="#d5dccd" strokeWidth="7.5" fill="none" strokeLinecap="round" />
        <path d="M-5 58 C 30 50, 70 66, 105 56" stroke="#d5dccd" strokeWidth="6.5" fill="none" strokeLinecap="round" />
        <path d="M66 -5 C 60 30, 76 58, 68 105" stroke="#d5dccd" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        {/* roads */}
        <path d="M-5 34 C 25 28, 55 44, 105 36" stroke="#ffffff" strokeWidth="6.5" fill="none" strokeLinecap="round" />
        <path d="M22 -5 C 27 30, 17 62, 30 105" stroke="#ffffff" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        <path d="M-5 58 C 30 50, 70 66, 105 56" stroke="#ffffff" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M66 -5 C 60 30, 76 58, 68 105" stroke="#ffffff" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </svg>
      <span className="absolute top-2 right-2 grid h-5 w-5 place-items-center rounded-full bg-white/70 text-[8px] font-semibold text-foreground shadow-sm backdrop-blur">
        N
      </span>
      <span className="absolute top-[42%] left-1/2 -translate-x-1/2">
        <span className="block h-4 w-4 animate-none rounded-full bg-accent/30" />
      </span>
      <svg viewBox="0 0 24 24" className="absolute top-[42%] left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 fill-accent drop-shadow-md" aria-hidden="true">
        <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
    </div>
  )
}

/* ----------------------------------------------------------- data finance */

function FinancePreview({ type }: { type: string }) {
  const gradientId = useId()
  const sample = FINANCE_SAMPLES[type]
  if (!sample) return null
  const color = sample.up ? '#16a34a' : '#dc2626'

  const body = (
    <>
      <div className="flex items-center justify-between gap-2">
        <span className={`flex min-w-0 items-center gap-1.5 rounded-full px-2 py-1 text-[9px] font-semibold tracking-wide uppercase shadow-sm ${sample.dark ? 'bg-white/10 text-white/80' : 'bg-card text-foreground'}`}>
          {sample.icon ? (
            <BrandGlyph glyph={sample.icon} className="h-3.5 w-3.5 shrink-0" />
          ) : (
            <span className="grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-foreground text-[6px] font-bold text-background">P</span>
          )}
          <span className="truncate">{sample.pair}</span>
        </span>
        <span
          className="flex shrink-0 items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums"
          style={{ color, backgroundColor: hexA(color, 0.12) }}
        >
          <svg viewBox="0 0 24 24" className={`h-2.5 w-2.5 ${sample.up ? '' : 'rotate-180'}`} fill="currentColor" aria-hidden="true">
            <path d="M12 5l6 8H6l6-8z" />
          </svg>
          {sample.delta}
        </span>
      </div>
      <p className={`text-[26px] leading-none font-semibold tracking-tight tabular-nums ${sample.dark ? 'text-white' : 'text-foreground'}`}>
        {sample.price}
      </p>
      <div>
        <svg viewBox="0 0 100 80" className="h-9 w-full" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={`0,80 ${sample.spark} 100,80`} fill={`url(#${gradientId})`} />
          <polyline points={sample.spark} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className={`mt-1 flex justify-between text-[8px] tabular-nums ${sample.dark ? 'text-white/40' : 'text-muted-foreground'}`}>
          <span>h {sample.high}</span>
          <span>l {sample.low}</span>
        </div>
      </div>
    </>
  )

  if (sample.dark) {
    return <div className="flex h-full flex-col justify-between gap-1.5 rounded-xl bg-[#0e1217] p-3">{body}</div>
  }
  return <div className="flex h-full flex-col justify-between gap-1.5">{body}</div>
}

/* ---------------------------------------------------------- web3 identity */

function Web3IdentityPreview() {
  return (
    <div className="flex h-full flex-col justify-between gap-1.5">
      <div className="flex items-start justify-between">
        <span
          className="grid h-11 w-11 place-items-center rounded-full text-sm font-semibold text-white shadow-md ring-2 ring-card"
          style={{ background: 'linear-gradient(135deg, #60a5fa, #8b5cf6)' }}
        >
          j
        </span>
        <span className="grid h-5 w-5 place-items-center rounded-md bg-[#4A90D9] text-white shadow-sm">
          <BrandGlyph glyph="ens" className="h-3 w-3" />
        </span>
      </div>
      <div className="min-w-0">
        <p className="truncate text-base font-semibold text-foreground">{ENS_SAMPLE.name}</p>
        <span className="mt-1 inline-block rounded-full border border-border bg-card px-2 py-0.5 text-[9px] text-muted-foreground tabular-nums shadow-sm">
          {ENS_SAMPLE.address}
        </span>
      </div>
      <div className="space-y-1">
        {ENS_SAMPLE.records.map((record) => (
          <p key={record} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <BrandGlyph glyph="check" className="h-2.5 w-2.5 text-[#16a34a]" />
            {record}
          </p>
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------- nft */

function NftArt({ variant }: { variant: string }) {
  if (variant === 'collection') {
    return (
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="nft-c" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#nft-c)" />
        {[100, 74, 48].map((r) => (
          <circle key={r} cx="100" cy="88" r={r} fill="none" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="10" />
        ))}
        <circle cx="150" cy="45" r="30" fill="#ffffff" opacity="0.14" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="nft-i" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#nft-i)" />
      <circle cx="60" cy="60" r="46" fill="#ffffff" opacity="0.16" />
      <circle cx="150" cy="130" r="60" fill="#7c2d12" opacity="0.18" />
      {[88, 62, 36].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#fff7ed" strokeOpacity="0.3" strokeWidth="7" />
      ))}
    </svg>
  )
}

function NftPreview({ type }: { type: string }) {
  if (type === 'poaps') {
    const badges = [
      { art: 'linear-gradient(135deg,#fbbf24,#d97706)', glyph: '★' },
      { art: 'linear-gradient(135deg,#818cf8,#4f46e5)', glyph: '◆' },
      { art: 'linear-gradient(135deg,#f472b6,#be185d)', glyph: '✿' },
    ]
    return (
      <div className="flex h-full flex-col justify-between gap-2">
        <div className="relative grid flex-1 place-items-center">
          <div className="flex -space-x-3.5">
            {badges.map((badge) => (
              <span
                key={badge.glyph}
                className="grid h-11 w-11 place-items-center rounded-full text-sm text-white shadow-md ring-2 ring-card"
                style={{ background: badge.art }}
              >
                {badge.glyph}
              </span>
            ))}
          </div>
          <span className="absolute top-1 right-1 rounded-full bg-white/70 px-1.5 py-0.5 text-[9px] font-semibold text-foreground shadow-sm backdrop-blur">
            +12
          </span>
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">poaps</p>
          <p className="text-[10px] text-muted-foreground">3 of 15 badges collected</p>
        </div>
      </div>
    )
  }
  const sample = NFT_SAMPLES[type]
  if (!sample) return null
  return (
    <div className="relative h-full w-full overflow-hidden">
      <NftArt variant={sample.art} />
      <span className="absolute top-2 right-2 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-medium text-white shadow-sm backdrop-blur">
        {sample.floor}
      </span>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
        <p className="truncate text-xs font-semibold text-white">{sample.name}</p>
        <p className="truncate text-[10px] text-white/60">{sample.collection}</p>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- tip jar */

function TipJarPreview() {
  return (
    <div className="flex h-full flex-col justify-between gap-1.5">
      <div className="relative grid flex-1 place-items-center">
        <span className="absolute h-20 w-20 rounded-full bg-accent/10" />
        <svg viewBox="0 0 64 84" className="relative h-20 w-auto drop-shadow-md" aria-hidden="true">
          <rect x="10" y="3" width="44" height="10" rx="5" className="fill-accent" />
          <rect x="6" y="15" width="52" height="66" rx="14" fill="#ffffff" fillOpacity="0.6" className="stroke-muted-foreground/40" />
          <rect x="15" y="22" width="7" height="52" rx="3.5" fill="#ffffff" opacity="0.85" transform="rotate(7 18 48)" />
          {[['22', '62', '8'], ['40', '66', '8'], ['32', '50', '7']].map(([cx, cy, r]) => (
            <g key={`${cx}${cy}`}>
              <circle cx={cx} cy={cy} r={r} className="fill-accent" />
              <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize="9" fontWeight="700" fill="#ffffff">$</text>
            </g>
          ))}
        </svg>
      </div>
      <div className="flex items-end justify-between gap-2">
        <div>
          <p className="text-xs font-semibold text-foreground">tip jar</p>
          <p className="text-[10px] text-muted-foreground">{TIP_JAR_SAMPLE.subtitle}</p>
        </div>
        <span className="rounded-full bg-foreground px-2 py-1 text-[10px] font-semibold text-background tabular-nums">
          {TIP_JAR_SAMPLE.amount}
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------- misc */

function CountdownPreview() {
  const radius = 26
  const circumference = 2 * Math.PI * radius
  const elapsed = 1 - COUNTDOWN_SAMPLE.days / COUNTDOWN_SAMPLE.total
  return (
    <div className="flex h-full flex-col items-center justify-between gap-1.5">
      <p className="self-start text-[9px] font-medium tracking-[0.12em] text-muted-foreground uppercase">countdown</p>
      <div className="relative grid flex-1 place-items-center">
        <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90" aria-hidden="true">
          <circle cx="32" cy="32" r={radius} fill="none" className="stroke-muted-foreground/20" strokeWidth="5" />
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            className="stroke-foreground"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - elapsed)}
          />
        </svg>
        <span className="absolute text-xl font-semibold text-foreground tabular-nums">{COUNTDOWN_SAMPLE.days}</span>
      </div>
      <p className="text-[10px] text-muted-foreground">days {COUNTDOWN_SAMPLE.label}</p>
    </div>
  )
}

function MiscPreview({ type }: { type: string }) {
  switch (type) {
    case 'countdown':
      return <CountdownPreview />
    case 'text-quote':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-accent" aria-hidden="true">
            <path d="M10.7 5.6c-3 .9-5.2 3.6-5.2 7.2V18h6v-6H8.3c0-2.3 1.3-4 3.2-4.7l-.8-1.7zm8 0c-3 .9-5.2 3.6-5.2 7.2V18h6v-6h-3.2c0-2.3 1.3-4 3.2-4.7l-.8-1.7z" />
          </svg>
          <p className="text-xs leading-snug font-medium text-foreground">{QUOTE_SAMPLE.quote}</p>
          <div className="flex items-center gap-2">
            <span className="h-px w-5 bg-border" />
            <p className="text-[10px] text-muted-foreground">{QUOTE_SAMPLE.author}</p>
          </div>
        </div>
      )
    case 'file-download':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="flex items-start justify-between">
            <svg viewBox="0 0 24 24" className="h-10 w-10 drop-shadow-sm" aria-hidden="true">
              <path className="fill-card stroke-muted-foreground/50" strokeWidth="0.8" d="M6 3h8l5 5v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
              <path className="fill-muted" d="M14 3l5 5h-5V3z" />
            </svg>
            <span className="rounded-md bg-accent px-1.5 py-0.5 text-[8px] font-bold tracking-wide text-foreground uppercase">
              {FILE_SAMPLE.kind}
            </span>
          </div>
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-foreground">{FILE_SAMPLE.name}</p>
              <p className="text-[10px] text-muted-foreground">{FILE_SAMPLE.size}</p>
            </div>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-foreground shadow-md">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-background" aria-hidden="true">
                <path d="M12 3v10.6l-3.3-3.3-1.4 1.4 5.7 5.7 5.7-5.7-1.4-1.4-3.3 3.3V3h-2zm-7 16h14v2H5v-2z" />
              </svg>
            </span>
          </div>
        </div>
      )
    case 'subscribe':
      return (
        <div className="flex h-full flex-col justify-between gap-2 rounded-xl p-2.5" style={{ background: 'linear-gradient(150deg, #ff9b3d24, #ff9b3d0a)' }}>
          <p className="text-xs leading-snug font-semibold text-foreground">get the monthly letter</p>
          <div className="flex items-center gap-1.5 rounded-full bg-card py-1.5 pr-1.5 pl-3 shadow-md">
            <span className="flex-1 truncate text-[10px] text-muted-foreground">you@email.com</span>
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-foreground">
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-background" aria-hidden="true">
                <path d="M4 11h12.2l-4.6-4.6L13 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2z" />
              </svg>
            </span>
          </div>
          <p className="text-[9px] text-muted-foreground">one email a month, no noise.</p>
        </div>
      )
    case 'profile-link':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="flex items-start justify-between">
            <img src="/pawr-mark.svg" alt="" className="h-9 w-9 rounded-full shadow-sm" />
            <div className="grid w-14 grid-cols-3 gap-1">
              {['bg-accent', 'bg-foreground/80', 'bg-muted-foreground/30', 'bg-muted-foreground/20', 'bg-foreground/60', 'bg-accent/60'].map((tone) => (
                <span key={tone} className={`aspect-square rounded ${tone}`} />
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">june</p>
            <p className="flex items-center gap-1 truncate text-xs text-muted-foreground">
              {PROFILE_LINK_SAMPLE.handle}
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current" aria-hidden="true">
                <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </p>
          </div>
        </div>
      )
    case 'farcaster-channel':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl shadow-md">
            <BrandGlyph glyph="farcaster" className="h-10 w-10" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{CHANNEL_SAMPLE.name}</p>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="flex -space-x-1.5">
                {['#fbbf24', '#60a5fa', '#f472b6'].map((color) => (
                  <span key={color} className="h-4 w-4 rounded-full ring-1 ring-card" style={{ backgroundColor: color }} />
                ))}
              </span>
              <p className="text-[10px] text-muted-foreground">{CHANNEL_SAMPLE.members}</p>
            </div>
          </div>
        </div>
      )
    case 'unsplash-collection':
      return (
        <div className="relative h-full w-full">
          <div className="grid h-full w-full grid-cols-2 gap-0.5 p-0.5">
            {[
              'linear-gradient(135deg,#7dd3fc,#0369a1)',
              'linear-gradient(135deg,#fde68a,#d97706)',
              'linear-gradient(135deg,#86efac,#15803d)',
              'linear-gradient(135deg,#f9a8d4,#be185d)',
            ].map((art) => (
              <div key={art} style={{ background: art }} />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-2.5 pt-6">
            <p className="text-[10px] font-semibold text-white">{COLLECTION_SAMPLE.name}</p>
            <p className="text-[9px] text-white/60">{COLLECTION_SAMPLE.count}</p>
          </div>
        </div>
      )
    default:
      return null
  }
}

/* ------------------------------------------------------------ dispatcher */

const PREVIEW_MAP = previewMap as Record<string, string>

/** renders the hardcoded example preview for a native widget type */
export function NativePreview({ type }: { type: string }) {
  switch (PREVIEW_MAP[type]) {
    case 'profile':
      return <ProfilePreview type={type} />
    case 'link':
      return <LinkPreview />
    case 'image':
      return <ImagePreview />
    case 'media-player':
      return <MediaPlayerPreview type={type} />
    case 'map':
      return <MapPreview />
    case 'data-finance':
      return <FinancePreview type={type} />
    case 'web3-identity':
      return <Web3IdentityPreview />
    case 'nft':
      return <NftPreview type={type} />
    case 'tip-jar':
      return <TipJarPreview />
    case 'misc':
      return <MiscPreview type={type} />
    default:
      return null
  }
}
