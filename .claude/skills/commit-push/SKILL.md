---
name: commit-push
description: Stage changes, create a well-described commit and push to remote. Use when you've finished a feature or fix.
---

Follow these steps in order:

## 1. Review changes
Run `git status` and `git diff` to see what has changed.
If there are files that shouldn't be in the commit (`.env`, build files, temp files) — skip them.

## 2. Stage
```bash
git add <relevant files>
```
Never use `git add .` without reviewing first.

## 3. Commit message
Format:
```
<type>: <short description in imperative>

<optional details if needed>
```

Types:
- `feat:` — new functionality
- `fix:` — bug fix
- `style:` — visual changes, styles
- `refactor:` — refactoring without changing functionality
- `chore:` — configuration, dependencies

Examples:
- `feat: add Hero section with HLV design`
- `fix: correct button color in footer`
- `style: align typography with Red Hat Display`

## 4. Push
```bash
git push origin <current branch>
```

## 5. Confirm
Print which files were committed and the link to the remote branch.
