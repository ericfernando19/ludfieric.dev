"use client"

import { motion } from "framer-motion"
import { useLang } from "./LanguageProvider"
import { SectionHeading } from "./SectionHeading"

export default function Education() {
  const { t } = useLang()

  return (
    <section id="experience" className="band-alt relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              {t.education.titleA}
              <span className="text-primary dark:text-primary-light">{t.education.titleB}</span>
            </>
          }
          subtitle={t.education.subtitle}
        />

        <div className="mt-10 space-y-12">
          {t.education.groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
            >
              <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary dark:text-primary-light">
                {group.label}
              </h3>
              <div className="border-t border-border dark:border-white/10">
                {group.items.map((item, i) => (
                  <motion.div
                    key={`${group.label}-${i}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="grid gap-1 border-b border-border py-5 sm:grid-cols-12 sm:gap-4 dark:border-white/10"
                  >
                    <div className="font-mono text-sm text-primary sm:col-span-3 dark:text-primary-light">
                      {item.period}
                    </div>
                    <div className="sm:col-span-9">
                      <h4 className="text-base font-semibold text-secondary dark:text-white">
                        {item.title}
                      </h4>
                      {item.org && (
                        <p className="text-sm text-muted dark:text-steel">{item.org}</p>
                      )}
                      {item.desc && (
                        <p className="mt-1 text-sm leading-relaxed text-muted dark:text-steel-dark">
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
    </section>
  )
}
