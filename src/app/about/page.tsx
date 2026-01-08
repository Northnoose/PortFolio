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
              I’m a bachelor-level computer engineering / ML student with a strong
              focus on building systems that are understandable, reproducible,
              and robust over time.
            </p>
          </section>

          {/* Philosophy */}
          <Panel className="p-10 space-y-4">
            <h3 className="text-lg font-medium">
              How I approach technical work
            </h3>
            <p className="text-text-secondary">
              I prioritize clarity over cleverness, structure over speed, and
              long-term maintainability over short-term results.
            </p>
          </Panel>

          {/* Focus areas */}
          <Panel className="p-10 space-y-4">
            <h3 className="text-lg font-medium">
              Current focus
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-text-secondary">
              <li>Machine learning systems & pipelines</li>
              <li>Reproducible experimentation</li>
              <li>Clean, readable frontend architecture</li>
              <li>Bridging theory and practical implementation</li>
            </ul>
          </Panel>

          {/* Positioning */}
          <Panel className="p-10 space-y-4">
            <h3 className="text-lg font-medium">
              Positioning
            </h3>
            <p className="text-text-secondary">
              I don’t position myself as a senior engineer. I position myself as
              someone who learns fast, reasons carefully, and takes engineering
              discipline seriously from day one.
            </p>
          </Panel>
        </div>
      </Container>
    </main>
  )
}
