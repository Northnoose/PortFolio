import { Project } from "@/content/projects"
import { Reveal } from "@/components/motion/Reveal"
import { ProjectCard } from "@/components/cards/ProjectCard"

type Props = {
  projects: Project[]
}

export function ProjectsGrid({ projects }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Reveal key={project.slug}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  )
}
