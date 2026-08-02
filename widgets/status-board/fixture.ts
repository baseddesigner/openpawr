import { manifest } from './manifest'
import type { StatusBoardConfig } from './manifest'

export const defaultConfig: StatusBoardConfig = manifest.defaultConfig

export const studioHours: StatusBoardConfig = {
  label: 'commissions',
  status: '2 slots',
  detail: 'booking for september – replies within 48 hours.',
}
