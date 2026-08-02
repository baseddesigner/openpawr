import type { WidgetManifest } from '../../src/lib/types'

export interface MiniFaqConfig {
  question: string
  answer: string
}

export const manifest: WidgetManifest<MiniFaqConfig> = {
  slug: 'mini-faq',
  version: '1.0.0',
  name: 'mini faq',
  description:
    'One question and one answer for pages that need to remove friction fast.',
  category: 'utility',
  allowedSizes: ['1x1'],
  defaultSize: '1x1',
  author: { name: 'pawr.link', url: 'https://pawr.link' },
  likeCount: 74,
  addCount: 19,
  defaultConfig: {
    question: 'what should visitors know?',
    answer: 'add one useful answer that helps them act.',
  },
}
