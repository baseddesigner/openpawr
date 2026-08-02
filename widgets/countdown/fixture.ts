import { manifest } from './manifest'
import type { CountdownConfig } from './manifest'

function daysFromNow(days: number): string {
  return new Date(Date.now() + days * 86400000).toISOString().slice(0, 10)
}

export const defaultConfig: CountdownConfig = manifest.defaultConfig

export const momoBirthday: CountdownConfig = {
  title: 'momo turns 4',
  date: daysFromNow(150),
}
