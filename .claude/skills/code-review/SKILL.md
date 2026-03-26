---
name: code-review
description: Run a code review — check code quality, TypeScript types, HLV design system, performance and best practices. Use before merging or when finishing a feature.
---

Perform a thorough code review of changed or specified files. Focus on the following areas:

## 1. TypeScript
- No `any` types
- All props interfaces are defined
- No ignored TypeScript errors

## 2. HLV Design System
- Only approved colors from CLAUDE.md are used (`#4fc273`, `#bbff66`, `#000000`, `#1a1a1a`, `#ffffff`)
- Font is Red Hat Display
- Cards have `rounded-2xl` and correct colors
- Buttons follow defined styles

## 3. React best practices
- No unnecessary re-renders (check useMemo/useCallback where relevant)
- Components are in `app/pages/<page>/components/` (page-specific) or `src/components/` (shared across pages)
- Naming is PascalCase for components, camelCase for functions
- No direct state mutations

## 4. Performance
- Images are optimized (lazy loading where needed)
- No blocking operations in the render function
- Keys are correct in lists

## 5. General quality
- No console.log in production code
- No commented-out code
- Functions do one thing (single responsibility)

## Output
For each issue found, include:
- **File and line**
- **Problem** (brief description)
- **Suggestion** (how to fix it)

End with a rating: ✅ Ready to commit / ⚠️ Minor notes / ❌ Needs fixes
