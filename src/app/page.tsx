import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { projects } from "@/content/projects"

export default function HomePage() {
  return (
    <main className="bg-noise">
      {/* HERO */}
      <section className="pt-40 pb-32">
        <Container>
          <div className="max-w-[720px] space-y-6">
            <h1 className="text-4xl md:text-5xl font-medium">
              Building reliable ML systems with a focus on clarity and structure.
            </h1>
            <p className="text-lg text-text-secondary">
              Bachelor-level ML & software projects with emphasis on
              reproducibility, maintainability, and learning depth.
            </p>
          </div>
        </Container>
      </section>

      {/* PROJECTS */}
      <Container>
        <Section
          kicker="Selected work"
          title="Projects"
        >
          <ProjectsGrid projects={projects} />
        </Section>
      </Container>
    </main>
  )
}
