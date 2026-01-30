"use client"

import { motion, type Variants, type Easing } from "framer-motion"

const easeCinematic: Easing = [0.16, 1, 0.3, 1]

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: [40, 20, 0],
    transition: {
      duration: 1.6,
      ease: easeCinematic,
    },
  },
}

export function RevealItem({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div variants={itemVariants}>
      {children}
    </motion.div>
  )
}
