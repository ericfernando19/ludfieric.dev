"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import { GithubIcon } from "@/lib/icons"
import { PROJECTS } from "@/lib/data"
import { useLang } from "./LanguageProvider"
import { SectionHeading } from "./SectionHeading"

function Description({ text, isExpanded, onToggle }: { text: string; isExpanded: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [isClamped, setIsClamped] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight)
    }
  }, [text])

  return (
    <>
      <p
        ref={ref}
        className={`text-sm text-muted leading-relaxed dark:text-steel-dark ${
          !isExpanded ? "line-clamp-2" : ""
        }`}
      >
        {text}
      </p>
      {isClamped && (
        <button
          onClick={onToggle}
          className="mt-1 flex items-center gap-0.5 text-xs font-semibold text-primary transition-colors hover:text-primary-dark dark:text-primary-light dark:hover:text-white"
        >
          {isExpanded ? (
            <>
              Lebih sedikit <ChevronUp size={12} />
            </>
          ) : (
            <>
              Selengkapnya <ChevronDown size={12} />
            </>
          )}
        </button>
      )}
    </>
  )
}

export default function Portfolio() {
  const { t } = useLang()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={
            <>
              {t.projects.titleA}
              <span className="text-primary dark:text-primary-light">{t.projects.titleB}</span>
            </>
          }
          subtitle={t.projects.subtitle}
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            const isExpanded = expandedIndex === i
            const hasDemo = Boolean(project.demoUrl && project.demoUrl !== "#")
            const hasGithub = Boolean(project.githubUrl && project.githubUrl !== "#")
            const primaryUrl = hasDemo ? project.demoUrl : hasGithub ? project.githubUrl : null
            const showGithubOutline = hasDemo && hasGithub

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="card-surface group flex flex-col overflow-hidden"
              >
                <div className="aspect-video overflow-hidden bg-navy-900 dark:bg-navy-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold leading-snug text-secondary dark:text-white">
                    {project.title}
                  </h3>

                  <div className="mt-2">
                    <Description
                      text={project.description}
                      isExpanded={isExpanded}
                      onToggle={() => toggleExpand(i)}
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-black/5 px-2.5 py-1 text-xs font-medium text-muted dark:bg-white/10 dark:text-steel"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex justify-end gap-2 pt-5">
                    {showGithubOutline && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary hover:text-primary dark:border-white/15 dark:text-steel dark:hover:border-primary-light dark:hover:text-primary-light"
                        aria-label={`${t.projects.github}: ${project.title}`}
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                    {primaryUrl && (
                      <a
                        href={primaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white shadow-[0_10px_24px_-10px_rgba(30,114,234,0.9)] transition hover:brightness-110 active:scale-[0.97]"
                        aria-label={
                          hasDemo
                            ? `${t.projects.demo}: ${project.title}`
                            : `${t.projects.github}: ${project.title}`
                        }
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
