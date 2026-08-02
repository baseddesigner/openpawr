import { useEffect, useState } from 'react'
import { getWidget } from './lib/registry'
import { TopBar } from './components/TopBar'
import { Hero } from './components/Hero'
import { CommunityWidgets } from './components/CommunityWidgets'
import { NativeWidgets } from './components/NativeWidgets'
import { ContributeBand } from './components/ContributeBand'
import { SiteFooter } from './components/SiteFooter'
import { WidgetDetail } from './components/WidgetDetail'

const DEFAULT_TITLE = 'openpawr – community widgets for pawr.link'

/** the hash is the single source of truth: #/ or empty = grid, #/widget/<slug> = detail */
function slugFromHash(): string | null {
  const match = window.location.hash.match(/^#\/widget\/([a-z0-9]+(?:-[a-z0-9]+)*)\/?$/)
  return match ? match[1] : null
}

function openWidget(slug: string) {
  window.location.hash = `/widget/${slug}`
}

function goBack() {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    window.location.hash = '/'
  }
}

export function App() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(() =>
    slugFromHash(),
  )

  useEffect(() => {
    const onHashChange = () => setSelectedSlug(slugFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // unknown slugs fall back to the grid
  const selected = selectedSlug ? getWidget(selectedSlug) : undefined

  useEffect(() => {
    document.title = selected
      ? `${selected.manifest.name} – openpawr`
      : DEFAULT_TITLE
    if (selected) window.scrollTo(0, 0)
  }, [selected])

  if (selected) {
    return (
      <div className="flex min-h-screen flex-col">
        <TopBar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12">
          <WidgetDetail entry={selected} onBack={goBack} />
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
        <CommunityWidgets onOpen={openWidget} />
        <ContributeBand />
        <NativeWidgets />
      </main>
      <SiteFooter />
    </div>
  )
}
