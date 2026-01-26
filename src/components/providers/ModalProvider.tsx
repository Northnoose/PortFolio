'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalContextType {
  openModal: (content: ReactNode, onClose: () => void) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ReactNode>(null)
  const [onCloseCallback, setOnCloseCallback] = useState<(() => void) | null>(null)

  const openModal = useCallback((content: ReactNode, onClose: () => void) => {
    setModalContent(content)
    setOnCloseCallback(() => onClose)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    if (onCloseCallback) {
      onCloseCallback()
    }
    setModalContent(null)
    setOnCloseCallback(null)
  }, [onCloseCallback])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && createPortal(
        <GlobalModal isOpen={isOpen} onClose={closeModal}>
          {modalContent}
        </GlobalModal>,
        document.body
      )}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within ModalProvider')
  }
  return context
}

interface GlobalModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

function GlobalModal({ isOpen, onClose, children }: GlobalModalProps) {
  if (!isOpen) return null

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onKeyDown={handleEscape}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className="relative z-[10000] w-full max-w-3xl mx-4 bg-bg-page border border-border-soft rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient accent */}
        <div className="sticky top-0 bg-gradient-to-r from-bg-page via-bg-page to-bg-page border-b border-border-soft backdrop-blur-sm z-[10001]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent pointer-events-none" />
          <div className="relative flex items-start justify-between p-6 md:p-8">
            {/* Decorative element */}
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500/50 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="ml-auto p-2 text-text-muted hover:text-text-primary hover:bg-bg-panel rounded-lg transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
              title="Close (ESC)"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 pt-2 pb-8 md:pb-12">
          {children}
        </div>
      </div>
    </div>
  )
}
