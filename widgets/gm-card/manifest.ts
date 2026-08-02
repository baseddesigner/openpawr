import type { WidgetManifest } from '../../src/lib/types'

export interface GmCardConfig {
  greeting: string
}

export const manifest: WidgetManifest<GmCardConfig> = {
  slug: 'gm-card',
  version: '1.0.0',
  name: 'gm card',
  description:
    "says gm (or gn) from the page owner, with today's date – a warm sign of life.",
  category: 'social',
  allowedSizes: ['1x1'],
  defaultSize: '1x1',
  author: { name: 'pawr.link', url: 'https://pawr.link' },
  likeCount: 380,
  addCount: 132,
  defaultConfig: {
    greeting: 'gm',
  },
}
