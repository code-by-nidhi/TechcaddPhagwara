# Techcadd Phagwara — Next.js 15 (App Router)

Migrated from Vite 5 + React 18 (JSX) to Next.js 15 App Router + TypeScript.
All UI, copy, animations and behaviour from the original build are preserved.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build && npm start   # production
npm run typecheck            # tsc --noEmit
npm run lint                 # next lint
```

Copy `.env.example` to `.env.local`. Nothing is required for local development —
both form endpoints log to the server console when no webhook is configured.

## Architecture

**19 Server Components / 20 Client Components.** The `'use client'` boundary is
pushed as far down the tree as it will go, so most of the page is HTML in the
first response with no hydration cost.

Sections that are fully static (`Benefits`, `Achievements`, `Gallery`,
`LearningModes`, `Hero` copy, `Stats`, `Footer`) render entirely on the server.
Where a section was interactive only because of a card wrapper, the interactive
shell was extracted:

| Extracted client component | Used by |
| --- | --- |
| `ui/TiltCard` | About, Courses, Certifications, Faculty, Placement |
| `sections/HeroVisual` | Hero |
| `sections/SuccessRing` | Placement |
| `layout/NewsletterForm` | Footer |
| `fx/SiteEffects` | layout (Lenis + reveal + `ssr:false` decorative layers) |

### Library safety

- **Lenis** — dynamically imported inside `useEffect` (`hooks/useLenis.ts`). Never
  evaluated during SSR, and kept out of the initial chunk. Exposed as
  `window.__lenis` (typed in `types/global.d.ts`) for anchor scrolling.
- **GSAP** — `gsap.registerPlugin(ScrollTrigger)` is guarded by a `typeof window`
  check in `lib/gsap.ts`, so the SSR pass touches no DOM.
- **vanilla-tilt** — dynamically imported inside the effect in `hooks/useTilt.ts`,
  after a `(hover: hover) and (pointer: fine)` check, so it never ships to touch
  devices' critical path and never runs on the server.
- **Swiper** — `'use client'`, listed in `transpilePackages`, and split into its
  own chunk via `next/dynamic` in `app/page.tsx`. Its stylesheets are imported in
  `app/layout.tsx` *before* `styles/testimonials.css` so the cascade is
  deterministic. `types/vendor-css.d.ts` declares the bare CSS specifiers.

### Styling

The 15 original stylesheets are byte-for-byte preserved apart from documented
additions. Every component-level `import '@/styles/*.css'` was removed and
centralised in `app/layout.tsx`, because in App Router the cascade order of CSS
imported from separate components is not guaranteed.

Fonts moved from two render-blocking `<link>` tags to `next/font/google`,
self-hosted and wired through the existing `--font-display` / `--font-body`
tokens in `base.css`.

## Known manual steps

1. **Set `NEXT_PUBLIC_SITE_URL`** in production, or canonical/OG/sitemap URLs fall
   back to `https://www.techcadd.com`.
2. **Wire the form transports.** `/api/contact` and `/api/newsletter` validate and
   rate-limit, then hand off to `ENQUIRY_WEBHOOK_URL` / `NEWSLETTER_WEBHOOK_URL`.
   Without those set they only log. Replace the `forward()` / `subscribe()` bodies
   with a direct email or CRM call if you prefer.
3. **Rate limiting is per-instance.** The `Map` in `app/api/contact/route.ts` resets
   on cold start and is not shared across lambdas. Put Upstash/Redis or a WAF in
   front for real protection.
4. **Footer legal links point at `#faq`.** Privacy Policy, Terms and Refund Policy
   have no real pages — they did not exist in the original either. Create
   `app/privacy/page.tsx` etc. and add them to `app/sitemap.ts`.
5. **Copyright year is baked at build time** (`Footer.tsx` is a Server Component on
   a statically rendered page). Redeploy in January, or move that span into a
   client component if it must be live.
6. **Gallery photos.** Tiles render a generated gradient until you add `src` (and
   `alt`) to entries in `data/site.ts`; then they render `next/image` automatically.
   Add any remote host to `images.remotePatterns` in `next.config.ts`.
7. **`WhatsApp`, social and phone links** still use the original placeholder
   numbers/URLs from `data/site.ts`.
