"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Props {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("max-w-3xl", className)}
    >
      {eyebrow && <span className="eyebrow-pill mb-5">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted dark:text-steel-dark max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
