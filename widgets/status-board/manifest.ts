import type { WidgetManifest } from '../../src/lib/types'

export interface StatusBoardConfig {
  label: string
  status: string
  detail: string
}

export const manifest: WidgetManifest<StatusBoardConfig> = {
  slug: 'status-board',
  version: '1.0.0',
  name: 'status board',
  description:
    'A small live-looking status card for hours, availability, orders, or project state.',
  category: 'utility',
  allowedSizes: ['1x1'],
  defaultSize: '1x1',
  author: { name: 'pawr.link', url: 'https://pawr.link' },
  likeCount: 96,
  addCount: 31,
  defaultConfig: {
    label: 'status',
    status: 'open',
    detail: 'visitors can act right now.',
  },
}
