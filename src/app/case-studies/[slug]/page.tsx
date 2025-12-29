import { Reveal } from "@/components/motion/Reveal"
import type { Metadata } from "next"
import { projects } from "@/content/projects"
import { site } from "@/lib/site"

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}

  const title = project.title
  const description = project.summary

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${site.url}/projects/${project.slug}`,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      title,
      description,
      images: ["/og.png"],
    },
  }
}

export default function CaseStudiesSlug() {
  return (
    <main className="pt-24 px-6">
      <div className="mx-auto max-w-3xl space-y-16">

        <Reveal>
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">
              Case Study Title
            </h1>
            <p className="text-base text-foreground/80">
              Short summary of the case study.
            </p>
          </header>
        </Reveal>

        <Reveal>
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Context</h2>
            <p className="text-base text-foreground/80">
              Context goes here.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Approach</h2>
            <p className="text-base text-foreground/80">
              Approach explanation.
            </p>
          </section>
        </Reveal>

      </div>
    </main>
  )
}
