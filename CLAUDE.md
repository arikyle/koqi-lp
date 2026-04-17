# Koqi Landing Page

Performance intelligence platform for real estate. Single-page cinematic landing page.

## Quick Reference

- **Design spec**: `.impeccable.md` in project root — read this before any visual work
- **Stack**: Next.js 14+ / Tailwind v4 / Framer Motion / GSAP + ScrollTrigger / Lenis
- **Fonts**: Fraunces 500 (display) + Inter 400/500 (body) via next/font
- **Colors**: Background `#F7F5F1` / Ink `#1A1A1A` / Accent `#2A9D8F` / Muted `#666666`
- **Logo**: Wordmark renders in `#2A9D8F` on page. Logo SVG source colors are NOT system tokens.

## Design Bar

Between Aesop and Linear. If it could be a Stripe site, too restrained. If it could be a crypto launchpad, too flashy.

## Build & Dev

```bash
npm run dev    # starts dev server
npm run build  # production build
npm run lint   # eslint
```

## Structure

```
src/components/  — Nav, LenisProvider, ACCSRing, DeviceFrame, ScrollCue
src/sections/    — Hero, Tension, Features, ProductGlimpse, Rewards, Brokerage, Proof, FAQ, FinalCTA
src/app/         — layout.tsx (fonts, Lenis), page.tsx (composes sections), globals.css (tokens)
```

## Animation Rules

- Framer Motion for component-level (hero stagger, word reveals, fade-ins)
- GSAP ScrollTrigger for scroll-driven (sticky features, ACCS ring)
- Cubic-bezier only — no bounce, no spring, no overshoot
- `prefers-reduced-motion` must disable all non-decorative animation
