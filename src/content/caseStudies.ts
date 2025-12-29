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

export const caseStudies: CaseStudy[] = [
  {
    slug: "automated-mlops-pipeline",
    title: "Automated MLOps Pipeline",
    domain: "Machine Learning Infrastructure",
    summary:
      "Design and implementation of an end-to-end MLOps pipeline focused on automation and reproducibility.",

    context:
      "Developed as part of my bachelor thesis to explore production-ready machine learning systems.",
    problem:
      "Manual deployment of ML models leads to fragile pipelines and slow iteration cycles.",
    constraints: [
      "Limited time and resources",
      "Need for reproducibility",
      "Clear separation between training and production",
    ],
    approach: [
      "Designed a modular training and deployment pipeline",
      "Automated model versioning",
      "Focused on maintainability over premature optimization",
    ],
    results: [
      "Fully automated ML workflow",
      "Reduced manual deployment errors",
    ],
    learnings: [
      "MLOps is mainly a software engineering challenge",
      "Automation pays off early",
    ],
    stack: ["Python", "MLOps", "Automation"],
  },
]
