"use client"

import clsx from "clsx"
import Link from "next/link"
import React from "react"

type BentoCardBaseProps = {
  children: React.ReactNode
  href?: string
  className?: string
}

export function BentoCardBase({
  children,
  href,
  className,
}: BentoCardBaseProps) {
  const Card = (
    <div
      className={clsx(
        "card group relative h-full rounded-[26px] p-[1px]",
        "bg-white/5 overflow-hidden",
        className
      )}
      style={
        {
          // React Bits-kontrakt
          "--glow-x": "50%",
          "--glow-y": "50%",
          "--glow-intensity": "0",
          "--glow-radius": "220px",
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          "relative h-full rounded-[25px]",
          "bg-black/60 backdrop-blur-xl",
          "border border-white/10",
          "p-6",
          "transition-all duration-300",
          "group-hover:border-violet-400/40",
          "group-hover:shadow-[0_0_0_1px_rgba(168,85,247,0.35),0_24px_64px_rgba(0,0,0,0.8)]"
        )}
      >
        {children}
      </div>
    </div>
  )

  return href ? <Link href={href}>{Card}</Link> : Card
}
