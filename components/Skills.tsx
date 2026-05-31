"use client"

import { motion } from "framer-motion"
import { SKILLS } from "@/lib/data"
import SectionHeading from "./SectionHeading"
import { cn } from "@/lib/utils"

const categories = [
  { key: "frontend", label: "Frontend", color: "bg-blue-500" },
  { key: "backend", label: "Backend", color: "bg-emerald-500" },
  { key: "database", label: "Database", color: "bg-purple-500" },
  { key: "tools", label: "Tools", color: "bg-orange-500" },
] as const

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-zinc-50/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Keahlian"
          subtitle="Teknologi dan tools yang saya kuasai untuk mengembangkan website berkualitas."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, catIdx) => {
            const skills = SKILLS.filter((s) => s.category === cat.key)
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800"
              >
                <h3 className="text-lg font-semibold text-secondary dark:text-white mb-6 flex items-center gap-3">
                  <span className={cn("w-3 h-3 rounded-full", cat.color)} />
                  {cat.label}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-secondary dark:text-zinc-200">{skill.name}</span>
                        <span className="text-muted dark:text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className={cn("h-full rounded-full", cat.color)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
