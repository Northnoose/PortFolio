"use client"

import clsx from "clsx"
import Link from "next/link"
import React from "react"

export type BentoItem = {
  title: string
  description: string
  icon?: React.ReactNode
  href?: string
  children?: React.ReactNode
}

type MagicBentoLiteProps = {
  items: readonly BentoItem[]
  className?: string
}

export default function MagicBentoLite({
  items,
  className,
}: MagicBentoLiteProps) {
  return (
    <section className={clsx("w-full", className)}>
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {items.map((item, i) => (
          <BentoCard key={i} item={item} />
        ))}
      </div>
    </section>
  )
}

/* ============================================================
   Simple Bento Card
============================================================ */

function BentoCard({ item }: { item: BentoItem }) {
  const Card = (
    <div className="group relative rounded-2xl border border-white/10 bg-black/50 p-6 transition hover:border-white/25">
      <div className="space-y-3">
        {item.icon && (
          <div className="text-white/70">
            {item.icon}
          </div>
        )}

        <h3 className="text-lg font-medium text-white">
          {item.title}
        </h3>

        <p className="text-sm text-white/60">
          {item.description}
        </p>

        {item.children && (
          <div className="pt-4">
            {item.children}
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
