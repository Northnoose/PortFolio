# CLAUDE.md

Durable project memory for the **Steffen Nordnes portfolio** (Next.js App Router). Verified against the codebase, not just the README. When code and README disagree, the code wins.

## Project Overview

Personal portfolio for Steffen Nordnes (Computer/AI Engineer), themed around ML systems, MLOps, and data engineering. Single dark-themed marketing site with:

- Animated hero (WebGL particles + multilingual typing effect)
- "What I Do" bento grid and a "How I Work" pixel/process section (`src/app/page.tsx`)
- Projects index + dynamic detail pages
- Case studies index (opened in a modal) + dynamic detail pages
- About, Experience pages
- Working contact form that emails via SMTP (`src/app/api/contact/route.ts`)

It is a public, content-driven site. Content lives in plain TypeScript files, not a CMS.

## Tech Stack

Verified in `package.json` (versions are the installed ranges):

- **Next.js 16.0.10** (App Router, builds with **Turbopack**) + **React 19.2.1** / react-dom 19.2.1
- **TypeScript ^5** (`strict: true`)
- **Tailwind CSS v4** (`tailwindcss ^4` + `@tailwindcss/postcss ^4`)
- **framer-motion ^12.29.2** — reveal/transition system in `src/components/motion/*` and the `animate()` helper in `src/components/ui/glowing-effect.tsx`
- **gsap ^3.14.2** — used only in `src/components/ui/TextType.tsx` (cursor)
- **ogl ^1.0.11** — WebGL particles in `src/components/ui/Particles.tsx`
- **lucide-react ^0.563.0** — all icons
- **nodemailer ^7.0.13** (+ `@types/nodemailer`) — contact email
- **zod ^4.4.3** — runtime validation of the contact payload (`src/app/api/contact/route.ts`)
- **clsx ^2.1.1** — class composition
- **eslint ^9** + **eslint-config-next 16.0.10** (flat config in `eslint.config.mjs`)

## Development Commands

From `package.json` scripts:

- `npm install` — install dependencies
- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build (Turbopack)
- `npm run start` — serve the production build
- `npm run lint` — runs `eslint` directly against the flat config (not `next lint`)

## Project Structure

```
src/
  app/                      App Router routes
    layout.tsx              Root layout (server) — metadata, fonts, <html class="dark">
    page.tsx                Home (client)
    not-found.tsx           Branded 404 (server)
    about/page.tsx          (client)
    experience/page.tsx     (server)
    projects/page.tsx       (client) + projects/[slug]/page.tsx (server, SSG + per-page metadata)
    case-studies/page.tsx   (client) + case-studies/[slug]/page.tsx (server, SSG + per-page metadata)
    api/contact/route.ts    POST contact endpoint (nodejs runtime, zod-validated)
    sitemap.ts  robots.ts   -> /sitemap.xml, /robots.txt
    globals.css             Tailwind import + design tokens
  components/
    layout/                 LayoutClient, Navbar
    motion/                 PageTransition, Reveal, RevealGroup, RevealItem
    providers/              ModalProvider (portal modal + context)
    sections/               HeroBentoGrid, HowIWorkPixel, ProjectsGrid, ProjectContent, CaseStudyContent, CaseStudyModal
    cards/                  ProjectCard
    case-study/             CaseStudyHeader, CaseStudySectionCard, ImpactCard, ResultsGrid, TechnologyStackRow, iconMap.ts
    ui/                     Container, Panel, Section, Tag, IconButton, Footer, HeroSectionHeader, Modal, BaseBackground, Particles, PixelCard, TextType, MagicBentoLite, glowing-effect, BentoCardBase
  content/                  projects.ts, caseStudies.ts
  lib/                      site.ts (metadata), utils.ts (cn helper)
  styles/                   design-rules.md (spacing/radius conventions, docs only)
public/                     og.png, svg icons, projects/waifare/*.png
.github/workflows/ci.yml    CI: npm ci → lint → build on push/PR to main
```

