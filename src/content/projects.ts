export type Project = {
  slug: string
  title: string
  summary: string
  tags: string[]

  problem: string
  solution: string
  highlights: string[]

  repoUrl?: string
  demoUrl?: string

  featured?: boolean
}
export const projects: Project[] = [
  {
    slug: "automated-mlops",
    title: "Automated MLOps Pipeline",
    summary:
      "An end-to-end MLOps pipeline automating training, versioning, and deployment of machine learning models.",
    tags: ["Python", "MLOps", "Automation", "ML Systems"],

    problem:
      "Deploying and maintaining machine learning models manually leads to errors, inconsistent environments, and slow iteration cycles.",
    solution:
      "I designed and implemented an automated MLOps pipeline that handles model training, versioning, deployment, and monitoring with minimal manual intervention.",
    highlights: [
      "End-to-end automated training and deployment",
      "Reproducible experiments and model versioning",
      "Clear separation between training, serving, and infrastructure",
    ],

    repoUrl: "https://github.com/yourname/automated-mlops",
    featured: true,
  },

  // other projects stay short for now
]
