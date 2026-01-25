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
    featured: true,
  },

  {
    slug: "time-series-forecasting",
    title: "Time Series Forecasting for Energy Consumption",
    summary:
      "LSTM neural network predicting household energy consumption 48 hours ahead with 89% accuracy. Deployed with inference optimization achieving 40ms latency.",
    tags: ["PyTorch", "LSTM", "Time Series", "TensorFlow Lite", "ONNX"],

    problem:
      "Energy grids need accurate 48-hour demand forecasts for load balancing. Traditional ARIMA models achieved only 73% accuracy and required manual tuning. Neural approaches weren't optimized for edge deployment.",
    solution:
      "Developed LSTM ensemble trained on 2+ years of consumption data. Implemented model compression (quantization + pruning) for edge deployment while maintaining accuracy.",
    highlights: [
      "89% MAPE on held-out test set, outperforming baseline ARIMA by 16 percentage points",
      "Model compression reduced size by 87%: 45MB → 5.9MB, enabling edge deployment",
      "Inference latency: 40ms on CPU (vs. 850ms baseline), enabling real-time predictions",
      "Automated retraining pipeline: model updated weekly with new data via DVC",
    ],

    repoUrl: "https://github.com/Northnoose/energy-forecasting",
    featured: true,
  },

  {
    slug: "distributed-feature-pipeline",
    title: "Distributed Feature Engineering Pipeline",
    summary:
      "Spark-based feature engineering processing 2B+ events daily with 12 custom features. Reduced batch job time from 6 hours to 18 minutes.",
    tags: ["Apache Spark", "Python", "Parquet", "Feature Store", "Airflow"],

    problem:
      "Single-threaded feature computation took 6 hours daily, blocking model retraining. Feature logic scattered across notebooks with no versioning or dependency tracking.",
    solution:
      "Migrated to Spark DataFrame API with optimized partitioning. Implemented Airflow DAG for orchestration and feature versioning with custom metadata store.",
    highlights: [
      "94% runtime improvement: 6 hours → 18 minutes via Spark parallelization and partition pruning",
      "Processed 2.3B events daily with 12 engineered features, supporting 8 downstream models",
      "Built feature catalog: tracked lineage from raw events → features → model consumption",
      "Zero-downtime deployments using blue-green testing with historical data replay",
    ],

    repoUrl: "https://github.com/Northnoose/feature-pipeline-spark",
  },

  {
    slug: "model-monitoring-system",
    title: "Real-Time Model Performance Monitoring",
    summary:
      "Monitoring system detecting model degradation in production. Prevented 2 silent failures that would have cost $40k+ in bad predictions.",
    tags: ["Python", "Prometheus", "Grafana", "Statistical Testing", "PostgreSQL"],

    problem:
      "Models degraded silently in production. Discovered only after business team flagged issues (5-14 days later). No way to automatically trigger retraining.",
    solution:
      "Built monitoring system tracking prediction distribution shifts, accuracy proxies, and feature drift using statistical tests. Automated alerts and retraining triggers.",
    highlights: [
      "Detected 2 critical degradations within 2 hours (vs. 7-14 days manual discovery)",
      "Prevented estimated $40k+ in bad predictions through early retraining",
      "Custom drift detection: tracked Kolmogorov-Smirnov statistics on prediction distributions",
      "Integrated with Slack: alerts with severity scoring and recommended actions",
    ],

    repoUrl: "https://github.com/Northnoose/ml-monitoring",
  },

  {
    slug: "data-quality-framework",
    title: "Data Quality & Validation Framework",
    summary:
      "Automated data validation catching 85% of issues before model training. Reduced debugging time by preventing downstream failures.",
    tags: ["Great Expectations", "Pandas", "Python", "Testing", "Documentation"],

    problem:
      "Bad data silently corrupted training sets: duplicates, out-of-range values, missing schemas. Only caught after model training/evaluation wasted hours.",
    solution:
      "Implemented Great Expectations framework with custom validators. Added data quality tests to training pipeline with detailed failure reports.",
    highlights: [
      "Caught 85% of data quality issues before training (vs. 0% before)",
      "Reduced debugging time: issues now traceable to data ingestion step instead of buried in model performance",
      "Documented 40+ data quality expectations with business context and recovery procedures",
      "Automated reports: daily data quality dashboards preventing stakeholder surprises",
    ],

    repoUrl: "https://github.com/Northnoose/data-quality-framework",
  },
]
