# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-file HTML slideshow presentation for the "AI Show & Grow — Claude Code" talk. No build step, no dependencies — just `index.html`.

## Deployment

Deploy to Vercel as a static site:

```bash
vercel --prod   # deploy to production
vercel          # deploy preview
```

Vercel serves `index.html` directly as a static asset. No `vercel.json` is needed.

## Structure

Everything lives in `index.html`:
- CSS variables use HLV brand colors (`--green: #4fc273`, `--lime: #bbff66`)
- Font: Red Hat Display via Google Fonts
- Slides are `.slide` divs inside a `.slideshow` container
- Navigation: arrow keys, swipe gestures, and on-screen buttons
- Keyboard shortcut `P` toggles presenter notes (`.notes` elements hidden by default)

`intro.md` contains the talk description copy (used externally, not loaded by the HTML).
