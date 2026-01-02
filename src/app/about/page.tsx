import { Reveal } from "@/components/motion/Reveal"

export default function AboutPage() {
  return (
    <main className="pt-24 px-6">
      <div className="mx-auto max-w-6xl space-y-20">
        {/* Intro */}
        <section className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            About
          </h1>
          <p className="text-base text-foreground/80">
            I’m a data science student finishing my bachelor’s degree, with a
            strong interest in applied machine learning and how models behave
            when they meet real systems.
          </p>
        </section>

        {/* How I work */}
        <Reveal>
          <section className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-semibold">
              How I work
            </h2>

            <p className="text-base text-foreground/80">
              I enjoy working on projects where I can combine analytical
              thinking with software engineering. Rather than focusing only on
              model performance, I care about structure, reproducibility, and
              maintainability.
            </p>

            <p className="text-base text-foreground/80">
              Through my studies and projects, I’ve learned the importance of
              clear boundaries between experimentation, implementation, and
              deployment — especially in machine learning workflows.
            </p>
          </section>
        </Reveal>

        {/* Skills */}
        <Reveal>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Skills & tools
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-border p-6">
                <h3 className="text-xl font-medium">Languages</h3>
                <ul className="mt-3 space-y-1 text-sm text-foreground/80">
                  <li>Python (proficient)</li>
                  <li>SQL (basic)</li>
                  <li>HTML / CSS (basic)</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border p-6">
                <h3 className="text-xl font-medium">Frameworks & tools</h3>
                <ul className="mt-3 space-y-1 text-sm text-foreground/80">
                  <li>Flask</li>
                  <li>Git</li>
                  <li>Basic frontend tooling</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border p-6">
                <h3 className="text-xl font-medium">Areas of focus</h3>
                <ul className="mt-3 space-y-1 text-sm text-foreground/80">
                  <li>Machine learning fundamentals</li>
                  <li>Automation and pipelines</li>
                  <li>Data analysis and experimentation</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Background / Now */}
        <Reveal>
          <section className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-semibold">
              Background
            </h2>

            <p className="text-base text-foreground/80">
              I’m currently based in Frankfurt and finishing my bachelor’s
              degree in Data Science at UiT Narvik. Alongside my studies, I work
              in customer service while building technical projects in my own
              time.
            </p>

            <p className="text-base text-foreground/80">
              I’m looking for opportunities where I can continue developing my
              skills in machine learning, data analysis, and software
              development, and contribute to real-world projects while
              learning from more experienced engineers.
            </p>
          </section>
        </Reveal>
      </div>
    </main>
  )
}
