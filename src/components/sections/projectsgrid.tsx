import { Project } from "@/content/projects"
import { ProjectCard } from "@/components/cards/projectcard"

type Props = {
  projects: Project[]
}

export function ProjectsGrid({ projects }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}
    </div>
  )
}
