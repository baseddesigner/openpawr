import type { WidgetManifest } from '../../src/lib/types'

export interface MoonPhaseConfig {
  hemisphere: 'north' | 'south'
}

export const manifest: WidgetManifest<MoonPhaseConfig> = {
  slug: 'moon-phase',
  version: '1.0.0',
  name: 'moon phase',
  description:
    "shows tonight's moon phase and illumination, computed locally – a small cosmic detail for your page.",
  category: 'fun',
  allowedSizes: ['1x1'],
  defaultSize: '1x1',
  author: { name: 'pawr.link', url: 'https://pawr.link' },
  likeCount: 210,
  addCount: 64,
  defaultConfig: {
    hemisphere: 'north',
  },
}
