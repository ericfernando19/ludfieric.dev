"use client"

import { motion } from "framer-motion"
import { SKILLS } from "@/lib/data"
import { useLang } from "./LanguageProvider"

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
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Left: label */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary dark:text-terracotta">
                {t.skills.heading}
              </span>
              <p className="text-sm text-muted dark:text-zinc-500 mt-3 max-w-[200px]">
                {t.skills.subtitle}
              </p>
            </motion.div>
          </div>

          {/* Right: skills */}
          <div className="md:col-span-9 space-y-10">
            {categoryKeys.map((cat, catIdx) => {
              const skills = SKILLS.filter((s) => s.category === cat)
              const label = t.skills[categoryLabels[cat]]
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: catIdx * 0.06 }}
                >
                  <h3 className="text-xs font-semibold text-muted dark:text-zinc-500 uppercase tracking-[0.15em] mb-4">
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-zinc-100 dark:bg-white/5 text-secondary dark:text-zinc-300 border border-transparent hover:border-primary/30 dark:hover:border-terracotta/30 hover:text-primary dark:hover:text-terracotta transition-colors cursor-default"
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
      </div>
    </section>
  )
}
