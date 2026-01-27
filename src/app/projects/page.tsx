'use client'

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Panel } from "@/components/ui/Panel"
import { ProjectContent } from "@/components/sections/ProjectContent"
import { projects, Project } from "@/content/projects"
import { useState, useEffect } from "react"
import { useModal } from "@/components/providers/ModalProvider"

export default function ProjectsPage() {
  const { openModal, closeModal } = useModal()
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)
  const featuredCount = projects.filter(p => p.featured).length
  const totalCount = projects.length
  const featuredProjects = projects.filter(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)

  // Handle URL hash for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove #
      if (hash.startsWith('project=')) {
        const slug = hash.split('=')[1]
        const project = projects.find(p => p.slug === slug)
        if (project) {
          setSelectedSlug(slug)
          openModal(<ProjectContent project={project} />, () => {
            setSelectedSlug(null)
            window.location.hash = ''
          })
        }
      } else if (hash === '') {
        setSelectedSlug(null)
      }
    }

    // Check initial hash on mount
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [openModal])

  const openProject = (project: Project) => {
    setSelectedSlug(project.slug)
    window.location.hash = `project=${project.slug}`
    openModal(<ProjectContent project={project} />, () => {
      setSelectedSlug(null)
      window.location.hash = ''
    })
  }

  return (
    <main className="pt-40 pb-32">
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

          {/* Featured Projects Section */}
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
                {featuredProjects.map((project) => (
                  <button
                    key={project.slug}
                    onClick={() => openProject(project)}
                    className="text-left transition-transform hover:scale-[1.02] group"
                  >
                    <Panel className="p-8 space-y-6 cursor-pointer h-full">
                      {/* Accent bar */}
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="flex flex-col h-full space-y-6">
                        {/* Title section */}
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

                        {/* Tags section */}
                        <div className="space-y-3">
                          <p className="text-xs uppercase tracking-widest text-text-muted font-medium">
                            Tech Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag: string) => (
                              <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bg-elevated border border-border-soft text-text-secondary">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA section */}
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300">
                          <span>View Project</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </Panel>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Regular Projects Section */}
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
                {regularProjects.map((project) => (
                  <button
                    key={project.slug}
                    onClick={() => openProject(project)}
                    className="text-left transition-transform hover:scale-[1.02] group"
                  >
                    <Panel className="p-8 space-y-6 cursor-pointer h-full">
                      {/* Accent bar */}
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="flex flex-col h-full space-y-6">
                        {/* Title section */}
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

                        {/* Tags section */}
                        <div className="space-y-3">
                          <p className="text-xs uppercase tracking-widest text-text-muted font-medium">
                            Tech Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag: string) => (
                              <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bg-elevated border border-border-soft text-text-secondary">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA section */}
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300">
                          <span>View Project</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </Panel>
                  </button>
                ))}
              </div>
            </div>
          )}
        </Section>
      </Container>
    </main>
  )
}
