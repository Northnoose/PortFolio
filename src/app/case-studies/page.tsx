import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { caseStudies } from "@/content/caseStudies"
import Link from "next/link"
import { Panel } from "@/components/ui/Panel"

export default function CaseStudiesPage() {
  return (
    <main className="pt-40 pb-32">
      <Container>
        <Section
          kicker="Deep dives"
          title="Case Studies"
        >
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`}>
                <Panel className="p-8 space-y-3 hover:cursor-pointer">
                  <h3 className="text-xl font-medium">
                    {cs.title}
                  </h3>
                  <p className="text-text-secondary">
                    {cs.summary}
                  </p>
                </Panel>
              </Link>
            ))}
          </div>
        </Section>
      </Container>
    </main>
  )
}
