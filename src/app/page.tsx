import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { Panel } from "@/components/ui/Panel"
import { projects } from "@/content/projects"
import Link from "next/link"
import TextType from "@/components/ui/TextType"

export default function HomePage() {
  // Show only featured projects on home page
  const featuredProjects = projects.filter(p => p.featured)
  const recentProjects = (featuredProjects.length > 0 ? featuredProjects : projects).slice(0, 2)

  return (
    <main className="bg-noise">
      {/* HERO */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-12">
        <Container>
          <div className="space-y-4">
            {/* Typing effect headline */}
            <div className="relative">
              <TextType
                as="h1"
                singleLine
                className="block w-full max-w-[900px] text-[2.2rem] sm:text-4xl md:text-[3.25rem] font-bold leading-tight whitespace-nowrap min-h-[3.4rem] sm:min-h-[3.8rem] md:min-h-[4.3rem]"
                text={[
                  "Hey! We're Steffen & Deivi",
                  "Hei! Vi er Steffen og Deivi",
                  "Hola! Somos Steffen y Deivi",
                  "Bonjour! Nous sommes Steffen & Deivi",
                  "Ciao! Siamo Steffen e Deivi",
                  "Hallo! Wir sind Steffen und Deivi",
                ]}
                typingSpeed={75}
                deletingSpeed={50}
                pauseDuration={3000}
                showCursor
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
                variableSpeed={{ min: 60, max: 120 }}
              />
            </div>

            <p className="text-lg text-text-secondary max-w-[720px]">
              Two engineering students building practical software products. We combine data engineering, MLOps-minded automation, and product focus—shaped by years of customer-facing experience—to ship reliable solutions like WaiFare and production-ready pipelines.
            </p>
            <div className="pt-3 flex gap-3">
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center px-6 border border-white/70 text-text-primary rounded-md font-medium transition-colors duration-200 hover:bg-white/10 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-0"
              >
                See our work
              </Link>
              <Link
                href="/#about"
                className="inline-flex h-11 items-center justify-center px-6 border border-white/70 text-text-primary rounded-md font-medium transition-colors duration-200 hover:bg-white/10 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-0"
              >
                About us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <Container>
        <Section title="About us" id="about">
          <div className="grid gap-5 md:gap-6 md:grid-cols-2">
            <Panel className="h-full p-5 md:p-6 space-y-2">
              <h3 className="text-xl font-medium">Deivi Selenis</h3>
              <p className="text-text-secondary">
                Deivi Selenis (29) is an engineering student with a data engineering focus. With years of sales experience, Deivi brings strong customer understanding, execution, and communication to technical product development. Currently focused on building real-world software and data-driven applications.
              </p>
            </Panel>
            <Panel className="h-full p-5 md:p-6 space-y-2">
              <h3 className="text-xl font-medium">Steffen Nordnes</h3>
              <p className="text-text-secondary">
                Steffen Nordnes focuses on building reliable ML systems with reproducible workflows, automation, and clean architecture. Interested in production-grade pipelines, evaluation/monitoring, and pragmatic engineering that makes models and software maintainable over time.
              </p>
            </Panel>
          </div>
        </Section>
      </Container>

      {/* FEATURED PROJECTS */}
      <Container>
        <Section
          kicker="Recent work"
          title="Our recent projects"
        >
          <div className="space-y-6">
            <ProjectsGrid projects={recentProjects} />
            <div>
              <Link href="/projects" className="text-text-primary hover:underline text-sm">
                View all projects →
              </Link>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  )
}
