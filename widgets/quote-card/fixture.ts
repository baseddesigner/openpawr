import { manifest } from './manifest'
import type { QuoteCardConfig } from './manifest'

export const defaultConfig: QuoteCardConfig = manifest.defaultConfig

export const longForm: QuoteCardConfig = {
  quote:
    'the best pages on the internet feel like someone is still home. leave the light on, keep the good stuff one tap away, and update it like you mean it.',
  author: 'field notes on personal sites',
}
