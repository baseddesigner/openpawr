import type { WidgetManifest } from '../../src/lib/types'

export interface StreakConfig {
  label: string
  count: number
}

export const manifest: WidgetManifest<StreakConfig> = {
  slug: 'streak',
  version: '1.0.0',
  name: 'streak',
  description:
    'flexes your current streak with a flame – proof you keep showing up.',
  category: 'fun',
  allowedSizes: ['1x1'],
  defaultSize: '1x1',
  author: { name: 'pawr.link', url: 'https://pawr.link' },
  likeCount: 240,
  addCount: 88,
  defaultConfig: {
    label: 'day streak',
    count: 12,
  },
}
