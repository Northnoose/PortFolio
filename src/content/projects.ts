
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
    title: "A Lightweight MLOps Framework for Drift-Aware Model Lifecycle Management",
    summary:
      "Bachelor project in progress focused on designing and implementing a lightweight MLOps-inspired framework for controlled model lifecycle management under changing data conditions. The system emphasizes traceability, reproducibility, and explicit decision support for evaluation, retraining, and model promotion, with ongoing implementation progress available in the GitHub repository.",

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
      "Scikit-learn",
    ],

    problem:
      "Machine learning models in operation can degrade as data distributions change over time, while many workflows still rely on manual or weakly structured retraining and deployment decisions. This creates limited traceability between data versions, training runs, evaluation results, and promotion decisions, and makes controlled lifecycle management difficult for small teams without enterprise-scale infrastructure.",

    solution:
      "This project proposes and is implementing a lightweight, CI-based MLOps pipeline for structured lifecycle management of machine learning models. The framework is designed to combine controlled data handling, reproducible training, systematic evaluation, drift analysis, rule-based promotion, deployment, and monitoring in a modular workflow where data drift is used as an explicit decision-support signal rather than as a purely passive monitoring metric.",

    highlights: [
      "Modular MLOps-inspired architecture for controlled training, evaluation, promotion, deployment, and monitoring of ML models",
      "Data drift incorporated as an explicit input to evaluation and promotion logic, with human oversight preserved in lifecycle decisions",
      "Reproducible pipeline design linking dataset references, preprocessing, training parameters, evaluation results, and model artifacts",
      "Explicit separation between candidate and production models through versioning, metadata tracking, and centralized registry logic",
      "CI-based orchestration planned for preprocessing, training, evaluation, drift analysis, and promotion checkpoints",
      "Task-aware design intended to support both classification and regression workflows through different evaluation and drift analysis components",
      "Containerized model serving via FastAPI and Docker as part of a lightweight deployment approach for small-team environments",
      "Controlled experiments with simulated drift are planned to evaluate decision behavior under changing data conditions",
      "Project scope is intentionally limited to a lightweight reference implementation, not a production-grade enterprise platform",
      "Implementation is ongoing, and current development progress can be followed in the linked GitHub repository",
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
