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

export const caseStudies: CaseStudy[] = []
