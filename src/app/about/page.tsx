import { Container } from "@/components/ui/Container"
import { Panel } from "@/components/ui/Panel"

export default function AboutPage() {
  return (
    <main className="pt-40 pb-32">
      <Container>
        <div className="max-w-[760px] space-y-24">
          {/* Intro */}
          <section className="space-y-6">
            <h1 className="text-4xl font-medium">
              About
            </h1>
            <p className="text-lg text-text-secondary">
              I specialize in building production ML systems that scale. I've reduced ML iteration cycles from hours to minutes, prevented silent model failures, and shipped reproducible pipelines handling 2B+ events daily.
            </p>
          </section>

          {/* Education */}
          <Panel className="p-10 space-y-4">
            <h3 className="text-lg font-medium">
              Education
            </h3>
            <div className="space-y-3 text-text-secondary">
              <div>
                <p className="font-medium text-text-primary">Bachelor of Science in Computer Science & Machine Learning</p>
                <p className="text-sm">University of Oslo (UiO) • Expected June 2025</p>
                <p className="text-sm">GPA: 3.8/4.0 • Relevant coursework: Distributed Systems, Machine Learning, Data Engineering, Systems Design</p>
              </div>
              <div>
                <p className="font-medium text-text-primary">Thesis: Reproducible ML Systems in Production</p>
                <p className="text-sm">Automated MLOps pipeline achieving 95% reduction in ML iteration time while maintaining experiment rigor at production scale.</p>
              </div>
            </div>
          </Panel>

          {/* Experience */}
          <Panel className="p-10 space-y-4">
            <h3 className="text-lg font-medium">
              Experience
            </h3>
            <div className="space-y-6 text-text-secondary">
              <div>
                <p className="font-medium text-text-primary">ML Systems Engineer (Intern)</p>
                <p className="text-sm">Teknify AS • Oslo • Jun–Aug 2024</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>Built distributed feature pipeline (Spark) processing 2B+ events daily; reduced batch time from 6h to 18m</li>
                  <li>Implemented automated model monitoring detecting degradation within 2 hours (vs. 7-14 day manual discovery)</li>
                  <li>Prevented estimated $40k in bad predictions through early retraining alerts</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-text-primary">Data Science Researcher</p>
                <p className="text-sm">University of Oslo AI Lab • Sep 2023–Present</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>Researched reproducibility in ML systems; published findings in thesis exploring DVC + automated testing</li>
                  <li>Mentored 2 junior students on ML ops best practices and model deployment patterns</li>
                </ul>
              </div>
            </div>
          </Panel>

          {/* Skills */}
          <Panel className="p-10 space-y-4">
            <h3 className="text-lg font-medium">
              Technical Skills
            </h3>
            <div className="space-y-4 text-text-secondary">
              <div>
                <p className="font-medium text-text-primary text-sm mb-2">Languages & Core</p>
                <p className="text-sm">Python (expert), SQL, Bash, JavaScript/TypeScript</p>
              </div>
              <div>
                <p className="font-medium text-text-primary text-sm mb-2">ML & Data</p>
                <p className="text-sm">PyTorch, TensorFlow, Scikit-learn, Pandas, Feature engineering, Time series forecasting, LSTM/GBDTs</p>
              </div>
              <div>
                <p className="font-medium text-text-primary text-sm mb-2">MLOps & Infrastructure</p>
                <p className="text-sm">DVC, Airflow, GitHub Actions, Docker, AWS (SageMaker, S3, Lambda), Spark, Kubernetes (basics)</p>
              </div>
              <div>
                <p className="font-medium text-text-primary text-sm mb-2">Data & Monitoring</p>
                <p className="text-sm">PostgreSQL, Prometheus, Grafana, Great Expectations, Statistical testing, Anomaly detection</p>
              </div>
              <div>
                <p className="font-medium text-text-primary text-sm mb-2">Soft Skills</p>
                <p className="text-sm">Clear technical communication, debugging complex systems, cross-functional collaboration, documentation-first mindset</p>
              </div>
            </div>
          </Panel>

          {/* Philosophy */}
          <Panel className="p-10 space-y-4">
            <h3 className="text-lg font-medium">
              How I work
            </h3>
            <p className="text-text-secondary">
              I believe that 80% of ML failures are software engineering failures, not ML failures. That means: version control everything (code, data, configs), automate testing, document decisions, and monitor production systems obsessively.
            </p>
            <p className="text-text-secondary mt-3">
              I write for reproducibility, not cleverness. I'd rather have code I understand in 6 months than code that's clever today but breaks tomorrow.
            </p>
          </Panel>

          {/* Focus */}
          <Panel className="p-10 space-y-4">
            <h3 className="text-lg font-medium">
              What I'm looking for
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-text-secondary">
              <li>ML systems roles where engineering discipline matters as much as ML research</li>
              <li>Teams building production systems, not academic papers</li>
              <li>Problems where 1% improvement in automation saves 10+ hours weekly</li>
              <li>Mentorship: I learn fastest from people who care about explaining the 'why'</li>
            </ul>
          </Panel>
        </div>
      </Container>
    </main>
  )
}
