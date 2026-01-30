"use client"

import { useState } from "react"
import { BaseBackground } from "@/components/ui/BaseBackground"
import { Container } from "@/components/ui/Container"
import { Panel } from "@/components/ui/Panel"
import Particles from "@/components/ui/Particles"

import {
  Brain,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle
} from "lucide-react"

import { RevealGroup } from "@/components/motion/RevealGroup"
import { RevealItem } from "@/components/motion/RevealItem"

const tabs = ["Vision", "Expertise", "Focus"] as const
type Tab = typeof tabs[number]

export default function AboutPage() {
  const [active, setActive] = useState<Tab>("Vision")

  return (
    <main className="relative pt-32 pb-32 overflow-hidden">
      <BaseBackground />

      {/* Particles – locked behind UI */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#3c2277"]}
          particleCount={80}
          particleSpread={10}
          speed={0.15}
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

      <Container className="relative z-10">
        <RevealGroup>
          <div className="space-y-12">

            {/* ======================================================
                HEADER
            ====================================================== */}
            <RevealItem>
              <Panel className="p-10 flex flex-col md:flex-row gap-8 bg-black/60 backdrop-blur-xl border border-white/10">
                <div className="flex items-center gap-5">
                  <div
                    className="
                      h-16 w-16 rounded-2xl
                      bg-gradient-to-br from-indigo-500 to-violet-500
                      flex items-center justify-center
                      text-2xl font-bold text-white
                      shadow-lg
                    "
                  >
                    SN
                  </div>

                  <div className="space-y-1">
                    <h1 className="text-2xl font-semibold">
                      Steffen Nordnes
                    </h1>
                    <p className="text-violet-400 font-medium">
                      Computer Engineer & AI Engineer
                    </p>

                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Available for new projects
                    </div>
                  </div>
                </div>
              </Panel>
            </RevealItem>

            {/* ======================================================
                TABS
            ====================================================== */}
            <RevealItem>
              <div className="grid grid-cols-3 gap-3">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActive(tab)}
                    className={`
                      py-3 rounded-xl text-sm font-medium transition
                      ${active === tab
                        ? "bg-violet-500/90 text-white shadow-lg"
                        : "bg-black/60 border border-white/10 text-text-secondary hover:bg-white/10"}
                    `}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </RevealItem>

            {/* ======================================================
                TAB CONTENT
            ====================================================== */}
            <RevealItem>
              <Panel className="p-10 min-h-[260px] bg-black/60 backdrop-blur-xl border border-white/10">
                {active === "Vision" && (
                  <div className="space-y-6 max-w-[720px]">
                    <h3 className="text-xl font-medium">Vision</h3>

                    <p className="text-text-secondary leading-relaxed">
                      I focus on building production-ready machine learning systems that survive
                      contact with reality. That means reproducibility, automation, observability,
                      and engineering discipline across data, backend services, and web interfaces. 
                      Not just models that look good in notebooks.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {["Production ML", "Reproducibility", "System Design"].map(x => (
                        <span
                          key={x}
                          className="px-4 py-1.5 rounded-full text-sm bg-violet-500/10 text-violet-300"
                        >
                          {x}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {active === "Expertise" && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <ExpertiseCard
                      icon={<Cpu size={20} />}
                      title="ML Systems & MLOps"
                      text="Drift-aware pipelines, evaluation gates, versioning, and controlled deployment."
                    />
                    <ExpertiseCard
                      icon={<Layers size={20} />}
                      title="Data & Infrastructure"
                      text="Scalable data flows, containerized services, CI/CD, and cloud-native setups."
                    />
                    <ExpertiseCard
                      icon={<Brain size={20} />}
                      title="Applied Machine Learning"
                      text="Models optimized for stability, interpretability, and operational safety."
                    />
                    <ExpertiseCard
                      icon={<Sparkles size={20} />}
                      title="Engineering Mindset"
                      text="Clear interfaces, documentation, and systems that still make sense later."
                    />
                  </div>
                )}

                {active === "Focus" && (
                  <div className="space-y-6 max-w-[720px]">
                    <h3 className="text-xl font-medium">What I focus on</h3>

                    <ul className="space-y-3 text-text-secondary">
                      {[
                        "Production-first ML systems",
                        "Automation that saves real engineering time",
                        "Reducing operational risk in ML deployments",
                        "Teams that value explanation and clarity"
                      ].map(item => (
                        <li key={item} className="flex gap-3 items-start">
                          <CheckCircle className="text-violet-400 mt-0.5" size={18} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Panel>
            </RevealItem>

            {/* ======================================================
                STATS
            ====================================================== */}
            <RevealGroup>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { value: "Automation", label: "by Design" },
                  { value: "ML", label: "Pipelines" },
                  { value: "2+", label: "Years Hands-on ML" },
                  { value: "∞", label: "Focus on Reliability" },
                ].map(stat => (
                  <RevealItem key={stat.label}>
                    <Panel className="p-6 text-center bg-black/60 backdrop-blur-xl border border-white/10 hover:border-violet-400/40 transition">
                      <p className="text-3xl font-semibold">{stat.value}</p>
                      <p className="text-sm text-text-secondary">{stat.label}</p>
                    </Panel>
                  </RevealItem>
                ))}
              </div>
            </RevealGroup>

          </div>
        </RevealGroup>
      </Container>
    </main>
  )
}

/* ======================================================
   SUB COMPONENTS
====================================================== */

function ExpertiseCard({
  icon,
  title,
  text
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div
      className="
        group relative
        rounded-2xl
        bg-black/60 backdrop-blur-xl
        border border-white/10
        p-6 space-y-3
        transition-all duration-300
        hover:border-violet-400/40
        hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
      "
    >
      <div className="h-10 w-10 flex items-center justify-center text-violet-400">
        <span className="inline-flex transition-transform duration-200 ease-out group-hover:scale-[1.10]">
          {icon}
        </span>
      </div>


      <p className="font-medium">{title}</p>
      <p className="text-sm text-text-secondary leading-relaxed">{text}</p>

      <div
        aria-hidden
        className="
          absolute inset-0 -z-10
          rounded-2xl
          bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_70%)]
          opacity-0 blur-2xl
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />
    </div>
  )
}
