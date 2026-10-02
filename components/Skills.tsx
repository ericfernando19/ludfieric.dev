"use client"

import { motion } from "framer-motion"
import { SKILLS } from "@/lib/data"
import { useLang } from "./LanguageProvider"
import { SectionHeading } from "./SectionHeading"

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
    <section id="skills" className="band-alt relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              {t.skills.titleA}
              <span className="text-primary dark:text-primary-light">{t.skills.titleB}</span>
            </>
          }
          subtitle={t.skills.subtitle}
        />

        <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-9">
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
                <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-primary dark:text-primary-light">
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const icon = skillIcons[skill.name]
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-secondary transition-colors hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-steel dark:hover:border-primary-light/40 dark:hover:text-primary-light"
                      >
                        {icon && (
                          <img
                            src={icon.src}
                            alt=""
                            aria-hidden="true"
                            className={`h-4 w-4 shrink-0 ${icon.invert ? "dark:invert" : ""}`}
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
    </section>
  )
}
