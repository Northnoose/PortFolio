You are Claude Code working as a senior frontend architect, Next.js App Router expert, React/TypeScript specialist, developer-portfolio consultant, and codebase auditor.

Your task is to inspect the local repository folder named `PortFolio` and create a high-quality root-level `CLAUDE.md` file that future Claude Code sessions can use as durable project memory.

The `CLAUDE.md` file must be accurate, practical, repo-specific, concise, and safe for a public codebase.

---

# Mission

Analyze the actual `PortFolio` codebase and create this file at the project root:

`CLAUDE.md`

The file should help future Claude Code sessions understand how to safely maintain, debug, extend, refactor, and validate this portfolio website.

Do not write a generic Next.js guide. Write documentation specific to this repository.

The task is complete when `CLAUDE.md` exists at the project root, contains repo-specific file paths, documents verified scripts/routes/content/environment variables, lists risks grounded in inspection, and the final response reports validation status.

---

# Source of Truth

Use the actual files in the repository as the source of truth.

The README may be used as supporting context, but every important claim must be verified against the codebase before inclusion.

If the README and code disagree, trust the code. Mention discrepancies only when they matter for future maintainers.

Do not include secrets, credentials, tokens, or actual `.env` values.

When documenting implementation details, mention the relevant file paths, for example:

- `src/app/api/contact/route.ts`
- `src/content/projects.ts`
- `src/lib/site.ts`
- `src/app/projects/[slug]/page.tsx`

Only mention paths that actually exist.

---

# README Context

The README describes the project as a personal portfolio site for Steffen Nordnes, focused on ML systems and data engineering.

It says the project uses:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion / `motion`
- GSAP
- OGL WebGL particles
- `lucide-react`
- `nodemailer` for SMTP contact form email

It also describes these main folders:

- `src/app/` for App Router pages and API routes
- `src/components/` for UI, sections, cards, layout, animations, and providers
- `src/content/` for projects and case studies
- `src/lib/` for site metadata and utilities
- `src/styles/` for design rules and tokens

Treat this as context only. Verify it.

---

# Required Inspection Process

Before creating `CLAUDE.md`, inspect the repository carefully.

At minimum, review:

- `package.json`
- `README.md`
- Next.js config files
- TypeScript config files
- ESLint/linting config files
- Tailwind and global style files
- `src/app/**`
- `src/components/**`
- `src/content/**`
- `src/lib/**`
- `src/styles/**`
- API routes
- dynamic routes
- metadata files
- sitemap and robots files
- environment variable usage
- imports and path aliases
- client/server component boundaries

Use safe read-only commands such as:

- `pwd`
- `ls`
- `find`
- `cat`
- `sed`
- `rg`
- `grep`
- `tree`

Prefer `rg --files`, `find`, and targeted `rg` searches before opening large files.

Do not run destructive commands.

Do not print `.env` file contents. Only identify variable names referenced in source code.

Do not paste long raw command outputs into `CLAUDE.md`. Summarize findings clearly and include the relevant file paths.

---

# What to Identify

During inspection, determine:

- Actual framework versions and major dependencies.
- Available package scripts and their purpose.
- Real project structure and important files.
- App Router pages, layouts, route groups, dynamic routes, and API routes.
- How project and case-study slugs are generated or resolved.
- Where site metadata, navigation, projects, case studies, and reusable content live.
- Component organization and reusable architecture patterns.
- Client components versus server components.
- Styling approach, global CSS, Tailwind conventions, design tokens, and responsive patterns.
- Animation and interaction systems actually used.
- Contact form implementation, email flow, validation, and error handling.
- Required environment variables and where they are used.
- TypeScript conventions, inferred schemas, and important types.
- Import aliases and naming conventions.
- SEO, metadata, sitemap, and robots behavior.
- Deployment assumptions and production requirements.
- Known risks, fragile areas, inconsistencies, or likely maintenance problems.
- Rules future Claude Code sessions should follow when editing the repo.

---

# File to Create

Create or update only this file:

`CLAUDE.md`

Do not modify application source code, dependencies, config files, lockfiles, or README.

If `CLAUDE.md` already exists, read it first. Preserve still-valid project-specific guidance, remove stale claims, and update it based on the current repository inspection.

For this task, the expected repository change is only `CLAUDE.md`.

---

# Target Length

