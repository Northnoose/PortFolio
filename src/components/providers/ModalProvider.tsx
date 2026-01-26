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
        className="relative z-[10000] w-full max-w-2xl mx-4 bg-bg-page border border-border-soft rounded-lg shadow-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 right-0 ml-auto m-4 p-2 text-text-muted hover:text-text-primary transition-colors z-[10001]"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="px-8 md:px-12 pb-8">
          {children}
        </div>
      </div>
    </div>
  )
}
