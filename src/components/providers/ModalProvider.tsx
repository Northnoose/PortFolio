// ModalProvider.tsx

"use client"

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { createPortal } from "react-dom"

type ModalContextType = {
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
    if (onCloseCallback) onCloseCallback()
    setModalContent(null)
    setOnCloseCallback(null)
  }, [onCloseCallback])

  const value = useMemo(() => ({ openModal, closeModal }), [openModal, closeModal])

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen &&
        createPortal(
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
  if (!context) throw new Error("useModal must be used within ModalProvider")
  return context
}

type GlobalModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

function GlobalModal({ isOpen, onClose, children }: GlobalModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-[6px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Frame */}
      <div
        className="
          relative z-[10000]
          w-full
          max-w-[95vw]
          sm:max-w-[92vw]
          lg:max-w-6xl
          mx-4
          rounded-2xl
          border border-white/10
          bg-black
          shadow-[0_25px_50px_-12px_rgba(0,0,0,0.65),0_10px_30px_-8px_rgba(0,0,0,0.45),inset_0_1px_1px_0_rgba(255,255,255,0.07)]
          max-h-[90vh]
          overflow-y-auto
        "
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  )
}
