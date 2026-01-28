import { notFound } from "next/navigation"
import Link from "next/link"

import { Container } from "@/components/ui/Container"
import { Panel } from "@/components/ui/Panel"
import { Tag } from "@/components/ui/Tag"
import { BaseBackground } from "@/components/ui/BaseBackground"

import { projects } from "@/content/projects"

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="pt-40 pb-32 relative">
      <BaseBackground />

      <Container>
        {/* ======================================================
            Back link
        ====================================================== */}
        <Link
          href="/projects"
          className="text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          ← Back to projects
        </Link>

        {/* ======================================================
            HERO
        ====================================================== */}
        <header className="relative mt-12 max-w-3xl space-y-6">
          {/* Subtle glow */}
          <div
            className="
              absolute -inset-x-8 -inset-y-6 -z-10
              bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_70%)]
              blur-3xl
            "
          />

          <h1
            className="
              text-4xl md:text-5xl font-semibold leading-tight
              bg-clip-text text-transparent
              bg-gradient-to-r
              from-white
              via-white
              to-indigo-300
            "
          >
            {project.title}
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map(tag => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </header>

        {/* ======================================================
            CONTENT
        ====================================================== */}
        <div className="mt-24 grid gap-16 lg:grid-cols-[1fr_320px]">
          {/* ------------------------------
              MAIN NARRATIVE
          ------------------------------ */}
          <article className="space-y-20">
            {/* Context & Problem */}
            <section className="relative pl-6 space-y-4">
              <div className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-indigo-400/60 to-transparent" />
              <h2 className="text-xl font-semibold text-indigo-200">
                Context & Problem
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* Solution */}
            <section className="relative pl-6 space-y-4">
              <div className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-indigo-400/60 to-transparent" />
              <h2 className="text-xl font-semibold text-indigo-200">
                Solution & Approach
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* Highlights */}
            {project.highlights?.length > 0 && (
              <section className="relative pl-6 space-y-6">
                <div className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-indigo-400/60 to-transparent" />
                <h2 className="text-xl font-semibold text-indigo-200">
                  Key Highlights
                </h2>
                <ul className="space-y-4">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span
                        className="
                          mt-2 h-2 w-2 rounded-full
                          bg-gradient-to-br from-indigo-400 to-violet-500
                          shadow-[0_0_12px_rgba(99,102,241,0.45)]
                        "
                      />
                      <span className="text-text-secondary">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>

          {/* ------------------------------
              SIDE META (STICKY)
          ------------------------------ */}
          <aside className="lg:sticky lg:top-32 h-fit">
            <Panel
              className="
                relative p-6 space-y-6
                bg-gradient-to-b
                from-bg-elevated
                via-bg-elevated
                to-indigo-950/30
              "
            >
              {/* Edge glow */}
              <div
                className="
                  absolute inset-0 -z-10
                  bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_70%)]
                  blur-2xl
                "
              />

              {/* Tech */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-text-muted font-semibold">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="
                        inline-flex items-center
                        px-2.5 py-0.5 rounded-full
                        text-xs font-medium
                        bg-bg-elevated
                        border border-border-soft
                        text-text-secondary
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.repoUrl || project.demoUrl) && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-text-muted font-semibold">
                    Links
                  </p>
                  <div className="flex flex-col gap-2 text-sm">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-300 hover:underline"
                      >
                        → GitHub Repository
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-300 hover:underline"
                      >
                        → Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </Panel>
          </aside>
        </div>
      </Container>
    </main>
  )
}
