import Link from "next/link"
import { Panel } from "@/components/ui/Panel"
import { Tag } from "@/components/ui/Tag"

export function ProjectCard({ project }: { project: any }) {
  return (
    <Panel className="group relative overflow-hidden p-0 transition-all duration-300 hover:shadow-lg">
      {/* Accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-col h-full p-8 space-y-6">
        {/* Title section */}
        <div className="space-y-3 flex-1">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-text-primary leading-tight">
            {project.title}
          </h3>
          <p className="text-base text-text-secondary leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-border-soft via-border-soft to-transparent opacity-40" />

        {/* Tags section */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-text-muted font-medium">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>

        {/* CTA section */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-300 group/link"
        >
          <span>View Project</span>
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </Panel>
  )
}
