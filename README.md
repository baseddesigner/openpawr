# openpawr

community widgets for [pawr.link](https://pawr.link), rendered live at [open.pawr.link](https://open.pawr.link).

every widget here is a small presentation-only card you can add to your pawr page. browse the grid, click one to see it up close, copy its `widget:<slug>` shortcut.

## quickstart

```bash
pnpm install
pnpm dev
```

## add a widget

```bash
pnpm create-widget my-widget
```

then read [CONTRIBUTING.md](./CONTRIBUTING.md) – it covers the widget contract, the data rules (enforced in CI), and how review works.

## scripts

- `pnpm dev` – local playground
- `pnpm build` – static build to `dist/`
- `pnpm check` – typecheck
- `pnpm check-boundary` – boundary linter for widget code
- `pnpm create-widget <slug>` – scaffold a new widget

dev and build first refresh `src/generated/native-catalog.json` from the pawr.link catalog api; if the fetch fails the committed snapshot stays, so offline builds work. builds also regenerate `public/llms-full.txt` (gitignored).

## for agents

this is a static spa, so agents should read the text files instead of the html: [`/llms.txt`](https://open.pawr.link/llms.txt) (what this is, key links), [`/llms-full.txt`](https://open.pawr.link/llms-full.txt) (every widget + full contribution guide, generated at build time), and [`/skill.md`](https://open.pawr.link/skill.md) (agent-facing skill for building and submitting a widget).

powering [pawr.link](https://pawr.link)
