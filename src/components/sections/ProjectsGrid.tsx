 "use client"

import { useState } from "react"
import { ProjectCard } from "@/components/cards/ProjectCard"
import { Project, ProjectOwner } from "@/content/projects"

type ProjectFilter = "all" | ProjectOwner

const FILTERS: { key: ProjectFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "steffen", label: "Steffen" },
  { key: "deivi", label: "Deivi" },
]

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectFilter>("all")

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(project => project.owners.includes(filter))

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {FILTERS.map(({ key, label }) => {
          const isActive = filter === key

          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={isActive}
              className={`cursor-pointer rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page ${
                isActive
                  ? "bg-white/15 border-white/70 text-text-primary shadow-sm"
                  : "border-border-soft text-text-secondary hover:bg-white/10 hover:border-white/70 hover:text-text-primary"
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
