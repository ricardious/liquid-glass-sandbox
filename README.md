# Liquid Glass Sandbox

An Astro showcase for liquid glass UI experiments built with SVG displacement maps, specular highlights, DOM cloning, and spring-driven interaction.

## What It Includes

- Gallery of interactive glass components on `/`
- Documentation page on `/how-it-works`
- SVG export tool on `/svg-generator`
- Reusable controls, filters, and liquid rendering helpers

Current gallery highlights include:

- The Lens
- The Button
- The Switch
- The Slider
- The Cursor
- Liquid Input
- Layered FAB
- Liquid Credit Card

## Stack

- Astro
- Tailwind CSS v4
- TypeScript
- SVG filter pipeline for displacement/specular rendering

## Local Development

Requirements:

- Node.js `>= 22.12.0`

Install dependencies:

```sh
pnpm install
```

Run the dev server:

```sh
pnpm dev
```

Build for production:

```sh
pnpm build
```

Preview the build:

```sh
pnpm preview
```

## Credits

This project is explicitly inspired by the original liquid glass article by `@kube`:

- https://kube.io/blog/liquid-glass-css-svg/

Repository:

- https://github.com/ricardious/liquid-glass-sandbox