Keep `CLAUDE.md` around 150–250 lines unless the repository genuinely requires more detail.

The file should be concise but complete. Avoid bloated explanations, generic tutorials, and obvious Next.js background that does not help future work in this specific repository.

---

# Required CLAUDE.md Structure

Use this exact structure unless the codebase strongly justifies a small adjustment:

# CLAUDE.md

## Project Overview

## Tech Stack

## Development Commands

## Project Structure

## Routing and Pages

## Content Model

## Component Architecture

## Styling and Design System

## Animation and Interaction Patterns

## Contact Form and Environment Variables

## SEO, Metadata, Sitemap, and Robots

## Code Conventions

## Safe Editing Guidelines for Claude Code

## Common Tasks

## Testing and Validation

## Deployment Notes

## Known Risks and Gotchas

## Recommended Future Improvements

## Instructions for Future Claude Code Sessions

---

# Section Requirements

## Project Overview

Briefly explain:

- what the project is
- who it is for
- its main purpose
- the primary user-facing features

Keep it specific to this portfolio.

## Tech Stack

List verified technologies from the actual repo.

Include versions for major packages when available, especially:

- Next.js
- React
- TypeScript
- Tailwind CSS
- animation libraries
- email/contact libraries
- UI/icon libraries

Do not include packages that are not actually installed or used.

## Development Commands

Document the scripts from `package.json`.

Include commands such as these only if they exist:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

Explain what each command does.

Do not invent scripts.

## Project Structure

Document the actual folder structure and important files.

Focus on practical maintainability:

- where pages live
- where UI lives
- where content lives
- where metadata lives
- where utilities live
- where styles live
- where API logic lives

Mention exact files and folders confirmed in the repository.

## Routing and Pages

Document the actual Next.js App Router structure.

Include:

- root layout
- homepage
- static pages
- dynamic pages
- API routes
- not-found behavior if present
- route-specific metadata if present

Mention actual paths only if confirmed in the repo, for example:

- `/`
- `/about`
- `/projects`
- `/projects/[slug]`
- `/case-studies`
- `/case-studies/[slug]`
- `/experience`
- `/api/contact`

Do not list routes that are not present.

## Content Model

Explain how content is managed.

Cover:

- site metadata and social links
- projects
- case studies
- slugs
- required fields
- dynamic route lookup
- how to safely add or edit content

Mention the exact files and exported data structures.

## Component Architecture

Explain how components are organized.

Cover confirmed folders such as:

- layout components
- section components
- UI components
- cards
- motion/animation components
- providers
- feature-specific components

Describe reusable patterns and any important dependencies between components.

## Styling and Design System

Document:

- Tailwind CSS usage
- global CSS
- custom design tokens
- typography conventions
- spacing/layout conventions
- responsive patterns
- theme/color conventions
- reusable class patterns
- any custom CSS files

Only describe patterns that are visible in the code.

## Animation and Interaction Patterns

Document the actual animation system.

Cover confirmed usage of:

- `motion` or Framer Motion
- GSAP
- OGL/WebGL particles
- page transitions
- reveal animations
- hover effects
- modals
- scroll effects

Include caution notes for performance-sensitive or client-only animation code.

Only include libraries and patterns actually present in the code.

## Contact Form and Environment Variables

Document the contact flow.

Include:

- where the contact form UI is implemented
- where the API route is implemented
- how requests are validated
- how email is sent
- how success/error responses work
- required environment variables

If confirmed in code, include:

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_TO_EMAIL=

Never include real values.

Mention what happens when variables are missing if the code makes this clear.

## SEO, Metadata, Sitemap, and Robots

Document:

- root metadata
- route metadata
- Open Graph metadata if present
- Twitter metadata if present
- sitemap generation
- robots configuration
- canonical/site URL handling

Mention exact files.

## Code Conventions

Document observed conventions for:

- component naming
- file naming
- imports
- aliases
- TypeScript usage
- props typing
- content objects
- server/client components
- styling
- animation components

Do not invent conventions. Infer only from repeated patterns in the repo.

## Safe Editing Guidelines for Claude Code

Include clear rules for future Claude Code sessions:

