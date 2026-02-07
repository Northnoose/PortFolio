"use client"

import { useState } from "react"
import PixelCard from "../ui/PixelCard"

export default function HowIWorkPixel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div
      className="
        grid
        grid-cols-1
        xl:grid-cols-3
        gap-x-1
        gap-y-20
        justify-items-center
      "
    >
      {/* =============================
          STEP 01
      ============================= */}
      <PixelCard
        variant="pink"
        className={activeIndex === 0 ? "cursor-pointer is-active" : "cursor-pointer"}
        onActivate={() => setActiveIndex(0)}
      >
        <div className="relative w-full h-full">

          {/* IDLE — STEP BADGE */}
          <div
            className="
              absolute inset-0
              flex items-center justify-center
              transition-all duration-300
              group-hover:opacity-0
              group-hover:scale-90
              group-[.is-active]:opacity-0
              group-[.is-active]:scale-90
            "
          >
            <span
              className="
                inline-flex items-center
                px-8 py-3
                rounded-full
                text-base font-semibold tracking-[0.2em]
                text-pink-200
                bg-gradient-to-r from-pink-500/25 to-pink-400/10
                border border-pink-400/40
                shadow-[0_0_35px_rgba(236,72,153,0.45)]
              "
            >
              STEP 01
            </span>
          </div>

          {/* ACTIVE — CONTENT */}
          <div
            className="
              absolute inset-0
              flex flex-col items-center justify-center
              text-center
              px-14
              opacity-0 translate-y-6
              transition-all duration-300 delay-75
              group-hover:opacity-100
              group-hover:translate-y-0
              group-[.is-active]:opacity-100
              group-[.is-active]:translate-y-0
            "
          >
            <h4 className="text-3xl font-semibold text-white">
              Planning & Strategy
            </h4>
            <p className="mt-6 text-base text-white/80 leading-relaxed max-w-[340px]">
              We work together to define your objectives, target audience, and core functionality.
              This phase focuses on aligning structure, navigation, and content needs to establish a
              clear foundation before development begins.
            </p>
          </div>

        </div>
      </PixelCard>

      {/* =============================
          STEP 02
      ============================= */}
      <PixelCard
        variant="blue"
        className={activeIndex === 1 ? "cursor-pointer is-active" : "cursor-pointer"}
        onActivate={() => setActiveIndex(1)}
      >
        <div className="relative w-full h-full">

          <div
            className="
              absolute inset-0
              flex items-center justify-center
              transition-all duration-300
              group-hover:opacity-0
              group-hover:scale-90
              group-[.is-active]:opacity-0
              group-[.is-active]:scale-90
            "
          >
            <span
              className="
                inline-flex items-center
                px-8 py-3
                rounded-full
                text-base font-semibold tracking-[0.2em]
                text-sky-200
                bg-gradient-to-r from-sky-500/25 to-sky-400/10
                border border-sky-400/40
                shadow-[0_0_35px_rgba(56,189,248,0.45)]
              "
            >
              STEP 02
            </span>
          </div>

          <div
            className="
              absolute inset-0
              flex flex-col items-center justify-center
              text-center
              px-14
              opacity-0 translate-y-6
              transition-all duration-300 delay-75
              group-hover:opacity-100
              group-hover:translate-y-0
              group-[.is-active]:opacity-100
              group-[.is-active]:translate-y-0
            "
          >
            <h4 className="text-3xl font-semibold text-white">
              Development & Progress Updates
            </h4>
            <p className="mt-6 text-base text-white/80 leading-relaxed max-w-[340px]">
              With the plan in place, development starts. I move from early concepts to refined,
              production-ready code while providing regular updates so you always have visibility
              into progress and decisions.
            </p>
          </div>

        </div>
      </PixelCard>

      {/* =============================
          STEP 03
      ============================= */}
      <PixelCard
        variant="default"
        className={activeIndex === 2 ? "cursor-pointer is-active" : "cursor-pointer"}
        onActivate={() => setActiveIndex(2)}
      >
        <div className="relative w-full h-full">

          <div
            className="
              absolute inset-0
              flex items-center justify-center
              transition-all duration-300
              group-hover:opacity-0
              group-hover:scale-90
              group-[.is-active]:opacity-0
              group-[.is-active]:scale-90
            "
          >
            <span
              className="
                inline-flex items-center
                px-8 py-3
                rounded-full
                text-base font-semibold tracking-[0.2em]
                text-white/90
                bg-gradient-to-r from-white/15 to-white/5
                border border-white/25
                shadow-[0_0_35px_rgba(255,255,255,0.25)]
              "
            >
              STEP 03
            </span>
          </div>

          <div
            className="
              absolute inset-0
              flex flex-col items-center justify-center
              text-center
              px-14
              opacity-0 translate-y-6
              transition-all duration-300 delay-75
              group-hover:opacity-100
              group-hover:translate-y-0
              group-[.is-active]:opacity-100
              group-[.is-active]:translate-y-0
            "
          >
            <h4 className="text-3xl font-semibold text-white">
              Deployment & Launch
            </h4>
            <p className="mt-6 text-base text-white/80 leading-relaxed max-w-[340px]">
              Once the design is approved, everything is implemented and assembled into a fully
              functional website. The solution is built, tested, and prepared for launch as a
              complete, production-ready system.
            </p>
          </div>

        </div>
      </PixelCard>
    </div>
  )
}
