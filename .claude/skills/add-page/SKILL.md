---
name: add-page
description: Add a new page to the site following HLV standards — creates files, sections, route and navigation.
---

When given the name and purpose of a new page, do the following:

## Step 1 — Create the page folder structure
```
app/pages/<page-name>/
  index.tsx          ← route entry point
  components/        ← all components that belong only to this page
    HeroSection.tsx
    ...
```

## Step 2 — Create the page entry point
File: `app/pages/<page-name>/index.tsx`

```tsx
import HeroSection from './components/HeroSection'
// other sections...

export default function <PageName>() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      {/* other sections */}
    </main>
  )
}
```

## Step 3 — Create components inside `components/`
Files: `app/pages/<page-name>/components/HeroSection.tsx`, etc.

Each section = a separate component. Minimum:
- `HeroSection.tsx` — introductory part of the page

**Note:** If a component needs to be used on multiple pages, move it to `src/components/`.

## Step 4 — Add a route
In `app/routes.ts`, add the new route:
```ts
route('/<page-name>', 'pages/<page-name>/index.tsx'),
```

## Step 5 — Add to navigation
If a `Navbar` component exists, add a link to the new page.

## Step 6 — HLV styles
Every new page must:
- Have `bg-black` as background
- Use Red Hat Display font
- Follow the HLV color palette from CLAUDE.md
- Hero section must have an H1 heading with `font-extrabold text-7xl text-white`

## Step 7 — Verify
Run `bun run dev` and confirm the new page works on its defined route.
