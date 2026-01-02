import Link from "next/link"
import { caseStudies } from "@/content/caseStudies"
import { Reveal } from "@/components/motion/Reveal"

export default function CaseStudiesPage() {
  return (
    <main className="pt-24 px-6">
      <div className="mx-auto max-w-6xl space-y-20">
        {/* Intro */}
        <section className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            Case studies
          </h1>
          <p className="text-base text-foreground/80">
            Selected deep dives into projects where I focus on architecture,
            trade-offs, and how systems behave outside of theory.
          </p>
        </section>

        {/* List */}
        <section className="space-y-12">
          {caseStudies.map((study) => (
            <Reveal key={study.slug}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="block max-w-4xl rounded-lg border border-border p-8 transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background"
              >
                <div className="space-y-4">
                  <p className="text-sm text-muted">
                    Case study · {study.domain}
                  </p>

                  <h2 className="text-2xl font-semibold">
                    {study.title}
                  </h2>

                  <p className="text-base text-foreground/80">
                    {study.summary}
                  </p>

                  <p className="text-sm text-primary pt-2">
                    Read case study →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </section>
      </div>
    </main>
  )
}
