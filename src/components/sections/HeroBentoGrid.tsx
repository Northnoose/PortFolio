"use client"

import clsx from "clsx"
import Link from "next/link"
import React from "react"

export type HeroBentoItem = {
  title: string
  description?: string
  icon?: React.ReactNode
  href?: string
  content?: React.ReactNode
}

type HeroBentoGridProps = {
  leftTop: HeroBentoItem
  leftBottom: HeroBentoItem
  center: HeroBentoItem
  rightTop: HeroBentoItem
  rightBottom: HeroBentoItem
  className?: string
}

export default function HeroBentoGrid({
  leftTop,
  leftBottom,
  center,
  rightTop,
  rightBottom,
  className,
}: HeroBentoGridProps) {
  return (
    <section className={clsx("w-full", className)}>
      <div
        className="
          grid
          grid-cols-1
          auto-rows-auto
          gap-4
          sm:gap-6
          lg:gap-8
          lg:grid-cols-[1fr_1.25fr_1.5fr]
          lg:grid-rows-[260px_260px]
        "
      >
        {/* LEFT */}
        <HeroCard item={leftTop} className="lg:col-start-1 lg:row-start-1" />
        <HeroCard item={leftBottom} className="lg:col-start-1 lg:row-start-2" />

        {/* CENTER (VERTICAL) */}
        <HeroCard
          item={center}
          vertical
          className="lg:col-start-2 lg:row-start-1 lg:row-span-2"
        />

        {/* RIGHT (WIDER) */}
        <HeroCard item={rightTop} className="lg:col-start-3 lg:row-start-1" />
        <HeroCard item={rightBottom} className="lg:col-start-3 lg:row-start-2" />
      </div>
    </section>
  )
}

/* ============================================================
   Hero Card
============================================================ */

function HeroCard({
  item,
  vertical,
  className,
}: {
  item: HeroBentoItem
  vertical?: boolean
  className?: string
}) {
  const Card = (
    <div
      className={clsx(
        "group relative h-full rounded-[28px] p-[1px] bg-white/5",
        className
      )}
    >
      <div
        className={clsx(
          "relative h-full rounded-[26px]",
          "bg-black/60 backdrop-blur-xl",
          "border border-white/10",
          "p-6",
          "transition-all duration-300",
          "group-hover:border-violet-400/40",
          "group-hover:shadow-[0_0_0_1px_rgba(168,85,247,0.35),0_24px_64px_rgba(0,0,0,0.8)]",
          vertical && "flex flex-col"

        )}
      >
        {/* Inset glow */}
        <div
          aria-hidden
          className="
            pointer-events-none absolute inset-0
            rounded-[26px]
            bg-[radial-gradient(120%_80%_at_50%_0%,rgba(168,85,247,0.12),transparent_60%)]
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
          "
        />

        {/* Header */}
        <div className="relative z-10 space-y-4">
          {item.icon && (
            <div
              className="
                inline-flex items-center justify-center
                w-10 h-10 rounded-lg
                bg-white/5 border border-white/10
                text-white/80
              "
            >
              {item.icon}
            </div>
          )}

          <h3 className="text-xl font-semibold text-white">
            {item.title}
          </h3>

          {item.description && (
            <p className="text-white/65 text-sm max-w-[90%]">
              {item.description}
            </p>
          )}

        </div>

        {/* Extra content (center only) */}
        {item.content && (
          <div
            className={clsx(
              "relative z-10 flex-1 min-h-0",
              vertical ? "pt-6" : "pt-4"
            )}
          >
            {item.content}
          </div>
        )}



      </div>
    </div>
  )

  if (item.href) {
    return <Link href={item.href}>{Card}</Link>
  }

  return Card
}
