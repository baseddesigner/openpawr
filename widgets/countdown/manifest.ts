import type { WidgetManifest } from '../../src/lib/types'

export interface CountdownConfig {
  title: string
  /** YYYY-MM-DD */
  date: string
}

function daysFromNow(days: number): string {
  return new Date(Date.now() + days * 86400000).toISOString().slice(0, 10)
}

export const manifest: WidgetManifest<CountdownConfig> = {
  slug: 'countdown',
  version: '1.0.0',
  name: 'countdown',
  description:
    'counts down to the date that matters – a launch, a birthday, a drop.',
  category: 'utility',
  allowedSizes: ['1x1'],
  defaultSize: '1x1',
  author: { name: 'pawr.link', url: 'https://pawr.link' },
  likeCount: 265,
  addCount: 98,
  defaultConfig: {
    title: 'launch day',
    date: daysFromNow(21),
  },
}
