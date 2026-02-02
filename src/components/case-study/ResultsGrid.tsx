// components/case-study/ResultsGrid.tsx

"use client"

import { CaseStudyResultHighlight } from "@/content/caseStudies"
import { CheckCircle2 } from "lucide-react"

type ResultsGridProps = {
  items: CaseStudyResultHighlight[]
}

export function ResultsGrid({ items }: ResultsGridProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        {items.map((item, idx) => (
          <div
            key={`${item.text}-${idx}`}
            className="
              rounded-2xl
              border border-emerald-800/35
              bg-bg-panel/70
              px-5 py-4
              shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
              hover:border-emerald-500/40
              transition-colors
            "
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-400/85 flex-shrink-0 mt-[2px]" />
              <div className="text-text-secondary leading-relaxed">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
