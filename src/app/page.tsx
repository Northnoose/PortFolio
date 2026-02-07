"use client"
import { useEffect, useState } from "react"
import { Container } from "@/components/ui/Container"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { Panel } from "@/components/ui/Panel"
import { projects } from "@/content/projects"
import Link from "next/link"
import TextType from "@/components/ui/TextType"
import { BaseBackground } from "@/components/ui/BaseBackground"
import HowIWorkPixel from "@/components/sections/HowIWorkPixel"

import { Sparkles, Globe, Cpu, Users } from "lucide-react"
import Particles from "@/components/ui/Particles"
import { HeroSectionHeader } from "@/components/ui/HeroSectionHeader"

import { RevealGroup } from "@/components/motion/RevealGroup"
import { RevealItem } from "@/components/motion/RevealItem"
import HeroBentoGrid from "@/components/sections/HeroBentoGrid"
import { clsx } from "clsx"



function TimePill({
  city,
  tz,
  grow,
}: {
  city: string
  tz: string
  grow?: boolean
}) {

  return (
    <div
      className={clsx(
        "flex items-center justify-between gap-2",
        "px-4 py-2",
        "rounded-full",
        "bg-white/5 border border-white/15",
        "text-xs text-white/80",
        grow && "flex-1"
      )}

    >
      <span>{city}</span>
      <span className="text-violet-300 font-medium">{tz}</span>
    </div>
  )
}


