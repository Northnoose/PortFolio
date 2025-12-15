import { notFound } from "next/navigation"
import { projects } from "@/content/projects"

type Props = {
  params: {
    slug: string
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = params = await params

  const project = projects.find(
    (p) => p.slug === slug
  )

  if (!project) {
    notFound()
  }

  return (
    <main className="pt-24 px-6">
      <div className="mx-auto max-w-3xl space-y-12">
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

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="text-base text-foreground/80">
            {project.problem}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-base text-foreground/80">
            {project.solution}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Key Highlights</h2>
          <ul className="list-disc pl-5 space-y-2 text-base text-foreground/80">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {(project.repoUrl || project.demoUrl) && (
          <section className="pt-6 flex gap-6">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                className="text-sm text-primary hover:underline"
              >
                View repository →
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                className="text-sm text-primary hover:underline"
              >
                View demo →
              </a>
            )}
          </section>
        )}
      </div>
    </main>
  )
}
