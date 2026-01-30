"use client"

import clsx from "clsx"
import { useRef } from "react"
import Link from "next/link"
import React from "react"

export type BentoItem = {
  title: string
  description: string
  icon?: React.ReactNode
  span?: "wide" | "tall" | "big"
  variant?: "default" | "tech" | "ai" | "timezone" | "client"
  href?: string
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
  const isTimezone = item.variant === "timezone"

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty("--x", `${e.clientX - rect.left}px`)
    ref.current.style.setProperty("--y", `${e.clientY - rect.top}px`)
  }

  const CardInner = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{ animationDelay: `${index * 80}ms` }}
      className={clsx(
        "group relative rounded-2xl border border-white/10 overflow-hidden",
        "bg-black/55 backdrop-blur-md",
        "p-6",
        "transition-all duration-300 ease-out",
        "animate-fade-up",
        "hover:z-10 hover:-translate-y-1",
        "hover:border-violet-400/40",
        "hover:shadow-[0_0_0_1px_rgba(168,85,247,0.25),0_20px_50px_rgba(0,0,0,0.65)]",
        item.span === "wide" && "lg:col-span-2",
        item.span === "tall" && "lg:row-span-2",
        item.span === "big" && "lg:col-span-2 lg:row-span-2"
      )}
    >
      {/* Cursor glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 group-hover:opacity-100 transition
          bg-[radial-gradient(320px_circle_at_var(--x)_var(--y),rgba(168,85,247,0.25),transparent_55%)]
        "
      />

      {/* Base content */}
      <div
        className={clsx(
          "relative z-10 space-y-3 transition-opacity duration-300",
          isTimezone && "group-hover:opacity-0"
        )}
      >
        {item.icon && <div className="text-violet-400">{item.icon}</div>}
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <p className="text-sm text-text-secondary max-w-[260px]">
          {item.description}
        </p>
      </div>

      {/* ===== TIMEZONE OVERLAY (KUN EGET KORT) ===== */}
      {isTimezone && (
        <div
          className="
            absolute inset-0 z-20
            flex items-center justify-center
            bg-black/85 backdrop-blur-sm
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          <div className="space-y-4">
            {[
              ["NY", "EST"],
              ["London", "GMT"],
              ["Dubai", "GST"],
            ].map(([city, tz]) => (
              <div
                key={city}
                className="
                  flex items-center justify-between
                  gap-10
                  min-w-[200px]
                  px-6 py-3
                  rounded-full
                  bg-white/10
                  border border-white/15
                  text-white
                  text-sm
                  backdrop-blur-md
                "
              >
                <span>{city}</span>
                <span className="text-violet-300">{tz}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== DEFAULT HOVER (IKKE TIMEZONE) ===== */}
      {!isTimezone && (
        <div
          className="
            absolute inset-x-0 bottom-0 z-20
            h-[58%]
            rounded-b-2xl
            bg-gradient-to-t from-black/95 to-black/40
            opacity-0 group-hover:opacity-100 transition
            p-5
          "
        >
          <HoverContent item={item} />
        </div>
      )}
    </div>
  )

  if (item.href) {
    return <Link href={item.href}>{CardInner}</Link>
  }

  return CardInner
}

/* ============================================================
   Hover Variants
============================================================ */

function HoverContent({ item }: { item: BentoItem }) {
  switch (item.variant) {
    case "tech":
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <TechGroup title="Core">
              {["React", "TypeScript", "Next.js"].map(t => (
                <TechPill key={t} strong>{t}</TechPill>
              ))}
            </TechGroup>

            <TechGroup title="Backend">
              {["Python", "FastAPI", "Node.js"].map(t => (
                <TechPill key={t}>{t}</TechPill>
              ))}
            </TechGroup>

            <TechGroup title="Tooling">
              {["Docker", "CI/CD", "Framer"].map(t => (
                <TechPill key={t} muted>{t}</TechPill>
              ))}
            </TechGroup>
          </div>

          <p className="text-xs text-text-muted text-center">
            Production-grade stack optimized for velocity and maintainability.
          </p>
        </div>
      )

    default:
      return (
        <div className="h-full flex flex-col items-center justify-center space-y-2 text-center">
          <p className="text-xs uppercase tracking-widest text-text-muted">
            More details
          </p>
          <div className="flex items-center gap-2 text-violet-300 font-medium">
            <span>Learn more</span>
            <span>→</span>
          </div>
        </div>
      )
  }
}

/* ============================================================
   Helper Components
============================================================ */

function TechGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <div className="text-xs uppercase tracking-wider text-text-muted">
        {title}
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  )
}

function TechPill({
  children,
  strong,
  muted,
}: {
  children: React.ReactNode
  strong?: boolean
  muted?: boolean
}) {
  return (
    <div
      className={clsx(
        "rounded-lg px-3 py-1.5 text-xs border",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:scale-[1.03]",
        strong && "bg-violet-500/20 border-violet-400/40 text-white",
        muted && "bg-white/5 border-white/10 text-white/60",
        !strong && !muted && "bg-white/10 border-white/20 text-white"
      )}
    >
      {children}
    </div>
  )
}
