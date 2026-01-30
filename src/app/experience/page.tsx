import { BaseBackground } from "@/components/ui/BaseBackground"
import { Container } from "@/components/ui/Container"
import Particles from "@/components/ui/Particles"

import { RevealGroup } from "@/components/motion/RevealGroup"
import { RevealItem } from "@/components/motion/RevealItem"

import { GraduationCap, Briefcase } from "lucide-react"

/* ======================================================
   PAGE
====================================================== */
export default function ExperiencePage() {
  return (
    <main className="pt-8 pb-32 relative overflow-hidden">
      <BaseBackground />

      {/* ======================================================
          INTRO / HERO
      ====================================================== */}
      <section className="relative w-full flex justify-center mt-24">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={["#3c2277"]}
            particleCount={40}
            particleSpread={12}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles
            disableRotation
            pixelRatio={
              typeof window !== "undefined"
                ? Math.min(window.devicePixelRatio, 1.5)
                : 1
            }
          />
        </div>

        {/* Glow */}
        <div
          aria-hidden
          className="
            absolute -top-24 left-1/2 -translate-x-1/2
            w-[420px] h-[420px]
            bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-sky-500/20
            blur-[140px]
            rounded-full
          "
        />

        <RevealGroup>
          <RevealItem>
            <div className="relative text-center max-w-3xl px-6">
              <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
                My{" "}
                <span className="text-violet-400">
                  Journey
                </span>
              </h1>

              <p
                className="
                  mt-6
                  text-base md:text-lg
                  font-light
                  tracking-wide
                  text-white/85
                  leading-relaxed
                  max-w-3xl
                  mx-auto
                "
              >
                A progression from engineering fundamentals to building reliable,
                production-ready AI systems, shaped by curiosity, structure, and
                real-world constraints.
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* ======================================================
          TIMELINE
      ====================================================== */}
      <Container>
        <div className="relative mt-32">
          {/* Center spine */}
          <div
            aria-hidden
            className="
              absolute left-1/2 top-0 h-full w-[2px]
              -translate-x-1/2
              bg-gradient-to-b from-indigo-500/80 via-violet-500/50 to-transparent
            "
          />

          <RevealGroup>
            <div className="space-y-24">
              {/* =============================
                  EDUCATION
              ============================= */}
              <RevealItem>
                <TimelineItem
                  side="left"
                  date="2022 – Present"
                  title="Bachelor’s Degree in Data Science"
                  subtitle="UiT – The Arctic University of Norway, Narvik"
                  icon={<GraduationCap size={18} />}
                  color="indigo"
                >
                  Focused on machine learning, data analysis, and applied
                  programming. My bachelor project explores automation,
                  reproducibility, and structure in machine learning workflows
                  through a production-oriented MLOps pipeline.
                </TimelineItem>
              </RevealItem>

              {/* =============================
                  WORK
              ============================= */}
              <RevealItem>
                <TimelineItem
                  side="right"
                  date="2023 – Present"
                  title="Customer Service / Reception"
                  subtitle="Frankfurt, Germany"
                  icon={<Briefcase size={18} />}
                  color="violet"
                >
                  Working part-time alongside my studies, gaining hands-on
                  experience in communication, responsibility, and coordinating
                  daily operations in a fast-paced, customer-facing environment.
                </TimelineItem>
              </RevealItem>
            </div>
          </RevealGroup>
        </div>
      </Container>
    </main>
  )
}

/* ======================================================
   TIMELINE ITEM
====================================================== */
function TimelineItem({
  side,
  date,
  title,
  subtitle,
  icon,
  color,
  children
}: {
  side: "left" | "right"
  date: string
  title: string
  subtitle: string
  icon: React.ReactNode
  color: "indigo" | "violet"
  children: React.ReactNode
}) {
  const isLeft = side === "left"

  return (
    <div className="relative grid grid-cols-[1fr_auto_1fr] items-start">
      <div className={isLeft ? "pr-12 text-right" : ""}>
        {isLeft && (
          <TimelineCard
            title={title}
            subtitle={subtitle}
            date={date}
            color={color}
          >
            {children}
          </TimelineCard>
        )}
      </div>

      <div className="relative flex justify-center">
        <div
          className={`
            relative z-10
            flex items-center justify-center
            w-10 h-10 rounded-full
            bg-gradient-to-br
            ${
              color === "indigo"
                ? "from-indigo-500 to-indigo-400"
                : "from-violet-500 to-violet-400"
            }
            text-white
            shadow-[0_0_0_6px_rgba(99,102,241,0.2)]
          `}
        >
          {icon}
        </div>
      </div>

      <div className={!isLeft ? "pl-12" : ""}>
        {!isLeft && (
          <TimelineCard
            title={title}
            subtitle={subtitle}
            date={date}
            color={color}
          >
            {children}
          </TimelineCard>
        )}
      </div>
    </div>
  )
}

/* ======================================================
   TIMELINE CARD
====================================================== */
function TimelineCard({
  title,
  subtitle,
  date,
  color,
  children
}: {
  title: string
  subtitle: string
  date: string
  color: "indigo" | "violet"
  children: React.ReactNode
}) {
  const achievements = [
    "Built scalable UI components with measurable UX improvements",
    "Optimized API performance and reduced latency",
    "Delivered client-focused solutions with high reliability",
  ]

  return (
    <div
      className="
        group
        relative max-w-xl
        rounded-2xl
        border border-white/10
        bg-black/60
        backdrop-blur-xl
        p-8 space-y-6
        shadow-[0_0_40px_rgba(0,0,0,0.6)]
        transition-all duration-300
        hover:border-violet-400/40
      "
    >
      <div
        aria-hidden
        className="
          absolute inset-0 -z-10
          rounded-2xl
          bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_70%)]
          opacity-0
          blur-2xl
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      <div className="flex items-start justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-violet-400">
            {title}
          </h3>
          <p className="text-sm text-text-secondary">
            {subtitle}
          </p>
        </div>

        <span
          className="
            shrink-0
            inline-flex items-center gap-2
            px-4 py-1.5
            rounded-full
            text-sm font-medium
            bg-gradient-to-r from-amber-400 to-orange-500
            text-black
            shadow-lg
            transition-transform duration-200
            hover:-translate-y-0.5
            hover:shadow-xl
          "
        >
          Previous Role
        </span>
      </div>

      <p className="text-sm text-text-muted">{date}</p>

      <p className="text-text-secondary leading-relaxed">{children}</p>

      <div className="space-y-4 pt-2">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
          Key Achievements
        </h4>

        <div className="space-y-3">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="
                flex gap-4 items-start
                rounded-xl
                bg-white/5
                border border-white/10
                p-4
                transition-all duration-300
                hover:border-violet-400/40
                hover:bg-violet-500/10
              "
            >
              <span
                className="
                  mt-1 h-2.5 w-2.5 rounded-full
                  bg-gradient-to-br from-amber-400 to-orange-500
                  shadow-[0_0_12px_rgba(251,191,36,0.6)]
                "
              />
              <p className="text-sm text-text-secondary leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
