"use client"

import { Tag } from "@/components/ui/Tag"
import { CaseStudy } from "@/content/caseStudies"
import { useModal } from "@/components/providers/ModalProvider"
import { LucideIcon } from "lucide-react"

import {
  FileText,
  AlertTriangle,
  Lock,
  Route,
  CheckCircle2,
  Lightbulb,
} from "lucide-react"

interface CaseStudyContentProps {
  caseStudy: CaseStudy
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const { closeModal } = useModal()

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-950/50 via-purple-950/40 to-blue-950/50 border-b border-border-soft px-6 md:px-8 py-8 md:py-10 relative">
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500/70 to-transparent" />

        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="inline-block mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-text-muted bg-bg-panel/80 px-3 py-1 rounded">
                {caseStudy.domain}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-text-primary mb-3">
              {caseStudy.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              {caseStudy.summary}
            </p>
          </div>

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

        {caseStudy.stack && caseStudy.stack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-6 border-t border-border-soft/40 mt-6">
            {caseStudy.stack.map(tech => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-bg-panel/80 border border-border-soft text-text-secondary hover:border-text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-8 px-6 md:px-8 py-8 md:py-12">
        <SectionCard
          icon={FileText}
          title="Context"
          content={caseStudy.context}
          accentColor="from-slate-900/30 via-slate-900/15 to-transparent"
          borderColor="border-slate-800/40"
        />

        <SectionCard
          icon={AlertTriangle}
          title="Problem"
          content={caseStudy.problem}
          accentColor="from-red-900/35 via-red-900/20 to-transparent"
          borderColor="border-red-800/40"
        />

        {caseStudy.constraints?.length > 0 && (
          <ListSection
            icon={Lock}
            title="Constraints"
            items={caseStudy.constraints}
            accentColor="from-amber-900/35 via-amber-900/20 to-transparent"
            borderColor="border-amber-800/40"
            itemIcon={AlertTriangle}
          />
        )}

        {caseStudy.approach?.length > 0 && (
          <ListSection
            icon={Route}
            title="Approach"
            items={caseStudy.approach}
            accentColor="from-sky-900/35 via-sky-900/20 to-transparent"
            borderColor="border-sky-800/40"
            itemIcon={Route}
          />
        )}

        {caseStudy.results?.length > 0 && (
          <ListSection
            icon={CheckCircle2}
            title="Results"
            items={caseStudy.results}
            accentColor="from-emerald-900/35 via-emerald-900/20 to-transparent"
            borderColor="border-emerald-800/40"
            itemIcon={CheckCircle2}
            itemIconClass="text-emerald-400/80"
          />
        )}

        {caseStudy.learnings?.length > 0 && (
          <ListSection
            icon={Lightbulb}
            title="Key Learnings"
            items={caseStudy.learnings}
            accentColor="from-violet-900/35 via-violet-900/20 to-transparent"
            borderColor="border-violet-800/40"
            itemIcon={Lightbulb}
          />
        )}
      </div>
    </div>
  )
}

/* ============================================================
   Components
============================================================ */

interface SectionCardProps {
  icon: LucideIcon
  title: string
  content: string
  accentColor?: string
  borderColor?: string
}

function SectionCard({
  icon: Icon,
  title,
  content,
  accentColor = "from-slate-900/30 via-slate-900/15 to-transparent",
  borderColor = "border-slate-800/40",
}: SectionCardProps) {
  return (
    <div
      className={`
        bg-bg-panel/80
        bg-gradient-to-br ${accentColor}
        ${borderColor} border
        rounded-lg p-6 space-y-3
        shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
      `}
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className="h-5 w-5 text-text-muted" />
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      </div>
      <p className="text-text-secondary leading-relaxed ml-7">
        {content}
      </p>
    </div>
  )
}

interface ListSectionProps {
  icon: LucideIcon
  title: string
  items: string[]
  accentColor: string
  borderColor: string
  itemIcon: LucideIcon
  itemIconClass?: string
}

function ListSection({
  icon: Icon,
  title,
  items,
  accentColor,
  borderColor,
  itemIcon: ItemIcon,
  itemIconClass = "text-text-muted",
}: ListSectionProps) {
  return (
    <div
      className={`
        bg-bg-panel/80
        bg-gradient-to-br ${accentColor}
        ${borderColor} border
        rounded-lg p-6 space-y-3
        shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
      `}
    >
      <div className="flex items-center gap-2 mb-4">
        <Icon className="h-5 w-5 text-text-muted" />
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-3 items-start">
            <ItemIcon className={`h-4 w-4 flex-shrink-0 mt-1 ${itemIconClass}`} />
            <span className="text-text-secondary leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
