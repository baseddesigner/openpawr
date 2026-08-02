import { useState } from 'react'
import { getWidget } from './lib/registry'
import { TopBar } from './components/TopBar'
import { Hero } from './components/Hero'
import { CommunityWidgets } from './components/CommunityWidgets'
import { NativeWidgets } from './components/NativeWidgets'
import { ContributeBand } from './components/ContributeBand'
import { SiteFooter } from './components/SiteFooter'
import { WidgetDetail } from './components/WidgetDetail'

export function App() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)
  const selected = selectedSlug ? getWidget(selectedSlug) : undefined

  if (selected) {
    return (
      <div className="flex min-h-screen flex-col">
        <TopBar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12">
          <WidgetDetail entry={selected} onBack={() => setSelectedSlug(null)} />
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Hero />
      <main className="mx-auto w-full max-w-6xl flex-1 px-5">
        <CommunityWidgets onOpen={setSelectedSlug} />
        <ContributeBand />
        <NativeWidgets />
      </main>
      <SiteFooter />
    </div>
  )
}
