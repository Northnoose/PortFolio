import { Reveal } from "@/components/motion/Reveal"

export default function ExperiencePage() {
  return (
    <main className="pt-24 px-6">
      <div className="mx-auto max-w-6xl space-y-20">
        {/* Intro */}
        <section className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            Experience
          </h1>
          <p className="text-base text-foreground/80">
            My background so far is mainly academic, complemented by part-time
            work alongside my studies.
          </p>
        </section>

        {/* Education */}
        <Reveal>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Education</h2>

            <div className="rounded-lg border border-border p-6 max-w-3xl">
              <div className="space-y-1">
                <p className="text-sm text-muted">2022 – Present</p>
                <h3 className="text-xl font-medium">
                  Bachelor’s Degree in Data Science
                </h3>
                <p className="text-sm text-foreground/80">
                  UiT – The Arctic University of Norway, Narvik
                </p>
              </div>

              <p className="mt-4 text-base text-foreground/80">
                Focused on machine learning, data analysis, and applied
                programming. My bachelor project explores automation and
                structure in machine learning workflows through an MLOps
                pipeline.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Work */}
        <Reveal>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Work experience</h2>

            <div className="rounded-lg border border-border p-6 max-w-3xl">
              <div className="space-y-1">
                <p className="text-sm text-muted">2023 – Present</p>
                <h3 className="text-xl font-medium">
                  Customer Service / Reception
                </h3>
                <p className="text-sm text-foreground/80">
                  Frankfurt, Germany
                </p>
              </div>

              <p className="mt-4 text-base text-foreground/80">
                Working part-time alongside my studies, gaining experience in
                communication, responsibility, and handling day-to-day
                operations in a customer-facing role.
              </p>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  )
}
