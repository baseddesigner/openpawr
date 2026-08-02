const REPO_URL = 'https://github.com/baseddesigner/openpawr'

export function Hero() {
  return (
    <section className="px-4 py-20 text-center sm:px-6 md:py-28 lg:px-10">
      <h1 className="display mx-auto max-w-3xl text-5xl text-foreground md:text-7xl">
        community widgets, live
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
        make your page yours – browse community creations, add them in one
        paste, or build your own.
      </p>
      <div className="mt-9 flex items-center justify-center gap-3">
        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          build a widget
        </a>
        <a
          href="#widgets"
          className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-secondary"
        >
          browse widgets
        </a>
      </div>
    </section>
  )
}
