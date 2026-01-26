import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { projects } from "@/content/projects"

export default function ProjectsPage() {
  return (
    <main className="pt-24 md:pt-28">
      <Container>
        <Section
          kicker="Work"
          title="Projects"
        >
          <div className="space-y-5">
            <ProjectsGrid projects={projects} />
          </div>
        </Section>
      </Container>
    </main>
  )
}
