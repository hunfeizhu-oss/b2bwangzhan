# SIMAN B2B Site Deployment Guide

## Local preview

```bash
cd siman-b2b-site
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Production build

```bash
cd siman-b2b-site
npm run build
```

The production output will be generated in:

```text
siman-b2b-site/dist
```

## Static hosting options

The project is a Vite static frontend and can be hosted on:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Any server that can serve static files from `dist/`

## Vercel setup

If deploying from this monorepo, configure:

| Field | Value |
|---|---|
| Framework Preset | Vite |
| Root Directory | `siman-b2b-site` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

## Netlify setup

If deploying from this monorepo, configure:

| Field | Value |
|---|---|
| Base directory | `siman-b2b-site` |
| Build command | `npm run build` |
| Publish directory | `siman-b2b-site/dist` |

## Before going live

1. Replace all placeholder image slots with real assets from `public/assets/`.
2. Confirm final company logo.
3. Confirm phone, email and address.
4. Confirm certificate/report images and remove any unverified claims.
5. Run `npm run build` and check mobile layout.
6. Check all CTA links and email addresses.
7. Compress images to WebP and verify page loading speed.
