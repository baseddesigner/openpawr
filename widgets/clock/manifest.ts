import type { WidgetManifest } from '../../src/lib/types'

export interface ClockConfig {
  label: string
  timeZone: string
}

export const manifest: WidgetManifest<ClockConfig> = {
  slug: 'clock',
  version: '1.0.0',
  name: 'clock',
  description:
    'a live clock for any timezone so visitors always know what time it is for you.',
  category: 'utility',
  allowedSizes: ['1x1'],
  defaultSize: '1x1',
  author: { name: 'pawr.link', url: 'https://pawr.link' },
  likeCount: 320,
  addCount: 121,
  defaultConfig: {
    label: 'berlin',
    timeZone: 'Europe/Berlin',
  },
}
