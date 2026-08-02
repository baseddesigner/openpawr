import { manifest } from './manifest'
import type { MoonPhaseConfig } from './manifest'

export const defaultConfig: MoonPhaseConfig = manifest.defaultConfig

export const southernSky: MoonPhaseConfig = {
  hemisphere: 'south',
}
