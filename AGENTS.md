# BOSS Asesorías — AGENTS.md

## Project
- **Next.js 16** App Router + React 18, Spanish (`es-CL`), hosted on Vercel.
- **shadcn/ui** (Radix primitives, Lucide icons), Tailwind CSS v3, class-based dark mode.
- Fonts: Inter (`font-body`), IBM Plex Sans (`font-headline`). Loaded via `next/font/google` in `layout.tsx`.

## Dev commands (run in order before pushing)
```bash
npm run lint          # eslint . --ext .ts,.tsx --report-unused-disable-directives --max-warnings 0
npm run typecheck     # tsc --noEmit
npm run build         # next build
```
- `npm run dev` uses `--turbopack`.
- `ANALYZE=true npm run build` — bundle analyzer (requires `@next/bundle-analyzer`).
- `npm install --legacy-peer-deps` — `.npmrc` sets `legacy-peer-deps=true`.

## Env vars
| Variable | Required | Notes |
|----------|----------|-------|
| `FORMSPREE_ID` | Yes | Formspree endpoint ID (email or UUID) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | No | Fallback: `56992895726` |
| `NEXT_PUBLIC_GTM_ID` | No | GTM container ID |
| `NEXT_PUBLIC_GA_ID` | No | GA4 measurement ID |

All `NEXT_PUBLIC_*` remain at build time. `.env` and `.env.local` are gitignored.

## Architecture
- **App Router** — routes under `src/app/`. Entry: `layout.tsx` → `page.tsx`.
- **Server components** by default. Client components use `"use client"` (`contact-form.tsx`, `header.tsx`, `navigation.tsx`, `dynamic-whatsapp-button.tsx`, `stats-counter.tsx`, `whatsapp-button.tsx`).
- **Server actions** in `src/app/actions.ts` — `submitContactForm` (Zod validation → Formspree POST).
- **SEO**: Each page exports `metadata` (title template `%s | BOSS`). Sitemap in `src/app/sitemap.ts`, robots in `src/app/robots.ts`, feed in `src/app/rss.xml/route.ts`.
- **JSON-LD**: renderizado con una etiqueta `<script type="application/ld+json">` normal dentro de un
  **componente de servidor**, NUNCA con `<Script>` de `next/script`. Esa última forma inyecta el
  esquema en el CLIENTE: Google lo ve (ejecuta JavaScript), pero los rastreadores de IA
  (GPTBot, ClaudeBot, PerplexityBot) no ejecutan JS y encontraban 0 bloques. El único `<Script>`
  legítimo es el de GTM en `layout.tsx`, que sí es un script de terceros.
- **Artículos del blog**: la lista vive en `src/lib/blog-posts.ts` y alimenta tres sitios (la
  portada, el índice `/blog` y el RSS). Publicar un artículo = añadirlo ahí y crear su
  `src/app/blog/<slug>/page.tsx`. No dupliques la lista en `page.tsx`.
- **Pestañas**: Radix `Tabs` desmonta el contenido inactivo, así que queda FUERA del HTML y ni sus
  enlaces ni su texto son rastreables. Donde el contenido importe para SEO, usar `forceMount`.
- **Google Analytics**: GA4 via `@next/third-parties/google` + gtag fallback in `src/lib/analytics.ts`. GTM also injected in `layout.tsx`. Both conditional on env vars.
- **Analytics events**: `gtagEvent('contact_form_submission')` fires on form submit success.

## Structure
- `src/app/{soluciones,empresa,contacto}/` — route groups
- `src/components/ui/` — 36 shadcn/ui primitives. Do not edit directly; regenerate via shadcn CLI if needed.
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge)
- `src/lib/placeholder-images.ts` — typed image metadata array referenced across pages
- `src/hooks/use-toast.ts` — toast notification hook

## Security headers (set in `next.config.ts`)
- CSP: `unsafe-eval` allowed only in dev (Turbopack HMR). Prod: no eval.
- HSTS: `max-age=63072000; includeSubDomains; preload`
- All images local (`remotePatterns: []`).

## Deploy
`git push origin main` → Vercel auto-deploy.
