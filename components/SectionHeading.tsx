"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Props {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({ title, subtitle, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("text-center mb-16", className)}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted dark:text-zinc-400 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
