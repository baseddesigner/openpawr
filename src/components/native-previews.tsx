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
} from '../lib/native-preview-data'

/**
 * hardcoded example previews for native widgets – static mocks with
 * sample data, everything local/inline (svg, gradients, initials).
 * rendered inside the shared muted tile (aspect-square, p-3).
 */

function ProfilePreview({ type }: { type: string }) {
  const sample = PROFILE_SAMPLES[type]
  if (!sample) return null
  return (
    <div className="flex h-full flex-col justify-between gap-2">
      <div className="flex items-start justify-between">
        <span
          className="grid h-12 w-12 place-items-center rounded-full text-sm font-semibold"
          style={{ backgroundColor: `${sample.brand}1f`, color: sample.brandText }}
        >
          {sample.initials}
        </span>
        <span
          className="grid h-5 w-5 place-items-center rounded-md text-[9px] font-bold text-white"
          style={{ backgroundColor: sample.brand }}
        >
          {sample.chip}
        </span>
      </div>
      <div className="flex items-end justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{sample.name}</p>
          <p className="truncate text-xs text-muted-foreground">{sample.handle}</p>
        </div>
        <span
          className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium"
          style={{ backgroundColor: `${sample.brand}1f`, color: sample.brandText }}
        >
          follow
        </span>
      </div>
    </div>
  )
}

function LinkPreview() {
  return (
    <div className="flex h-full flex-col justify-between gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground">
        <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-background" fill="none" strokeWidth="2" strokeLinecap="round">
          <path d="M10 14a5 5 0 007.07 0l2.83-2.83a5 5 0 00-7.07-7.07L11.5 5.5" />
          <path d="M14 10a5 5 0 00-7.07 0l-2.83 2.83a5 5 0 007.07 7.07l1.4-1.4" />
        </svg>
      </span>
      <p className="text-sm leading-snug font-semibold text-foreground">{LINK_SAMPLE.title}</p>
      <p className="text-xs text-muted-foreground">{LINK_SAMPLE.domain}</p>
    </div>
  )
}

function ImagePreview() {
  return (
    <div
      className="h-full w-full overflow-hidden rounded-xl"
      style={{ background: 'linear-gradient(160deg, #bae6fd 0%, #fde68a 70%, #fdba74 100%)' }}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="72" cy="26" r="10" fill="#fff7ed" opacity="0.9" />
        <path d="M-5 100 L30 52 L52 80 L68 58 L105 100 Z" fill="#78716c" opacity="0.35" />
        <path d="M-5 100 L18 68 L40 100 Z" fill="#44403c" opacity="0.3" />
      </svg>
    </div>
  )
}

function MediaGlyph({ glyph }: { glyph: 'play' | 'note' | 'mic' }) {
  if (glyph === 'note') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/90" aria-hidden="true">
        <path d="M9 18V6l10-2v11.5a3 3 0 11-2-2.83V7.5L11 9v8.5a3 3 0 11-2-2.83V18z" />
      </svg>
    )
  }
  if (glyph === 'mic') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/90" aria-hidden="true">
        <path d="M12 15a3 3 0 003-3V6a3 3 0 10-6 0v6a3 3 0 003 3zm6-3a6 6 0 01-12 0H4a8 8 0 007 7.94V22h2v-2.06A8 8 0 0020 12h-2z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/90" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5z" />
    </svg>
  )
}

function MediaPlayerPreview({ type }: { type: string }) {
  const sample = MEDIA_SAMPLES[type]
  if (!sample) return null
  return (
    <div className="flex h-full flex-col gap-2">
      <div
        className="relative grid flex-1 place-items-center rounded-xl"
        style={{ background: sample.art }}
      >
        <MediaGlyph glyph={sample.glyph} />
        <span className="absolute right-2 bottom-2 grid h-6 w-6 place-items-center rounded-full bg-foreground">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-3 w-3 fill-background" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5-11-6.5z" />
          </svg>
        </span>
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-foreground">{sample.title}</p>
        <p className="truncate text-[10px] text-muted-foreground">{sample.subtitle}</p>
      </div>
    </div>
  )
}

function MapPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl" style={{ background: '#e9efe4' }}>
      <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M-5 30 C 25 25, 55 40, 105 32" stroke="#ffffff" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M20 -5 C 25 30, 15 70, 28 105" stroke="#ffffff" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M-5 68 C 30 60, 70 78, 105 66" stroke="#ffffff" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M68 -5 C 62 30, 78 60, 70 105" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 24 24" className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-full fill-accent drop-shadow-sm" aria-hidden="true">
        <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
    </div>
  )
}

