'use client'

import { Project } from '@/content/projects'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { RevealItem } from '@/components/motion/RevealItem'
import { RevealGroup } from '@/components/motion/RevealGroup'

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <RevealGroup>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map(project => (
          <RevealItem key={project.slug}>
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </div>
    </RevealGroup>
  )
}