## Routing and Pages

All routes are App Router. Verified route table from `next build`:

- `/` — static
- `/about`, `/experience`, `/projects`, `/case-studies` — static
- `/projects/[slug]` and `/case-studies/[slug]` — **SSG**: each route exports `generateStaticParams` (prerenders every content slug) and `generateMetadata` (per-page title/description/OG). Unknown slugs still fall through to `notFound()`.
- `/api/contact` — dynamic POST handler (`runtime = "nodejs"`)
- `/robots.txt`, `/sitemap.xml` — generated, static
- `/_not-found` — branded 404 from `src/app/not-found.tsx`

Root layout `src/app/layout.tsx` sets `<html lang="en" class="dark">`, loads the Inter font, defines site-wide `metadata`, and wraps everything in `LayoutClient` (Navbar + PageTransition + Footer + ModalProvider).

The `[slug]` detail routes define `generateMetadata` (page-specific title via the root template, description, and `/og.png` OG/Twitter cards). All other pages inherit only the root `metadata`.

## Content Model

Content is plain typed TS — no CMS, no schema validation.

- **Site metadata & social links:** `src/lib/site.ts` exports `site` (`name`, `title`, `description`, `url`, `email`, `github`, `linkedin`). Imported by layout metadata, sitemap, robots.
- **Projects:** `src/content/projects.ts` exports `type Project` and `projects: Project[]`. Required fields: `slug`, `title`, `summary`, `tags[]`, `problem`, `solution`, `highlights[]`. Optional: `images?[]` ({src, caption}), `repoUrl?`, `demoUrl?`, `featured?`.
- **Case studies:** `src/content/caseStudies.ts` exports `type CaseStudy` and `caseStudies: CaseStudy[]`. Required: `slug`, `title`, `summary`, `domain`, `context`, `problem`, `constraints[]`, `approach[]`, `results[]`, `learnings[]`. Optional: `label`, `meta`, `resultsHighlights`, `stack`, `impact`, `tags`.

**Slug resolution:** detail pages do `projects.find(p => p.slug === slug)` / `caseStudies.find(c => c.slug === slug)` and call `notFound()` if absent. `await params` is required (params is a `Promise` in Next 16). `featured: true` drives the homepage and the "Featured" group on `/projects`. `sitemap.ts` enumerates slugs, so a new entry is automatically in the sitemap.

To add content safely: append an object matching the exported type; keep `slug` URL-safe and unique. Case-study slugs must also match the hash deep-link path (see Known Risks).

## Component Architecture

