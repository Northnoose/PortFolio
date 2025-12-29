import { site } from "@/lib/site"
import { projects } from "@/content/projects"
import { caseStudies } from "@/content/caseStudies"

export default function sitemap() {
  const staticRoutes = [
    "",
    "/projects",
    "/case-studies",
    "/about",
    "/experience",
  ]

  const projectRoutes = projects.map((p) => `/projects/${p.slug}`)
  const caseStudyRoutes = caseStudies.map((c) => `/case-studies/${c.slug}`)

  const allRoutes = [...staticRoutes, ...projectRoutes, ...caseStudyRoutes]

  return allRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }))
}
