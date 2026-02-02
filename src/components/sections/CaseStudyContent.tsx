// CaseStudyContent.tsx

"use client"

import { CaseStudy } from "@/content/caseStudies"
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader"
import { CaseStudySectionCard } from "@/components/case-study/CaseStudySectionCard"
import { ResultsGrid } from "@/components/case-study/ResultsGrid"
import { TechnologyStackRow } from "@/components/case-study/TechnologyStackRow"
import { caseStudyIcons } from "@/components/case-study/iconMap"

type CaseStudyContentProps = {
  caseStudy: CaseStudy
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const resultsHighlights =
    caseStudy.resultsHighlights && caseStudy.resultsHighlights.length > 0
      ? caseStudy.resultsHighlights
      : (caseStudy.results ?? []).map((text) => ({ text, kind: "status" as const }))

  const approachText =
    caseStudy.approach && caseStudy.approach.length > 0
      ? caseStudy.approach.join(" ")
      : ""

  const LessonsIcon = caseStudyIcons.lessons

  return (
    <div className="flex flex-col">
      <CaseStudyHeader caseStudy={caseStudy} />

      <div className="space-y-10 px-6 md:px-10 py-8 md:py-12">
        <CaseStudySectionCard
          title="Problem Statement"
          icon={caseStudyIcons.problem}
          tone="problem"
        >
          <p className="max-w-3xl">{caseStudy.problem}</p>
        </CaseStudySectionCard>

        <CaseStudySectionCard
          title="Solution Approach"
          icon={caseStudyIcons.solution}
          tone="solution"
        >
          <p className="max-w-3xl leading-relaxed">{approachText}</p>
        </CaseStudySectionCard>

        {caseStudy.constraints?.length > 0 && (
          <CaseStudySectionCard
            title="Challenges Faced"
            icon={caseStudyIcons.challenges}
            tone="warning"
          >
            <div className="space-y-3">
              {caseStudy.constraints.map((item, idx) => (
                <div
                  key={`${item}-${idx}`}
                  className="
                    rounded-2xl
                    bg-black/20
                    px-5 py-4
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                  "
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="
                        mt-[2px]
                        h-6 w-6 flex-shrink-0
                        rounded-full
                        bg-amber-500/10
                        text-amber-200/90
                        text-sm font-semibold
                        flex items-center justify-center
                      "
                    >
                      {idx + 1}
                    </span>
                    <div className="text-text-secondary leading-relaxed">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </CaseStudySectionCard>
        )}

        {resultsHighlights?.length > 0 && (
          <CaseStudySectionCard
            title="Results Achieved"
            icon={caseStudyIcons.results}
            tone="success"
          >
            <ResultsGrid items={resultsHighlights} />
          </CaseStudySectionCard>
        )}

        {caseStudy.learnings?.length > 0 && (
          <CaseStudySectionCard
            title="Lessons Learned"
            icon={caseStudyIcons.lessons}
            tone="lessons"
          >
            <div className="space-y-3">
              {caseStudy.learnings.map((learning, idx) => (
                <div
                  key={`${learning}-${idx}`}
                  className="
                    rounded-2xl
                    bg-black/20
                    px-5 py-4
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                  "
                >
                  <div className="flex items-start gap-3">
                    {/* Icon per statement (scannability anchor) */}
                    <div
                      className="
                        mt-[2px]
                        h-7 w-7 flex-shrink-0
                        rounded-xl
                        bg-violet-500/12
                        flex items-center justify-center
                      "
                    >
                      <LessonsIcon className="h-4.5 w-4.5 text-violet-200/90" />
                    </div>

                    <div className="text-text-secondary leading-relaxed">{learning}</div>
                  </div>
                </div>
              ))}
            </div>
          </CaseStudySectionCard>
        )}

        {caseStudy.stack?.length ? (
          <CaseStudySectionCard
            title="Technology Stack"
            icon={caseStudyIcons.stack}
            tone="void"
          >
            <TechnologyStackRow stack={caseStudy.stack} />
          </CaseStudySectionCard>
        ) : null}

        {caseStudy.impact ? (
          <CaseStudySectionCard
            title="Business Impact"
            icon={caseStudyIcons.impact}
            tone="impact"
          >
            {/* Statement-style hierarchy INSIDE the box */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-text-primary">
                {caseStudy.impact.title}
              </h3>

              <p className="text-lg leading-relaxed text-purple-200/90 max-w-3xl">
                {caseStudy.impact.text}
              </p>
            </div>
          </CaseStudySectionCard>
        ) : null}
      </div>
    </div>
  )
}
