'use client'

import { Tag } from "@/components/ui/Tag"
import { Project } from "@/content/projects"

interface ProjectContentProps {
  project: Project
}

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="flex flex-col">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-blue-950/40 border-b border-border-soft px-6 md:px-8 py-8 md:py-10 relative">
        {/* Decorative left accent */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500/60 to-transparent" />
        
        <div className="flex-1">
          {/* Title and summary */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-text-primary mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {project.summary}
          </p>
        </div>

        {/* Tech Stack */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-6 border-t border-border-soft/40 mt-6">
            {project.tags.map(tech => (
              <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-bg-panel border border-border-soft text-text-secondary hover:border-text-primary transition-colors">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content sections */}
      <div className="space-y-8 px-6 md:px-8 py-8 md:py-12">
        <div className="space-y-6">
          {/* Problem */}
          <SectionCard 
            icon="⚠️"
            title="Problem"
            content={project.problem}
            accentColor="from-red-900/10 to-transparent"
            borderColor="border-red-900/20"
          />

          {/* Solution */}
          <SectionCard 
            icon="🎯"
            title="Solution"
            content={project.solution}
            accentColor="from-blue-900/10 to-transparent"
            borderColor="border-blue-900/20"
          />

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="bg-gradient-to-br from-green-900/10 to-transparent border border-green-900/20 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">✨</span>
                <h3 className="text-lg font-semibold text-text-primary">Highlights</h3>
              </div>
              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-green-400 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-text-secondary leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          {(project.repoUrl || project.demoUrl) && (
            <div className="bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-900/20 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🔗</span>
                <h3 className="text-lg font-semibold text-text-primary">Resources</h3>
              </div>
              <ul className="space-y-2">
                {project.repoUrl && (
                  <li>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>→</span>
                      <span>GitHub Repository</span>
                    </a>
                  </li>
                )}
                {project.demoUrl && (
                  <li>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>→</span>
                      <span>Live Demo</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface SectionCardProps {
  icon: string
  title: string
  content: string
  accentColor?: string
  borderColor?: string
}

function SectionCard({ 
  icon, 
  title, 
  content,
  accentColor = "from-slate-900/10 to-transparent",
  borderColor = "border-slate-900/20"
}: SectionCardProps) {
  return (
    <div className={`bg-gradient-to-br ${accentColor} ${borderColor} border rounded-lg p-6 space-y-3`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icon}</span>
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      </div>
      <p className="text-text-secondary leading-relaxed ml-7">{content}</p>
    </div>
  )
}
