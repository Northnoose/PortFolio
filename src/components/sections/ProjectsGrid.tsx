import { ProjectCard } from "@/components/cards/ProjectCard"

export function ProjectsGrid({ projects }: { projects: any[] }) {
  const featuredProjects = projects.filter(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)

  return (
    <div className="space-y-20">
      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-accent font-semibold">
              Featured Work
            </p>
            <h3 className="text-lg font-semibold text-text-primary">
              Standout Projects
            </h3>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Regular Projects Section */}
      {regularProjects.length > 0 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-text-muted font-semibold">
              Other Projects
            </p>
            <h3 className="text-lg font-semibold text-text-primary">
              Additional Work
            </h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {regularProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
