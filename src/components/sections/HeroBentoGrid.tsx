"use client"

import clsx from "clsx"
import Link from "next/link"
import React from "react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

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

const GRID_AREAS: Record<string, string> = {
  leftTop:     "md:[grid-area:1/1/2/7]  xl:[grid-area:1/1/2/4]",
  leftBottom:  "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/4]",
  center:      "md:[grid-area:2/1/3/13] xl:[grid-area:1/4/3/9]",
  rightTop:    "md:[grid-area:3/1/4/7]  xl:[grid-area:1/9/2/13]",
  rightBottom: "md:[grid-area:3/7/4/13] xl:[grid-area:2/9/3/13]",
}

export default function HeroBentoGrid({
  leftTop,
  leftBottom,
  center,
  rightTop,
  rightBottom,
  className,
}: HeroBentoGridProps) {
  const cards: [string, HeroBentoItem][] = [
    ["leftTop",     leftTop],
    ["leftBottom",  leftBottom],
    ["center",      center],
    ["rightTop",    rightTop],
    ["rightBottom", rightBottom],
  ]

  return (
    <ul
      className={clsx(
        "grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 lg:gap-4 xl:[grid-template-rows:minmax(14rem,auto)_minmax(14rem,auto)]",
        className
      )}
    >
      {cards.map(([key, item]) => (
        <HeroCard key={key} item={item} area={GRID_AREAS[key]} />
      ))}
    </ul>
  )
}

function HeroCard({ item, area }: { item: HeroBentoItem; area: string }) {
  const inner = (
    <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border-[0.75px] border-white/5 bg-black/60 backdrop-blur-xl p-6">
      {item.icon && (
        <div className="w-fit rounded-lg border border-white/10 bg-white/5 p-2 text-white/80">
          {item.icon}
        </div>
      )}

      <div className="space-y-2">
        <h3 className="text-xl font-semibold leading-tight tracking-tight text-white">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-sm leading-relaxed text-white/65 max-w-[90%]">
            {item.description}
          </p>
        )}
      </div>

      {item.content && (
        <div className="flex-1 min-h-0">
          {item.content}
        </div>
      )}
    </div>
  )

  return (
    <li className={clsx("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        {item.href ? (
          <Link href={item.href} className="block h-full">
            {inner}
          </Link>
        ) : (
          inner
        )}
      </div>
    </li>
  )
}
