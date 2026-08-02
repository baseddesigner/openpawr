import type { BrandGlyphName } from '../components/brand-glyphs'

/**
 * hardcoded sample data for the native widget example previews.
 * everything renders locally – no network, no external images.
 */

export interface ProfileSample {
  name: string
  handle: string
  /** platform brand color – banner, follow pill (from the app's widget-config) */
  brand: string
  glyph: BrandGlyphName
  followers: string
  verified?: boolean
  /** avatar orb gradient; defaults to a brand-derived gradient */
  orb?: string
  /**
   * chip backdrop, mirroring the app's badgeBgClass: a brand hex for a
   * padded chip, or null when the icon fills the container with its own
   * baked-in background (youtube, instagram, tiktok, farcaster).
   */
  chipBg: string | null
  /** glyph color inside a padded chip */
  chipIcon: string
}

export const PROFILE_SAMPLES: Record<string, ProfileSample> = {
  'bluesky-profile': { name: 'june park', handle: '@june.bsky.social', brand: '#0085FF', glyph: 'bluesky', followers: '4,102', chipBg: '#0085FF', chipIcon: '#FFFFFF' },
  discord: { name: 'june', handle: '@june.makes', brand: '#5865F2', glyph: 'discord', followers: '3 servers', chipBg: '#5865F2', chipIcon: '#FFFFFF' },
  'facebook-profile': { name: 'june park', handle: 'june.park', brand: '#1877F2', glyph: 'facebook', followers: '1,942', chipBg: '#1877F2', chipIcon: '#FFFFFF' },
  'farcaster-profile': { name: 'june', handle: '@june.eth', brand: '#6A3CFF', glyph: 'farcaster', followers: '2,870', chipBg: null, chipIcon: '#FFFFFF' },
  'github-profile': { name: 'junepark', handle: 'junepark', brand: '#24292f', glyph: 'github', followers: '1.2k', chipBg: '#24292f', chipIcon: '#FFFFFF' },
  'icebreaker-profile': { name: 'june park', handle: 'june.eth', brand: '#121A1C', glyph: 'icebreaker', followers: '214', chipBg: '#121A1C', chipIcon: '#DCD5CF' },
  'instagram-profile': { name: 'june park', handle: '@june.makes', brand: '#E4405F', glyph: 'instagram', followers: '12.4k', verified: true, orb: 'linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)', chipBg: null, chipIcon: '#FFFFFF' },
  'lens-profile': { name: 'june', handle: '@june.lens', brand: '#2CC256', glyph: 'lens', followers: '986', chipBg: '#2CC256', chipIcon: '#FFFFFF' },
  linkedin: { name: 'june park', handle: 'in/junepark', brand: '#0077B7', glyph: 'linkedin', followers: '3,311', chipBg: '#0077B7', chipIcon: '#FFFFFF' },
  'mastodon-profile': { name: 'june', handle: '@june@mastodon.social', brand: '#6364FF', glyph: 'mastodon', followers: '1,508', chipBg: '#6364FF', chipIcon: '#FFFFFF' },
  'medium-profile': { name: 'june park', handle: '@junepark', brand: '#1A8917', glyph: 'medium', followers: '6,022', chipBg: '#1A8917', chipIcon: '#FFFFFF' },
  'paragraph-profile': { name: 'june park', handle: '@june', brand: '#4C6EF5', glyph: 'paragraph', followers: '1,140', chipBg: '#4C6EF5', chipIcon: '#FFFFFF' },
  'substack-profile': { name: 'june park', handle: 'june.substack.com', brand: '#FF6719', glyph: 'substack', followers: '8,913', chipBg: '#FF6719', chipIcon: '#FFFFFF' },
  telegram: { name: 'june park', handle: '@junepark', brand: '#0088cc', glyph: 'telegram', followers: '2,205', chipBg: '#0088cc', chipIcon: '#FFFFFF' },
  threads: { name: 'june park', handle: '@june.makes', brand: '#000000', glyph: 'threads', followers: '5,764', chipBg: '#000000', chipIcon: '#FFFFFF' },
  'tiktok-profile': { name: 'june park', handle: '@junemakes', brand: '#000000', glyph: 'tiktok', followers: '31.2k', chipBg: null, chipIcon: '#FFFFFF' },
  'unsplash-profile': { name: 'june park', handle: '@junepark', brand: '#000000', glyph: 'unsplash', followers: '2,048', chipBg: '#000000', chipIcon: '#FFFFFF' },
  whatsapp: { name: 'june park', handle: '+49 30 901 820', brand: '#25D366', glyph: 'whatsapp', followers: 'chat', chipBg: '#25D366', chipIcon: '#FFFFFF' },
  'x-profile': { name: 'june park', handle: '@junemakes', brand: '#000000', glyph: 'x', followers: '9,474', verified: true, chipBg: '#000000', chipIcon: '#FFFFFF' },
  'youtube-profile': { name: 'june makes', handle: '@junemakes', brand: '#FF0000', glyph: 'youtube', followers: '18.6k', chipBg: null, chipIcon: '#FFFFFF' },
}

