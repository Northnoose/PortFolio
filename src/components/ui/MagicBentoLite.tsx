// components/ui/MagicBentoLite.tsx
"use client"

import clsx from "clsx"
import { useRef } from "react"

export type BentoItem = {
  title: string
  description: string
  icon?: React.ReactNode
  span?: "wide" | "tall" | "big"
}

type MagicBentoLiteProps = {
  items: readonly BentoItem[]
  className?: string
}

export default function MagicBentoLite({ items, className }: MagicBentoLiteProps) {
  return (
    <section className={clsx("w-full", className)}>
      <div
        className="
          group
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          auto-rows-[220px]
        "
      >
        {items.map((item, i) => (
          <BentoCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

/* ============================================================
   Single Bento Card
   ============================================================ */

function BentoCard({ item, index }: { item: BentoItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    ref.current.style.setProperty("--x", `${x}px`)
    ref.current.style.setProperty("--y", `${y}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{ animationDelay: `${index * 80}ms` }}
      className={clsx(
              "relative rounded-2xl border border-white/10",
              "bg-black/40 backdrop-blur-sm bento-glass",
              "p-6 flex flex-col justify-between",
              "transition-all duration-300 ease-out",
        "p-1",
        "transition-all duration-300 ease-out",
        "animate-fade-up",

        // spotlight behaviour
        "group-hover:opacity-60 hover:!opacity-100 hover:z-10",
        "hover:-translate-y-1",
        "hover:border-violet-400/40",
        "hover:shadow-[0_0_0_1px_rgba(168,85,247,0.25),0_12px_40px_rgba(0,0,0,0.6)]",

        // spans
        item.span === "wide" && "lg:col-span-2",
        item.span === "tall" && "lg:row-span-2",
        item.span === "big" && "lg:col-span-2 lg:row-span-2"
      )}
    >
      {/* Sharp edge highlight */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 hover:opacity-100 transition duration-300
          ring-1 ring-violet-400/40
        "
      />

      {/* Focused glow following cursor */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 hover:opacity-100 transition duration-300
          bg-[radial-gradient(320px_circle_at_var(--x)_var(--y),rgba(168,85,247,0.35),transparent_55%)]
        "
      />

      {/* Inner panel */}
      
        {item.icon && (
          <div className="text-violet-400/80 mb-3">
            {item.icon}
          </div>
        )}

        <div>
          <h3 className="text-lg font-medium text-white mb-2">
            {item.title}
          </h3>

          <p className="text-sm text-text-secondary leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Hover overlay */}
        <div
          className="
            absolute inset-0 rounded-[14px]
            bg-black/70 backdrop-blur-sm
            opacity-0 hover:opacity-100 transition
            flex items-center justify-center
          "
        >
          <div className="text-center space-y-3">
            <p className="text-xs text-text-muted uppercase tracking-widest">
              Info
            </p>

            <div className="flex items-center justify-center gap-2 text-violet-300 font-medium hover:text-violet-200 transition">
              <span>Learn more</span>
              <span aria-hidden>→</span>
            </div>
          </div>
        </div>
      </div>

  )
}
