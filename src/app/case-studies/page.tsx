"use client"

import { Container } from "@/components/ui/Container"
import { Panel } from "@/components/ui/Panel"
import { CaseStudyContent } from "@/components/sections/CaseStudyContent"
import { caseStudies, CaseStudy } from "@/content/caseStudies"
import { useState, useEffect } from "react"
import { useModal } from "@/components/providers/ModalProvider"
import { BaseBackground } from "@/components/ui/BaseBackground"
import Particles from "@/components/ui/Particles"

import { RevealGroup } from "@/components/motion/RevealGroup"
import { RevealItem } from "@/components/motion/RevealItem"

export default function CaseStudiesPage() {
  const { openModal } = useModal()
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)

  /* ======================================================
     HANDLE URL HASH (DEEP LINKING)
  ====================================================== */
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash.startsWith("case-study=")) {
        const slug = hash.split("=")[1]
        const cs = caseStudies.find(c => c.slug === slug)
        if (cs) {
          setSelectedSlug(slug)
          openModal(<CaseStudyContent caseStudy={cs} />, () => {
            setSelectedSlug(null)
            window.location.hash = ""
          })
        }
      } else if (hash === "") {
        setSelectedSlug(null)
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [openModal])

  const openCaseStudy = (cs: CaseStudy) => {
    setSelectedSlug(cs.slug)
    window.location.hash = `case-study=${cs.slug}`
    openModal(<CaseStudyContent caseStudy={cs} />, () => {
      setSelectedSlug(null)
      window.location.hash = ""
    })
  }

  return (
    <main className="pt-8 pb-32 relative overflow-hidden">
      <BaseBackground />

      <Container>
        <section className="relative">

          {/* ================= HERO ================= */}
          <RevealGroup>
            <RevealItem>
              <div className="relative text-center max-w-3xl mx-auto px-6 mt-24">

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

                <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
                  Case <span className="text-violet-400">Studies</span>
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
                  In-depth explorations of real-world systems, design decisions,
                  constraints, and trade-offs behind production-grade solutions.
                </p>
              </div>
            </RevealItem>
          </RevealGroup>

          {/* Particles */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Particles
              particleColors={["#3c2277"]}
              particleCount={100}
              particleSpread={10}
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

          {/* ================= LIST ================= */}
          <RevealGroup>
            <div className="relative mt-16 space-y-10">
              {caseStudies.map(cs => (
                <RevealItem key={cs.slug}>
                  <button
                    onClick={() => openCaseStudy(cs)}
                    className="w-full text-left transition-transform hover:scale-[1.02]"
                  >
                    <Panel
                      className="
                        group
                        relative p-8 space-y-4
                        rounded-2xl
                        border border-white/10
                        bg-black/60
                        backdrop-blur-xl
                        shadow-[0_0_40px_rgba(0,0,0,0.6)]
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:border-violet-400/40
                      "
                    >
                      {/* Glow */}
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

                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-widest text-text-muted">
                          {cs.domain}
                        </p>

                        <h3
                          className="
                            text-xl md:text-2xl
                            font-semibold
                            transition-colors duration-300
                            group-hover:text-violet-400
                          "
                        >
                          {cs.title}
                        </h3>
                      </div>

                      <p className="text-text-secondary leading-relaxed">
                        {cs.summary}
                      </p>

                      <div
                        className="
                          inline-flex items-center gap-2
                          text-sm font-medium text-violet-400
                          group-hover:gap-3
                          transition-all duration-300
                        "
                      >
                        <span>Read case study</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </Panel>
                  </button>
                </RevealItem>
              ))}
            </div>
          </RevealGroup>

        </section>
      </Container>
    </main>
  )
}