export interface MediaSample {
  title: string
  artist: string
  /** css gradient for the album art */
  art: string
  glyph: BrandGlyphName | 'play'
  /** progress 0-1 and the two time labels */
  progress: number
  elapsed: string
  total: string
  /** accent for the progress fill + play button */
  accent: string
  dark?: boolean
}

export const MEDIA_SAMPLES: Record<string, MediaSample> = {
  'apple-podcast': {
    title: 'the craft of calm software',
    artist: 'field notes fm',
    art: 'linear-gradient(135deg, #c084fc, #7c3aed)',
    glyph: 'podcasts',
    progress: 0.42,
    elapsed: '16:02',
    total: '38:10',
    accent: '#c084fc',
  },
  tracks: {
    title: 'midnight drives',
    artist: 'june · 24 tracks',
    art: 'linear-gradient(135deg, #34d399, #065f46)',
    glyph: 'spotify',
    progress: 0.61,
    elapsed: '2:14',
    total: '3:41',
    accent: '#1ed760',
  },
  video: {
    title: 'studio tour, finally',
    artist: '4:12 · mp4',
    art: 'linear-gradient(135deg, #93c5fd, #2563eb)',
    glyph: 'play',
    progress: 0.28,
    elapsed: '1:10',
    total: '4:12',
    accent: '#60a5fa',
  },
  'youtube-video': {
    title: 'how i design personal sites',
    artist: 'june makes · 18k views',
    art: 'linear-gradient(135deg, #fca5a5, #b91c1c)',
    glyph: 'play',
    progress: 0.53,
    elapsed: '6:24',
    total: '12:04',
    accent: '#ff0000',
  },
}

export interface FinanceSample {
  pair: string
  price: string
  delta: string
  up: boolean
  high: string
  low: string
  /** area sparkline points, 0-100 viewbox units */
  spark: string
  dark?: boolean
  /** platform icon for the token chip, where the app has one */
  icon?: BrandGlyphName
}

export const FINANCE_SAMPLES: Record<string, FinanceSample> = {
  'dexscreener-pair': { pair: 'PAWR / USDC', price: '$0.0421', delta: '+8.2%', up: true, high: '$0.0448', low: '$0.0379', spark: '0,70 14,64 28,68 42,52 57,56 71,40 85,44 100,28', icon: 'dexscreener' },
  'farcaster-stats': { pair: 'followers', price: '1,284', delta: '+3.1%', up: true, high: '1,301', low: '1,220', spark: '0,60 14,62 28,55 42,58 57,48 71,52 85,40 100,34' },
  'geckoterminal-pair': { pair: 'PAWR / WETH', price: '$0.0398', delta: '-1.4%', up: false, high: '$0.0412', low: '$0.0388', spark: '0,32 14,38 28,36 42,46 57,44 71,56 85,52 100,62' },
  'hyperliquid-vault': { pair: 'vault tvl', price: '$12.4k', delta: '+12.6%', up: true, high: '$12.6k', low: '$10.9k', spark: '0,74 14,66 28,60 42,58 57,46 71,50 85,34 100,26', dark: true, icon: 'hyperliquid' },
  'polymarket-event': { pair: 'eth above 5k in 2026?', price: '63%', delta: '+5 pts', up: true, high: '64%', low: '57%', spark: '0,55 14,52 28,56 42,48 57,50 71,40 85,44 100,32', icon: 'polymarket' },
}

export interface NftSample {
  name: string
  collection: string
  floor: string
  art: string
}

export const NFT_SAMPLES: Record<string, NftSample> = {
  'opensea-item': {
    name: 'paw #1042',
    collection: 'pawr genesis',
    floor: '0.42 eth',
    art: 'item',
  },
  'opensea-collection': {
    name: 'quiet machines',
    collection: '128 items',
    floor: '0.40 eth floor',
    art: 'collection',
  },
}

export const LINK_SAMPLE = {
  title: 'things i loved this year – a very long list',
  domain: 'june.blog',
}

export const ENS_SAMPLE = {
  name: 'june.eth',
  address: '0x1234…abcd',
  records: ['avatar set', '@junemakes on x'],
}

export const TIP_JAR_SAMPLE = {
  amount: '$142',
  subtitle: '23 tips so far',
}

export const COUNTDOWN_SAMPLE = {
  days: 20,
  total: 60,
  label: 'until the big move',
}

export const QUOTE_SAMPLE = {
  quote: 'leave the light on, keep the good stuff one tap away.',
  author: 'studio notes',
}

export const FILE_SAMPLE = {
  name: 'press-kit.zip',
  kind: 'zip',
  size: '4.2 mb',
}

export const CHANNEL_SAMPLE = {
  name: '/design',
  members: '12.4k members',
}

export const PROFILE_LINK_SAMPLE = {
  handle: 'pawr.link/june',
}

export const COLLECTION_SAMPLE = {
  name: 'quiet places',
  count: '24 photos',
}
