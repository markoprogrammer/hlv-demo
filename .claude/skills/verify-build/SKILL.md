---
name: verify-build
description: Verify the production build and check bundle size. Run before deploying or pushing.
---

Run checks in order and stop if any fail:

## Step 1 — Build
```bash
bun run build
```
If the build fails — print the error, identify the cause and fix it.

## Step 2 — Bundle size
After a successful build, print the size of output files from the `build/` folder.
Warn if any JS chunk is larger than 500kb.

## Step 3 — Result
Print one of:
- ✅ **Build successful** — ready to deploy
- ❌ **Build failed** — with a list of errors to fix
