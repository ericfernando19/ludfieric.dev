"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "@/lib/icons"
import { PROJECTS } from "@/lib/data"
import { useLang } from "./LanguageProvider"
import SectionHeading from "./SectionHeading"

export default function Portfolio() {
  const { t } = useLang()

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.projects.heading}
          subtitle={t.projects.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group rounded-2xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800 overflow-hidden hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-secondary dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted dark:text-zinc-400 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-medium rounded-md bg-zinc-100 dark:bg-white/5 text-muted dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-border dark:border-zinc-700 text-secondary dark:text-zinc-300 hover:border-primary/40 dark:hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      <GithubIcon className="w-3 h-3" />
                      {t.projects.github}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
