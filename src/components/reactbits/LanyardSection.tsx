"use client"

import { Component, type ReactNode } from "react"
import dynamic from "next/dynamic"
import { useReducedMotion } from "framer-motion"

// Lazy-load the WebGL/physics bundle (three + rapier + drei) so it never
// blocks the initial render and never runs on the server.
const Lanyard = dynamic(() => import("@/components/reactbits/Lanyard"), {
  ssr: false,
  loading: () => <LanyardFallback label="Loading…" />
})

/** Static stand-in shown while loading, on reduced-motion, or on failure. */
function LanyardFallback({ label = "Steffen Nordnes" }: { label?: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
      <div
        className="
          h-20 w-20 rounded-2xl
          bg-gradient-to-br from-indigo-500 to-violet-500
          flex items-center justify-center
          text-2xl font-bold text-white shadow-lg
        "
      >
        SN
      </div>
      <p className="text-sm text-text-secondary">{label}</p>
    </div>
  )
}

/** Keeps a runtime WebGL/physics failure from taking down the page. */
class LanyardBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    if (this.state.failed) return <LanyardFallback />
    return this.props.children
  }
}

export default function LanyardSection() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return <LanyardFallback />

  return (
    <LanyardBoundary>
      <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} fov={20} />
    </LanyardBoundary>
  )
}
