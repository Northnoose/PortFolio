import { projects } from "@/content/projects"
import { ProjectCard } from "@/components/cards/ProjectCard"
import { Reveal } from "@/components/motion/Reveal"

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <main className="pt-24 px-6">
      <div className="mx-auto max-w-6xl space-y-20">
        {/* Intro */}
        <section className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className="text-base text-foreground/80">
            A collection of academic and personal projects built alongside my
            bachelor’s degree. The focus is on structure, clarity, and learning
            how systems behave outside of theory.
          </p>
        </section>

        {/* Featured */}
        {featured && (
          <section className="space-y-6">
            <Reveal>
              <header className="space-y-2 max-w-3xl">
                <h2 className="text-2xl font-semibold">
                  Featured project
                </h2>
                <p className="text-base text-foreground/80">
                  This project represents my strongest work so far, combining
                  machine learning with system-level thinking.
                </p>
              </header>
            </Reveal>

            <Reveal>
              <div className="max-w-4xl">
                <ProjectCard project={featured} />
              </div>
            </Reveal>
          </section>
        )}

        {/* Other projects */}
        <section className="space-y-6">
          <Reveal>
            <header className="space-y-2 max-w-3xl">
              <h2 className="text-2xl font-semibold">
                Other projects
              </h2>
              <p className="text-base text-foreground/80">
                Smaller projects exploring different technologies and ideas,
                built as part of coursework and self-driven learning.
              </p>
            </header>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
