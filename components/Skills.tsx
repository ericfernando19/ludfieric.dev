"use client"

import { motion } from "framer-motion"
import { SKILLS } from "@/lib/data"
import { useLang } from "./LanguageProvider"

const categoryKeys = ["frontend", "backend", "database", "mobile", "tools"] as const
const categoryLabels: Record<string, keyof ReturnType<typeof useLang>["t"]["skills"]> = {
  frontend: "frontend",
  backend: "backend",
  database: "database",
  mobile: "mobile",
  tools: "tools",
}

const skillIcons: Record<string, { src: string; invert?: boolean }> = {
  HTML5: { src: "/skills/html5.svg" },
  CSS3: { src: "/skills/css3.svg" },
  JavaScript: { src: "/skills/javascript.svg" },
  TypeScript: { src: "/skills/typescript.svg" },
  React: { src: "/skills/react.svg" },
  "Next.js": { src: "/skills/nextjs.svg", invert: true },
  "Tailwind CSS": { src: "/skills/tailwindcss.svg" },
  Bootstrap: { src: "/skills/bootstrap.svg" },
  PHP: { src: "/skills/php.svg" },
  Laravel: { src: "/skills/laravel.svg" },
  "REST API": { src: "/skills/openapi.svg" },
  Prisma: { src: "/skills/prisma.svg", invert: true },
  MySQL: { src: "/skills/mysql.svg" },
  PostgreSQL: { src: "/skills/postgresql.svg" },
  SQLite: { src: "/skills/sqlite.svg" },
  Kotlin: { src: "/skills/kotlin.svg" },
  "Android (dasar)": { src: "/skills/android.svg" },
  Git: { src: "/skills/git.svg" },
  GitHub: { src: "/skills/github.svg", invert: true },
  "VS Code": { src: "/skills/vscode.svg" },
  Figma: { src: "/skills/figma.svg" },
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
                    {skills.map((skill) => {
                      const icon = skillIcons[skill.name]
                      return (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-zinc-100 dark:bg-white/5 text-secondary dark:text-zinc-300 border border-transparent hover:border-primary/30 dark:hover:border-terracotta/30 hover:text-primary dark:hover:text-terracotta transition-colors cursor-default"
                        >
                          {icon && (
                            <img
                              src={icon.src}
                              alt=""
                              aria-hidden
                              className={`w-4 h-4 shrink-0 ${
                                icon.invert ? "dark:invert" : ""
                              }`}
                            />
                          )}
                          {skill.name}
                        </span>
                      )
                    })}
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
