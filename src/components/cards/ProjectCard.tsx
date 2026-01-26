import Link from "next/link"
import { Panel } from "@/components/ui/Panel"
import { Tag } from "@/components/ui/Tag"
import { Project } from "@/content/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Panel className="p-6 space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted">
          {project.summary}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        View details →
      </Link>
    </Panel>
  )
}
