---
name: deploy-vercel
description: Deploy the project to Vercel. First verify the build, then deploy to production or preview.
---

## Prerequisites
- Vercel CLI must be installed: `bun add -g vercel`
- Must be logged in: `vercel whoami` (if not — `vercel login`)

## Step 1 — Verify build
First run the verify-build skill. Continue only if build is ✅.

## Step 2 — Deploy

**Preview deploy** (for testing):
```bash
vercel
```

**Production deploy:**
```bash
vercel --prod
```

## Step 3 — Output
After deploy, print:
- ✅ Live URL
- Deploy time
- Whether it's production or preview

## Troubleshooting
- If `vercel` command not found: `bun add -g vercel`
- If not logged in: `vercel login`
- If build fails on Vercel but works locally: check environment variables in Vercel dashboard
