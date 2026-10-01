"use client"

import { motion } from "framer-motion"
import { useLang } from "./LanguageProvider"

export default function Education() {
  const { t } = useLang()

  return (
    <section id="experience" className="relative py-24 md:py-32">
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
                {t.education.heading}
              </span>
              <p className="text-sm text-muted dark:text-zinc-500 mt-3 max-w-[200px]">
                {t.education.subtitle}
              </p>
            </motion.div>
          </div>

          {/* Right: groups */}
          <div className="md:col-span-9">
            {t.education.groups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: gi * 0.08 }}
                className={gi > 0 ? "mt-12" : ""}
              >
                <h3 className="text-xs font-semibold text-muted dark:text-zinc-500 uppercase tracking-[0.15em] mb-4">
                  {group.label}
                </h3>
                <div className="border-t border-border dark:border-zinc-800">
                  {group.items.map((item, i) => (
                    <motion.div
                      key={`${group.label}-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="py-5 border-b border-border dark:border-zinc-800 grid sm:grid-cols-12 gap-2 sm:gap-4"
                    >
                      <div className="sm:col-span-3 font-mono text-sm text-muted dark:text-zinc-500">
                        {item.period}
                      </div>
                      <div className="sm:col-span-9">
                        <h4 className="text-base font-semibold text-secondary dark:text-white">
                          {item.title}
                        </h4>
                        {item.org && (
                          <p className="text-sm text-muted dark:text-zinc-500">{item.org}</p>
                        )}
                        {item.desc && (
                          <p className="text-sm text-muted dark:text-zinc-400 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
