import type { WidgetProps } from '../../src/lib/types'
import type { MiniFaqConfig } from './manifest'

export default function MiniFaqWidget({ config }: WidgetProps<MiniFaqConfig>) {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <p className="text-base leading-tight font-semibold text-foreground">{config.question}</p>
      <p className="border-l-2 border-foreground/20 pl-3 text-sm leading-snug text-muted-foreground">{config.answer}</p>
    </div>
  )
}
