import { notFound } from "next/navigation"
import { projects } from "@/content/projects"
import { Reveal } from "@/components/motion/Reveal"
import type { Metadata } from "next"
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

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params

  const project = projects.find(
    (p) => p.slug === slug
  )

  if (!project) notFound()

  return (
    <main className="pt-24 px-6">
      <div className="mx-auto max-w-3xl space-y-16">

        {/* HEADER */}
        <Reveal>
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">
              {project.title}
            </h1>

            <p className="text-base text-foreground/80">
              {project.summary}
            </p>

            <ul className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs px-2 py-1 rounded-md bg-muted/20 text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </header>
        </Reveal>

        {/* PROBLEM */}
        <Reveal>
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Problem</h2>
            <p className="text-base text-foreground/80">
              {project.problem}
            </p>
          </section>
        </Reveal>

        {/* SOLUTION */}
        <Reveal>
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Solution</h2>
            <p className="text-base text-foreground/80">
              {project.solution}
            </p>
          </section>
        </Reveal>

        {/* HIGHLIGHTS */}
        <Reveal>
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Key Highlights</h2>
            <ul className="list-disc pl-5 space-y-2 text-base text-foreground/80">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* LINKS */}
        {(project.repoUrl || project.demoUrl) && (
          <Reveal>
            <section className="pt-6 flex gap-6">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  className="
                    text-primary
                    hover:underline
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary
                    focus-visible:ring-offset-2
                    ring-offset-background
                  "
                >
                  View repository →
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="
                    text-primary
                    hover:underline
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary
                    focus-visible:ring-offset-2
                    ring-offset-background
                  "
                >
                  View demo →
                </a>
              )}
            </section>
          </Reveal>
        )}

      </div>
    </main>
  )
}
