import { manifest } from './manifest'
import type { GoalTrackerConfig } from './manifest'

export const defaultConfig: GoalTrackerConfig = manifest.defaultConfig

export const runningGoal: GoalTrackerConfig = {
  title: 'km ran this season',
  current: 42,
  goal: 100,
  unit: 'km',
}
