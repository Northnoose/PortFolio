# Steffen Nordnes — Portfolio

Personal portfolio site for **Steffen Nordnes**, focused on ML systems & data engineering. Built with Next.js (App Router), TypeScript, and Tailwind CSS, featuring animated bento grids, case studies, and a working contact form.

🔗 **Live:** [steffennordnes.dev](https://steffennordnes.dev)

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion / `motion`, GSAP, OGL (WebGL particles)
- **Icons:** lucide-react
- **Email:** nodemailer (contact form via SMTP)

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Environment Variables

The contact form ([`src/app/api/contact/route.ts`](src/app/api/contact/route.ts)) sends email through SMTP. Create a `.env.local` file with:

```bash
SMTP_HOST=your.smtp.host
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
CONTACT_TO_EMAIL=where-to-receive@example.com
```

Without these set, the contact endpoint will fail to send mail.

## Project Structure

```
src/
├── app/                  # App Router pages & API routes
│   ├── about/            # About page
│   ├── case-studies/     # Case study index + [slug] detail
│   ├── experience/       # Experience page
│   ├── projects/         # Projects index + [slug] detail
│   ├── api/contact/      # Contact form endpoint (nodemailer)
│   ├── layout.tsx        # Root layout + SEO metadata
│   ├── sitemap.ts        # Generated sitemap
│   └── robots.ts         # robots.txt
├── components/
│   ├── sections/         # Page sections (hero grid, projects grid, ...)
│   ├── ui/               # Reusable UI (bento cards, particles, modals, ...)
│   ├── case-study/       # Case-study-specific components
│   ├── cards/            # Project cards
│   ├── motion/           # Page transitions & reveal animations
│   ├── layout/           # Navbar, layout client wrapper
│   └── providers/        # Context providers (modal)
├── content/              # Content data
│   ├── projects.ts       # Project entries
│   └── caseStudies.ts    # Case study entries
├── lib/
│   ├── site.ts           # Site metadata (name, URLs, social links)
│   └── utils.ts          # Helpers
└── styles/               # Design rules / tokens
```

## Editing Content

- **Site metadata & social links:** [`src/lib/site.ts`](src/lib/site.ts)
- **Projects:** [`src/content/projects.ts`](src/content/projects.ts)
- **Case studies:** [`src/content/caseStudies.ts`](src/content/caseStudies.ts)

Project and case-study detail pages are generated dynamically from these files via their `[slug]` routes.

## Deployment

Optimized for [Vercel](https://vercel.com). Push to the connected repo and set the SMTP environment variables in the project settings. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other targets.
