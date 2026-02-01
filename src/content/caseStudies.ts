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
    slug: "lightweight-drift-aware-mlops",
    title: "Drift-Aware Control in Lightweight ML Operations",
    domain: "Machine Learning Systems · MLOps · Operational Governance",

    summary:
      "A system-level case study on lifecycle control in ML operations, examining how explicit decision structures and governance prevent uncontrolled model evolution in low-infrastructure settings.",

    context:
      "Batch-based ML systems run by small teams with limited infrastructure, weak role separation, and minimal operational oversight, operating under gradual data drift and high lifecycle ambiguity.",

    problem:
      "Model evaluation, retraining, and deployment occur without formal governance, resulting in opaque lifecycle transitions, poor traceability, and systems that cannot be reliably audited or explained.",

    constraints: [
      "No dedicated platform or enterprise infrastructure",
      "CI-driven execution without persistent orchestration",
      "Offline data processing and batch inference",
      "Limited team capacity and operational specialization",
      "Fixed academic scope and time constraints",
      "Strong auditability and reproducibility requirements",
      "Human decision authority retained over automation"
    ],

    approach: [
      "Define explicit control points between experimental and production states",
      "Treat lifecycle transitions as governed decisions, not pipeline side-effects",
      "Tie evidence generation to formal evaluation gates",
      "Centralize model promotion through a single controlled boundary",
      "Favor determinism, traceability, and inspectability over speed",
      "Limit automation to evidence production, not decision authority",
      "Optimize for lifecycle clarity rather than adaptive behavior"
    ],

    results: [
      "Model state changes became explicitly governed",
      "Lifecycle transitions became auditable and reproducible",
      "System behavior shifted from reactive updates to controlled progression",
      "Failure states became observable rather than implicit",
      "Operational risk was surfaced as explicit decisions",
      "Rollback and forensic analysis were structurally supported"
    ],

    learnings: [
      "Unconstrained automation increases systemic risk",
      "Lifecycle governance outweighs performance in low-maturity systems",
      "Decision structure matters more than tooling",
      "Clear control boundaries reduce operational complexity",
      "Transparency scales better than autonomy under uncertainty",
      "Simplicity improves observability and diagnosis"
    ],

    stack: [
      "Python",
      "CI-based orchestration",
      "Versioned artifacts and datasets",
      "Containerized services",
      "Drift and evaluation instrumentation"
    ]
  }, {
    slug: "waifare-concert-travel-control",
    title: "WaiFare: Control Structures for Volatile Mobile Data Systems",
    domain: "Mobile Systems · Distributed Data · Reliability Engineering",
    summary:
      "A mobile system case study focused on controlling volatility, inconsistency, and availability risk in upstream data dependencies through deterministic state management and centralized persistence.",

    context:
      "A client-heavy mobile architecture dependent on multiple external data providers with heterogeneous reliability, rate limits, and update cycles. The system operates over unstable networks, with no control over upstream data quality, availability, or consistency.",

    problem:
      "System behavior was dominated by upstream instability: inconsistent responses, transient failures, partial availability, and non-deterministic state. Without structural control, these factors propagate directly to the client layer, producing unpredictable behavior and degraded reliability.",

    constraints: [
      "Unreliable and rate-limited external APIs",
      "Intermittent connectivity and offline scenarios",
      "Client-side execution dominance",
      "No control over upstream data correctness or freshness",
      "Early-stage system maturity",
      "Mobile resource limitations (battery, memory, storage)",
      "Dependency on third-party availability"
    ],

    approach: [
      "Centralize persistence to prevent fragmented state across client sessions",
      "Introduce deterministic caching keyed on stable query parameters",
      "Separate data acquisition from presentation logic",
      "Treat all upstream data as untrusted by default",
      "Design explicit fallback and degradation paths",
      "Isolate volatility through controlled data boundaries",
      "Favor consistency and predictability over real-time freshness"
    ],

    results: [
      "System behavior became stable under fluctuating upstream conditions",
      "Client state transitioned from reactive to deterministic",
      "Failure propagation from APIs was structurally limited",
      "Cache invalidation and refresh became predictable",
      "Availability became a managed variable rather than an emergent property",
      "User-facing instability decreased without increasing system complexity"
    ],

    learnings: [
      "Upstream instability must be treated as a structural assumption, not an exception",
      "Client reliability depends more on state control than data richness",
      "Determinism outperforms freshness in volatile environments",
      "Explicit degradation paths are more reliable than reactive recovery",
      "Data trust boundaries are architectural, not operational",
      "Mobile systems require control-first design to remain predictable"
    ],

    stack: [
      "React Native",
      "TypeScript",
      "Deterministic caching",
      "Centralized persistence",
      "Client-side state control"
    ]
  }
]
