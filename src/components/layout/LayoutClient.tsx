'use client'

import { Navbar } from "@/components/layout/Navbar"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
