'use client'

import { Tag } from "@/components/ui/Tag"
import { CaseStudy } from "@/content/caseStudies"
import { useModal } from "@/components/providers/ModalProvider"

interface CaseStudyContentProps {
  caseStudy: CaseStudy
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const { closeModal } = useModal()

  return (
    <div className="flex flex-col">
      {/* Header with colored background */}
      <div className="bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-blue-950/40 border-b border-border-soft px-6 md:px-8 py-8 md:py-10 relative">
        {/* Decorative left accent */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500/60 to-transparent" />
        
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Domain tag */}
            <div className="inline-block mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-text-muted bg-bg-panel px-3 py-1 rounded">
                {caseStudy.domain}
              </span>
            </div>
            
            {/* Title and summary */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-text-primary mb-3">
              {caseStudy.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              {caseStudy.summary}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="flex-shrink-0 p-2 text-text-muted hover:text-text-primary hover:bg-bg-panel rounded-lg transition-all duration-200 hover:scale-110"
            aria-label="Close modal"
            title="Close (ESC)"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tech Stack */}
        {caseStudy.stack && caseStudy.stack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-6 border-t border-border-soft/40 mt-6">
            {caseStudy.stack.map(tech => (
              <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-bg-panel border border-border-soft text-text-secondary hover:border-text-primary transition-colors">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content sections */}
      <div className="space-y-8 px-6 md:px-8 py-8 md:py-12">
        {/* Content Sections */}
        <div className="space-y-6">
          {/* Context */}
          <SectionCard 
            icon="📋"
            title="Context"
            content={caseStudy.context}
          />

          {/* Problem */}
          <SectionCard 
            icon="⚠️"
            title="Problem"
            content={caseStudy.problem}
            accentColor="from-red-900/10 to-transparent"
            borderColor="border-red-900/20"
          />

          {/* Constraints */}
          {caseStudy.constraints && caseStudy.constraints.length > 0 && (
            <div className="bg-gradient-to-br from-amber-900/10 to-transparent border border-amber-900/20 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🔒</span>
                <h3 className="text-lg font-semibold text-text-primary">Constraints</h3>
              </div>
              <ul className="space-y-3">
                {caseStudy.constraints.map((constraint, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-text-muted font-semibold flex-shrink-0 mt-0.5">•</span>
                    <span className="text-text-secondary leading-relaxed">{constraint}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Approach */}
          {caseStudy.approach && caseStudy.approach.length > 0 && (
            <div className="bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-900/20 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🎯</span>
                <h3 className="text-lg font-semibold text-text-primary">Approach</h3>
              </div>
              <ul className="space-y-3">
                {caseStudy.approach.map((step, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-blue-400 font-bold flex-shrink-0 mt-0.5">→</span>
                    <span className="text-text-secondary leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results */}
          {caseStudy.results && caseStudy.results.length > 0 && (
            <div className="bg-gradient-to-br from-green-900/10 to-transparent border border-green-900/20 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">✨</span>
                <h3 className="text-lg font-semibold text-text-primary">Results</h3>
              </div>
              <ul className="space-y-3">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-green-400 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-text-secondary leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Learnings */}
          {caseStudy.learnings && caseStudy.learnings.length > 0 && (
            <div className="bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-900/20 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">💡</span>
                <h3 className="text-lg font-semibold text-text-primary">Key Learnings</h3>
              </div>
              <ul className="space-y-3">
                {caseStudy.learnings.map((learning, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-purple-400 font-bold flex-shrink-0 mt-0.5">→</span>
                    <span className="text-text-secondary leading-relaxed">{learning}</span>
                  </li>
                ))}
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