- Inspect relevant files before editing.
- Prefer small, targeted changes.
- Do not rewrite broad architecture unless explicitly requested.
- Preserve current visual design and animation behavior unless the task asks to change it.
- Respect Next.js server/client component boundaries.
- Do not hardcode secrets or SMTP credentials.
- Keep content objects consistent with existing schemas.
- Do not rename routes, slugs, exports, or aliases without checking all references.
- Update documentation when changing scripts, environment variables, routing, or content structure.
- Run validation after edits when possible.

## Common Tasks

Provide practical instructions for common future changes:

- adding a new project
- adding a new case study
- editing homepage content
- updating site metadata and social links
- changing navigation
- updating SEO metadata
- modifying contact form behavior
- adjusting animations
- adding a new page
- updating styling/design tokens

Each task should mention the relevant files to inspect or edit.

## Testing and Validation

Document the best validation workflow using actual available scripts.

Include:

- dependency installation
- local dev server
- linting
- production build
- manual route checks
- dynamic route checks
- contact form verification with environment variables configured
- visual review for animations and responsive layout

Only include commands that exist.

## Deployment Notes

Document deployment assumptions based on repo evidence.

Mention:

- Vercel if supported by README or config
- required production environment variables
- build command
- any deployment-sensitive settings

## Known Risks and Gotchas

List repository-specific risks discovered during inspection.

Useful examples include:

- dynamic routes depending on exact slug values
- missing schema validation
- contact form failure when environment variables are absent
- client/server boundary issues
- animation performance risks
- WebGL/browser-only code requiring client components
- fragile import paths
- dependency version concerns
- accessibility concerns
- build or lint warnings

Do not invent issues. If no major risks are found, say so briefly and list only minor cautions.

## Recommended Future Improvements

Suggest a concise set of realistic improvements.

Focus on:

- maintainability
- validation
- accessibility
- performance
- developer experience
- test coverage
- content schema safety
- error handling

Only recommend improvements supported by the codebase inspection.

## Instructions for Future Claude Code Sessions

End with a direct instruction block for future Claude Code sessions.

It should explain how Claude should behave in this repo:

- inspect before editing
- make minimal focused changes
- preserve established patterns
- validate after edits
- avoid secrets
- respect content schemas
- explain assumptions
- flag risks before large changes

---

# Quality Requirements

The completed `CLAUDE.md` must be:

- accurate to the actual repository
- specific, not generic
- useful for future AI coding sessions
- concise but complete
- easy to scan
- written in durable documentation style
- safe for a public repository
- free of secrets
- free of unsupported claims
- focused on practical maintenance
- clear about uncertainty when something cannot be verified

Do not include long tutorials on Next.js, React, or Tailwind. Include only information useful for this project.

Do not leave placeholder sections empty.

---

# Constraints

- Create or update only `CLAUDE.md`.
- Do not modify source code.
- Do not modify dependencies.
- Do not modify lockfiles.
- Do not run destructive commands.
- Do not expose `.env` values.
- Do not fabricate implementation details.
- Do not rely only on the README.
- Do not include irrelevant generic advice.
- Do not over-engineer the document.
- Do not paste long raw command outputs into the file.
- Do not fix unrelated application issues unless explicitly asked.

---

# Optional Validation

After creating `CLAUDE.md`, run safe validation commands if available and reasonable.

Recommended validation:

- `npm run lint`
- `npm run build`

Run these only if dependencies are installed or installing dependencies is reasonable.

Do not run commands that modify lockfiles.

If dependencies are missing and installing them would modify files, skip validation and state why.

If validation fails because of unrelated application issues, do not fix them unless explicitly asked. Report the failure clearly in the final response.

---

# Final Response Format

After creating `CLAUDE.md`, respond exactly in this format:

Created `CLAUDE.md` at the project root.

Summary:

- [Briefly summarize the most important sections included.]

Notable findings:

- [List risks, discrepancies, assumptions, or “None found”.]

Validation:

- [List commands run and results, or state clearly that validation was not run.]

---

# Acceptance Criteria

The task is complete only if:

- `CLAUDE.md` exists at the project root.
- It is based on actual repository inspection, not only the README.
- It includes relevant file paths for implementation details.
- It documents verified scripts, routes, content locations, environment variables, and validation steps.
- It lists only risks and gotchas supported by inspection.
- It avoids secrets, credentials, raw `.env` values, and unsupported claims.
- It preserves valid existing `CLAUDE.md` guidance if the file already existed.
- It modifies no files except `CLAUDE.md`.
- The final response reports what was created, what it contains, notable findings, and validation status.
