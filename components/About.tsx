"use client"

import { motion } from "framer-motion"
import { useLang } from "./LanguageProvider"

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="relative py-24 md:py-32">
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
                {t.about.heading}
              </span>
            </motion.div>
          </div>

          {/* Right: content */}
          <div className="md:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-lg sm:text-xl text-secondary dark:text-zinc-200 leading-relaxed max-w-2xl">
                {t.about.description1}
              </p>
              <p className="text-muted dark:text-zinc-400 leading-relaxed max-w-2xl">
                {t.about.description2}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 grid grid-cols-3 gap-8 border-t border-border dark:border-zinc-800 pt-8"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-secondary dark:text-white">
                  S1
                </div>
                <div className="text-sm text-muted dark:text-zinc-500 mt-1">{t.about.stat1Label}</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-secondary dark:text-white">
                  5+
                </div>
                <div className="text-sm text-muted dark:text-zinc-500 mt-1">{t.about.stat2Label}</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-secondary dark:text-white">
                  9
                </div>
                <div className="text-sm text-muted dark:text-zinc-500 mt-1">{t.about.stat3Label}</div>
              </div>
            </motion.div>

            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {t.about.strengths.map((item, i) => (
                <div key={item.title} className="group">
                  <div className="text-base font-semibold text-secondary dark:text-white mb-1">
                    <span className="text-primary dark:text-terracotta mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.title}
                  </div>
                  <p className="text-sm text-muted dark:text-zinc-500 leading-relaxed pl-8">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
