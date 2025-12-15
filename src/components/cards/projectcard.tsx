import Link from "next/link"
import { Project } from "@/content/projects"

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="rounded-lg border border-border p-6 hover:border-primary/40 transition-colors">
      <div className="space-y-3">
        <h3 className="text-xl font-medium">
          {project.title}
        </h3>

        <p className="text-sm text-foreground/80">
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

        <div className="pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm text-primary hover:underline"
          >
            View details →
          </Link>
        </div>
      </div>
    </article>
  )
}
