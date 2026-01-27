import { notFound } from "next/navigation"
import { projects } from "@/content/projects"
import { ProjectContent } from "@/components/sections/ProjectContent"
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
    <main className="pt-24 pb-32">
      {/* Back link */}
      <div className="border-b border-border-soft/30 sticky top-0 z-10 bg-bg-page/80 backdrop-blur-sm">
        <div className="px-6 md:px-8 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <span>←</span>
            <span>Back to projects</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <ProjectContent project={project} />
    </main>
  )
}
