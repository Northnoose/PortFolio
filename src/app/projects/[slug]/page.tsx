import { notFound } from "next/navigation"
import { Container } from "@/components/ui/Container"
import { Panel } from "@/components/ui/Panel"
import { projects } from "@/content/projects"

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="pt-40 pb-32">
      <Container>
        {/* Header */}
        <header className="max-w-[720px] space-y-6 mb-20">
          <h1 className="text-4xl font-medium">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary">
            {project.summary}
          </p>
        </header>

        {/* Content */}
        <div className="space-y-16">
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
        </div>
      </Container>
    </main>
  )
}
