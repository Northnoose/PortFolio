'use client'

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/ui/Footer"
import { ModalProvider } from "@/components/providers/ModalProvider"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <Navbar />
      {children}
      <Footer />
    </ModalProvider>
  )
}
