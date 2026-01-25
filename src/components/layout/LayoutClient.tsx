'use client'

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/ui/Footer"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
