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
      "A system-level case study in operational control for machine learning lifecycles. Focuses on how explicit decision structures, governance mechanisms, and lifecycle constraints prevent uncontrolled model evolution in low-infrastructure environments.",

    context:
      "Batch-oriented ML systems operated by small teams with limited infrastructure, low platform maturity, and minimal organizational separation of roles. Models exist in environments with gradual distributional change, weak operational oversight, and high exposure to undocumented modifications and lifecycle ambiguity.",

    problem:
      "Model lifecycle transitions occur without structural control. Evaluation, retraining, and deployment decisions are weakly formalized, loosely governed, and poorly traceable, creating opaque state changes and making long-term system behavior impossible to audit or explain.",

    constraints: [
      "No platform teams or enterprise infrastructure layers",
      "CI-only execution model with no always-on orchestration",
      "Offline data processing and batch inference",
      "Small team capacity and limited operational specialization",
      "Academic time constraints and fixed delivery scope",
      "Strong requirements for auditability and reproducibility",
      "Human-governed decision authority over automation"
    ],

    approach: [
      "Introduce explicit control points between experimentation and production states",
      "Formalize lifecycle transitions as governed decisions rather than pipeline side-effects",
      "Bind evidence generation to decision authority through structured evaluation gates",
      "Centralize model state progression through a single promotion boundary",
      "Prioritize determinism, inspectability, and traceability over execution speed",
      "Restrict automation to evidence production, not authority delegation",
      "Design for lifecycle clarity rather than adaptive responsiveness"
    ],

    results: [
      "Model state changes became structurally governed rather than operationally incidental",
      "Lifecycle transitions became auditable, inspectable, and reproducible",
      "System behavior shifted from reactive updates to controlled progression",
      "Failure states became observable instead of silently accumulating",
      "Operational risk moved from hidden degradation to explicit decision points",
      "Rollback and forensic analysis became structurally supported"
    ],

    learnings: [
      "Uncontrolled automation creates systemic risk, not efficiency",
      "Lifecycle governance is more critical than model performance in low-maturity environments",
      "Decision structures matter more than tooling sophistication",
      "Control boundaries reduce complexity more effectively than adaptive logic",
      "Transparency scales better than autonomy under uncertainty",
      "Simplicity improves observability and failure diagnosis"
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
