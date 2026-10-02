"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export function RingArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <circle
          key={i}
          cx="200"
          cy="200"
          r={54 + i * 22}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray={i % 2 === 0 ? "none" : "4 8"}
          opacity={0.55 - i * 0.06}
        />
      ))}
      <circle cx="200" cy="200" r="18" fill="currentColor" opacity="0.12" />
    </svg>
  )
}

export function Sphere({
  className,
  size = 64,
  delay = 0,
}: {
  className?: string
  size?: number
  delay?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full border border-white/10",
        "bg-[radial-gradient(circle_at_32%_28%,#1d4a78_0%,#0d2542_45%,#061224_100%)] shadow-[inset_0_2px_10px_rgba(120,180,255,0.25)]",
        className
      )}
      style={{ width: size, height: size }}
      initial={reduce ? false : { y: 0 }}
      animate={reduce ? undefined : { y: [0, -16, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
    />
  )
}
