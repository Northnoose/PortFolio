// components/case-study/CaseStudySectionCard.tsx

"use client"

import clsx from "clsx"
import { LucideIcon } from "lucide-react"

export type SectionTone =
  | "neutral"
  | "problem"
  | "solution"
  | "warning"
  | "success"
  | "lessons"
  | "impact"
  | "void"

const toneConfig: Record<
  SectionTone,
  {
    cardAccent: string
    cardBorder: string
    iconBoxBg: string
    iconColor: string
  }
> = {
  neutral: {
    cardAccent: "from-slate-900/25 via-slate-900/10 to-transparent",
    cardBorder: "border-white/10",
    iconBoxBg: "bg-white/[0.06]",
    iconColor: "text-white/80",
  },
  problem: {
    cardAccent: "from-red-950/30 via-red-950/15 to-transparent",
    cardBorder: "border-red-500/15",
    iconBoxBg: "bg-red-500/12",
    iconColor: "text-red-200/90",
  },
  solution: {
    cardAccent: "from-sky-950/30 via-sky-950/15 to-transparent",
    cardBorder: "border-sky-500/15",
    iconBoxBg: "bg-sky-500/12",
    iconColor: "text-sky-200/90",
  },
  warning: {
    cardAccent: "from-amber-950/30 via-amber-950/15 to-transparent",
    cardBorder: "border-amber-500/15",
    iconBoxBg: "bg-amber-500/12",
    iconColor: "text-amber-200/90",
  },
  success: {
    cardAccent: "from-emerald-950/30 via-emerald-950/15 to-transparent",
    cardBorder: "border-emerald-500/15",
    iconBoxBg: "bg-emerald-500/12",
    iconColor: "text-emerald-200/90",
  },
  lessons: {
    cardAccent: "from-violet-950/30 via-violet-950/15 to-transparent",
    cardBorder: "border-violet-500/15",
    iconBoxBg: "bg-violet-500/12",
    iconColor: "text-violet-200/90",
  },

  // NOTE: This tone is used for Technology Stack + Business Impact.
  // We deliberately break the purple duplication by using a cyan/teal icon box,
  // while keeping the card accent/border consistent with the section’s role.
  impact: {
    cardAccent: "from-purple-950/30 via-purple-950/15 to-transparent",
    cardBorder: "border-purple-500/15",
    iconBoxBg: "bg-violet-500/12",
    iconColor: "text-violet-200/90",
  },
  void: {
    cardAccent: "from-black/60 via-black/35 to-transparent",
    cardBorder: "border-white/8",
    iconBoxBg: "bg-cyan-500/12",
    iconColor: "text-cyan-200/90",
  },

}

type CaseStudySectionCardProps = {
  title: string
  icon: LucideIcon
  tone?: SectionTone
  children: React.ReactNode
  className?: string
}

export function CaseStudySectionCard({
  title,
  icon: Icon,
  tone = "neutral",
  children,
  className,
}: CaseStudySectionCardProps) {
  const cfg = toneConfig[tone]

  return (
    <section className={clsx("space-y-3", className)}>
      {/* Title row OUTSIDE the box */}
      <div className="flex items-center gap-3">
        <div
          className={clsx(
            "h-9 w-9 rounded-xl flex items-center justify-center",
            cfg.iconBoxBg
          )}
        >
          <Icon className={clsx("h-5 w-5", cfg.iconColor)} />
        </div>
        <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
      </div>

      {/* Content box UNDER the title */}
      <div
        className={clsx(
          `
            rounded-2xl
            border ${cfg.cardBorder}
            bg-bg-panel/75
            bg-gradient-to-br ${cfg.cardAccent}
            p-6 md:p-7
            shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
          `
        )}
      >
        <div className="text-text-secondary leading-relaxed">{children}</div>
      </div>
    </section>
  )
}
