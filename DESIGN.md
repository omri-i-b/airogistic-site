# Design, Airogistic

A locked design system for this app. Every page redesign reads this file
before emitting code. Do not regenerate per page, extend or amend this
file when the system needs to grow.

Stamp on every page CSS: `/* Hallmark · genre: atmospheric-technical · design-system: DESIGN.md · designed-as-app */`

## Genre

Atmospheric technical. Pure-black canvas, bold display type, monospace
labels, a single chartreuse accent. The brand is operator-facing —
drone-program engineers and program managers — so the visual language
reads as instrumentation, not marketing fluff. No gradients. No glass.
No fake browser chrome (slop-gate 57).

## Macrostructure family

Pages within a family share a base shape and vary only on archetype.

- **Marketing pages** (`/`): Manifesto Macro — a typographic statement
  hero, alternating prose + grid sections, a future-tense vision callout,
  a thin CTA strip. Hero may include a real screenshot wrapped in a thin
  figure (never re-drawn chrome).
- **Product pages** (`/infrastructure`): Sculpture Macro — image-dominant
  hero (right column on `lg`, stacked on mobile), 4-tile feature row, a
  3-card rationale block, CTA strip.
- **Content pages** (`/company`): Long Document Macro — typography only,
  no enrichment, no card grids beyond a single contact row.

## Theme

Locked OKLCH tokens. No inline hex / `rgb()` / raw `oklch()` in any page
file. Every colour and font reference passes through a named token.

- `--color-paper`        : oklch(0 0 0)              · #000000  · canvas
- `--color-paper-2`      : oklch(0.13 0 0)           · #0a0a0a  · panel
- `--color-paper-3`      : oklch(0.16 0 0)           · #161616  · subtle layer
- `--color-ink`          : oklch(0.985 0 0)          · ~white   · headings + primary text
- `--color-ink-2`        : oklch(0.78 0 0)           · white/80 · body copy
- `--color-ink-3`        : oklch(0.55 0 0)           · white/55 · muted captions
- `--color-rule`         : oklch(1 0 0 / 0.1)        · white/10 · borders
- `--color-rule-strong`  : oklch(1 0 0 / 0.18)       · white/18 · stronger borders
- `--color-accent`       : oklch(0.90 0.18 120)      · #C5E86C  · chartreuse, ≤ 5 % of any viewport
- `--color-accent-ink`   : oklch(0 0 0)              · ink on accent fill
- `--color-focus`        : oklch(0.90 0.18 120)
- `--color-warn`         : oklch(0.85 0.16 85)       · amber, status pills only

## Typography

- Display: Cal Sans (`var(--font-display)`), weight 600, uppercase, tracking -0.02em
- Body:    Inter (`var(--font-sans)`), weight 400, tracking 0
- Mono:    JetBrains Mono (`var(--font-mono)`), weight 400, used for eyebrows and field labels — tracking 0.3em, 11px
- Type scale anchor: `text-display` clamps `clamp(2rem, 1.5rem + 4vw, 3.5rem)` for h1

## Spacing

4-point named scale, tokenised in `globals.css`. Pages must use named
tokens, never raw values.

- `--space-3xs`  4px
- `--space-2xs`  8px
- `--space-xs`   12px
- `--space-sm`   16px
- `--space-md`   24px
- `--space-lg`   40px
- `--space-xl`   64px
- `--space-2xl`  96px
- `--space-3xl`  128px

## Motion

- Easing: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`
- Reveal pattern: opacity-only, ≤ 220ms. No scroll-triggered slide-ins.
- Reduced-motion fallback: opacity-only, ≤ 150ms.

## Microinteractions stance

- Silent success on form submit (modal swaps to confirmation card, no toasts)
- Hover delay: 0ms (no tooltip-style hesitation)
- No celebratory anything

## CTA voice

- Primary CTA: white fill, mono uppercase label, square corners, square arrow icon. Copy pattern: imperative verb + noun (`Book a demo`, `Get the software`).
- Secondary CTA: outlined `border-rule-strong`, same typography
- Em-dash eyebrows: `<span aria-hidden="true">—</span> SECTION NAME` in mono uppercase, chartreuse em-dash, controlled `mr-1.5` gap (not a tracking-amplified space character)

## Per-page allowances

- Marketing pages MAY use a real product screenshot in a hairline figure (no fake browser bar, no traffic-light dots)
- Product pages MAY use a real product photograph as the hero's right column
- Content pages: typography only

## What pages MUST share

- Cal Sans / Inter / JetBrains Mono pairing
- Chartreuse accent placed sparingly (≤ 5% of any viewport)
- White-fill primary CTA voice
- Em-dash eyebrow pattern
- Section spacing rhythm (`py-12 md:py-18 lg:py-20`)
- The sticky black/85 backdrop-blur SiteNav

## What pages MAY differ on

- Macrostructure within the family
- Hero archetype (typographic vs sculpture vs long-document)
- Section ordering

## Hallmark slop-gates this system enforces

- **57 — Re-drawn chrome**: never. Real screenshots in a hairline figure or no chrome at all.
- **58 — Locked tokens**: every colour and font passes through a named token. No inline hex / oklch / rgb in component files.
- **36 — No horizontal scroll** at 320 / 375 / 414 / 768.
- **59 — No two-line clickable text** on buttons, nav, footer links.
- **61 — Image-bearing grid tracks use `minmax(0, 1fr)`**, never bare `1fr`.
- **62 — `overflow-x: clip`** on `html` and `body`, never `hidden`.
- **63 — Display headers wrap inside long words** via `overflow-wrap: anywhere; min-width: 0`.

## Pre-emit self-critique

Every page artifact stamps a six-axis critique at the top of its CSS or
top-level component. Scores 1–5 on Philosophy / Hierarchy / Execution /
Specificity / Restraint / Variety. Anything < 3 triggers a revision pass.

Current run: `/* Hallmark · pre-emit critique: P5 H4 E4 S4 R5 V4 */`
