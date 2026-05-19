## Shoukan Labs — Build Plan

A single-page marketing site themed around "summoning" — dark sorcery meets lightning-forged tech. The user's brief is detailed and opinionated, so I'll execute it as specified rather than explore design directions.

### Scope deviations from the brief
A few items in the brief conflict with this project's stack. I'll adapt:
- **Framework**: Stays on TanStack Start + Vite (not Next.js). All sections built as a single `/` route.
- **Tailwind**: v4 with tokens in `src/styles.css` (oklch), not `tailwind.config.js`.
- **Smooth scroll**: Native CSS only; skipping Lenis to keep bundle lean (can add later if you want).
- **Custom cursor**: Desktop-only, disabled on touch and when `prefers-reduced-motion` is set.

### Sections (all on `/`)
1. Navbar — sticky glass blur, logo glyph, nav links, theme toggle, "Summon Us" CTA, mobile overlay menu
2. Hero — full viewport, animated storm bg, rotating SVG summoning circle, headline reveal, dual CTAs, scroll cue
3. Marquee trust bar — infinite scroll of tech logos with rune dividers
4. Services — 6 cards, glass + arcane glow, hover lightning
5. Stats — 4 hexagonal animated counters
6. Process — 5-step ritual timeline with scroll-drawn connector
7. Security focus — split layout, animated layered shield, 3 pillars
8. Testimonials — 3-card carousel with dot nav
9. Tech stack — hex honeycomb of tech icons
10. Contact — form with arcane focus states, "Cast the Signal" submit (client-side only, no backend)
11. Footer — 3 columns, particles, back-to-top portal button

### Design system (`src/styles.css`)
Define oklch tokens for both themes per the brief palette:
- Dark: void `#050810`, electric `#6C63FF`→`#00D4FF`, thunder `#FFD700`→`#FF8C00`, lightning white, crimson
- Light: parchment, midnight ink, electric indigo, stormy teal, amber
- Gradients: `--gradient-arcane`, `--gradient-thunder`
- Shadows: `--shadow-glow-electric`, `--shadow-glow-thunder`
- Fonts via Google Fonts `<link>` in `__root.tsx` head: Cinzel Decorative (display), Rajdhani (subhead), DM Sans (body)

### Theme toggle
- `ThemeProvider` in `src/components/theme-provider.tsx` using `localStorage` + `class="dark"` on `<html>`
- Sun/moon toggle with arcane glyph; CSS transition on root for smooth color sweep (skip full-page shader to avoid jank)

### Animation
- `framer-motion` for entrances, stagger, hover, scroll-linked counters and timeline
- SVG summoning circles as reusable component with `motion` rotate
- Lightning flashes via keyframed opacity on absolutely-positioned SVGs
- Respect `prefers-reduced-motion` (disable parallax, particles, cursor)

### Form
- Controlled inputs, Zod validation, fake submit (setTimeout) → success state with lightning flash. No Lovable Cloud unless you want real submissions.

### Files to add
- `src/styles.css` — extend tokens, fonts, keyframes
- `src/routes/__root.tsx` — add font links, meta (title, description, og)
- `src/routes/index.tsx` — compose sections
- `src/components/theme-provider.tsx`, `theme-toggle.tsx`
- `src/components/cursor.tsx`
- `src/components/summoning-circle.tsx`, `lightning.tsx`, `storm-bg.tsx`
- `src/components/sections/` — Navbar, Hero, Marquee, Services, Stats, Process, Security, Testimonials, TechStack, Contact, Footer
- `src/lib/icons.tsx` — small inline brand SVGs for tech logos (avoiding extra deps)

### Dependencies to install
- `motion` (Framer Motion's modern package)
- No new icon libs beyond `lucide-react` (already present)

### Out of scope (ask if you want any)
- Real contact backend (would need Lovable Cloud + email service)
- Lenis smooth scroll
- WebGL/canvas particles (using CSS/SVG for perf)
- Separate routes per section (single-page per brief)

Approve and I'll build.