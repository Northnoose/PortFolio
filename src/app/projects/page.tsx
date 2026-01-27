import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { projects } from "@/content/projects"

export default function ProjectsPage() {
  const featuredCount = projects.filter(p => p.featured).length
  const totalCount = projects.length

  return (
    <main className="pt-40">
      <Container>
        <Section
          kicker="Work"
          title="Projects"
        >
          {/* Intro Section */}
          <div className="mb-16 max-w-3xl space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">
              A collection of end-to-end projects spanning machine learning infrastructure,
              data engineering, and production systems. Each project demonstrates structured
              problem-solving: identifying constraints, architecting solutions, and measuring impact.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="space-y-1">
                <p className="text-text-muted uppercase tracking-wide text-xs font-semibold">
                  Featured
                </p>
                <p className="text-2xl font-semibold text-accent">
                  {featuredCount}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-text-muted uppercase tracking-wide text-xs font-semibold">
                  Total
                </p>
                <p className="text-2xl font-semibold text-text-primary">
                  {totalCount}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-16 h-px bg-gradient-to-r from-border-soft via-border-soft to-transparent" />

          {/* Projects Grid */}
          <ProjectsGrid projects={projects} />
        </Section>
      </Container>
    </main>
  )
}
