---
name: scrape-and-convert
description: Extract content from a single page of an existing site and use it as the basis for a modernized React page following the HLV design system. Focus is on content fidelity — preserve original copy as closely as possible, discard only the old design.
---

When given a URL of a single page, do the following:

## Step 1 — Extract content + assets

Fetch the URL and extract:

**Text content (preserve verbatim):**
- Headings and subheadings — exact wording, do not paraphrase
- Body text, descriptions, paragraphs — copy faithfully
- Bullet lists and numbered lists
- CTA button labels — exact text
- Section names and their order
- Taglines, slogans, key messages

**Assets:**
- **Logo** — find the `<img>` or `<svg>` used as the site logo; extract the full absolute URL (e.g. `https://example.com/logo.png`). If it's an inline SVG, copy the SVG markup.
- **Hero images** — any prominent images with their URLs
- **Team/person photos** — full absolute URLs

Ignore: colors, fonts, layout, CSS, design decisions — those get discarded and rebuilt.

**Golden rule: copy text, rebuild design.**

## Step 2 — Build a content map

Print what you extracted in a readable format:
```
Logo:      https://... (image URL or "inline SVG")
Hero:      heading (exact) / subheading (exact) / CTA label (exact)
Section 1: name, key messages (verbatim)
Section 2: name, key messages (verbatim)
...
```
Pause and confirm: "This is the content I found — shall I continue?"

## Step 3 — Build the modernized page

Use the extracted content as-is for all text. Design everything fresh following the HLV system:
- Black background, Red Hat Display, HLV colors
- Modern, non-generic layout — apply the `/frontend-design` skill for aesthetics
- Use the real logo URL in `<img src="...">` — do not use a text placeholder
- Each section = a separate component in `app/pages/<page>/components/`
- Use React Router v7 loaders for any data that makes sense server-side

## Step 4 — Verify

Run `bun run dev` and list which sections are implemented.
Check that the logo renders correctly and copy matches the original.
