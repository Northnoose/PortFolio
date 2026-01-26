'use client'

import { Tag } from "@/components/ui/Tag"
import { CaseStudy } from "@/content/caseStudies"

interface CaseStudyContentProps {
  caseStudy: CaseStudy
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  return (
    <div className="space-y-8 pt-8">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-sm text-text-muted uppercase tracking-wide">{caseStudy.domain}</p>
        <h2 className="text-3xl font-medium">{caseStudy.title}</h2>
        <p className="text-lg text-text-secondary">{caseStudy.summary}</p>

        {/* Stack Tags */}
        {caseStudy.stack && caseStudy.stack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {caseStudy.stack.map(tech => (
              <Tag key={tech} label={tech} />
            ))}
          </div>
        )}
      </div>

      {/* Context */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Context</h3>
        <p className="text-text-secondary">{caseStudy.context}</p>
      </div>

      {/* Problem */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Problem</h3>
        <p className="text-text-secondary">{caseStudy.problem}</p>
      </div>

      {/* Constraints */}
      {caseStudy.constraints && caseStudy.constraints.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Constraints</h3>
          <ul className="space-y-2">
            {caseStudy.constraints.map((constraint, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-text-muted flex-shrink-0">•</span>
                <span className="text-text-secondary">{constraint}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Approach */}
      {caseStudy.approach && caseStudy.approach.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Approach</h3>
          <ul className="space-y-2">
            {caseStudy.approach.map((step, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-text-muted flex-shrink-0">→</span>
                <span className="text-text-secondary">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Results */}
      {caseStudy.results && caseStudy.results.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Results</h3>
          <ul className="space-y-2">
            {caseStudy.results.map((result, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-text-muted flex-shrink-0">✓</span>
                <span className="text-text-secondary">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Learnings */}
      {caseStudy.learnings && caseStudy.learnings.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Key Learnings</h3>
          <ul className="space-y-2">
            {caseStudy.learnings.map((learning, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-text-muted flex-shrink-0">→</span>
                <span className="text-text-secondary">{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
