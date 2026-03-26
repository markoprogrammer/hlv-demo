---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

---

## HLV Brand Override

**IMPORTANT:** This project has a strict brand identity that takes precedence over the general guidelines above.

- **Font is always Red Hat Display** — do not choose another font
- **Theme is always dark** — background is always `#000000`, never a light theme
- **Colors are fixed** — use exclusively the HLV palette from CLAUDE.md (`#4fc273`, `#bbff66`, `#ffffff`, `#000000`, `#1a1a1a`)
- **Creativity is expressed through** composition, animations, typographic contrasts and abstract background shapes — not through changing colors or fonts

The design thinking and aesthetic principles from this skill still apply — just execute them within the HLV brand system.

---

## SVG Animation — Required Signature Element

Every hero section or landing page **must include at least one SVG-based animation** as its signature visual. This is non-negotiable — it separates HLV pages from generic AI output.

### Implement as a reusable React hook: `useAnimatedSvg`

Create `app/lib/useAnimatedSvg.ts` if it doesn't exist:
```ts
import { useEffect, useRef } from 'react'

export function useAnimatedSvg(duration = 3000) {
  const ref = useRef<SVGPathElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const length = el.getTotalLength()
    el.style.strokeDasharray = `${length}`
    el.style.strokeDashoffset = `${length}`
    el.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
    requestAnimationFrame(() => {
      el.style.strokeDashoffset = '0'
    })
    return () => {
      el.style.transition = ''
    }
  }, [duration])

  return ref
}
```

### SVG animation options (choose one per page, make it unique):

**Option A — Path draw animation** (line draws itself on load):
```tsx
const pathRef = useAnimatedSvg(2000)
<svg viewBox="0 0 800 200" className="absolute inset-0 w-full opacity-20">
  <path ref={pathRef} d="M0,100 Q200,20 400,100 T800,100"
    stroke="#4fc273" strokeWidth="1.5" fill="none" />
</svg>
```

**Option B — Floating particle field** (SVG circles with CSS keyframe float):
```tsx
// Generate N circles with randomized cx, cy, r, animation-delay
// Use CSS @keyframes float with translateY(-20px) ↔ translateY(20px)
// Color: #4fc273 at 10-30% opacity
```

**Option C — Morphing blob** (SVG path morphs between two shapes via CSS animation):
```tsx
<svg viewBox="0 0 200 200" className="absolute ...">
  <path className="animate-morph" fill="#4fc273" fillOpacity="0.08">
    <animate attributeName="d"
      values="M60,20 C120,0 180,60 180,100 C180,160 120,200 60,180 C0,160 0,60 60,20Z;
              M40,40 C100,0 200,40 180,100 C160,160 100,200 40,160 C-20,120 -20,80 40,40Z"
      dur="8s" repeatCount="indefinite" />
  </path>
</svg>
```

**Option D — Grid scan line** (horizontal line scans top to bottom, data/terminal aesthetic):
```tsx
<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
  <line x1="0%" y1="0" x2="100%" y2="0" stroke="#4fc273" strokeWidth="1">
    <animateTransform attributeName="transform" type="translate"
      from="0,0" to="0,100%" dur="3s" repeatCount="indefinite" />
  </line>
</svg>
```

Place the SVG as `position: absolute` behind the hero content, `pointer-events: none`, `z-index: 0`. Content goes on `z-index: 1` or higher.
