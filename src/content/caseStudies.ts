// content/caseStudies.ts

export type CaseStudyResultHighlight = {
  text: string
  kind?: "metric" | "status"
}

export type CaseStudyMeta = {
  duration?: string
  role?: string
  client?: string
}

export type CaseStudyImpact = {
  title: string
  text: string
}

export type CaseStudy = {
  slug: string
  title: string
  summary: string
  domain: string

  label?: string
  meta?: CaseStudyMeta

  context: string
  problem: string

  constraints: string[]
  approach: string[]

  results: string[]
  resultsHighlights?: CaseStudyResultHighlight[]

  learnings: string[]

  stack?: string[]
  impact?: CaseStudyImpact

  tags?: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "lightweight-drift-aware-mlops",
    title: "Drift-Aware Control in Lightweight ML Operations",
    domain: "Machine Learning Systems · MLOps · Governance",
    label: "ML Systems",

    meta: {
      duration: "5 months",
      role: "Systems Architect / ML Engineer",
      client: "Academic / Independent",
    },

    summary:
      "A system-level case study on enforcing lifecycle control in ML operations, focusing on how explicit decision structures and governance mechanisms prevent uncontrolled model evolution in low-infrastructure environments.",

    context:
      "Small-team, batch-oriented ML systems operating without dedicated platforms, weak role separation, and minimal operational oversight, while being exposed to gradual data drift and high lifecycle ambiguity.",

    problem:
      "Model evaluation, retraining, and deployment occurred without formal governance. Lifecycle transitions were implicit, poorly traceable, and difficult to audit, resulting in systems that could not reliably explain or justify model state changes.",

    constraints: [
      "Semester-limited bachelor project with fixed scope and resources",
      "No enterprise MLOps platforms or managed orchestration",
      "Batch-oriented workflows only; no real-time inference",
      "No streaming data, online learning, or autonomous retraining",
      "No production-scale scalability or availability guarantees",
      "Drift used for decision support, not automatic deployment",
      "Priority on reproducibility, traceability, and decision transparency",
    ],

    approach: [
      "CI-based workflows are used to run training, evaluation, and drift analysis in a controlled and repeatable manner. Candidate models are evaluated separately from the production model under predefined drift scenarios. Promotion is governed by explicit, rule-based decision gates, and all datasets, models, metrics, and decisions are versioned for traceability. Monitoring is treated strictly as feedback for future evaluations, not as an autonomous control mechanism.",
    ],

    results: [
      "Under development",
    ],

    resultsHighlights: [
      {
        kind: "status",
        text: "Under development",
      },
    ],

    learnings: [
      "Under development",
    ],

    stack: [
      "Python",
      "scikit-learn ",
      "MLflow ",
      "Evidently ",
      "GitHub Actions",
      "Docker",
      "FastAPI ",
    ],

    impact: {
      title: "Operational Impact",
      text:
        "Turned an unmanaged, implicitly changing ML workflow into a governed system where every model transition is explicit, auditable, and reversible",
    },

    tags: ["MLOps", "ML Governance", "Data Drift", "Systems Engineering"],
  },

  {
    slug: "waifare-concert-travel-control",
    title: "WaiFare: Control Structures for Volatile Mobile Data Systems",
    domain: "Mobile Systems · Distributed Data · Reliability Engineering",
    label: "Mobile Systems",

    meta: {
      duration: "2 months",
      role: "Systems Engineer / Mobile Architect",
      client: "Independent Product",
    },

    summary:
      "A mobile systems case study examining how deterministic state control and centralized persistence mitigate volatility, inconsistency, and availability risk in upstream data dependencies.",

    context:
      "A client-heavy mobile architecture dependent on multiple external data providers with heterogeneous reliability, rate limits, and update cycles. The system operates over unstable networks without control over upstream data quality or availability.",

    problem:
      "System behavior was dominated by upstream instability: inconsistent responses, transient failures, partial availability, and non-deterministic state. Without structural control, these factors propagated directly to the client layer, producing unpredictable behavior and degraded reliability.",

    constraints: [
      "Unreliable and rate-limited third-party APIs",
      "Intermittent connectivity and offline usage scenarios",
      "Client-side execution dominance",
      "No control over upstream data correctness or freshness",
      "Early-stage system maturity",
      "Mobile resource limitations (battery, memory, storage)",
      "Hard dependency on third-party availability",
    ],

    approach: [
      "The system was restructured to isolate upstream volatility from client behavior through centralized persistence and deterministic state control. Data acquisition was separated from interaction logic, treating all external inputs as untrusted and bounded by explicit cache and fallback rules. By favoring consistency and predictability over real-time freshness, availability and degradation became controlled design variables rather than emergent failure modes.",
    ],

    results: [
      "System behavior stabilized under fluctuating upstream conditions",
      "Client state transitioned from reactive to deterministic",
      "Failure propagation from upstream APIs was structurally limited",
      "Cache invalidation and refresh became predictable",
      "Availability became a managed variable rather than emergent behavior",
      "User-facing instability decreased without increased system complexity",
    ],

    resultsHighlights: [
      {
        kind: "status",
        text: "Client behavior became deterministic despite unstable upstream APIs",
      },
      {
        kind: "status",
        text: "Failure propagation from external providers was structurally constrained",
      },
      {
        kind: "status",
        text: "Availability shifted from emergent behavior to an explicit design variable",
      },
      {
        kind: "status",
        text: "User-facing instability decreased without increasing architectural complexity",
      },
    ],

    learnings: [
      "Upstream instability must be treated as a structural assumption, not an exception",
      "Client reliability depends more on state control than data richness",
      "Determinism outperforms freshness in volatile environments",
      "Explicit degradation paths outperform reactive recovery mechanisms",
      "Data trust boundaries are architectural, not operational",
      "Mobile systems require control-first design to remain predictable",
    ],

    stack: [
      "React Native",
      "TypeScript",
      "Deterministic caching",
      "Centralized persistence",
      "Client-side state control",
    ],

    impact: {
      title: "Reliability Impact",
      text:
        "Isolated upstream volatility so client behavior remained predictable and reliable even under partial availability and unstable third-party dependencies.",
    },

    tags: ["Mobile Systems", "Distributed Data", "Reliability Engineering"],
  },
]
