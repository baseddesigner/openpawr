const REPO_URL = 'https://github.com/baseddesigner/openpawr'
const CONTRIBUTING_URL = `${REPO_URL}/blob/main/CONTRIBUTING.md`

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="flex w-full flex-col gap-6 px-4 py-10 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex items-center gap-2.5">
          <img src="/pawr-mark.svg" alt="" className="h-5 w-5" />
          <span>
            built by the community · powered by{' '}
            <a
              href="https://pawr.link"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              pawr.link
            </a>
          </span>
        </div>

        <nav className="flex items-center gap-5">
          <a
            href="https://pawr.link"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            pawr.link
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            github
          </a>
          <a
            href={CONTRIBUTING_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            contribute
          </a>
        </nav>

        <p>open source, MIT</p>
      </div>
    </footer>
  )
}
