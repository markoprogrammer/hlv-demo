---
name: init-project
description: Initialize a new HLV web project from scratch — React Router v7 (framework mode, SSR), TypeScript, Tailwind v4, Red Hat Display font, Vercel adapter. Run at the start of every new project.
---

Create a brand new project in the current folder following HLV standards.
If the folder is not empty, confirm with the user before proceeding.

## Step 1 — Install dependencies

```bash
bun add react-router @react-router/node
bun add -D @react-router/dev @vercel/react-router @types/node @types/react @types/react-dom typescript vite
bun add tailwindcss @tailwindcss/vite
```

## Step 2 — package.json

Create `package.json`:
```json
{
  "name": "hlv-site",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "react-router dev",
    "build": "react-router build",
    "start": "react-router-serve ./build/server/index.js",
    "typecheck": "react-router typegen && tsc"
  },
  "dependencies": {
    "@react-router/node": "^7.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router": "^7.0.0"
  },
  "devDependencies": {
    "@react-router/dev": "^7.0.0",
    "@vercel/react-router": "^1.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0",
    "vite": "^6.0.0"
  }
}
```

## Step 3 — Configure Vite + React Router + Vercel

`vite.config.ts`:
```ts
import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [reactRouter(), tailwindcss()],
})
```

`react-router.config.ts`:
```ts
import type { Config } from '@react-router/dev/config'
import { vercelPreset } from '@vercel/react-router/vite'

export default {
  presets: [vercelPreset()],
} satisfies Config
```

`tsconfig.json`:
```json
{
  "include": ["**/*.ts", "**/*.tsx", ".react-router/types/**/*"],
  "compilerOptions": {
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "types": ["vite/client", "node"],
    "isolatedModules": true,
    "esModuleInterop": true,
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "target": "ES2022",
    "strict": true,
    "noUncheckedSideEffectImports": true,
    "rootDirs": [".", "./.react-router/types"]
  }
}
```

## Step 4 — App directory structure

Create `app/` directory with the following files:

**`app/root.tsx`** — root layout with font + HLV base styles:
```tsx
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body className="bg-black text-white font-display antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
```

**`app/app.css`** — Tailwind + HLV theme:
```css
@import "tailwindcss";

@theme {
  --font-display: 'Red Hat Display', sans-serif;
  --color-primary: #4fc273;
  --color-accent: #bbff66;
  --color-bg: #000000;
  --color-surface: #1a1a1a;
}
```

Import it in `app/root.tsx` at the top:
```ts
import './app.css'
```

**`app/routes.ts`** — route config:
```ts
import { type RouteConfig, index } from '@react-router/dev/routes'

export default [
  index('pages/home/index.tsx'),
] satisfies RouteConfig
```

## Step 5 — Home page scaffold

Create `app/pages/home/index.tsx`:
```tsx
import type { Route } from './+types/index'

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'Hooloovoo' },
    { name: 'description', content: 'Software development company.' },
  ]
}

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <h1 className="font-extrabold text-7xl text-white p-16">Hooloovoo</h1>
    </main>
  )
}
```

## Step 6 — Folder structure going forward

```
app/
  root.tsx            # Root layout (HTML shell, fonts, global CSS)
  app.css             # Tailwind + HLV theme variables
  routes.ts           # Route config — add every new page here
  pages/
    home/
      index.tsx       # Route component (can export loader, meta, action)
      components/     # Components that belong only to this page
        HeroSection.tsx
        ...
    about/
      index.tsx
      components/
        ...
  lib/                # Utility functions, hooks (e.g. useAnimatedSvg.ts)
src/
  components/         # Shared components used across multiple pages (Navbar, Footer...)
```

**Adding a new route:** always register it in `routes.ts`:
```ts
route('/about', 'pages/about/index.tsx'),
```

No `vercel.json` needed — `@vercel/react-router` handles SSR routing automatically.

## Step 7 — Install and run

```bash
bun install
bun run dev
```

Confirm `localhost:5173` shows a black page with "Hooloovoo" in Red Hat Display.
