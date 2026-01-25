import { notFound } from "next/navigation"
import { Container } from "@/components/ui/Container"
import { Panel } from "@/components/ui/Panel"
import { Tag } from "@/components/ui/Tag"
import { projects } from "@/content/projects"
import Link from "next/link"

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="pt-40 pb-32">
      <Container>
        {/* Header */}
        <header className="max-w-[720px] space-y-6 mb-20">
          <Link href="/projects" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
            ← Back to projects
          </Link>
          <h1 className="text-4xl font-medium">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map(tag => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="space-y-16 max-w-[720px]">
          <Panel className="p-8 space-y-4">
            <h3 className="text-lg font-medium">Problem</h3>
            <p className="text-text-secondary">
              {project.problem}
            </p>
          </Panel>

          <Panel className="p-8 space-y-4">
            <h3 className="text-lg font-medium">Solution</h3>
            <p className="text-text-secondary">
              {project.solution}
            </p>
          </Panel>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <Panel className="p-8 space-y-4">
              <h3 className="text-lg font-medium">Highlights</h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-text-muted flex-shrink-0 mt-1">✓</span>
                    <span className="text-text-secondary">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          )}

          {/* Links */}
          {(project.repoUrl || project.demoUrl) && (
            <Panel className="p-8 space-y-4">
              <h3 className="text-lg font-medium">Links</h3>
              <div className="flex flex-col gap-2">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:underline"
                  >
                    → GitHub Repository
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:underline"
                  >
                    → Live Demo
                  </a>
                )}
              </div>
            </Panel>
          )}
        </div>
      </Container>
    </main>
  )
}
