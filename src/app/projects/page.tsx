import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { projects } from "@/content/projects"

export default function ProjectsPage() {
  return (
    <main className="pt-40">
      <Container>
        <Section
          kicker="Work"
          title="Projects"
        >
          <ProjectsGrid projects={projects} />
        </Section>
      </Container>
    </main>
  )
}
