import type { WidgetManifest } from '../../src/lib/types'

export interface QuoteCardConfig {
  quote: string
  author: string
}

export const manifest: WidgetManifest<QuoteCardConfig> = {
  slug: 'quote-card',
  version: '1.0.0',
  name: 'quote card',
  description:
    'one quote, beautifully set – the line you want every visitor to read.',
  category: 'social',
  allowedSizes: ['1x1'],
  defaultSize: '1x1',
  author: { name: 'pawr.link', url: 'https://pawr.link' },
  likeCount: 180,
  addCount: 53,
  defaultConfig: {
    quote: 'make things people want to visit twice.',
    author: 'studio notes',
  },
}
