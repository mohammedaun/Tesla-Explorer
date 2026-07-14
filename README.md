# Inside Tesla

An interactive, single-page site that lets you take a Tesla apart, layer by layer, right in the browser.

Scroll past a short intro into a 3D model sitting on a podium. Drag to rotate it from any angle, then use the arrows to step through three stages:

- **Full Vehicle** — the exterior, exactly how you'd see it in a showroom
- **Exposed Systems** — the body panels are gone, showing the chassis, suspension, and high-voltage wiring underneath
- **Bare Drivetrain** — strip it back further to just the frame, wheels, and brakes

As you move between stages, the write-up on the right updates too, explaining what's actually on screen at that point — body materials and aerodynamics at the exterior stage, wiring and structural battery pan at the middle stage, down to frame and brake hardware at the last one.

## Why I built this

Wanted to build something more than a static portfolio page — a project that combined a real design system (ash-white/teal theme, clean typography) with actual 3D interactivity, not just a spinning model for show. The harder part ended up being sourcing and wiring up real 3D car models rather than the animation logic itself — figuring out which named mesh in a downloaded GLB file was the frame vs. the suspension vs. the wiring took a fair amount of trial and error.

## Tech stack

- **React** (Vite) for the app structure
- **React Three Fiber** + **Three.js** for the 3D scene, camera, lighting, and rotation controls
- **Framer Motion** for the hero section, card transitions, and stage indicators
- Plain CSS with a small set of shared design tokens (colors, spacing, easing) rather than a UI framework

## Project structure

Each section of the site is its own component folder — `Hero`, `TeslaExplorer` (with `TeslaModel`, `Podium`, `Lighting`, `CameraRig` inside it), and `InfoPanel`. A single `StageContext` keeps the 3D view and the written explanation in sync, so clicking a stage anywhere on the page updates both at once.

## Running it locally

```bash
npm install
npm run dev
```

Then open the local address it prints in the terminal.

## Known limitations

The 3D models are sourced from free assets rather than custom-modeled, and the drivetrain model doesn't have a separately-isolated motor or battery mesh — some of the mechanical detail you see at each stage is grouped rather than perfectly separated part-by-part. Good enough for the interaction and explanation this project is going for, but worth knowing if you look closely at the geometry.