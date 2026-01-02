export type CaseStudy = {
  slug: string
  title: string
  domain: string
  summary: string

  context: string
  problem: string
  constraints: string[]
  approach: string[]
  results: string[]
  learnings: string[]

  stack: string[]
}

export const caseStudies = [
  {
    slug: "automated-mlops-pipeline",
    title: "Automated MLOps Pipeline",
    domain: "Machine Learning Infrastructure",
    summary: "An academic project exploring automated MLOps pipelines.",
    context: "Built as part of my bachelor thesis in Data Science.",
    problem: "Manual ML deployment is fragile and error-prone.",
    constraints: [
      "Academic scope",
      "Limited infrastructure",
    ],
    approach: [
      "Separated training and deployment",
      "Automated model versioning",
    ],
    results: [
      "Reproducible pipeline",
      "Reduced manual steps",
    ],
    learnings: [
      "MLOps is mainly a software engineering problem",
    ],
    stack: ["Python", "MLOps"],
  },
]
