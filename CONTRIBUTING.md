# contributing

openpawr is the community widget playground for [pawr.link](https://pawr.link). widgets that land here go live on [open.pawr.link](https://open.pawr.link) and the good ones get ported into the pawr.link app, where anyone can add them to their page.

this guide walks you from fork to merged PR.

## the flow

```bash
# 1. fork the repo on github, then clone your fork
git clone https://github.com/<you>/openpawr.git
cd openpawr

# 2. install
pnpm install

# 3. scaffold your widget
pnpm create-widget my-widget

# 4. build it live
pnpm dev

# 5. before opening the PR
pnpm check
pnpm check-boundary
```

then open a pull request against `main`. the PR template asks for a screenshot of each fixture state – the fastest way to get a review.

## widget anatomy

every widget is a folder under `widgets/<slug>/` with exactly three files:

- `manifest.ts` – metadata: slug, name, description, category, version, author, and `defaultConfig`. this is what shows up on the card and the detail view.
- `widget.tsx` – the component. it receives props and renders – nothing else.
- `fixture.ts` – named config variants used for previews. include the default config plus at least one realistic variant with real-sounding content, so reviewers see the widget the way a visitor would.

the registry auto-discovers every folder under `widgets/` – no registration step, no imports to edit.

## the widget contract

```ts
interface WidgetProps<TConfig> {
  config: TConfig
  profile: {
    displayName: string
    slug: string
    avatarUrl: string | null
    ensName: string | null
    walletAddress: string | null
  }
  size: '1x1'
  isPreview?: boolean
}
```

- `config` is the widget's own settings, typed by you in `manifest.ts`.
- `profile` is public info about the page the widget sits on – use it if your widget should feel personal.
- `size` is the grid cell size. only `1x1` exists for now.
- `isPreview` is true when the widget renders on openpawr rather than a live page.

## data rules – presentation only

widgets are presentation-only. all data comes from `config` and the public `profile` object. that means no:

- network calls (`fetch`, `XMLHttpRequest`, `WebSocket`, `sendBeacon`)
- storage (`localStorage`, `sessionStorage`, `document.cookie`)
- wallet prompts (`window.ethereum`)
- raw HTML or DOM escapes (`dangerouslySetInnerHTML`, `createPortal`)
- `<iframe>` or `<form>`
- environment variables (`process.env`) or node built-ins (`fs`, `child_process`, `node:*`)

these aren't suggestions – `pnpm check-boundary` scans every file under `widgets/` and CI fails on any hit. if your widget idea needs live data, it's not a community widget yet.

## sizing

- only `1x1` for now – one square bento cell.
- fill the cell: the root element uses `h-full` (look at the seed widgets).
- no fixed pixel widths. the cell size changes with the viewport; layout with flex and relative units only.

## styling

use the semantic tailwind tokens – `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-muted`, `border-border` – plus ordinary layout utilities. they're defined in `src/tokens.css`. no hardcoded hex colors in widget markup, no inline visual systems.

## config guidance

- keep fields short strings – a title, a line of body text, a tag.
- pick defaults that render well with zero setup. a visitor should be able to add the widget and have it look intentional before they change anything.
- if a field has one obvious good value, make it the default instead of asking for it.

## voice

copy in widgets and in this repo follows the pawr voice: lowercase-led sentences, plain words, en-dash not em-dash, no emoji. it's "community widgets" and "add to your page" – never "install".

## review

every PR gets a human review on three things:

1. **design fit** – does it look like it belongs on a pawr page? fixtures with real content help a lot here.
2. **the rules** – boundary check and typecheck pass, sizing and token use are respected.
3. **no spam** – one widget per PR, no duplicates of what already exists, no ads or tracking dressed up as a widget.

when a PR merges, the widget goes live on open.pawr.link right away. widgets that people actually use get ported into the pawr.link app with credit to the author in the manifest.
