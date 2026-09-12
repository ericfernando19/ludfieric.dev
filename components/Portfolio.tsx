"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { GithubIcon } from "@/lib/icons"
import { PROJECTS } from "@/lib/data"
import { useLang } from "./LanguageProvider"

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
        className={`text-sm text-muted dark:text-zinc-400 leading-relaxed ${
          !isExpanded ? "line-clamp-2" : ""
        }`}
      >
        {text}
      </p>
      {isClamped && (
        <button
          onClick={onToggle}
          className="text-xs text-primary dark:text-terracotta hover:text-primary-dark mt-1 flex items-center gap-0.5 transition-colors"
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary dark:text-terracotta">
                {t.projects.heading}
              </span>
            </motion.div>
          </div>
          <div className="md:col-span-9">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted dark:text-zinc-400"
            >
              {t.projects.subtitle}
            </motion.p>
          </div>
        </div>

        <div className="space-y-0">
          {PROJECTS.map((project, i) => {
            const isExpanded = expandedIndex === i

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group border-t border-border dark:border-zinc-800"
              >
                <div className="py-8 grid md:grid-cols-12 gap-6 items-start">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="text-sm font-mono text-muted dark:text-zinc-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="md:col-span-5 overflow-hidden">
                    <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-6">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-secondary dark:text-white mb-2">
                      {project.title}
                    </h3>

                    <Description
                      text={project.description}
                      isExpanded={isExpanded}
                      onToggle={() => toggleExpand(i)}
                    />

                    <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-white/5 text-muted dark:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-secondary dark:bg-white text-white dark:text-secondary hover:bg-primary dark:hover:bg-terracotta transition-colors"
                        >
                          <ExternalLink size={12} />
                          {t.projects.demo}
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border border-secondary/20 dark:border-white/20 text-secondary dark:text-zinc-300 hover:border-primary dark:hover:border-terracotta hover:text-primary dark:hover:text-terracotta transition-colors"
                        >
                          <GithubIcon className="w-3 h-3" />
                          {t.projects.github}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
