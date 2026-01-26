export type ProjectOwner = "steffen" | "deivi"

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
  demoLabel?: string

  owners: ProjectOwner[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "dvc-mlops-pipeline",
    title: "Automated ML Training & Deployment Pipeline",
    summary:
      "Production-grade MLOps pipeline reducing experiment iteration time from 4 hours to 12 minutes through DVC, automated testing, and CI/CD integration.",
    tags: ["Python", "DVC", "MLOps", "GitHub Actions", "Docker"],

    problem:
      "Manual ML workflows caused 3-5 hour iteration cycles: data prep, training, model tracking, and deployment were disconnected. Led to environment inconsistencies (worked on my machine), lost experiments, and slow feedback loops.",
    solution:
      "Built end-to-end automated pipeline using DVC for data versioning, GitHub Actions for CI/CD, Docker for reproducibility, and automated model validation before deployment.",
    highlights: [
      "Reduced experiment cycle time 95%: from manual 4-hour process to 12-minute automated pipeline",
      "Achieved 99.2% reproducibility across 50+ runs using DVC + Docker",
      "Implemented automated validation: only trained models passing performance thresholds deploy",
      "Full audit trail: every model linked to git commit, data version, and performance metrics",
    ],

    repoUrl: "https://github.com/Northnoose/ml-pipeline-automation",
    owners: ["steffen"],
    featured: true,
  },

  {
    slug: "waifare",
    title: "WaiFare — Event-Based Travel Planning",
    summary:
      "Find the cheapest route from A to B by combining flights, trains, and buses — optimized around events like concerts and festivals.",
    tags: ["TypeScript", "Routing", "APIs", "Web App", "Travel Tech"],

    problem:
      "People heading to events waste time stitching together multi-leg travel and overpay when prices surge around popular dates.",
    solution:
      "Built WaiFare to anchor travel searches on event dates, then combine flights, trains, and buses into the lowest-cost itineraries with clear trade-offs.",
    highlights: [
      "Unified routing engine merges flight, rail, and bus providers with fare normalization",
      "Event-aware search scores options by total cost, duration, and buffer before showtime",
      "Responsive web app with deep links so friends can book the exact itinerary",
      "Partner-ready API layer for promoters to bundle travel with ticketing",
    ],

    demoUrl: "https://www.waifare.no",
    demoLabel: "waifare.no",
    owners: ["steffen", "deivi"],
    featured: true,
  },
]
