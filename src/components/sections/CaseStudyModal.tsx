// CaseStudyModal.tsx

"use client"

import { useEffect, useRef } from "react"
import { CaseStudy } from "@/content/caseStudies"
import { useModal } from "@/components/providers/ModalProvider"
import { CaseStudyContent } from "./CaseStudyContent"


type CaseStudyModalProps = {
  caseStudy: CaseStudy | null
  isOpen: boolean
  onClose: () => void
}

/**
 * Compatibility wrapper: keeps old prop API, but delegates rendering to ModalProvider.
 * This prevents a second modal system + inconsistent UI.
 */
export function CaseStudyModal({ caseStudy, isOpen, onClose }: CaseStudyModalProps) {
  const { openModal, closeModal } = useModal()
  const openedRef = useRef(false)

  useEffect(() => {
    if (!caseStudy) {
      // If no case study, ensure modal is closed if it was opened.
      if (openedRef.current) {
        closeModal()
        openedRef.current = false
      }
      return
    }

    if (isOpen && !openedRef.current) {
      openedRef.current = true
      openModal(<CaseStudyContent caseStudy={caseStudy} />, () => {
        openedRef.current = false
        onClose()
      })
      return
    }

    if (!isOpen && openedRef.current) {
      closeModal()
      openedRef.current = false
    }
  }, [caseStudy, isOpen, openModal, closeModal, onClose])

  return null
}