function FinancePreview({ type }: { type: string }) {
  const sample = FINANCE_SAMPLES[type]
  if (!sample) return null
  const color = sample.up ? '#16a34a' : '#dc2626'
  return (
    <div className="flex h-full flex-col justify-between gap-2">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase">{sample.label}</p>
        <span
          className="shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums"
          style={{ color, backgroundColor: `${color}1a` }}
        >
          {sample.delta}
        </span>
      </div>
      <p className="text-2xl leading-none font-semibold tracking-tight text-foreground tabular-nums">
        {sample.value}
      </p>
      <svg viewBox="0 0 100 80" className="h-8 w-full" preserveAspectRatio="none" aria-hidden="true">
        <polyline points={sample.spark} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function Web3IdentityPreview() {
  return (
    <div className="flex h-full flex-col justify-between gap-2">
      <span
        className="grid h-10 w-10 place-items-center rounded-full text-xs font-semibold text-white"
        style={{ background: 'linear-gradient(135deg, #60a5fa, #8b5cf6)' }}
      >
        ju
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-foreground">{ENS_SAMPLE.name}</p>
        <p className="truncate text-xs text-muted-foreground tabular-nums">{ENS_SAMPLE.address}</p>
      </div>
    </div>
  )
}

function NftPreview({ type }: { type: string }) {
  if (type === 'poaps') {
    return (
      <div className="flex h-full flex-col justify-between gap-2">
        <div className="grid flex-1 place-items-center">
          <div className="flex -space-x-3">
            {['#fcd34d', '#a5b4fc', '#fda4af'].map((color) => (
              <span
                key={color}
                className="grid h-10 w-10 place-items-center rounded-full border-2 border-card text-[10px] font-bold text-white"
                style={{ backgroundColor: color }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">poaps</p>
          <p className="text-[10px] text-muted-foreground">3 event badges</p>
        </div>
      </div>
    )
  }
  const sample = NFT_SAMPLES[type]
  if (!sample) return null
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="grid flex-1 place-items-center rounded-xl" style={{ background: sample.art }}>
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white/80" aria-hidden="true">
          <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.4-6.3-4.6-6.3 4.6L8 13.6l-6-4.4h7.6L12 2z" />
        </svg>
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-foreground">{sample.name}</p>
        <p className="truncate text-[10px] text-muted-foreground">{sample.collection}</p>
      </div>
    </div>
  )
}

function TipJarPreview() {
  return (
    <div className="flex h-full flex-col justify-between gap-2">
      <div className="grid flex-1 place-items-center">
        <svg viewBox="0 0 64 80" className="h-16 w-auto" aria-hidden="true">
          <rect x="14" y="4" width="36" height="10" rx="5" className="fill-foreground" />
          <rect x="10" y="16" width="44" height="58" rx="12" className="fill-card stroke-border" />
          <circle cx="26" cy="52" r="7" className="fill-accent" />
          <circle cx="38" cy="60" r="7" className="fill-accent" opacity="0.75" />
          <circle cx="36" cy="42" r="5" className="fill-accent" opacity="0.5" />
        </svg>
      </div>
      <div>
        <p className="text-xs font-semibold text-foreground">{TIP_JAR_SAMPLE.title}</p>
        <p className="text-[10px] text-muted-foreground">{TIP_JAR_SAMPLE.subtitle}</p>
      </div>
    </div>
  )
}

function MiscPreview({ type }: { type: string }) {
  switch (type) {
    case 'countdown':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <p className="text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase">countdown</p>
          <p className="leading-none text-foreground">
            <span className="text-4xl font-semibold tracking-tight tabular-nums">{COUNTDOWN_SAMPLE.days}</span>{' '}
            <span className="text-xs text-muted-foreground">{COUNTDOWN_SAMPLE.unit}</span>
          </p>
          <p className="text-[10px] text-muted-foreground">{COUNTDOWN_SAMPLE.detail}</p>
        </div>
      )
    case 'text-quote':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-accent" aria-hidden="true">
            <path d="M10.7 5.6c-3 .9-5.2 3.6-5.2 7.2V18h6v-6H8.3c0-2.3 1.3-4 3.2-4.7l-.8-1.7zm8 0c-3 .9-5.2 3.6-5.2 7.2V18h6v-6h-3.2c0-2.3 1.3-4 3.2-4.7l-.8-1.7z" />
          </svg>
          <p className="text-xs leading-snug font-medium text-foreground">{QUOTE_SAMPLE.quote}</p>
          <p className="text-[10px] text-muted-foreground">– {QUOTE_SAMPLE.author}</p>
        </div>
      )
    case 'file-download':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
            <path className="fill-card stroke-muted-foreground" strokeWidth="1" d="M6 3h8l5 5v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
            <path className="fill-muted" d="M14 3l5 5h-5V3z" />
          </svg>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-foreground">{FILE_SAMPLE.name}</p>
            <p className="text-[10px] text-muted-foreground">{FILE_SAMPLE.size}</p>
          </div>
        </div>
      )
    case 'subscribe':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <p className="text-xs leading-snug font-semibold text-foreground">get the monthly letter</p>
          <div className="space-y-2">
            <div className="rounded-full border border-border bg-card px-3 py-2 text-[10px] text-muted-foreground">
              you@email.com
            </div>
            <div className="rounded-full bg-foreground px-3 py-2 text-center text-[10px] font-medium text-background">
              subscribe
            </div>
          </div>
        </div>
      )
    case 'profile-link':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <img src="/pawr-mark.svg" alt="" className="h-9 w-9 rounded-full" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">june</p>
            <p className="truncate text-xs text-muted-foreground">{PROFILE_LINK_SAMPLE.handle}</p>
          </div>
        </div>
      )
    case 'farcaster-channel':
      return (
        <div className="flex h-full flex-col justify-between gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg text-sm font-bold text-white" style={{ backgroundColor: '#8a63d2' }}>
            /
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{CHANNEL_SAMPLE.name}</p>
            <p className="truncate text-xs text-muted-foreground">{CHANNEL_SAMPLE.members}</p>
          </div>
        </div>
      )
    case 'unsplash-collection':
      return (
        <div className="flex h-full flex-col gap-2">
          <div className="grid flex-1 grid-cols-2 gap-1.5">
            {['linear-gradient(135deg,#bae6fd,#38bdf8)', 'linear-gradient(135deg,#fde68a,#f59e0b)', 'linear-gradient(135deg,#bbf7d0,#22c55e)', 'linear-gradient(135deg,#fbcfe8,#ec4899)'].map((art) => (
              <div key={art} className="rounded-lg" style={{ background: art }} />
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground">quiet places · 24 photos</p>
        </div>
      )
    default:
      return null
  }
}

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
