'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Panel } from '@/components/ui/Panel'
import { projects, Project } from '@/content/projects'

/* ---------------------------------------------
   Reusable Project Card
--------------------------------------------- */
function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block transition-transform hover:scale-[1.02]"
    >
      <Panel className="relative p-8 space-y-6 h-full">
        {/* Accent bar */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="flex flex-col h-full space-y-6">
          {/* Title */}
          <div className="space-y-3 flex-1">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-text-primary leading-tight">
              {project.title}
            </h3>
            <p className="text-base text-text-secondary leading-relaxed">
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
          <div className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300">
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
    <main className="pt-40 pb-32">
      <Container>
        <Section kicker="Work" title="Projects">
          {/* Intro */}
          <div className="mb-16 max-w-3xl space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">
              A collection of end-to-end projects spanning machine learning
              infrastructure, data engineering, and production systems. Each
              project demonstrates structured problem-solving: identifying
              constraints, architecting solutions, and measuring impact.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
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

              <div className="grid gap-8 lg:grid-cols-2">
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
        </Section>
      </Container>
    </main>
  )
}
