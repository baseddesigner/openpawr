import type { WidgetManifest } from '../../src/lib/types'

export interface GoalTrackerConfig {
  title: string
  current: number
  goal: number
  unit: string
}

export const manifest: WidgetManifest<GoalTrackerConfig> = {
  slug: 'goal-tracker',
  version: '1.0.0',
  name: 'goal tracker',
  description:
    'shows progress toward a goal with a bar visitors can root for.',
  category: 'data',
  allowedSizes: ['1x1'],
  defaultSize: '1x1',
  author: { name: 'pawr.link', url: 'https://pawr.link' },
  likeCount: 145,
  addCount: 47,
  defaultConfig: {
    title: 'coffees this month',
    current: 7,
    goal: 10,
    unit: 'cups',
  },
}
