import type { WidgetProps } from '../../src/lib/types'
import type { LaunchNoteConfig } from './manifest'

export default function LaunchNoteWidget({
  config,
}: WidgetProps<LaunchNoteConfig>) {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <span className="w-fit rounded-full bg-foreground px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-background uppercase">{config.tag}</span>
      <div className="space-y-2">
        <p className="text-lg leading-tight font-semibold text-foreground">{config.title}</p>
        <p className="text-sm leading-snug text-muted-foreground">{config.body}</p>
      </div>
    </div>
  )
}
