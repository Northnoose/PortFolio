import { projects } from "@/content/projects"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of projects focused on applied AI, machine learning, and building reliable systems.",
}

export default function ProjectsPage() {
  return (
    <main className="pt-24 px-6">
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className="text-base text-foreground/80 max-w-2xl">
            A selection of projects focused on applied AI, machine learning,
            and building reliable systems.
          </p>
        </header>

        <ProjectsGrid projects={projects} />
      </div>
    </main>
  )
}
