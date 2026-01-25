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
    slug: "mlops-thesis-project",
    title: "Building Production ML Systems at Academic Scale",
    domain: "Machine Learning Infrastructure & Software Engineering",
    summary:
      "Bachelor thesis project: automated ML pipeline handling real-world constraints. Demonstrates how software engineering principles prevent 80% of ML failures.",
    context:
      "6-month thesis project at University of Oslo. Studied deployment patterns for recommendation systems in e-commerce, working with real production data.",
    problem:
      "Traditional academic ML workflows don't transfer to production. Thesis question: How can reproducibility and automation reduce ML iteration cycles while maintaining experiment rigor?",
    constraints: [
      "Real production data with 50M+ events (PII/confidentiality rules)",
      "Limited cloud budget: $200/month",
      "Had to work with existing infrastructure (single VM)",
      "Needed to show improvement over baseline 4-hour manual cycles",
    ],
    approach: [
      "Version controlled everything: code, data (via DVC), configs, and models",
      "Automated pipeline: raw data → features → training → evaluation → deployment decision",
      "Implemented validation gates: only deploy models beating holdout baseline by 2%+",
      "Documented decision rationale for every architectural choice (why DVC over Weights & Biases, etc.)",
    ],
    results: [
      "Achieved 95% reduction in iteration time: 4 hours → 12 minutes",
      "100% reproducibility across 47 experimental runs (same results when rerun 6 months later)",
      "Successfully deployed 3 production models with zero training-to-serving inconsistencies",
      "Created playbook reducing new ML project onboarding from 3 weeks to 3 days",
    ],
    learnings: [
      "MLOps is primarily a software engineering discipline, not ML. Most failures are engineering failures (wrong env variables, stale data, broken dependencies).",
      "Reproducibility compounds: small discipline early (DVC versioning) prevents debugging nightmares later.",
      "Automation is force multiplier only if monitoring is baked in. Automated bad pipelines are worse than slow manual ones.",
      "Documentation of 'why' is undervalued. Future-you (and your team) won't know why you chose Parquet over ORC without it.",
    ],

    stack: ["Python", "DVC", "GitHub Actions", "Docker", "PostgreSQL", "Spark", "TensorFlow"],
  },

  {
    slug: "feature-engineering-learnings",
    title: "When Smart Features Beat Smart Models",
    domain: "Data Engineering & Model Design",
    summary:
      "How careful feature engineering outperformed a more complex model. Achieved 2% accuracy gain with simpler inference.",
    context:
      "Worked on recommendation ranking model. Team had invested in GBDT ensemble but performance plateaued at 72% accuracy.",
    problem:
      "Added complexity always—more features, bigger ensemble, deeper hyperparameter tuning. Missed the actual bottleneck: feature quality.",
    constraints: [
      "Model already in production, had to maintain inference latency under 100ms",
      "Feature store immature: many features were ad-hoc transformations without documentation",
      "Team skeptical of refactoring vs. just tuning hyperparameters",
    ],
    approach: [
      "Audited 200+ existing features; found 60 were redundant or sourced incorrectly",
      "Designed 8 new features from first principles: user engagement velocity, recency decay, item popularity trajectory",
      "Built feature versioning: traced every feature back to definition and computation logic",
      "A/B tested new features incrementally; showed gains without re-training full ensemble",
    ],
    results: [
      "72% → 74% accuracy with simpler feature set (vs. 72.5% with complex ensemble)",
      "Inference latency improved 15%: 95ms → 81ms due to fewer features",
      "Model interpretation improved: stakeholders understood why recommendations changed",
      "Reduced feature computation time 40%: eliminated redundant calculations",
    ],
    learnings: [
      "Good features > big models. A simple linear model on great features often beats a complex model on mediocre features.",
      "Premature optimization kills productivity. Always profile where time/accuracy is actually lost before adding complexity.",
      "Feature lineage matters. Tracing which upstream data each feature depends on saved hours when data quality issues arose.",
      "Team communication: showing before/after clearly made the case. Numbers alone don't convince; show the inference speedup too.",
    ],

    stack: ["Python", "Pandas", "Scikit-learn", "GBDT", "SQL"],
  },

  {
    slug: "migration-to-cloud",
    title: "Migrating On-Premise ML to AWS: Lessons from Failure & Recovery",
    domain: "Infrastructure & Cloud Architecture",
    summary:
      "Migration project that initially failed. How we recovered and built a playbook preventing $50k in lost work.",
    context:
      "Team ran ML pipelines on local VMs. Business needed global deployment. Migrated to AWS SageMaker + S3.",
    problem:
      "Initial migration broke silent assumptions: code assumed local file system, hardcoded paths, implicit ordering of transformations.",
    constraints: [
      "Zero downtime requirement: couldn't halt production predictions during migration",
      "Tight deadline: 6 weeks",
      "Legacy codebase with minimal testing",
    ],
    approach: [
      "Staged migration: ran AWS and on-prem in parallel for 3 weeks to catch divergence",
      "Added comprehensive integration tests comparing outputs bit-for-bit",
      "Documented all implicit assumptions in code (e.g., 'data must be sorted by user ID before aggregation')",
      "Built monitoring to compare cloud vs. on-prem predictions in real-time",
    ],
    results: [
      "Detected 2 critical bugs in migration that would have gone unnoticed. Saved estimated $50k in bad recommendations.",
      "Zero-downtime migration: switched traffic with 99.97% prediction consistency",
      "Reduced cloud costs 35% through rightsizing (found we were over-provisioned)",
      "Created migration playbook used for 2 subsequent ML system migrations",
    ],
    learnings: [
      "Implicit assumptions are the biggest failure risk. What works locally often silently breaks at scale.",
      "Testing is not optional for ML systems. You can't eyeball whether a model is correct.",
      "Monitoring during migration is the safety net. Parallel runs caught 90% of issues before they hit users.",
      "Never migrate everything at once. Staged, testable migrations are slower initially but 10x more reliable.",
    ],

    stack: ["AWS SageMaker", "S3", "Lambda", "Python", "Docker", "RDS"],
  },
]
