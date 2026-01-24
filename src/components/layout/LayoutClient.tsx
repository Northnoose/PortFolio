'use client'

import { Suspense } from "react"
import { Navbar } from "@/components/layout/Navbar"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<div style={{ height: '4rem' }} />}>
        <Navbar />
      </Suspense>
      {children}
    </>
  )
}
