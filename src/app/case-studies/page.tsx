'use client'

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Panel } from "@/components/ui/Panel"
import { CaseStudyContent } from "@/components/sections/CaseStudyContent"
import { caseStudies, CaseStudy } from "@/content/caseStudies"
import { useState, useEffect } from "react"
import { useModal } from "@/components/providers/ModalProvider"
import { BaseBackground } from "@/components/ui/BaseBackground"

export default function CaseStudiesPage() {
  const { openModal, closeModal } = useModal()
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)

  // Handle URL hash for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove #
      if (hash.startsWith('case-study=')) {
        const slug = hash.split('=')[1]
        const cs = caseStudies.find(c => c.slug === slug)
        if (cs) {
          setSelectedSlug(slug)
          openModal(<CaseStudyContent caseStudy={cs} />, () => {
            setSelectedSlug(null)
            window.location.hash = ''
          })
        }
      } else if (hash === '') {
        setSelectedSlug(null)
      }
    }

    // Check initial hash on mount
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [openModal])

  const openCaseStudy = (cs: CaseStudy) => {
    setSelectedSlug(cs.slug)
    window.location.hash = `case-study=${cs.slug}`
    openModal(<CaseStudyContent caseStudy={cs} />, () => {
      setSelectedSlug(null)
      window.location.hash = ''
    })
  }

  return (
    <main className="pt-40 pb-32">
      <BaseBackground />
      <Container>
        <Section
          kicker="Deep dives"
          title="Case Studies"
        >
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <button
                key={cs.slug}
                onClick={() => openCaseStudy(cs)}
                className="w-full text-left transition-transform hover:scale-[1.02]"
              >
                <Panel className="p-8 space-y-3 cursor-pointer hover:bg-bg-panel/80">
                  <div className="space-y-2">
                    <p className="text-sm text-text-muted">{cs.domain}</p>
                    <h3 className="text-xl font-medium">
                      {cs.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary">
                    {cs.summary}
                  </p>
                </Panel>
              </button>
            ))}
          </div>
        </Section>
      </Container>
    </main>
  )
}
