/**
 * hardcoded sample data for the native widget example previews.
 * everything renders locally – no network, no external images.
 */

export interface ProfileSample {
  name: string
  handle: string
  /** brand color – chip background, avatar tint */
  brand: string
  /** readable text color on the tinted avatar (usually brand, darker for light brands) */
  brandText: string
  initials: string
  /** single glyph inside the brand chip */
  chip: string
}

export const PROFILE_SAMPLES: Record<string, ProfileSample> = {
  'bluesky-profile': { name: 'june park', handle: '@june.bsky.social', brand: '#0085ff', brandText: '#0085ff', initials: 'jp', chip: 'B' },
  discord: { name: 'june', handle: 'june#0042', brand: '#5865f2', brandText: '#5865f2', initials: 'ju', chip: 'D' },
  'facebook-profile': { name: 'june park', handle: 'june.park', brand: '#1877f2', brandText: '#1877f2', initials: 'jp', chip: 'f' },
  'farcaster-profile': { name: 'june', handle: '@june.eth', brand: '#8a63d2', brandText: '#8a63d2', initials: 'ju', chip: 'F' },
  'github-profile': { name: 'junepark', handle: 'junepark', brand: '#24292f', brandText: '#24292f', initials: 'jp', chip: 'G' },
  'icebreaker-profile': { name: 'june park', handle: 'june.eth', brand: '#3b82f6', brandText: '#3b82f6', initials: 'jp', chip: 'I' },
  'instagram-profile': { name: 'june park', handle: '@june.makes', brand: '#e1306c', brandText: '#e1306c', initials: 'jp', chip: 'I' },
  'lens-profile': { name: 'june', handle: '@june.lens', brand: '#8fd608', brandText: '#4d7c0f', initials: 'ju', chip: 'L' },
  linkedin: { name: 'june park', handle: 'in/junepark', brand: '#0a66c2', brandText: '#0a66c2', initials: 'jp', chip: 'in' },
  'mastodon-profile': { name: 'june', handle: '@june@mastodon.social', brand: '#6364ff', brandText: '#6364ff', initials: 'ju', chip: 'M' },
  'medium-profile': { name: 'june park', handle: '@junepark', brand: '#171717', brandText: '#171717', initials: 'jp', chip: 'M' },
  'paragraph-profile': { name: 'june park', handle: '@june', brand: '#6b5ce7', brandText: '#6b5ce7', initials: 'jp', chip: 'P' },
  'substack-profile': { name: 'june park', handle: 'june.substack.com', brand: '#ff6719', brandText: '#ff6719', initials: 'jp', chip: 'S' },
  telegram: { name: 'june park', handle: '@junepark', brand: '#229ed9', brandText: '#229ed9', initials: 'jp', chip: 'T' },
  threads: { name: 'june park', handle: '@june.makes', brand: '#171717', brandText: '#171717', initials: 'jp', chip: '@' },
  'tiktok-profile': { name: 'june park', handle: '@junemakes', brand: '#fe2c55', brandText: '#fe2c55', initials: 'jp', chip: 'T' },
  'unsplash-profile': { name: 'june park', handle: '@junepark', brand: '#171717', brandText: '#171717', initials: 'jp', chip: 'U' },
  whatsapp: { name: 'june park', handle: '+49 30 123 456', brand: '#25d366', brandText: '#15803d', initials: 'jp', chip: 'W' },
  'x-profile': { name: 'june park', handle: '@junemakes', brand: '#171717', brandText: '#171717', initials: 'jp', chip: 'X' },
  'youtube-profile': { name: 'june makes', handle: '@junemakes', brand: '#ff0000', brandText: '#ff0000', initials: 'jm', chip: 'Y' },
}

export interface MediaSample {
  title: string
  subtitle: string
  /** css gradient for the art tile */
  art: string
  glyph: 'play' | 'note' | 'mic'
}

export const MEDIA_SAMPLES: Record<string, MediaSample> = {
  'apple-podcast': {
    title: 'the craft of calm software',
    subtitle: 'episode 42 · 38 min',
    art: 'linear-gradient(135deg, #c084fc, #7c3aed)',
    glyph: 'mic',
  },
  tracks: {
    title: 'midnight drives',
    subtitle: 'a playlist · 24 tracks',
    art: 'linear-gradient(135deg, #fda4af, #e11d48)',
    glyph: 'note',
  },
  video: {
    title: 'studio tour, finally',
    subtitle: '4:12 · mp4',
    art: 'linear-gradient(135deg, #93c5fd, #2563eb)',
    glyph: 'play',
  },
  'youtube-video': {
    title: 'how i design personal sites',
    subtitle: '12:04 · 18k views',
    art: 'linear-gradient(135deg, #fca5a5, #dc2626)',
    glyph: 'play',
  },
}

export interface FinanceSample {
  label: string
  value: string
  delta: string
  up: boolean
  /** sparkline points, 0-100 viewbox units */
  spark: string
}

export const FINANCE_SAMPLES: Record<string, FinanceSample> = {
  'dexscreener-pair': { label: 'pawr / usdc', value: '$0.0421', delta: '+8.2%', up: true, spark: '0,70 16,64 32,68 48,52 64,56 80,40 100,30' },
  'farcaster-stats': { label: 'followers', value: '1,284', delta: '+3.1%', up: true, spark: '0,60 16,62 32,55 48,58 64,48 80,42 100,34' },
  'geckoterminal-pair': { label: 'pawr / weth', value: '$0.0398', delta: '-1.4%', up: false, spark: '0,32 16,38 32,36 48,46 64,44 80,56 100,62' },
  'hyperliquid-vault': { label: 'vault tvl', value: '$12.4k', delta: '+12.6%', up: true, spark: '0,74 16,66 32,60 48,58 64,46 80,38 100,26' },
  'polymarket-event': { label: 'eth above 5k in 2026?', value: '63%', delta: '+5 pts', up: true, spark: '0,55 16,52 32,56 48,48 64,50 80,40 100,34' },
}

export interface NftSample {
  name: string
  collection: string
  art: string
}

export const NFT_SAMPLES: Record<string, NftSample> = {
  'opensea-item': {
    name: 'paw #1042',
    collection: 'pawr genesis',
    art: 'linear-gradient(135deg, #fcd34d, #f97316)',
  },
  'opensea-collection': {
    name: 'quiet machines',
    collection: '128 items · 0.4 eth floor',
    art: 'linear-gradient(135deg, #a5b4fc, #4f46e5)',
  },
}

export const LINK_SAMPLE = {
  title: 'things i loved this year',
  domain: 'june.blog',
}

export const ENS_SAMPLE = {
  name: 'june.eth',
  address: '0x1234…abcd',
}

export const TIP_JAR_SAMPLE = {
  title: 'tip jar',
  subtitle: '23 tips so far',
}

export const COUNTDOWN_SAMPLE = {
  days: 20,
  unit: 'days',
  detail: 'until the big move',
}

export const QUOTE_SAMPLE = {
  quote: 'leave the light on, keep the good stuff one tap away.',
  author: 'studio notes',
}

export const FILE_SAMPLE = {
  name: 'press-kit.zip',
  size: '4.2 mb',
}

export const CHANNEL_SAMPLE = {
  name: '/design',
  members: '12.4k members',
}

export const PROFILE_LINK_SAMPLE = {
  handle: 'pawr.link/june',
}