export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)")
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])
  const featuredProjects = projects.filter(p => p.featured)

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    const form = e.currentTarget

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error()
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }


  return (
    <main className="relative min-h-screen overflow-hidden">
      <BaseBackground />

      {/* ======================================================
         HERO
      ====================================================== */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={["#3c2277"]}
            particleCount={isMobile ? 160 : 400}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={isMobile ? 70 : 100}
            moveParticlesOnHover={false}
            alphaParticles
            disableRotation
            pixelRatio={
              typeof window !== "undefined"
                ? Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.5)
                : 1
            }
          />

        </div>

        <Container className="relative z-10">
          <RevealGroup>
            <RevealItem>
              <div
                className="
                  mx-auto
                  w-full
                  md:relative md:left-1/2 md:-translate-x-1/2 md:w-fit
                "
              >
                <TextType
                  as="h1"
                  className="
                    block text-center
                    min-w-0 md:min-w-[28ch]
                    px-2 md:px-0
                    text-4xl sm:text-5xl md:text-8xl
                    font-bold leading-tight
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
            </RevealItem>

            <RevealItem>
              <h2 className="text-2xl md:text-3xl font-medium text-center text-[hsl(265_45%_85%)]">
                Computer Engineer & AI Engineer
              </h2>
            </RevealItem>

            <RevealItem>
              <p className="text-lg text-text-secondary text-center max-w-[720px] mx-auto">
                Applied AI, ML systems & infrastructure — from prototype to production
              </p>
            </RevealItem>

            <RevealItem>
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
            </RevealItem>
          </RevealGroup>
        </Container>
      </section>

      {/* ======================================================
         WHAT I DO
      ====================================================== */}
      <section className="relative py-20">
        <Container>
          <RevealGroup>
            <RevealItem>
              <HeroSectionHeader
                title="What"
                highlight="I Do"
                subtitle="A focused overview of how I design, build, and deliver production-ready systems."
              />
            </RevealItem>

            <RevealItem>
              <HeroBentoGrid
                leftTop={{
                  title: "Client-First Approach",
                  description:
                    "Building trust through transparent communication and collaboration.",
                  icon: <Users size={20} />,
                  href: "/experience",
                }}

                leftBottom={{
                  title: "Available Time Zones",
                  icon: <Globe size={20} />,
                  content: (
                    <div className="pt-3 h-full flex flex-col gap-2 min-h-0">
                      <TimePill city="Oslo" tz="CET" grow />
                      <TimePill city="London" tz="GMT" grow />
                      <TimePill city="Istanbul" tz="TRT" grow />
                    </div>
                  ),
                }}

                center={{
                  title: "Modern Tech Stack",
                  description:
                    "Technologies and tools I use to build innovative solutions.",
                  icon: <Cpu size={20} />,
                  content: (
                    <div className="pt-10 space-y-6">

                      {/* Divider */}
                      <div className="h-px w-full bg-white/10" />

                      {/* Tech grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          "Next.js",
                          "React",
                          "TypeScript",
                          "JavaScript",
                          "Python",
                          "FastAPI",
                          "Node.js",
                          "Framer",
                        ].map(t => (
                          <div
                            key={t}
                            className="
                              rounded-xl px-4 py-4
                              text-sm
                              bg-white/5
                              border border-white/15
                              text-white/80
                              text-center
                            "
                          >
                            {t}
                          </div>
                        ))}
                      </div>

                    </div>
                  ),
                }}

                rightTop={{
                  title: "AI-Powered Solutions",
                  description:
                    "Intelligent automation, ML pipelines and LLM integrations.",
                  icon: <Sparkles size={20} />,
                  href: "/case-studies",
                }}

                rightBottom={{
                  title: "Ready to Collaborate",
                  description:
                    "Let’s create something amazing together.",
                  icon: <Sparkles size={20} />,
                  href: "#contact",
                }}
              />


            </RevealItem>
          </RevealGroup>
        </Container>
      </section>

      {/* ======================================================
         HOW I WORK
      ====================================================== */}
      <section className="relative py-20">
        <RevealGroup>
          <RevealItem>
            <Container>
              <HeroSectionHeader
                title="How"
                highlight="I Work"
                subtitle="A structured, production-first approach from architecture to operation."
              />
            </Container>
          </RevealItem>

          <RevealItem>
            <div
              className="
                relative mx-auto mt-24 max-w-[1600px]
                px-6 md:px-12
              "
            >
              <HowIWorkPixel />
            </div>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* ======================================================
         PROJECTS
      ====================================================== */}
      <section className="relative py-20">
        <Container>
          <RevealGroup>
            <RevealItem>
              <HeroSectionHeader
                title="Recent"
                highlight="Projects"
                subtitle="Case studies demonstrating real-world constraints, engineering decisions, and measurable impact."
              />
            </RevealItem>

            <RevealItem>
              <ProjectsGrid projects={featuredProjects} />
            </RevealItem>
          </RevealGroup>
        </Container>
      </section>

{/* ======================================================
    CONTACT / SERVICE INQUIRY
   ====================================================== */}
  <section id="contact" className="relative py-32 scroll-mt-32">

  
  <Container>
    <RevealGroup>
    <RevealItem>
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

          <form className="space-y-6 text-left" onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg bg-black/40 border border-white/10
                            px-4 py-3 text-sm text-white
                            placeholder:text-white/40
                            focus:outline-none focus:border-violet-400/60"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full rounded-lg bg-black/40 border border-white/10
                            px-4 py-3 text-sm text-white
                            placeholder:text-white/40
                            focus:outline-none focus:border-violet-400/60"
                />
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project"
                required
                className="w-full rounded-lg bg-black/40 border border-white/10
                          px-4 py-3 text-sm text-white
                          placeholder:text-white/40
                          focus:outline-none focus:border-violet-400/60
                          resize-none"
              />

              <select
                name="projectType"
                className="w-full rounded-lg bg-black/40 border border-white/10
                          px-4 py-3 text-sm text-white/80
                          focus:outline-none focus:border-violet-400/60"
              >
                <option>Select project type (optional)</option>
                <option>Website</option>
                <option>ML / AI system</option>
                <option>MLOps / Infrastructure</option>
                <option>Data engineering</option>
                <option>Technical consulting</option>
                <option>Other</option>
              </select>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full py-3 rounded-lg font-medium
                    bg-gradient-to-r from-indigo-500 to-violet-500
                    text-white
                    shadow-lg
                    hover:opacity-90 transition
                    disabled:opacity-50
                  "
                >
                  {loading ? "Sending…" : "Send message"}
                </button>

              </div>
            </form>
            {status === "success" && (
              <p className="text-emerald-400 text-sm text-center">
                Message sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}

          </Panel>
        </div>
        </RevealItem>
        </RevealGroup>
      </Container>

      </section>
    </main>
  )
}
