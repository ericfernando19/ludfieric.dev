"use client"

import { motion } from "framer-motion"
import { Zap, FileCode, Headphones, Search } from "lucide-react"
import { useLang } from "./LanguageProvider"
import SectionHeading from "./SectionHeading"

const strengthIcons = [Zap, FileCode, Headphones, Search]

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.about.heading}
          subtitle={t.about.subtitle}
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-muted dark:text-zinc-400 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-muted dark:text-zinc-400 leading-relaxed">
              {t.about.description2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            <div className="p-4 rounded-xl border border-border dark:border-zinc-800 text-center">
              <div className="text-2xl font-bold text-primary">S1</div>
              <div className="text-sm text-muted dark:text-zinc-500 mt-1">{t.about.stat1Label}</div>
            </div>
            <div className="p-4 rounded-xl border border-border dark:border-zinc-800 text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted dark:text-zinc-500 mt-1">{t.about.stat2Label}</div>
            </div>
            <div className="p-4 rounded-xl border border-border dark:border-zinc-800 text-center">
              <div className="text-2xl font-bold text-primary">9</div>
              <div className="text-sm text-muted dark:text-zinc-500 mt-1">{t.about.stat3Label}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {t.about.strengths.map((item, i) => {
              const Icon = strengthIcons[i]
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border dark:border-zinc-800"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-secondary dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted dark:text-zinc-500 mt-0.5 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
