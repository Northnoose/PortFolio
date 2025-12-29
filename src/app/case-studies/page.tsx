import { Reveal } from "@/components/motion/Reveal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Deep dives into selected projects, focusing on architecture, decision-making, and real-world constraints.",
}

export default function CaseStudies() {
  return (
    <main className="pt-24 px-6">
      <div className="mx-auto max-w-6xl space-y-12">
        <Reveal>
          <header>
            <h1 className="text-4xl font-semibold tracking-tight">
              Case Studies
            </h1>
          </header>
        </Reveal>

        {/* SENERE:
        {caseStudies.map((study) => (
          <Reveal key={study.slug}>
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
        */}
      </div>
    </main>
  )
}
