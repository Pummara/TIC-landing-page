# TIC Landing Page

Landing page for **Tera International Commercial Co., Ltd. (TIC)**, a Bangkok-based, IATA/BSP-accredited travel management company. Built with React + TypeScript + Vite + Tailwind CSS, bilingual (Thai default, English toggle), and deploy-ready for Vercel.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  i18n/            Thai/English string dictionaries + language context (src/i18n/I18nContext.tsx)
  components/
    layout/        Header, Footer
    ui/            Shared building blocks (SectionHeading, IconBadge, Button, LanguageToggle)
    sections/      One component per landing-page section (Hero, Services, Contact, ...)
  icons/           Hand-built inline SVG icon set
  assets/
    logos/         TIC + client logos, cropped from the approved design mockup
    hero/          Hero airplane photo, cropped from the approved design mockup
```

Every section reads its copy from `useI18n()` — to edit copy, edit `src/i18n/th.ts` / `src/i18n/en.ts`, not the components.

## Assets

The TIC logo, client logos (GIZ, BEM, AOT, PTT, ThaiBev), and the hero airplane photo were cropped directly from the client-approved design mockup (`messageImage_1787667226919.jpg`, kept at the repo root as reference material, not shipped in the build). No external stock imagery was used.

## Deploying to Vercel

This repo is zero-config for Vercel (Vite is auto-detected); `vercel.json` pins the build command and output directory explicitly:

```bash
# Option A — Vercel CLI
npm i -g vercel
vercel --prod

# Option B — Git integration
# Push to GitHub/GitLab/Bitbucket and import the repo at vercel.com/new
```

## Notes

- Language preference is remembered per-visitor via `localStorage` (`tic-locale`), defaulting to Thai.
- All motion (scroll reveals, hover states) respects `prefers-reduced-motion`.
