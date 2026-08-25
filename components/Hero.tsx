"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { SITE_CONFIG } from "@/lib/data"
import { useLang } from "./LanguageProvider"

export default function Hero() {
  const { t } = useLang()

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-white/5">
                <img
                  src="/foto.jpg"
                  alt={t.hero.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-secondary dark:text-white leading-[1.1]">
              {t.hero.title.split(" ").map((word, i) =>
                i === t.hero.title.split(" ").length - 1 ? (
                  <span key={i} className="text-primary">
                    {" "}{word}
                  </span>
                ) : (
                  <span key={i}>{i === 0 ? "" : " "}{word}</span>
                )
              )}
            </h1>

            <p className="mt-4 text-lg sm:text-xl font-medium text-muted dark:text-zinc-300">
              {t.hero.subtitle}
            </p>

            <p className="mt-4 max-w-lg text-muted dark:text-zinc-400 leading-relaxed">
              {t.hero.tagline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <button
                onClick={() => handleScroll("#projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-primary hover:bg-primary-dark transition-colors active:scale-[0.98]"
              >
                {t.hero.ctaProjects}
                <ArrowDown size={16} />
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-border dark:border-zinc-700 text-secondary dark:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors active:scale-[0.98]"
              >
                {t.hero.ctaContact}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
