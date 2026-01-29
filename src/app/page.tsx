import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { Panel } from "@/components/ui/Panel"
import { projects } from "@/content/projects"
import Link from "next/link"
import TextType from "@/components/ui/TextType"
import { BaseBackground } from "@/components/ui/BaseBackground"
import MagicBentoLite, { BentoItem } from "@/components/ui/MagicBentoLite"
import HowIWorkPixel from "@/components/sections/HowIWorkPixel"
import { Footer } from "@/components/ui/Footer"

import { Sparkles, Globe, Cpu, Users } from "lucide-react"
import Particles from "@/components/ui/Particles"

const bentoItems = [
  {
    title: "Client-First Approach",
    description: "Building trust through transparent communication and collaboration.",
    icon: <Users size={20} />,
  },
  {
    title: "Modern Tech Stack",
    description: "Next.js, TypeScript, Python, FastAPI, Docker, CI/CD and ML tooling.",
    icon: <Cpu size={20} />,
    span: "big",
  },
  {
    title: "AI-Powered Solutions",
    description: "Applied machine learning, automation and production-grade MLOps systems.",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Global Flexibility",
    description: "Comfortable collaborating across time zones and async-first teams.",
    icon: <Globe size={20} />,
  },
] satisfies BentoItem[]

export default function HomePage() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <main className="relative min-h-screen overflow-hidden">
      <BaseBackground />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={["#3c2277"]}
            particleCount={400}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles
            disableRotation
            pixelRatio={typeof window !== "undefined"
              ? Math.min(window.devicePixelRatio, 1.5)
              : 1}
          />
        </div>

        <Container className="relative z-10">
          <div className="space-y-6">
            <div className="relative left-1/2 -translate-x-1/2 w-fit">
              <TextType
                as="h1"
                className="
                  block text-center
                  min-w-[28ch]
                  text-7xl md:text-8xl font-bold leading-tight
                  bg-[linear-gradient(90deg,#ffffff_0%,#d6d6ff_28%,#a78bfa_55%,#60a5fa_100%)]
                  bg-clip-text text-transparent
                  drop-shadow-[0_0_28px_rgba(99,102,241,0.28)]
                "
                text={[
                  "Hey! My name is Steffen",
                  "Hei! Jeg heter Steffen",
                  "Hola! Me llamo Steffen",
                  "Bonjour! Je m'appelle Steffen",
                  "Ciao! Mi chiamo Steffen",
                  "Hej! Jag heter Steffen",
                  "Hallo! Ich heiße Steffen",
                  "你好！我叫 Steffen",
                  "Hej! Jeg hedder Steffen",
                  "नमस्ते! मेरा नाम Steffen है",
                ]}
                typingSpeed={75}
                deletingSpeed={50}
                pauseDuration={3500}
                showCursor
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-medium text-center text-[hsl(265_45%_85%)]">
              Computer Engineer & AI Engineer
            </h2>

            <p className="text-lg text-text-secondary text-center max-w-[720px] mx-auto">
              Applied AI, ML systems & infrastructure — from prototype to production
            </p>

            <div className="pt-4 flex gap-4 justify-center">
              <Link
                href="/projects"
                className="px-6 py-3 rounded-md font-medium bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg hover:opacity-90 transition"
              >
                See my work
              </Link>

              <Link
                href="/about"
                className="px-6 py-3 rounded-md font-medium border border-white/20 text-white/80 hover:bg-white/5 transition"
              >
                About me
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* OVERVIEW */}
      <Container>
        <Section kicker="Overview" title="What I Do">
          <MagicBentoLite items={bentoItems} className="mt-12" />
        </Section>
      </Container>

      {/* HOW I WORK */}
      <Container>
        <Section kicker="Process" title="How I Work">
          <HowIWorkPixel />
        </Section>
      </Container>

      {/* PROJECTS */}
      <Container>
        <Section kicker="Selected work" title="Projects">
          <ProjectsGrid projects={featuredProjects} />
        </Section>
      </Container>

      {/* ======================================================
    CONTACT / SERVICE INQUIRY
   ====================================================== */}
<section id="contact" className="relative py-32 scroll-mt-32">

  <Container>
    <div className="max-w-[820px] mx-auto text-center space-y-10">

      {/* Headline */}
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Ready to take{" "}
          <span className="text-violet-400">your digital presence</span>{" "}
          to the next level?
        </h2>

        <p className="text-text-secondary text-lg max-w-[640px] mx-auto">
          Reach out and let’s discuss how I can help you design, build,
          or scale reliable AI and ML systems.
        </p>
      </div>

          {/* Form */}
        <Panel
          className="
            p-10 md:p-12
            border-0
            bg-transparent
            shadow-none
            relative
            transition-all duration-300
            hover:-translate-y-1
          "
        >
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute inset-0 -z-10
              rounded-2xl
              bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_70%)]
              opacity-0
              blur-2xl
              transition-opacity duration-300
              group-hover:opacity-100
            "
          />

          <form className="space-y-6 text-left">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg bg-black/40 border border-white/10
                            px-4 py-3 text-sm text-white
                            placeholder:text-white/40
                            focus:outline-none focus:border-violet-400/60"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg bg-black/40 border border-white/10
                            px-4 py-3 text-sm text-white
                            placeholder:text-white/40
                            focus:outline-none focus:border-violet-400/60"
                />
              </div>

              <textarea
                rows={5}
                placeholder="Tell me about your project"
                className="w-full rounded-lg bg-black/40 border border-white/10
                          px-4 py-3 text-sm text-white
                          placeholder:text-white/40
                          focus:outline-none focus:border-violet-400/60
                          resize-none"
              />

              <select
                className="w-full rounded-lg bg-black/40 border border-white/10
                          px-4 py-3 text-sm text-white/80
                          focus:outline-none focus:border-violet-400/60"
              >
                <option>Select project type (optional)</option>
                <option>ML / AI system</option>
                <option>MLOps / Infrastructure</option>
                <option>Data engineering</option>
                <option>Technical consulting</option>
                <option>Other</option>
              </select>

              <div className="pt-4">
                <button
                  type="submit"
                  className="
                    w-full py-3 rounded-lg font-medium
                    bg-gradient-to-r from-indigo-500 to-violet-500
                    text-white
                    shadow-lg
                    hover:opacity-90 transition
                  "
                >
                  Send message
                </button>
              </div>
            </form>
          </Panel>

          {/* Secondary CTA */}
          <div className="pt-4">
            <a
              href="mailto:steffen@steffennordnes.dev"
              className="text-sm text-violet-400 hover:underline inline-flex items-center gap-2"
            >
              Schedule a call →
            </a>
          </div>
        </div>
      </Container>
    </section>

    </main>
  )
}
