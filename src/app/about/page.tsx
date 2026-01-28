"use client"

import { useState } from "react"
import { BaseBackground } from "@/components/ui/BaseBackground"
import { Container } from "@/components/ui/Container"
import { Panel } from "@/components/ui/Panel"

import {
  Brain,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle
} from "lucide-react"

const tabs = ["Vision", "Expertise", "Focus"] as const
type Tab = typeof tabs[number]

export default function AboutPage() {
  const [active, setActive] = useState<Tab>("Vision")

  return (
    <main className="relative pt-32 pb-32 overflow-hidden">
      <BaseBackground />

      <Container>
        <div className="space-y-12">

          {/* ======================================================
              HEADER CARD
          ====================================================== */}
          <Panel className="p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="
                h-16 w-16 rounded-2xl
                bg-gradient-to-br from-indigo-500 to-violet-500
                flex items-center justify-center
                text-2xl font-bold text-white
              ">
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

          {/* ======================================================
              TABS
          ====================================================== */}
          <div className="grid grid-cols-3 gap-3">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`
                  py-3 rounded-xl text-sm font-medium transition
                  ${active === tab
                    ? "bg-violet-500/90 text-white"
                    : "bg-white/5 text-text-secondary hover:bg-white/10"}
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ======================================================
              TAB CONTENT
          ====================================================== */}
          <Panel className="p-10 min-h-[260px]">
            {active === "Vision" && (
              <div className="space-y-6 max-w-[720px]">
                <h3 className="text-xl font-medium">
                  Vision
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  I focus on building machine learning systems that survive
                  contact with reality. That means reproducibility, automation,
                  observability, and engineering discipline — not just models
                  that look good in notebooks.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Production ML", "Reproducibility", "System Design"].map(x => (
                    <span
                      key={x}
                      className="px-4 py-1.5 rounded-full text-sm
                                 bg-violet-500/10 text-violet-300"
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
                  icon={<Cpu />}
                  title="ML Systems & MLOps"
                  text="End-to-end pipelines, automated retraining, versioning, and monitoring."
                />
                <ExpertiseCard
                  icon={<Layers />}
                  title="Data & Infrastructure"
                  text="Scalable data flows, containerized services, CI/CD, and cloud-native setups."
                />
                <ExpertiseCard
                  icon={<Brain />}
                  title="Applied Machine Learning"
                  text="Practical modeling choices optimized for stability, not leaderboard scores."
                />
                <ExpertiseCard
                  icon={<Sparkles />}
                  title="Engineering Mindset"
                  text="Clarity, documentation, and systems that work six months later."
                />
              </div>
            )}

            {active === "Focus" && (
              <div className="space-y-6 max-w-[720px]">
                <h3 className="text-xl font-medium">
                  What I focus on
                </h3>

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

          {/* ======================================================
              STATS
          ====================================================== */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="10+" label="Production Systems" />
            <StatCard value="95%" label="Iteration Time Reduced" />
            <StatCard value="3+" label="Years Hands-on ML" />
            <StatCard value="∞" label="Focus on Reliability" />
          </div>

        </div>
      </Container>
    </main>
  )
}

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
    <div className="
      rounded-xl p-6
      bg-white/5 border border-white/10
      space-y-3
    ">
      <div className="text-violet-400">{icon}</div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-text-secondary">{text}</p>
    </div>
  )
}

function StatCard({
  value,
  label
}: {
  value: string
  label: string
}) {
  return (
    <Panel className="p-6 text-center space-y-2">
      <p className="text-3xl font-semibold">{value}</p>
      <p className="text-sm text-text-secondary">{label}</p>
    </Panel>
  )
}
