export type Project = {
  slug: string
  title: string
  summary: string
  tags: string[]

  problem: string
  solution: string
  highlights: string[]

  images?: {
  src: string
  caption: string
  }[]


  repoUrl?: string
  demoUrl?: string

  featured?: boolean
}
export const projects: Project[] = [
  {
  slug: "lightweight-mlops-drift-aware",
  title: "Lightweight Drift-Aware MLOps Framework",
  summary:
    "Lightweight, CI-based MLOps framework that operationalizes data drift as an explicit control signal for evaluation, retraining, and model promotion, with full lifecycle traceability and reproducibility for small teams.",

  tags: [
    "Python",
    "MLOps",
    "Data Drift",
    "CI/CD",
    "MLflow",
    "Docker",
    "FastAPI",
    "Evidently",
    "GitHub Actions",
  ],

  problem:
    "Deployed ML models silently degrade under evolving data distributions, while common workflows rely on manual, ad-hoc retraining decisions with weak traceability. Existing MLOps solutions either focus on passive drift monitoring or require enterprise-scale infrastructure, making controlled, auditable lifecycle management inaccessible to small teams.",

  solution:
    "Designed and implemented a lightweight, CI-driven MLOps pipeline where data drift is treated as an explicit decision signal rather than a passive metric. Candidate models are trained and evaluated in isolation, tested under predefined drift scenarios, compared against the active production model, and promoted only through rule-based, auditable decisions with human oversight.",

  highlights: [
    "Operationalized data drift as a first-class control signal influencing evaluation, retraining, and model promotion decisions",
    "CI-based lifecycle orchestration covering training, evaluation, drift analysis, promotion, deployment, and monitoring",
    "Rule-based promotion gate: models deploy only if predefined performance and robustness criteria are satisfied",
    "Reproducible experiments: every model linked to dataset version, preprocessing configuration, training parameters, metrics, and drift diagnostics",
    "Explicit separation between candidate and production models via centralized model registry",
    "Downstream monitoring used as decision support, not autonomous retraining, preserving transparency and control",
    "Reference implementation validated through controlled image classification experiments with simulated data drift",
  ],

  repoUrl: "https://github.com/Northnoose/MLOps-CI-Pipeline",
  featured: true,
}
,
  {
  slug: "waifare",
  title: "WaiFare",
  summary:
    "Mobile-first travel planning application that combines concerts and events with multi-modal transport planning, allowing users to plan complete end-to-end journeys across flights, trains, buses, and local transport in one unified flow.",

  tags: [
    "React Native",
    "Expo",
    "TypeScript",
    "Mobile App",
    "Routing",
    "Maps",
    "APIs",
    "Travel Tech",
  ],

  problem:
    "Planning travel to concerts and events is fragmented across multiple platforms. Users must manually combine event discovery, transport searches, pricing, schedules, and return planning, often leading to poor transfer decisions, unnecessary costs, and significant time spent coordinating logistics.",

  solution:
    "Developed a mobile-first application that connects event discovery with end-to-end travel planning. Users select a concert or event, define their location and travel preferences, and receive aggregated transport options across multiple modes, with filters for cost, time, transport type, and trip duration, all presented in a single, coherent user flow.",

  highlights: [
    "Event-centric travel planning: journeys are built around concerts rather than raw routes",
    "Multi-modal transport support (flight, train, bus, ferry, local transport)",
    "Flexible user preferences: one-way or round-trip, stay duration, transport filters, group size, and age-based pricing",
    "Mobile-first UX built with React Native and Expo, including navigation, maps, and interactive UI components",
    "Designed for extensibility with external APIs for events, transport, weather, and pricing",
    "Foundation for saved trips, price alerts, and personalized user profiles",
  ],

  images: [
    {
      src: "/projects/waifare/login.png",
      caption: "Authentication"
    },
    {
      src: "/projects/waifare/booking.png",
      caption: "Booking overview "
    },

  ],

  repoUrl: "https://github.com/Northnoose/WaiFare",
  demoUrl: "https://waifare.no/",
  featured: true,
}

]
