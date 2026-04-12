# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Vite, serves at localhost:5173)
- **Build:** `npm run build` (outputs to `dist/`)
- **Lint:** `npm run lint` (ESLint with React/hooks/refresh plugins)
- **Preview prod build:** `npm run preview`

No test framework is configured.

## Architecture

This is a **personal 3D portfolio website** for Sambit Singha, built with React 18 + Vite. It is a single-page app with no routing — the page is composed of sequential sections rendered in `App.jsx`.

### Key technology stack

- **3D rendering:** React Three Fiber (`@react-three/fiber`) + Drei helpers (`@react-three/drei`) + Three.js. GLB/FBX models are loaded from `public/models/`. The `leva` package is available for debugging 3D controls.
- **Animations:** GSAP (`gsap` + `@gsap/react`) for scroll/timeline animations; Framer Motion for section reveal animations; `maath` for smooth camera easing in `useFrame` loops.
- **Styling:** Tailwind CSS 3 with custom theme (dark color palette, `generalsans` font family). Utility classes like `c-space`, `head-text`, `grid-container` are defined in `src/index.css` via `@layer utilities`.
- **Responsive:** `react-responsive` media queries drive 3D scene sizing via `calculateSizes()` in `src/constants/index.js` (breakpoints: 440px, 768px, 1024px).
- **Contact form:** EmailJS (`@emailjs/browser`) sends emails directly from the browser.
- **Globe:** `react-globe.gl` renders an interactive globe in the About section.

### Section flow (rendered order in App.jsx)

Navbar → Hero → About → Projects → Experience → Contact → Footer

Each section lives in `src/sections/`. The Clients section exists but is commented out.

### 3D components (`src/components/`)

- `HackerRoom` — Hero scene GLB model with custom textures (`public/textures/desk/`)
- `HeroCamera` — Mouse-tracking camera wrapper using `maath` easing
- `DemoComputer` — Projects section 3D computer that displays project videos as textures
- `Developer` — Animated character (GLB + FBX animations: idle, salute, clapping, victory) controlled by work experience hover/click
- `Cube`, `ReactLogo`, `Rings`, `Target` — Floating decorative 3D elements in the Hero scene
- `CanvasLoader` — Suspense fallback spinner for all `<Canvas>` components

### Data

All static data (nav links, projects, work experiences, client reviews, responsive size calculations, Figma showcase) is centralized in `src/constants/index.js`.

### Static assets

- `public/models/` — GLB models and FBX animation files
- `public/textures/` — Texture images and project demo videos (`.mp4`)
- `public/assets/` — Icons, logos, images, and SVGs
