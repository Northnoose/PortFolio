# Baseline Audit (As-Is)

**Date:** 2025-12-28  
**Source:** ZIP handover (`prosjekt.zip`) extracted to `prosjekt/`

## 1) Purpose

Create a factual, code-backed baseline of what is currently present and working in the codebase, and identify concrete gaps/technical debt compared to the handover report. This is a freeze-frame of reality.

**Non-goals (explicitly not done here):**

- No refactoring
- No performance work
- No feature additions
- No visual redesign

---

## 2) High-confidence facts from the ZIP

### 2.1 Framework & setup

- Next.js App Router project (TypeScript)
- Tailwind CSS configured
- `src/` directory structure with path alias usage (`@/…`)

### 2.2 Notable artifacts included in the ZIP

- `.next/` directory **is included** (build output). This should not be shipped in a professional source handover unless explicitly required.
- `.gitignore` contains `/.next/`, so the presence of `.next/` in the ZIP likely means the archive was created from a working directory without cleaning.

---

## 3) Routing inventory (actual files)

### 3.1 Static routes

- `/` → `src/app/page.tsx`
- `/projects` → `src/app/projects/page.tsx`
- `/case-studies` → `src/app/case-studies/page.tsx`
- `/about` → `src/app/about/page.tsx`
- `/experience` → `src/app/experience/page.tsx`

### 3.2 Dynamic routes

- `/projects/[slug]` → `src/app/projects/[slug]/page.tsx`
- `/case-studies/[slug]` → `src/app/case-studies/[slug]/page.tsx`

### 3.3 Robots & sitemap

- `robots.txt` → `src/app/robots.ts`
- `sitemap.xml` → `src/app/sitemap.ts`

---

## 4) Content sources (actual files)

- Projects content: `src/content/projects.ts` (export: `projects`)
- Case studies content: `src/content/caseStudies.ts` (export: `caseStudies`)

---

## 5) SEO configuration (actual files)

### 5.1 Global metadata

- `src/app/layout.tsx` sets `metadataBase`, global OpenGraph and Twitter card metadata.
- Global metadata depends on: `src/lib/site.ts`.

### 5.2 Current site config status

`src/lib/site.ts` contains **placeholders**:

- `name: "Your Name"`
- `url: "https://your-domain.com" // TODO`
- `twitterHandle: "@yourhandle" // optional`

This means canonical URLs / sitemap URLs will be incorrect until updated.

---

## 6) Implemented vs placeholder state (what the UI actually is)

### 6.1 Home (`/`)

- `src/app/page.tsx` is a **placeholder** (renders “Home” and “Tailwind tokens are working”).

### 6.2 About (`/about`)

- `src/app/about/page.tsx` is a **placeholder** (heading only).

### 6.3 Experience (`/experience`)

- `src/app/experience/page.tsx` is a **placeholder** (heading only).

### 6.4 Projects (`/projects` and `/projects/[slug]`)

- Appears implemented (data-driven via `projects` content, details route exists).
- (Not validated by runtime build in this audit; this statement is based on file presence and imports.)

### 6.5 Case Studies (`/case-studies` and `/case-studies/[slug]`)

- `/case-studies` (`src/app/case-studies/page.tsx`) is **incomplete**:
  - It renders only the header.
  - The mapping over case studies is commented out as “SENERE”.
- `/case-studies/[slug]` (`src/app/case-studies/[slug]/page.tsx`) is **incorrect and placeholder**:
  - It imports and searches `projects` (not `caseStudies`).
  - `generateMetadata` builds canonical/openGraph URLs under `/projects/...` even though the route is `/case-studies/...`.
  - The page body is hardcoded placeholder content (“Case Study Title”, “Context goes here”, etc.).

---

## 7) Concrete mismatches vs handover report

### 7.1 Report claims “All primary content sections … are implemented”

**Reality (in ZIP):** Home/About/Experience are placeholders; Case Studies list + detail are incomplete/incorrect.

### 7.2 Report claims “Case Studies overview and detail pages implemented”

**Reality (in ZIP):** Case Studies overview is only a header; detail route is using the wrong dataset and wrong canonical paths.

---

## 8) Blocking issues (must fix before any “launch” talk)

1. **Case Studies routing/content mismatch**

   - `/case-studies/[slug]` must use `caseStudies`, not `projects`.
   - Metadata must canonicalize to `/case-studies/...`.

2. **Case Studies index page has no list**

   - Either implement list UI now or remove the route from sitemap until implemented.

3. **Placeholders in primary pages**

   - Home/About/Experience should not be placeholders if the project is “production-ready”.

4. **`site.url` is placeholder**

   - Sitemap + canonical metadata currently point to a fake domain.

5. **`.next/` included in handover ZIP**
   - Clean source delivery should exclude build artifacts.

---

## 9) Definition of done (DoD) for incomplete sections (minimal)

- **Home:** Has real hero/value proposition + navigation into Projects/Case Studies, not a placeholder.
- **About:** Contains real structured narrative (not heading-only), consistent typography and tokens.
- **Experience:** Contains a structured timeline/list (roles, dates, bullets), not heading-only.
- **Case Studies (index):** Renders a list of case studies from `src/content/caseStudies.ts` with stable card component.
- **Case Studies (detail):** Renders a case study from `caseStudies` by slug; metadata uses `/case-studies/...` URLs; page body is not placeholder.

---

## 10) Next step candidate (not executed here)

Fix the Case Studies section end-to-end (index + detail + metadata) because it is both functionally incorrect and creates SEO/sitemap inconsistencies.