- **Layout:** `LayoutClient` (client) composes Navbar, `PageTransition`, Footer inside `ModalProvider`. Navbar is fully client (scroll progress, active-dot tracking, mobile menu).
- **Motion:** reusable `RevealGroup` + `RevealItem` (staggered whileInView reveal) used heavily across pages; `Reveal` (single) and `PageTransition` (route-level stagger).
- **Providers:** `ModalProvider` exposes `useModal()` → `openModal(content, onClose)` / `closeModal`; renders a portal modal on `document.body` with Escape-to-close and body scroll lock.
- **Sections:** page-level building blocks (`HeroBentoGrid`, `HowIWorkPixel`, `ProjectsGrid`, `CaseStudyContent`, etc.).
- **ui/**: presentational primitives (`Container`, `Panel`, `Tag`, etc.) and effect components (`Particles`, `glowing-effect`, `PixelCard`, `TextType`).

~30 files are `"use client"`. Pages are client except `experience` and both `[slug]` detail pages (server).

## Styling and Design System

- Tailwind v4 is imported CSS-first via `@import "tailwindcss";` in `src/app/globals.css`; PostCSS plugin in `postcss.config.mjs`.
- **Design tokens** are HSL component values in `:root` (globals.css): `--bg-page/panel/elevated`, `--text-primary/secondary/muted`, `--accent`, `--border-soft/strong`, `--radius-sm/md/lg`, `--shadow-soft/panel`, `--leading-tight/normal`.
- `tailwind.config.ts` maps those vars to utilities: `bg-bg-page`, `text-text-secondary`, `text-accent`, `border-border-soft`, `rounded-lg`, `shadow-panel`, etc. (`darkMode: "class"`). These custom utilities depend on this JS config being applied.
- Dark-only: `<html>` always has `class="dark"`; there is no theme toggle.
- Heavy use of ad-hoc utilities: `bg-white/5`, gradient text (`bg-clip-text text-transparent`), radial glow overlays, `backdrop-blur-xl`, violet/indigo accent gradients.
- `src/styles/design-rules.md` documents intended conventions (spacing scale 2/4/6/8/12/16/24, `rounded-lg` cards, `rounded-md` buttons). It is documentation only and not strictly enforced.

## Animation and Interaction Patterns

- **framer-motion** reveal system (`src/components/motion/*`): `whileInView` with `viewport={{ once: true }}`, staggered children, and `useReducedMotion()` guards that disable motion. Preserve the reduced-motion checks.
- **PageTransition** keys on `usePathname()` to re-run a stagger on navigation.
- **OGL WebGL particles** (`Particles.tsx`): client-only (uses `window`, `requestAnimationFrame`, WebGL). Multiple instances are mounted per page with tuned `particleCount`/`pixelRatio` (lower on mobile). Cleans up the canvas and RAF on unmount. Performance-sensitive — keep counts modest and keep it inside client components.
- **GSAP** drives only the typing cursor in `TextType.tsx`.
- **Modal**: `ModalProvider` + `createPortal`. The `/case-studies` page opens case studies in this modal and syncs a `#case-study=<slug>` URL hash (deep-linkable).

Caution: any new effect touching `window`/`document`/WebGL must live in a `"use client"` component.

## Contact Form and Environment Variables

- **UI**: inline `<form>` in `src/app/page.tsx` under the `#contact` section; `handleSubmit` POSTs JSON `{ name, email, message, projectType, company }` to `/api/contact` and toggles `success`/`error` UI. `company` is a visually-hidden **honeypot** field (offscreen, `tabIndex=-1`, `aria-hidden`) that real users never fill.
- **API**: `src/app/api/contact/route.ts` (`runtime = "nodejs"`). Validates the payload with a **zod** schema (`contactSchema`: trims/length-caps `name`/`message`/`projectType`, requires a real `email` via `z.email()`); returns 400 on invalid JSON or schema failure. If the `company` honeypot is non-empty it returns `{ success: true }` without sending (silent bot drop). All interpolated values are HTML-escaped (`escapeHtml`) before being placed in the email body. Builds a Nodemailer SMTP transport, sends an HTML email, returns `{ success: true }` or a 500 on failure.

Required environment variables (referenced only in `route.ts`; **never commit real values** — `.env*` is gitignored):

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_TO_EMAIL=
```

If these are missing/invalid, `transporter.sendMail` throws → the route returns 500 → the form shows "Something went wrong." Note: transport still uses `secure: false` and `tls.rejectUnauthorized: false` (kept intentionally — flipping these risks breaking the live SMTP setup). Spam protection is a honeypot only; there is still **no rate limiting**.

## SEO, Metadata, Sitemap, and Robots

- Root `metadata` in `src/app/layout.tsx`: `metadataBase` from `site.url`, title `default` + `template` (`%s | Steffen Nordnes`), description, `robots: { index, follow }`, Open Graph (`type: website`, `/og.png` 1200×630), Twitter `summary_large_image`.
- `src/app/sitemap.ts` emits all static routes plus every project and case-study slug.
- `src/app/robots.ts` allows all user agents and points to `${site.url}/sitemap.xml`.
- Canonical/site URL is centralized in `site.url`. Per-page metadata exists only on the `[slug]` detail routes (via `generateMetadata`); all other pages inherit the root `metadata`.

## Code Conventions

- Path alias `@/*` → `./src/*` (`tsconfig.json`). Always import via `@/...`.
- Components are PascalCase files. Pages use default exports; ui primitives are mostly named exports (`Container`, `Panel`, `Tag`), while some effect/section components default-export (`Particles`, `HeroBentoGrid`, `HowIWorkPixel`).
- Class composition uses `clsx` directly in most files; a `cn()` helper exists in `src/lib/utils.ts` but is used only by `glowing-effect.tsx`.
- Content is typed with an exported `type` + a typed array; keep new entries conforming.
- `"use client"` is used for any interactive/animated component. Detail pages and `experience` stay server components.
- Style is mostly double quotes, no semicolons, with some Norwegian inline comments in `motion/*`. Match the surrounding file.

## Safe Editing Guidelines for Claude Code

- Inspect the relevant file(s) before editing; prefer small, targeted changes.
- Do not rewrite the architecture or restyle the site unless explicitly asked. Preserve current visual design, gradients, and animation behavior.
- Respect server/client boundaries: never use `window`/WebGL/browser APIs in a server component.
- Never hardcode SMTP credentials or other secrets; only reference `process.env.*`.
- Keep `projects`/`caseStudies` objects consistent with their exported types.
- Do not rename routes, slugs, exports, or the `@/*` alias without updating every reference (and the case-study hash deep link).
- Update this file when you change scripts, env vars, routing, or content structure.
- Run `npm run build` after non-trivial edits.

## Common Tasks

- **Add a project:** append a `Project` to `src/content/projects.ts` (unique `slug`, all required fields; `featured: true` to surface it on home/`/projects`). Images go in `public/projects/...`.
- **Add a case study:** append a `CaseStudy` to `src/content/caseStudies.ts`. The slug is used by both `/case-studies/[slug]` and the `#case-study=<slug>` modal link.
- **Edit homepage content:** `src/app/page.tsx` (hero strings, bento cards, tech list, contact copy).
- **Update metadata / social links:** `src/lib/site.ts` (propagates to layout metadata, sitemap, robots).
- **Change navigation:** `navItems` array in `src/components/layout/Navbar.tsx`.
- **Update SEO/OG:** root `metadata` in `src/app/layout.tsx` and `public/og.png`.
- **Modify contact behavior:** form in `src/app/page.tsx`; sending/validation in `src/app/api/contact/route.ts`.
- **Adjust animations:** `src/components/motion/*` (reveal/transition) or `Particles.tsx` (particle tuning).
- **Add a page:** create `src/app/<route>/page.tsx`; add it to `Navbar` `navItems` and to `sitemap.ts` if it should be indexed.
- **Tune design tokens:** edit `:root` vars in `src/app/globals.css` (and `tailwind.config.ts` if adding a new token utility).

## Testing and Validation

No automated tests exist. Recommended workflow:

1. `npm install`
2. `npm run dev` and click through `/`, `/about`, `/experience`, `/projects`, `/case-studies`.
3. Check dynamic routes: `/projects/<slug>` and `/case-studies/<slug>` for real slugs, plus a bogus slug to confirm 404.
4. Open a case study on `/case-studies` to verify the modal + `#case-study=` deep link.
5. `npm run lint` — **clean: 0 errors, 1 warning** (the remaining warning is an intentional `exhaustive-deps` in `PixelCard.tsx`; see Known Risks). CI fails on lint errors, so keep this at 0 errors.
6. `npm run build` — must succeed. Note `next build` (Turbopack) does **not** fail on ESLint warnings.
7. Contact form: only fully testable with valid `SMTP_*` + `CONTACT_TO_EMAIL` set; otherwise expect a 500 and the error UI.
8. Manually review animations and responsive layout (mobile menu, particle performance).

## Deployment Notes

- Optimized for **Vercel** (`.vercel` is gitignored; README states this). Push to the connected repo.
- Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO_EMAIL` in the host's environment settings for the contact form to work in production.
- Build command: `next build`. The contact route requires the Node.js runtime (already declared).
- `site.url` (`https://steffennordnes.dev`) drives canonical/OG/sitemap URLs — update it if the domain changes.

## Known Risks and Gotchas

- **Lint is clean: 0 errors, 1 warning.** The only remaining item is an intentional `react-hooks/exhaustive-deps` warning in `PixelCard.tsx` (`handleAnimation` is recreated each render and deliberately omitted from the effect deps to avoid re-running the pixel animation every render). The CI workflow runs `npm run lint`, which fails only on errors, so keep errors at 0.
- **`BentoCardBase.tsx` is still untracked and unused** (no importers). Its `any` lint errors are fixed (the style object is now cast as `React.CSSProperties`), but the component itself is dead until something imports it.
- **Case studies have two viewing paths**: the modal+hash flow on `/case-studies` and the server route `/case-studies/[slug]`. Keep slugs consistent. (Trailing whitespace in `stack[]`/`tags[]` has been trimmed.)
- **A typo in a content `slug`** silently 404s the detail page (only a runtime `find` guards it). Because the detail routes now use `generateStaticParams`, the prerendered set is exactly the slugs in `projects.ts`/`caseStudies.ts`.
- **Contact endpoint remaining gaps**: input is now zod-validated, honeypot-guarded, and HTML-escaped before email interpolation, but `tls.rejectUnauthorized: false` / `secure: false` are kept intentionally (flipping them risks the live SMTP setup) and there is still **no rate limiting** and no captcha.
- **Tailwind dual config**: CSS-first `@import "tailwindcss"` plus a v3-style `tailwind.config.ts` without an `@config` directive. Custom color utilities depend on that JS config; the build currently resolves them — be deliberate before removing either.
- **WebGL/particles** are client-only and performance-sensitive (multiple instances per page); already tuned for mobile.
- Build prints a cosmetic `baseline-browser-mapping` "data is over two months old" warning (dev dependency, harmless).

## Recommended Future Improvements

Done in the latest pass: all ESLint errors fixed + lint added to CI; `generateStaticParams` + `generateMetadata` on both `[slug]` routes; zod validation + honeypot + HTML-escaping on the contact payload; animation libs de-duplicated to `framer-motion` and the dead `optimizePackageImports` entry removed; content whitespace trimmed; branded `not-found.tsx` added.

Still open:

- **Rate limiting / captcha for `/api/contact`** — honeypot is in place, but there's no rate limiting (needs an external store like Upstash on Vercel serverless) and no captcha.
- **Reconsider `tls.rejectUnauthorized: false` / `secure: false`** — left as-is to avoid breaking the live SMTP setup; revisit if the provider supports a valid cert / port 465.
- **Extend zod to content objects** — `projects.ts` / `caseStudies.ts` are still typed-only, with no runtime validation.
- **Resolve the last lint warning** — memoize `handleAnimation` in `PixelCard.tsx` (with `useCallback`) if you want a fully clean `npm run lint`; only do this if you verify the pixel animation still behaves.
- **Decide the fate of `BentoCardBase.tsx`** — it's typed and lint-clean now but unused; either wire it in or delete it.

## Instructions for Future Claude Code Sessions

When working in this repo:

1. **Inspect before editing** — read the target file and its imports; understand server vs client boundaries.
2. **Make minimal, focused changes** — do not refactor architecture, restyle, or "improve" beyond the request.
3. **Preserve patterns** — `@/*` imports, `clsx`, `RevealGroup`/`RevealItem` reveals, `useReducedMotion` guards, the design tokens, and the dark theme.
4. **Validate** — run `npm run build` (and `npm run lint` when relevant) after changes; remember lint has pre-existing failures the build does not gate on.
5. **No secrets** — only reference `process.env.*` for SMTP; never commit `.env*`.
6. **Respect content schemas** — new `projects`/`caseStudies` entries must match their exported types and keep slugs unique and in sync with routes/hash links.
7. **Explain assumptions and flag risks** before any large or cross-cutting change.
