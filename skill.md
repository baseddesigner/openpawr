---
name: openpawr
description: build and submit a community widget for pawr.link pages via the openpawr repo
version: 1.0.0
---

# openpawr – build a community widget

community widgets are small presentation-only react components that render inside a 1x1 bento cell on pawr.link pages. openpawr (open.pawr.link) is the live playground and review pipeline: merged widgets ship on open.pawr.link and are ported into the pawr.link app registry with author credit.

## workflow

```bash
git clone https://github.com/baseddesigner/openpawr.git
cd openpawr
pnpm install
pnpm create-widget <slug>        # lowercase kebab-case, e.g. my-widget
pnpm dev                         # live playground at localhost:5173
# implement the three files, then:
pnpm check && pnpm check-boundary
git add -A && git commit -m "add <slug> widget" && git push
# open a PR against main with screenshots of each fixture state
```

the registry auto-discovers `widgets/<slug>/` – no registration step.

## the three files

- `manifest.ts` – `slug`, `version: '1.0.0'`, `name`, `description` (one sentence, who it helps), `category`, `allowedSizes: ['1x1']`, `defaultSize: '1x1'`, `author: { name, url }`, `likeCount`/`addCount` (0 for new widgets), `defaultConfig`. pick defaults that look good with zero setup.
- `widget.tsx` – the component. receives props, renders. fill the cell (`h-full`), no fixed pixel widths, semantic tailwind tokens only (`bg-background`, `text-foreground`, `text-muted-foreground`, `bg-muted`, `border-border`).
- `fixture.ts` – named config variants for previews: re-export `defaultConfig` plus one realistic custom example (export names sort alphabetically; name the custom one so `defaultConfig` sorts first).

## widget contract

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

## hard rules (CI-enforced)

presentation-only. all data comes from `config` and the public `profile` object. no:

- network calls (`fetch`, `XMLHttpRequest`, `WebSocket`, `sendBeacon`)
- storage (`localStorage`, `sessionStorage`, `document.cookie`)
- wallet prompts (`window.ethereum`)
- raw HTML or DOM escapes (`dangerouslySetInnerHTML`, `createPortal`)
- `<iframe>` or `<form>`
- environment variables (`process.env`) or node built-ins (`fs`, `child_process`, `node:*`)

`pnpm check-boundary` scans every file under `widgets/` and CI fails on any hit. timers (`setInterval` + cleanup) and `Date`/`Intl` math are allowed.

## after merge

your widget goes live on open.pawr.link immediately. widgets people actually use get ported into the pawr.link app, with your author name and url in the manifest shown on the card.
