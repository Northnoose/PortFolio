'use client'

import { useModal } from "@/components/providers/ModalProvider"
import { ProjectContent } from "./ProjectContent"
import { Project } from "@/content/projects"
import { Panel } from "@/components/ui/Panel"
import { useState } from "react"

interface FeaturedProjectsProps {
  projects: Project[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const { openModal } = useModal()
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)

  const openProject = (project: Project) => {
    setSelectedSlug(project.slug)
    openModal(<ProjectContent project={project} />, () => {
      setSelectedSlug(null)
    })
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <button
          key={project.slug}
          onClick={() => openProject(project)}
          className="text-left transition-transform hover:scale-[1.02] group"
        >
          <Panel className="p-8 space-y-6 cursor-pointer h-full relative overflow-hidden">
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
  )
}
