const CONTRIBUTING_URL =
  'https://github.com/baseddesigner/openpawr/blob/main/CONTRIBUTING.md'

export function ContributeBand() {
  return (
    <section className="mt-20 rounded-3xl bg-muted px-6 py-14 text-center md:py-16">
      <h2 className="display text-3xl text-foreground md:text-4xl">
        built by people like you
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
        fork the repo, scaffold a widget in one command, open a PR.
      </p>
      <a
        href={CONTRIBUTING_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        start building
      </a>
    </section>
  )
}
