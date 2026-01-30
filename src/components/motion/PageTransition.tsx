"use client"

import { motion, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12, // styrer topp → bunn-følelsen
    },
  },
}

export function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const prefersReducedMotion = useReducedMotion()
  const pathname = usePathname()

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.main
      key={pathname}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.main>
  )
}
