"use client"

import { motion } from "framer-motion"
import { ArrowDown, MousePointerClick } from "lucide-react"
import { SITE_CONFIG } from "@/lib/data"

export default function Hero() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:via-transparent dark:to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent dark:from-primary/20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent border border-primary/20">
            <MousePointerClick size={14} />
            Tersedia untuk Proyek Baru
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary dark:text-white"
        >
          {SITE_CONFIG.name.split(" ").map((word, i) =>
            i === SITE_CONFIG.name.split(" ").length - 1 ? (
              <span key={i} className="gradient-text">
                {" "}{word}
              </span>
            ) : (
              <span key={i}>{i === 0 ? "" : " "}{word}</span>
            )
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-muted dark:text-zinc-300"
        >
          {SITE_CONFIG.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-muted dark:text-zinc-400 text-base sm:text-lg leading-relaxed"
        >
          {SITE_CONFIG.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-muted dark:text-zinc-500 leading-relaxed"
        >
          {SITE_CONFIG.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll("#portfolio")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold gradient-bg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 active:scale-95"
          >
            Lihat Portofolio
            <ArrowDown size={18} />
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold border border-border dark:border-zinc-700 text-secondary dark:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-all duration-300 active:scale-95"
          >
            Hubungi Saya
          </button>
        </motion.div>
      </div>
    </section>
  )
}
