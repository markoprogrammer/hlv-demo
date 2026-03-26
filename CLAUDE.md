# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context
You are rebuilding the Hooloovoo website ([hooloovoo.rs](https://hooloovoo.rs)) — a software development company.
The live site at `hooloovoo.rs` is the content reference — use `/scrape-and-convert` to extract page content from it.
All design must follow the HLV brand style guide.

---

## Tech Stack

- **Runtime:** Bun (NEVER npm or yarn)
- **Framework:** React Router v7 (framework mode — SSR, loaders, actions)
- **Build tool:** Vite (via `@react-router/dev/vite`)
- **UI:** React 19
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel (via `@vercel/react-router` preset — no `vercel.json` needed)

---

## Rules

- Never use `npm` or `yarn` — always `bun`
- Never use class components — only function components + hooks
- Never use inline styles except for dynamic values
- Never use the `any` TypeScript type
- Never install unnecessary libraries — ask before installing

---

## Folder Structure

React Router v7 uses the `app/` directory. Organized **by page/feature**.

```
app/
  root.tsx              # Root layout — HTML shell, fonts, global CSS import
  app.css               # Tailwind @import + HLV @theme variables
  routes.ts             # Route registry — every page must be registered here
  pages/
    home/
      index.tsx         # Route entry point (export default + optional loader/meta)
      components/       # Components that belong only to this page
    about/
      index.tsx
      components/
    contact/
      index.tsx
      components/
  lib/                  # Hooks, utilities
src/
  components/           # Shared components used across multiple pages (Navbar, Footer, Button...)
react-router.config.ts  # Framework config — vercelPreset goes here
```

**Rule:**
- Page-specific components → `app/pages/<page>/components/`
- Shared across 2+ pages → `src/components/`

**Adding a route:** always register it in `app/routes.ts`:
```ts
route('/about', 'pages/about/index.tsx'),
```

---

## HLV Design System

### Colors

```css
/* Use these Tailwind custom variables */
--color-primary: #4fc273;       /* Green — accents, buttons, lines */
--color-accent: #bbff66;        /* Lime — sparingly, never alongside primary in the same viewport */
--color-text: #ffffff;          /* White — all text */
--color-bg: #000000;            /* Black — base background */
--color-surface: #1a1a1a;       /* Dark gray — cards (max 35% of surface area) */
```

**Color rules:**
- Primary `#4fc273` — NEVER for large surfaces or flat backgrounds, accents only
- Accent `#bbff66` — never use together with primary green in the same section
- Background is always black as the base

### Typography

Font: **Red Hat Display** (Google Fonts)

| Element | Tailwind classes |
|---|---|
| H1 — Main heading | `font-extrabold text-7xl leading-tight` |
| H2 — Section heading | `font-bold text-5xl` |
| H3 — Subheading | `font-medium text-2xl` |
| Emphasized message | `font-bold text-2xl` |
| Body text | `font-normal text-lg` |
| Primary button | `font-bold text-2xl` |
| Secondary button | `font-bold text-lg` |

### Cards

```jsx
// Filled card
<div className="bg-[#1a1a1a]/80 rounded-2xl p-6">

// Outline card
<div className="border border-[#4fc273] rounded-2xl p-6">
```

- Border radius always `rounded-2xl` (14-16px)
- Filled card: `bg-[#1a1a1a]`, max 80% opacity
- Outline card: 1px border, `#4fc273`

### Buttons

```jsx
// Primary button (green background)
<button className="bg-[#4fc273] text-black font-bold px-8 py-4 rounded-2xl">

// Secondary button (black background, green text)
<button className="bg-black text-[#4fc273] font-bold px-8 py-4 rounded-2xl border border-[#4fc273]">
```

### Logo

- Primary logo: green square with white text — use in hero/navigation
- Horizontal logo: white text on dark background — use in footer
- **Never change logo colors**

---

## SSR Data Loading

React Router v7 uses file-based loaders for SSR data. Export a `loader` from any route file:

```tsx
// app/pages/about/index.tsx
import type { Route } from './+types/index'

export async function loader({ request }: Route.LoaderArgs) {
  const data = await fetchSomething()
  return { data }
}

export default function AboutPage({ loaderData }: Route.ComponentProps) {
  return <div>{loaderData.data}</div>
}
```

- Loaders run server-side; never expose secrets in the component
- Use `Route.LoaderArgs` / `Route.ComponentProps` from the generated `+types/` for type safety
- `meta` export receives `loaderData` for dynamic titles

---

## Coding Conventions

- Components: PascalCase (`HeroSection.tsx`)
- Functions/variables: camelCase
- Always TypeScript (`.tsx`, `.ts`)
- Props interfaces directly above the component
- Each site section = a separate component inside `app/pages/<page>/components/`

---

## Commands

```bash
bun run dev        # dev server (localhost:5173)
bun run build      # production build → build/
bun run start      # serve SSR build locally
bun run typecheck  # type generation + tsc check
```

---

## Available Skills

Pre-defined skills are available in `.claude/skills/`:

| Skill | Description |
|---|---|
| `/init-project` | Scaffold a new project (React Router v7, SSR, Tailwind v4, Vercel) |
| `/scrape-and-convert` | Extract content from a URL and rebuild it as an HLV page |
| `/add-page` | Add a new page following HLV standards |
| `/frontend-design` | Build a UI component following the HLV brand system |
| `/code-review` | Review code quality before committing |
| `/verify-build` | Verify production build and bundle size |
| `/commit-push` | Stage + conventional commit + push |
| `/deploy-vercel` | Deploy to Vercel (preview or production) |
| `/ship` | Full workflow: verify → review → commit → deploy |

---

## Workflow

**Starting from scratch:** `/init-project` → scaffolds the full app skeleton

**Adding a page:** `/add-page` → creates route file, registers in `routes.ts`, adds nav link

**Pulling content from the live site:** `/scrape-and-convert <url>` → extracts content and rebuilds as an HLV page

**Finishing work:** `/ship` → verify build → code review → commit → deploy to Vercel

When working on any task:
1. Read existing files before making changes
2. Install dependencies with `bun add` (never npm/yarn)
3. Always verify there are no TypeScript errors before finishing (`bun run typecheck`)
