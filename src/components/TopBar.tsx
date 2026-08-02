const REPO_URL = 'https://github.com/baseddesigner/openpawr'
const CONTRIBUTING_URL = `${REPO_URL}/blob/main/CONTRIBUTING.md`

export function TopBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="/" className="flex items-center gap-2.5">
          <img src="/pawr-mark.svg" alt="" className="h-6 w-6" />
          <span className="text-base font-semibold tracking-tight text-foreground">
            openpawr
          </span>
          <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold tracking-wide text-foreground uppercase">
            beta
          </span>
        </a>

        <nav className="flex items-center gap-5">
          <a
            href={CONTRIBUTING_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            contribute
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            build a widget
          </a>
        </nav>
      </div>
    </header>
  )
}
