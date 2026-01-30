import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import { Container } from "@/components/ui/Container"
import { Panel } from "@/components/ui/Panel"
import { Tag } from "@/components/ui/Tag"
import { BaseBackground } from "@/components/ui/BaseBackground"

import { projects } from "@/content/projects"

import { RevealGroup } from "@/components/motion/RevealGroup"
import { RevealItem } from "@/components/motion/RevealItem"
import Particles from "@/components/ui/Particles"

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) notFound()

  const images = project.images?.slice(0, 2) ?? []

  return (
    <main className="pt-40 pb-32 relative">
      <BaseBackground />
      {/* Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={['#3c2277']}
          particleCount={100}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles
          disableRotation
          pixelRatio={
            typeof window !== 'undefined'
              ? Math.min(window.devicePixelRatio, 1.5)
              : 1
          }
        />
      </div>

      <Container>
        {/* ======================================================
            BACK LINK
        ====================================================== */}
        <RevealItem>
          <Link
            href="/projects"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            ← Back to projects
          </Link>
        </RevealItem>

        {/* ======================================================
            HERO
        ====================================================== */}
        <RevealGroup>
          <RevealItem>
            <header className="relative mt-12 max-w-3xl space-y-6">
              <div
                aria-hidden
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
          </RevealItem>
        </RevealGroup>

        {/* ======================================================
            CONTENT
        ====================================================== */}
        <div className="mt-24 grid gap-16 lg:grid-cols-[1fr_320px]">
          {/* =============================
              MAIN NARRATIVE
          ============================= */}
          <RevealGroup>
            <article className="space-y-20">
              <RevealItem>
                <section className="relative pl-6 space-y-4">
                  <div className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-indigo-400/60 to-transparent" />
                  <h2 className="text-xl font-semibold text-indigo-200">
                    Context & Problem
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {project.problem}
                  </p>
                </section>
              </RevealItem>

              <RevealItem>
                <section className="relative pl-6 space-y-4">
                  <div className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-indigo-400/60 to-transparent" />
                  <h2 className="text-xl font-semibold text-indigo-200">
                    Solution & Approach
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {project.solution}
                  </p>
                </section>
              </RevealItem>

              {project.highlights?.length > 0 && (
                <RevealItem>
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
                </RevealItem>
              )}
            </article>
          </RevealGroup>

          {/* =============================
              SIDE META
          ============================= */}
          <aside className="lg:sticky lg:top-32 self-start">
          <RevealGroup>
            <RevealItem>
                <Panel
                  className="
                    relative p-6 space-y-6
                    bg-gradient-to-b
                    from-bg-elevated
                    via-bg-elevated
                    to-indigo-950/30
                  "
                >
                  <div
                    aria-hidden
                    className="
                      absolute inset-0 -z-10
                      bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_70%)]
                      blur-2xl
                    "
                  />

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
            </RevealItem>
          </RevealGroup>
          </aside>
                  {/* ======================================================
            PROJECT IMAGES (0–2)
        ====================================================== */}
        {images.length > 0 && (
          <RevealGroup>
            <RevealItem>
              <section
                className="
                  mt-16
                  grid gap-6
                  md:grid-cols-2
                "
              >
                {images.map((image, idx) => (
                  <div
                    key={idx}
                    className="
                      group relative overflow-hidden rounded-xl
                      border border-white/10
                      bg-bg-elevated
                      transition-transform duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
                    "
                  >
                    <Image
                      src={image.src}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover"
                    />
                    <div
                      className="
                        pointer-events-none
                        absolute inset-x-0 bottom-0
                        bg-gradient-to-t from-black/80 to-black/20
                        px-4 py-3
                      "
                    >
                      <p className="text-sm text-white/90">
                        {image.caption}
                      </p>
                    </div>

                  </div>
                ))}
              </section>
            </RevealItem>
          </RevealGroup>
        )}
        </div>
      </Container>
    </main>
  )
}
