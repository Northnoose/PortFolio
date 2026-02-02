// components/case-study/ImpactCard.tsx

"use client"

import { CaseStudyImpact } from "@/content/caseStudies"

type ImpactCardProps = {
  impact: CaseStudyImpact
}

export function ImpactCard({ impact }: ImpactCardProps) {
  return (
    <div
      className="
        rounded-2xl
        bg-gradient-to-r from-purple-950/35 via-blue-950/25 to-purple-950/35
        p-6
        shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
        relative overflow-hidden
      "
    >
      <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative">
        <p className="text-text-secondary leading-relaxed max-w-3xl">{impact.text}</p>
      </div>
    </div>
  )
}
