'use client'

import { Tag } from "@/components/ui/Tag"
import { CaseStudy } from "@/content/caseStudies"

interface CaseStudyContentProps {
  caseStudy: CaseStudy
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  return (
    <div className="space-y-8 pt-2">
      {/* Header Section */}
      <div className="space-y-4 pb-6 border-b border-border-soft">
        <div className="inline-block">
          <span className="text-xs font-semibold uppercase tracking-widest text-text-muted bg-bg-panel px-3 py-1 rounded">
            {caseStudy.domain}
          </span>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-text-primary">
            {caseStudy.title}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {caseStudy.summary}
          </p>
        </div>

        {/* Tech Stack */}
        {caseStudy.stack && caseStudy.stack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {caseStudy.stack.map(tech => (
              <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-bg-panel border border-border-soft text-text-secondary hover:border-text-primary transition-colors">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

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
