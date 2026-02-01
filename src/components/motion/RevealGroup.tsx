"use client"

import { motion, type Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18, // 👈 tydelig stegvis nedover
      delayChildren: 0.05,    // 👈 liten pause før første item
    },
  },
}

export function RevealGroup({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        margin: "-120px",
      }}
    >
      {children}
    </motion.div>
  )
}
