import Link from "next/link"
import { Reveal } from "@/components/motion/Reveal"

export default function HomePage() {
  return (
    <main className="pt-24 px-6">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Hero */}
        <section className="space-y-6">
          <Reveal>
            <div className="space-y-4">
              <p className="text-sm text-muted">
                Based in Frankfurt · BSc Data Science (in progress)
              </p>

              <h1 className="text-4xl font-semibold tracking-tight max-w-3xl">
                Applied AI/ML in Python — built with a focus on structure,
                maintainability, and real-world constraints.
              </h1>

              <p className="text-base text-foreground/80 max-w-2xl">
                I’m finishing my bachelor’s in Data Science at UiT Narvik and I
                build projects that bridge machine learning and software
                engineering — from automation and pipelines to user-facing tools.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background"
                >
                  View projects
                </Link>

                <Link
                  href="/case-studies/automated-mlops-pipeline"
                  className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background"
                >
                  Read MLOps case study →
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Focus */}
        <section className="space-y-6">
          <Reveal>
            <header className="space-y-2">
              <h2 className="text-2xl font-semibold">Focus</h2>
              <p className="text-base text-foreground/80 max-w-2xl">
                I prioritize clarity and repeatability — building systems that
                are easy to understand, test, and evolve.
              </p>
            </header>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Applied ML",
                text: "Practical ML projects with emphasis on evaluation, iteration, and results.",
              },
              {
                title: "Automation & MLOps",
                text: "Reducing manual steps with pipelines, versioning, and reproducible workflows.",
              },
              {
                title: "Developer-friendly tools",
                text: "Web-backed utilities and interfaces that make complex workflows usable.",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="rounded-lg border border-border p-6 transition-colors hover:border-primary/40">
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm text-foreground/80">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Featured work (CV-consistent + required MLOps) */}
        <section className="space-y-6">
          <Reveal>
            <header className="space-y-2">
              <h2 className="text-2xl font-semibold">Featured work</h2>
              <p className="text-base text-foreground/80 max-w-2xl">
                A small selection that represents how I build: structured,
                documented, and designed to scale.
              </p>
            </header>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <Link
                href="/case-studies/automated-mlops-pipeline"
                className="block rounded-lg border border-border p-6 transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background"
              >
                <p className="text-xs text-muted">Bachelor work · Case study</p>
                <h3 className="mt-2 text-xl font-medium">Automated MLOps Pipeline</h3>
                <p className="mt-3 text-sm text-foreground/80">
                  End-to-end pipeline focused on automation, reproducibility, and maintainability.
                </p>
                <p className="mt-4 text-sm text-primary">Read case study →</p>
              </Link>
            </Reveal>

            <Reveal>
              <Link
                href="/projects"
                className="block rounded-lg border border-border p-6 transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background"
              >
                <p className="text-xs text-muted">School project</p>
                <h3 className="mt-2 text-xl font-medium">Blog Project (Flask)</h3>
                <p className="mt-3 text-sm text-foreground/80">
                  A blog built with Python, SQL, and HTML — focused on backend fundamentals and data handling.
                </p>
                <p className="mt-4 text-sm text-primary">See projects →</p>
              </Link>
            </Reveal>

            <Reveal>
              <Link
                href="/projects"
                className="block rounded-lg border border-border p-6 transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background"
              >
                <p className="text-xs text-muted">Ongoing</p>
                <h3 className="mt-2 text-xl font-medium">Traveling App (React Native)</h3>
                <p className="mt-3 text-sm text-foreground/80">
                  An interactive app providing real-time data and personalized travel recommendations.
                </p>
                <p className="mt-4 text-sm text-primary">See projects →</p>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Skills + Now */}
        <section className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Skills</h2>
              <p className="text-base text-foreground/80">
                Strong in Python, growing into full-stack and production ML workflows.
              </p>

              <ul className="flex flex-wrap gap-2">
                {[
                  "Python (Proficient)",
                  "SQL (Beginner)",
                  "HTML/CSS (Beginner)",
                  "Flask",
                  "Git",
                  "Data Analysis",
                  "Machine Learning (Introductory)",
                ].map((s) => (
                  <li key={s} className="text-xs px-2 py-1 rounded-md bg-muted/20 text-muted">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-4 rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold">Now</h2>
              <p className="text-base text-foreground/80">
                Currently working in receptionist/customer service in Frankfurt while finishing my degree.
                I’m looking for opportunities in ML, data analysis, and software development.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background"
                >
                  More about me →
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  )
}
