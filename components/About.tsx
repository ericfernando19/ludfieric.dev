"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SITE_CONFIG } from "@/lib/data"
import { useLang } from "./LanguageProvider"
import { SectionHeading } from "./SectionHeading"
import { RingArt } from "./Decor"

export default function About() {
  const { t } = useLang()

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const stats = [
    { value: "S1", label: t.about.stat1Label },
    { value: "6", label: t.about.stat2Label },
    { value: "9", label: t.about.stat3Label },
    { value: "2", label: t.about.stat4Label },
  ]

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: photo card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="card-surface relative overflow-hidden p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-[#eaf2fd] to-[#c9dcf6]">
                <Image
                  src="/foto_pp.png"
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <RingArt className="absolute -bottom-12 -left-12 w-44 text-primary/40 dark:text-primary-light/30" />
          </motion.div>

          {/* Right: copy */}
          <div>
            <SectionHeading
              eyebrow={t.about.heading}
              title={
                <>
                  {t.about.titleA}{" "}
                  <span className="text-primary dark:text-primary-light">{t.about.titleB}</span>
                </>
              }
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 mt-4"
            >
              <p className="text-base sm:text-lg text-secondary leading-relaxed dark:text-steel">
                {t.about.description1}
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed dark:text-steel-dark">
                {t.about.description2}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-white p-4 dark:border-white/10 dark:bg-navy-800"
                >
                  <div className="text-2xl font-extrabold tracking-tight text-primary dark:text-primary-light">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-muted dark:text-steel-dark">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <button onClick={() => handleScroll("#projects")} className="btn-primary">
                {t.hero.ctaProjects}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-border pt-10 dark:border-white/10"
        >
          {t.about.strengths.map((item, i) => (
            <div key={item.title}>
              <div className="text-sm font-bold text-secondary dark:text-white">
                <span className="mr-2 font-mono text-primary dark:text-primary-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.title}
              </div>
              <p className="mt-1.5 pl-8 text-sm text-muted leading-relaxed dark:text-steel-dark">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
