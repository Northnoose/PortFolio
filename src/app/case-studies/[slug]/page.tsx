import { notFound } from "next/navigation"
import { Container } from "@/components/ui/Container"
import { Panel } from "@/components/ui/Panel"
import { Tag } from "@/components/ui/Tag"
import { caseStudies } from "@/content/caseStudies"
import Link from "next/link"

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = caseStudies.find(c => c.slug === slug)
  if (!cs) notFound()

  return (
    <main className="pt-40 pb-32">
      <Container>
        {/* Header */}
        <header className="max-w-[720px] space-y-6 mb-24">
          <Link href="/case-studies" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
            ← Back to case studies
          </Link>
          <div>
            <p className="text-sm text-text-muted mb-2">{cs.domain}</p>
            <h1 className="text-4xl font-medium">
              {cs.title}
            </h1>
          </div>
          <p className="text-lg text-text-secondary">
            {cs.summary}
          </p>

          {/* Stack tags */}
          {cs.stack && cs.stack.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4">
              {cs.stack.map(tech => (
                <Tag key={tech} label={tech} />
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="space-y-12 max-w-[720px]">
          <Panel className="p-8 space-y-4">
            <h3 className="text-lg font-medium">Context</h3>
            <p className="text-text-secondary">{cs.context}</p>
          </Panel>

          <Panel className="p-8 space-y-4">
            <h3 className="text-lg font-medium">Problem</h3>
            <p className="text-text-secondary">{cs.problem}</p>
          </Panel>

          <Panel className="p-8 space-y-4">
            <h3 className="text-lg font-medium">Constraints</h3>
            <ul className="space-y-2">
              {cs.constraints.map((constraint, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-text-muted flex-shrink-0 mt-1">•</span>
                  <span className="text-text-secondary">{constraint}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel className="p-8 space-y-4">
            <h3 className="text-lg font-medium">Approach</h3>
            <ul className="space-y-3">
              {cs.approach.map((step, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-text-muted flex-shrink-0">→</span>
                  <span className="text-text-secondary">{step}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel className="p-8 space-y-4">
            <h3 className="text-lg font-medium">Results</h3>
            <ul className="space-y-3">
              {cs.results.map((result, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-text-muted flex-shrink-0 mt-1">✓</span>
                  <span className="text-text-secondary">{result}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel className="p-8 space-y-4">
            <h3 className="text-lg font-medium">Key Learnings</h3>
            <ul className="space-y-3">
              {cs.learnings.map((learning, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-text-muted flex-shrink-0">→</span>
                  <span className="text-text-secondary">{learning}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </Container>
    </main>
  )
}
