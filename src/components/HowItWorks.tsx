const STEPS = [
  {
    title: 'browse',
    body: 'every widget here renders live, exactly as it looks on a page.',
  },
  {
    title: 'add',
    body: "paste widget:moon-phase into your page's action bar. native widgets are already built in.",
  },
  {
    title: 'build',
    body: 'fork the repo, one command scaffolds your widget, open a PR. merged widgets ship here and on pawr.link.',
  },
]

export function HowItWorks() {
  return (
    <section className="mt-20">
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {STEPS.map((step, index) => (
          <div key={step.title}>
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
              {step.title}
            </h3>
            <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
