import { manifest } from './manifest'
import type { StreakConfig } from './manifest'

export const defaultConfig: StreakConfig = manifest.defaultConfig

export const weeklyRhythm: StreakConfig = {
  label: 'week streak',
  count: 34,
}
