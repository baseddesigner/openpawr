import type { WidgetProps } from '../../src/lib/types'
import type { QuoteCardConfig } from './manifest'

export default function QuoteCardWidget({
  config,
}: WidgetProps<QuoteCardConfig>) {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-accent"
        aria-hidden="true"
      >
        <path d="M10.7 5.6c-3 .9-5.2 3.6-5.2 7.2V18h6v-6H8.3c0-2.3 1.3-4 3.2-4.7l-.8-1.7zm8 0c-3 .9-5.2 3.6-5.2 7.2V18h6v-6h-3.2c0-2.3 1.3-4 3.2-4.7l-.8-1.7z" />
      </svg>
      <p className="text-base leading-snug font-medium text-foreground">{config.quote}</p>
      <p className="text-xs text-muted-foreground">– {config.author}</p>
    </div>
  )
}
