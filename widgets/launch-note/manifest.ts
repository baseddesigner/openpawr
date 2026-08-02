import type { WidgetManifest } from '../../src/lib/types'

export interface LaunchNoteConfig {
  title: string
  body: string
  tag: string
}

export const manifest: WidgetManifest<LaunchNoteConfig> = {
  slug: 'launch-note',
  version: '1.0.0',
  name: 'launch note',
  description:
    "A compact announcement card for drops, events, or today's most important note.",
  category: 'utility',
  allowedSizes: ['1x1'],
  defaultSize: '1x1',
  author: { name: 'pawr.link', url: 'https://pawr.link' },
  likeCount: 128,
  addCount: 42,
  defaultConfig: {
    title: 'what is happening?',
    body: 'share the one thing visitors should notice right now.',
    tag: 'now',
  },
}
