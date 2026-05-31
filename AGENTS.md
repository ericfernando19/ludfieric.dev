<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — Eric

Single-page portfolio (Next.js 16 App Router, React 19, Tailwind v4, TypeScript). Sections navigate via `#id` hash + `scrollIntoView({ behavior: "smooth" })`.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Dev server on localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint (`eslint-config-next/core-web-vitals` + typescript) |
| `npx tsc --noEmit` | Typecheck (no npm script) |

No test runner.

## Tailwind v4 quirks

- Global import: `@import "tailwindcss"` (not `@tailwind`)
- Custom theme vars in `@theme inline { ... }` block (see `app/globals.css`)
- Dark mode: `@custom-variant dark (&:where(.dark, .dark *))` — class-based, no `prefers-color-scheme` media query
- PostCSS plugin: `@tailwindcss/postcss`

## Path alias

`@/*` → root `./*` (tsconfig paths)

## Dark mode

- FOUC prevention: inline `<Script>` in root layout reads `localStorage` + `matchMedia` before React hydrates
- Toggle uses `useSyncExternalStore` + `MutationObserver` on `<html>.classList` (no `next-themes` dep)
- Toggle writes `localStorage.setItem("theme", next ? "dark" : "light")`

## Architecture

- **Entrypoint**: `app/page.tsx` imports 8 section components + `Navbar` + `Footer`
- **Sections**: `components/*.tsx`, all `"use client"`, consistent framer-motion pattern:
  `initial={{ opacity: 0, y: 20/30 }}` / `whileInView={{ opacity: 1, y: 0 }}` / `viewport={{ once: true, margin: "-80px" }}`
- **Data**: All content in `lib/data.ts` — edit data there, not in components
- **Types**: `lib/types.ts` — `NavLink`, `Skill`, `Service`, `Project`, `ProcessStep`, `Testimonial`, `SocialLink`
- **Icons**: Lucide for UI (imported directly), custom SVG components in `lib/icons.tsx` (GithubIcon, LinkedinIcon). Components map string names to Lucide icons via `iconMap` records.
- **SEO**: Static `app/robots.ts` + `app/sitemap.ts` — domain `ludfi.my.id`
- **Contact form**: Frontend-only mock (`setSent(true)` + timeout reset, no backend)
- **Utility**: `lib/utils.ts` exports `cn()` for class merging

## Notable

- `CLAUDE.md` delegates to this file via `@AGENTS.md`
- No test runner, no CI config, no generated code
