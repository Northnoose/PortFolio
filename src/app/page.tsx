import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { Panel } from "@/components/ui/Panel"
import { projects } from "@/content/projects"
import Link from "next/link"

export default function HomePage() {
  // Show only featured projects on home page
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <main className="bg-noise">
      {/* HERO */}
      <section className="pt-40 pb-32">
        <Container>
          <div className="max-w-[720px] space-y-6">
            <h1 className="text-4xl md:text-5xl font-medium">
              ML systems that ship fast and stay reliable in production.
            </h1>
            <p className="text-lg text-text-secondary">
              I reduced iteration time from 4 hours to 12 minutes. Built systems handling 2B+ daily events. Prevented $40k in bad predictions through monitoring. Specializing in reproducibility, automation, and thoughtful architecture.
            </p>
            <div className="pt-4 flex gap-4">
              <Link
                href="/projects"
                className="inline-block px-6 py-3 bg-text-primary text-bg-page rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                See my work
              </Link>
              <Link
                href="/about"
                className="inline-block px-6 py-3 border border-border-soft rounded-md font-medium hover:bg-bg-panel transition-colors"
              >
                About me
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURED PROJECTS */}
      <Container>
        <Section
          kicker="Selected work"
          title="Projects"
        >
          <ProjectsGrid projects={featuredProjects} />
        </Section>
      </Container>

      {/* CTA SECTION */}
      <Container>
        <div className="py-20">
          <Panel className="p-12 space-y-6 text-center">
            <h2 className="text-3xl font-medium">
              Let's work together
            </h2>
            <p className="text-text-secondary max-w-[500px] mx-auto">
              I'm looking for ML systems roles where engineering discipline matters. If you're building production systems and scaling ML infrastructure, let's talk.
            </p>
            <div className="pt-4">
              <a
                href="mailto:steffen@steffennordnes.dev"
                className="inline-block px-6 py-3 bg-text-primary text-bg-page rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Get in touch
              </a>
            </div>
          </Panel>
        </div>
      </Container>
    </main>
  )
}
