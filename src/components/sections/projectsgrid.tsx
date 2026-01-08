import { ProjectCard } from "@/components/cards/ProjectCard"

export function ProjectsGrid({ projects }: { projects: any[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
