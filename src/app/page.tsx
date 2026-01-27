import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { Panel } from "@/components/ui/Panel"
import { projects } from "@/content/projects"
import Link from "next/link"
import TextType from "@/components/ui/TextType"
import { BaseBackground } from "@/components/ui/BaseBackground"
import { HeroLightOverlay } from "@/components/ui/HeroLightOverlay"

export default function HomePage() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ======================================================
          ONE global background (never changes)
         ====================================================== */}
      <BaseBackground />

      {/* ======================================================
          HERO
         ====================================================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Hero-only animated light (fades out) */}
        <HeroLightOverlay />

        <Container className="relative z-10">
          <div className="space-y-6">
            {/* Centered title (viewport-centered, stable) */}
            <div className="relative left-1/2 -translate-x-1/2 w-fit">
              <TextType
                as="h1"
                className="
                  block text-center
                  min-w-[28ch]
                  text-6xl md:text-7xl font-bold leading-tight
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
                cursorCharacter="|"
                cursorBlinkDuration={0.5}
                variableSpeed={{ min: 60, max: 120 }}
              />
            </div>

            <p className="text-lg text-text-secondary text-center max-w-[720px] mx-auto">
              I reduced iteration time from 4 hours to 12 minutes.
              Built systems handling 2B+ daily events.
              Prevented $40k in bad predictions through monitoring.
            </p>

            <div className="pt-4 flex gap-4 justify-center">
              <Link
                href="/projects"
                className="
                  px-6 py-3 rounded-md font-medium
                  bg-gradient-to-r from-indigo-500 to-violet-500
                  text-white shadow-lg
                  hover:opacity-90 transition
                "
              >
                See my work
              </Link>

              <Link
                href="/about"
                className="
                  px-6 py-3 rounded-md font-medium
                  border border-white/20 text-white/80
                  hover:bg-white/5 transition
                "
              >
                About me
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================
          CONTENT BELOW HERO (same background, no animation)
         ====================================================== */}
      <Container>
        <Section kicker="Selected work" title="Projects">
          <ProjectsGrid projects={featuredProjects} />
        </Section>
      </Container>

      <Container>
        <div className="py-20">
          <Panel className="p-12 space-y-6 text-center">
            <h2 className="text-3xl font-medium">
              Let's work together
            </h2>

            <p className="text-text-secondary max-w-[500px] mx-auto">
              I'm looking for ML systems roles where engineering discipline matters.
              If you're building production systems and scaling ML infrastructure,
              let's talk.
            </p>

            <div className="pt-4">
              <a
                href="mailto:steffen@steffennordnes.dev"
                className="
                  inline-block px-6 py-3 rounded-md font-medium
                  bg-text-primary text-bg-page
                  hover:opacity-90 transition
                "
              >
                Get in touch
              </a>
            </div>
          </Panel>
        </div>
      </Container>
    </main>
  )
}
