// components/case-study/CaseStudyHeader.tsx

"use client"

import { CaseStudy } from "@/content/caseStudies"
import { caseStudyIcons } from "@/components/case-study/iconMap"
import { useModal } from "@/components/providers/ModalProvider"
import { X } from "lucide-react"

type MetaBubbleProps = {
  label: string
  value: string
  icon: React.ComponentType<{ className?: string }>
}

function MetaBubble({ label, value, icon: Icon }: MetaBubbleProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Same gradient family as header */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/55 via-purple-950/45 to-blue-950/55" />
      {/* Soft overlay to separate without looking card-like */}
      <div className="absolute inset-0 bg-white/[0.04]" />
      {/* Very subtle inner highlight */}
      <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />

      <div className="relative px-5 py-4">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Icon className="h-4 w-4" />
          <span className="font-medium">{label}</span>
        </div>

        {/* Bigger than before */}
        <div className="mt-1 text-xl font-semibold text-text-primary">{value}</div>
      </div>
    </div>
  )
}

type CaseStudyHeaderProps = {
  caseStudy: CaseStudy
}

export function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  const { closeModal } = useModal()

  const label = caseStudy.label ?? caseStudy.domain
  const duration = caseStudy.meta?.duration
  const role = caseStudy.meta?.role
  const client = caseStudy.meta?.client

  return (
    <header className="relative overflow-hidden">
      {/* Gradient banner */}
      <div className="bg-gradient-to-r from-blue-950/55 via-purple-950/45 to-blue-950/55 border-b border-border-soft px-6 md:px-10 py-10 md:py-12 relative">
        {/* left accent bar */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500/70 to-transparent" />

        {/* subtle top glow */}
        <div className="absolute -top-24 left-1/2 h-48 w-[700px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

        {/* Close button (NOT sticky, scrolls naturally with header) */}
        <button
          onClick={closeModal}
          className="
            absolute right-4 top-4
            inline-flex items-center justify-center
            h-10 w-10
            rounded-xl
            bg-white/[0.06]
            hover:bg-white/[0.10]
            text-white/80 hover:text-white
            transition-colors
          "
          aria-label="Close modal"
          title="Close (ESC)"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
            {label}
          </div>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-text-primary">
            {caseStudy.title}
          </h1>

          <p className="mt-3 text-lg text-text-secondary leading-relaxed max-w-3xl">
            {caseStudy.summary}
          </p>

          {(duration || role || client) && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {duration && (
                <MetaBubble label="Duration" value={duration} icon={caseStudyIcons.duration} />
              )}
              {role && <MetaBubble label="Role" value={role} icon={caseStudyIcons.role} />}
              {client && <MetaBubble label="Client" value={client} icon={caseStudyIcons.client} />}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
