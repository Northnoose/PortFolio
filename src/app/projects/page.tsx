'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Panel } from '@/components/ui/Panel'
import { projects, Project } from '@/content/projects'
import Particles from '@/components/ui/Particles'
import { BaseBackground } from '@/components/ui/BaseBackground'

/* ---------------------------------------------
   Reusable Project Card
--------------------------------------------- */
function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block transition-transform hover:scale-[1.02]"
    >
      <Panel
        className="
          group
          relative p-8 h-full
          rounded-2xl
          border border-white/10
          bg-black/60
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(0,0,0,0.6)]
          transition-all duration-300
          hover:-translate-y-1
          hover:border-violet-400/40
        "
      >

        <div
          aria-hidden
          className="
            absolute inset-0 -z-10
            rounded-2xl
            bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_70%)]
            opacity-0
            blur-2xl
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />



        {/* Accent bar */}
        <div
          aria-hidden
          className="
            absolute inset-x-6 top-0 h-px
            bg-gradient-to-r from-violet-400/50 via-violet-400/20 to-transparent
            opacity-0
            blur-sm
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />



        <div className="flex flex-col h-full space-y-6">
          {/* Title */}
          <div className="space-y-3 flex-1">
            <h3
              className="
                text-2xl md:text-3xl
                font-semibold tracking-tight
                text-white
                transition-colors duration-300
                group-hover:text-violet-400
              "
            >
              {project.title}
            </h3>

            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-border-soft via-border-soft to-transparent opacity-40" />

          {/* Tags */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-text-muted font-medium">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bg-elevated border border-border-soft text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="
              inline-flex items-center gap-2
              text-sm font-medium text-violet-400
              group-hover:gap-3
              transition-all duration-300
            "
          >

            <span>View Project</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </Panel>
    </Link>
  )
}

/* ---------------------------------------------
   Page
--------------------------------------------- */
export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)

  return (
    <main className="pt-8 pb-32">
      <BaseBackground />
      <Container>
        <section>
          <div className="relative text-center max-w-3xl mx-auto px-6 mt-24">

            {/* Glow */}
            <div
              aria-hidden
              className="
                absolute -top-24 left-1/2 -translate-x-1/2
                w-[420px] h-[420px]
                bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-sky-500/20
                blur-[140px]
                rounded-full
              "
            />

            <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
              Recent{" "}
              <span className="text-violet-400">
                Projects
              </span>
            </h1>

            <p
              className="
                mt-6
                text-base md:text-lg
                font-light
                tracking-wide
                text-white/85
                leading-relaxed
                max-w-3xl
                mx-auto
              "
            >
              Explore detailed case studies of projects that showcase technical expertise
              and real-world impact.
            </p>

          </div>



          <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={["#3c2277"]}
            particleCount={100}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles
            disableRotation
            pixelRatio={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.5) : 1}
            />
          </div>

          {/* Intro */}
          <div className="relative text-center max-w-3xl mx-auto px-6 mt-12">
            <div className="flex justify-center gap-12 text-sm">
              <div className="space-y-1">
                <p className="text-text-muted uppercase tracking-wide text-xs font-semibold">
                  Featured
                </p>
                <p className="text-2xl font-semibold text-accent">
                  {featuredProjects.length}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-text-muted uppercase tracking-wide text-xs font-semibold">
                  Total
                </p>
                <p className="text-2xl font-semibold text-text-primary">
                  {projects.length}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-16 h-px bg-gradient-to-r from-border-soft via-border-soft to-transparent" />

          {/* Featured */}
          {featuredProjects.length > 0 && (
            <div className="space-y-6 mb-20">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-accent font-semibold">
                  Featured Work
                </p>
                <h3 className="text-lg font-semibold text-text-primary">
                  Standout Projects
                </h3>
              </div>

              <div className="grid gap-10 lg:grid-cols-2">
                {featuredProjects.map(project => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* Regular */}
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
                {regularProjects.map(project => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}
        </section>
      </Container>
    </main>
  )
}
