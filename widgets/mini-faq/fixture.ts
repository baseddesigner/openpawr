import { manifest } from './manifest'
import type { MiniFaqConfig } from './manifest'

export const defaultConfig: MiniFaqConfig = manifest.defaultConfig

export const shippingQuestion: MiniFaqConfig = {
  question: 'do you ship worldwide?',
  answer: 'yes – orders leave the studio every friday, tracked everywhere.',
}
