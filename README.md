# 🫧 Liquid Glass Sandbox

An interactive gallery of liquid glass UI components built with **Astro**, **Tailwind CSS v4**, and raw **SVG displacement maps**. Every exhibit renders real-time refraction, specular highlights, and spring-driven physics — no WebGL, no canvas, just DOM, CSS, and math.

> Explicitly inspired by the original liquid glass article by **[@kube](https://kube.io/blog/liquid-glass-css-svg/)**.

---

## ✨ Highlights

| Feature | Description |
|---|---|
| **Pure SVG refraction** | Displacement maps generated from surface equations — no raster hacks |
| **Spring physics** | Velocity-aware animations with damped harmonic oscillators |
| **DOM cloning** | Backdrop-filter alternative that works across all modern browsers |
| **Real-time tuning** | Every exhibit exposes interactive controls for blur, saturation, scale, and more |
| **Dark mode** | Full light/dark support with system preference detection |

---

## 🖼️ Gallery Exhibits

| # | Exhibit | Description |
|---|---|---|
| 01 | **The Lens** | A free-floating magnifying glass with real-time backdrop refraction and chromatic aberration over complex DOM elements |
| 02 | **Action Button** | A hyper-tactile button with inner tension — click and hold to feel the surface pull inward |
| 03 | **The Switch** | A toggle with physical mass and snap behavior — refraction intensity increases when pressed |
| 04 | **The Slider** | A liquid slider track whose glass thumb stretches and distorts based on dragging velocity |
| 05 | **The Cursor** | A custom glass pointer with spring physics, stretching and refracting based on velocity |
| 06 | **Liquid Input** | A glass input field that reacts to typing with microscopic physical tremors and refraction bursts |
| 07 | **Layered FAB** | A floating action button whose stacked glass pieces push and settle against each other |
| 08 | **Liquid Credit Card** | An interactive 3D parallax credit card floating over animated circles |

---

## 🔬 How It Works

The effect is a six-stage rendering pipeline — not a cosmetic blur:

```
Surface Equation → Refraction Sampling → 2D Displacement Map → Specular Highlight → DOM Clone → Interactive Tuning
```

1. **Surface Equation** — Each glass shape begins as a 1D height profile (`convex_circle`, `convex_squircle`, `concave`, `lip`). The curve defines bezel steepness and how light bends at the edge.

2. **Refraction Sampling** — The engine samples the curve, computes surface normals, and applies Snell's law to approximate the refracted ray direction, producing a horizontal displacement distance per point.

3. **2D Displacement Map** — The 1D samples are radially expanded into an RG texture. Red and green channels encode directional offsets that an SVG `<feDisplacementMap>` filter consumes.

4. **Specular Highlight** — A second raster pass generates edge highlights based on the dot product of the surface normal and a configurable light direction vector, creating the polished glass rim.

5. **DOM Clone Strategy** — Instead of `backdrop-filter`, each exhibit clones the underlying DOM into a hidden layer, inversely aligns it, and applies the SVG filter chain inside the glass bounds.

6. **Interactive Tuning** — Blur, saturation, specular alpha, refraction scale, geometry, and spring behavior are all exposed as live controls per exhibit.

---

## 📐 Project Structure

```
src/
├── assets/              # Botanical textures and SVG icons
├── components/
│   ├── atoms/           # Primitives: SelectField, SvgFilter
│   ├── molecules/       # Composed UI: TopNav, ExhibitCard, ControlsModal, LiquidControls
│   └── organisms/       # Full exhibits: LensExhibit, ButtonExhibit, SwitchExhibit, ...
├── layouts/             # MainLayout wrapper
├── lib/                 # Site config, gallery controls, utilities
├── pages/
│   ├── index.astro          # Interactive gallery
│   ├── how-it-works.astro   # Pipeline documentation
│   └── svg-generator.astro  # SVG filter export tool
├── quarks/              # Core rendering engine
│   ├── liquidGlassEngine.ts   # Asset generation, filter updates, DOM cloning
│   ├── surfaceEquations.ts    # 1D surface profiles (convex, concave, lip)
│   ├── surfaceRenderer.ts     # 2D displacement & specular map generators
│   └── spring.ts              # Damped spring physics
└── styles/              # Global CSS and font definitions
```

---

## 🛠️ Stack

- **[Astro](https://astro.build)** v6 — Static site framework
- **[Tailwind CSS](https://tailwindcss.com)** v4 — Utility-first styling
- **TypeScript** — Type-safe rendering engine and control bindings
- **SVG Filter Pipeline** — `feImage` → `feDisplacementMap` → `feGaussianBlur` → `feColorMatrix` → composite
- **[Biome](https://biomejs.dev)** — Formatter and linter

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 22.12.0`
- **pnpm** (recommended)

### Install

```sh
pnpm install
```

### Development

```sh
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) to explore the gallery.

### Build

```sh
pnpm build
```

### Preview

```sh
pnpm preview
```

### Lint & Format

```sh
pnpm lint      # Check formatting
pnpm format    # Auto-fix formatting
pnpm check     # Check and fix
```

---

## 📄 Pages

| Route | Purpose |
|---|---|
| `/` | Interactive gallery with all eight liquid glass exhibits |
| `/how-it-works` | Visual documentation of the rendering pipeline with generated displacement and specular map previews |
| `/svg-generator` | Tune liquid glass parameters and export a self-contained SVG filter snippet |

---

## 🙏 Credits

This project is explicitly inspired by the original liquid glass article by **@kube**:

- 📝 [Liquid Glass with CSS & SVG](https://kube.io/blog/liquid-glass-css-svg/) — the article that sparked the effect and guided the refraction-first approach

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  <a href="https://github.com/ricardious/liquid-glass-sandbox">github.com/ricardious/liquid-glass-sandbox</a>
</p>
