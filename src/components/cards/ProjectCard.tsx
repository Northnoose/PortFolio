'use client'

import Link from 'next/link'
import { Panel } from '@/components/ui/Panel'
import { Project } from '@/content/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block transition-transform hover:scale-[1.02]"
    >
      <Panel
        className="
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
        {/* Glow */}
        <div
          aria-hidden
          className="
            absolute inset-0 -z-10
            rounded-2xl
            bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_70%)]
            opacity-0 blur-2xl
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
            opacity-0 blur-sm
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />

        <div className="flex flex-col h-full space-y-6">
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

          <div className="h-px bg-gradient-to-r from-border-soft via-border-soft to-transparent opacity-40" />

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-text-muted font-medium">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="
                    inline-flex items-center
                    px-2.5 py-0.5
                    rounded-full text-xs font-medium
                    bg-bg-elevated border border-border-soft
                    text-text-secondary
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

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
