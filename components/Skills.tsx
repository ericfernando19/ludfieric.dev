"use client"

import { motion } from "framer-motion"
import { SKILLS } from "@/lib/data"
import { useLang } from "./LanguageProvider"
import SectionHeading from "./SectionHeading"

const categoryKeys = ["frontend", "backend", "database", "tools"] as const
const categoryLabels: Record<string, keyof ReturnType<typeof useLang>["t"]["skills"]> = {
  frontend: "frontend",
  backend: "backend",
  database: "database",
  tools: "tools",
}

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-zinc-50/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.skills.heading}
          subtitle={t.skills.subtitle}
        />

        <div className="max-w-3xl mx-auto space-y-8">
          {categoryKeys.map((cat, catIdx) => {
            const skills = SKILLS.filter((s) => s.category === cat)
            const label = t.skills[categoryLabels[cat]]
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              >
                <h3 className="text-sm font-semibold text-muted dark:text-zinc-500 uppercase tracking-wider mb-3">
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white dark:bg-white/5 border border-border dark:border-zinc-800 text-secondary dark:text-zinc-200"
                    >
                      {skill.name}
                    </span>
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
