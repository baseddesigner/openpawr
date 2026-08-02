import { manifest } from './manifest'
import type { GmCardConfig } from './manifest'

export const defaultConfig: GmCardConfig = manifest.defaultConfig

export const goodNight: GmCardConfig = {
  greeting: 'gn',
}
