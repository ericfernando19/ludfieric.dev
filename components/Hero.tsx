"use client"

import { motion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SITE_CONFIG } from "@/lib/data"
import { useLang } from "./LanguageProvider"

/* ── Animated Title (character stagger) ── */
function AnimatedTitle({ text }: { text: string }) {
  const chars = text.split("")

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
  }

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.h1
      className="text-[8.5vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] font-bold tracking-[-0.04em] text-secondary dark:text-white leading-[0.85] text-center whitespace-nowrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {chars.map((char, ci) => (
        <motion.span
          key={ci}
          className="inline-block"
          variants={childVariants}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  )
}

/* ── Hero ── */
export default function Hero() {
  const { t } = useLang()

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
        {/* Name - large character stagger */}
        <AnimatedTitle text={t.hero.title} />

        {/* Large centered photo */}
        <motion.div
          className="relative w-full max-w-md mt-10 mb-10"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="/fotoku.png"
              alt={t.hero.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Subtitle + tagline */}
        <motion.div
          className="text-center max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-primary dark:text-terracotta mb-4">
            {SITE_CONFIG.title}
          </span>
          <p className="text-base sm:text-lg text-muted dark:text-zinc-400 leading-relaxed">
            {t.hero.tagline}
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full bg-secondary dark:bg-white text-white dark:text-secondary hover:bg-primary dark:hover:bg-terracotta transition-colors active:scale-[0.98]"
          >
            {t.hero.ctaProjects}
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full border border-secondary/20 dark:border-white/20 text-secondary dark:text-white hover:border-primary dark:hover:border-terracotta hover:text-primary dark:hover:text-terracotta transition-colors active:scale-[0.98]"
          >
            {t.hero.ctaContact}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <motion.div
          className="w-[1px] h-12 bg-secondary/20 dark:bg-white/20 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
