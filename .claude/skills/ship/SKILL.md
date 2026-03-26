---
name: ship
description: Complete ship workflow in one command: verify-build → code-review → commit-push → deploy (preview). Stop if any step fails.
---

Run the complete ship workflow in order. **If any step returns ❌ — stop and do not continue.**

## Step 1 — Verify Build
Run the `/verify-build` skill.
- ✅ Continue
- ❌ Stop, fix build errors, then re-run `/ship`

## Step 2 — Code Review
Run the `/code-review` skill.
- ✅ Continue
- ⚠️ Continue with a note
- ❌ Stop, fix issues, then re-run `/ship`

## Step 3 — Commit & Push
Run the `/commit-push` skill.

## Step 4 — Deploy (Preview)
Run the `/deploy-vercel` skill — without the `--prod` flag, so preview deploy.
Vercel will provide a test URL. Manually promote to production on the Vercel dashboard.

## Final output
```
✅ SHIPPED
─────────────────────────
Code Review:   ✅
Build:         ✅
Commit:        feat: ...
Live URL:      https://...vercel.app
```
