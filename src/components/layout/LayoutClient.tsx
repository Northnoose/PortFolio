"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/ui/Footer"
import { ModalProvider } from "@/components/providers/ModalProvider"
import { PageTransition } from "@/components/motion/PageTransition"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <Navbar />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
    </ModalProvider>
  )
}
