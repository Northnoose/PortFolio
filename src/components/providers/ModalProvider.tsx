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
        className="relative z-[10000] w-full max-w-3xl mx-4 bg-bg-page rounded-2xl max-h-[90vh] overflow-y-auto"
        style={{
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.6),
            0 10px 30px -8px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.05)
          `
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Content scrolls naturally */}
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
