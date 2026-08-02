import { manifest } from './manifest'
import type { ClockConfig } from './manifest'

export const defaultConfig: ClockConfig = manifest.defaultConfig

export const tokyo: ClockConfig = {
  label: 'tokyo',
  timeZone: 'Asia/Tokyo',
}
