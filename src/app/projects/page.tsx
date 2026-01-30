'use client'

import { Container } from '@/components/ui/Container'
import { projects } from '@/content/projects'
import Particles from '@/components/ui/Particles'
import { BaseBackground } from '@/components/ui/BaseBackground'
import { RevealItem } from '@/components/motion/RevealItem'
import { RevealGroup } from '@/components/motion/RevealGroup'
import { ProjectCard } from '@/components/cards/ProjectCard'

/* ---------------------------------------------
   Page
--------------------------------------------- */
export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)

  return (
    <main className="pt-8 pb-32">
      <BaseBackground />

      {/* Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={['#3c2277']}
          particleCount={100}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles
          disableRotation
          pixelRatio={
            typeof window !== 'undefined'
              ? Math.min(window.devicePixelRatio, 1.5)
              : 1
          }
        />
      </div>

      <Container>
        {/* =============================
            HERO / INTRO
        ============================= */}
        <RevealGroup>
          <RevealItem>
            <div className="relative text-center max-w-3xl mx-auto px-6 mt-24">
              <div
                aria-hidden
                className="
                  absolute -top-24 left-1/2 -translate-x-1/2
                  w-[420px] h-[420px]
                  bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-sky-500/20
                  blur-[140px] rounded-full
                "
              />

              <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
                Recent <span className="text-violet-400">Projects</span>
              </h1>

              <p className="mt-6 text-base md:text-lg font-light tracking-wide text-white/85 leading-relaxed">
                Explore detailed case studies of projects that showcase technical
                expertise and real-world impact.
              </p>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="relative text-center max-w-3xl mx-auto px-6 mt-12">
              <div className="flex justify-center gap-12">
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
          </RevealItem>
        </RevealGroup>

        <div className="mb-16 h-px bg-gradient-to-r from-border-soft via-border-soft to-transparent" />

        {/* =============================
            FEATURED PROJECTS
        ============================= */}
        {featuredProjects.length > 0 && (
          <RevealGroup>
            <RevealItem>
              <div className="space-y-2 mb-6">
                <p className="text-xs uppercase tracking-widest text-accent font-semibold">
                  Featured Work
                </p>
                <h3 className="text-lg font-semibold text-text-primary">
                  Standout Projects
                </h3>
              </div>
            </RevealItem>

            <div className="grid gap-10 lg:grid-cols-2 mb-20">
              {featuredProjects.map(project => (
                <RevealItem key={project.slug}>
                  <ProjectCard project={project} />
                </RevealItem>
              ))}
            </div>
          </RevealGroup>
        )}

        {/* =============================
            REGULAR PROJECTS
        ============================= */}
        {regularProjects.length > 0 && (
          <RevealGroup>
            <RevealItem>
              <div className="space-y-2 mb-6">
                <p className="text-xs uppercase tracking-widest text-text-muted font-semibold">
                  Other Projects
                </p>
                <h3 className="text-lg font-semibold text-text-primary">
                  Additional Work
                </h3>
              </div>
            </RevealItem>

            <div className="grid gap-8 md:grid-cols-2">
              {regularProjects.map(project => (
                <RevealItem key={project.slug}>
                  <ProjectCard project={project} />
                </RevealItem>
              ))}
            </div>
          </RevealGroup>
        )}
      </Container>
    </main>
  )
}
