# Portfolio — Design Spec

**Owner:** Cedric Nathan Legarda
**Date:** 2026-08-31
**Status:** Approved for implementation

## Goal

A personal portfolio site that positions Cedric as a FullStack Developer with 7+ years of experience, showcases every public project link from his CV, and demonstrates his front-end craft (motion + 3D).

## Stack

- **Framework:** Next.js 15 (App Router, RSC where possible)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (button, card, badge, separator, tooltip, sheet)
- **Motion:** Framer Motion (micro-interactions), GSAP + ScrollTrigger (scroll-linked)
- **Smooth scroll:** Lenis (app-wide)
- **3D:** Three.js via React Three Fiber (@react-three/fiber, @react-three/drei) — Hero only
- **Icons:** lucide-react (UI), Simple Icons via CDN (tech logos)
- **Fonts:** Geist Sans + Geist Mono (via next/font)

## Design language

- **Palette:** `zinc-950` base, `zinc-100` foreground, accent gradient `violet-500 → cyan-400`
- **Type:** display sans for headings, mono for labels/section tags
- **Grain:** subtle noise overlay + radial gradient glow behind Hero
- **Motion:** all reveals on scroll (GSAP ScrollTrigger), hover lift for cards, magnetic CTA buttons

## Sections

### 1. Hero
- Full viewport (100dvh)
- Background: R3F canvas — animated particle field OR distorted sphere (MeshDistortMaterial). Lazy-loaded (`dynamic(..., { ssr: false })`).
- Foreground: name, role tag ("FullStack Developer"), 2-line intro from CV profile, primary CTA "View Projects" + secondary "Download CV"
- GSAP SplitText-style reveal for headline on mount

### 2. About
- 2-column grid (stacks on mobile)
- Left: portrait (use `IMG_0913 2.HEIC` converted to `.jpg`, placed in `/public`)
- Right: expanded bio, location (Bataan, PH), expertise chips, quick facts

### 3. Tech Stack
- Grouped grid with section labels: Frontend / Backend / Databases / DevOps & Cloud
- Each item: Simple Icons SVG (from `https://cdn.simpleicons.org/{slug}/{color}`) + label
- Hover: scale + glow
- Frontend: TypeScript, Next.js, React, Tailwind, shadcn, Framer Motion, GSAP, Three.js, R3F, MUI, Storybook, Recoil, TanStack Query
- Backend: Node.js, Nest.js, Express, Python, Laravel, Symfony, PHP
- Databases: PostgreSQL, MongoDB, MySQL, Redis
- DevOps: AWS, Docker, Jenkins, GitHub Actions, GitLab, Vercel, Heroku

### 4. Projects
- All ~20 public links from CV, grouped visually by employer
- Each card:
  - Screenshot via Microlink API: `https://api.microlink.io/?url={URL}&screenshot=true&meta=false&embed=screenshot.url`
  - Title (project name), company sub-label, one-line description
  - Tech badges (small icon + name)
  - External link icon → opens in new tab
- Layout: responsive bento/grid (1 col mobile, 2 col md, 3 col lg)
- Scroll-triggered stagger reveal via GSAP

**Project inventory:**
- TMGroup (Casino): vegastars.com, spinbet.com, spinbit.com, casiny.com
- Collins Aerospace: collinscargoconnect.com, cms.collinscargoconnect.com
- Freelance/Independent: zen-ritchie-cd93b3.netlify.app, 1of1m.netlify.app, gemstar-engineeringservices.netlify.app
- Racing Victoria: ottcommunity.com.au, hmp.racingvictoria.com.au
- Lamudi properties: propertypro.co.id/project/48, grahamirai.co.id, edenhaus.id, happylivingrealty.com, metlandmenteng.co.id, aerium-residences.com, podomorocitydelimedan.com, theloggia.lamudi-dev.ninja, metland-tambun.lamudi-dev.ninja, podomorocityvr.lamudi-dev.ninja, agungsedayu.com

### 5. Work Experience Timeline
- Vertical timeline, alternating cards left/right on desktop, single column on mobile
- Scroll-linked progress bar (GSAP ScrollTrigger scrub)
- Companies (newest first): MTMGroup → ERNI/Collins → Independent Consultant → Racing Victoria → DHL Malaysia → CIS Bayad Center → Lamudi → Pragmaprime → Redcore → Dragonpay → DirectWithHotels
- Each entry: company, role, date range, 2-3 bullet highlights, tech chips

### 6. Contact / Footer
- Big CTA "Let's build something."
- Email (cedric.legarda97@gmail.com), phone (+639176270449), GitHub (github.com/cedric28)
- Copyright line — no "Claude" attribution anywhere

## File Structure

```
src/
  app/
    layout.tsx              # fonts, providers, metadata
    page.tsx                # composes sections
    globals.css             # tailwind + custom vars
  components/
    hero/
      Hero.tsx
      ParticleField.tsx     # R3F scene
    sections/
      About.tsx
      TechStack.tsx
      Projects.tsx
      ProjectCard.tsx
      Timeline.tsx
      Contact.tsx
    layout/
      Navbar.tsx
    providers/
      LenisProvider.tsx
    ui/                     # shadcn components
  lib/
    data/
      projects.ts           # all project link records
      experience.ts         # work history
      techStack.ts          # grouped tech items
    microlink.ts            # helper to build screenshot URL
    utils.ts                # cn() from shadcn
public/
  cedric.jpg                # converted portrait
  cv.pdf                    # copy of CV
```

## Data models

```ts
// lib/data/projects.ts
type Project = {
  id: string;
  title: string;
  company: string;
  url: string;
  description: string;
  tech: string[];  // slugs matching techStack
};

// lib/data/experience.ts
type Experience = {
  company: string;
  role: string;
  start: string;   // "OCT 2025"
  end: string;     // "AUG 2026" or "Present"
  bullets: string[];
  tech: string[];
};

// lib/data/techStack.ts
type TechItem = {
  slug: string;    // simpleicons slug
  name: string;
  color: string;   // hex, no #
  category: 'frontend' | 'backend' | 'database' | 'devops';
};
```

## Performance & UX

- R3F canvas: lazy-loaded, `frameloop="demand"` where possible, disabled on `prefers-reduced-motion`
- Microlink images: `next/image` with `unoptimized` (external hotlinked), blur placeholder
- Lenis: skip on `prefers-reduced-motion`
- Fonts via `next/font` (no CLS)
- All heavy sections below-the-fold use `dynamic()` where beneficial

## Out of scope

- CMS integration
- Blog
- Contact form backend (mailto link only for now)
- i18n
- Analytics (can add later)

## Success criteria

- All ~20 project cards render with Microlink screenshots
- Smooth scroll works, no jank on scroll animations
- Lighthouse mobile Performance ≥ 85
- No "Claude" attribution anywhere in source or output
