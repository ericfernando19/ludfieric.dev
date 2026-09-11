"use client"

import { useState, useEffect } from "react"
import { motion, type Variants } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { SITE_CONFIG } from "@/lib/data"
import { useLang } from "./LanguageProvider"

/* ── Floating Particles ── */
function FloatingParticles() {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; delay: number; duration: number }[]
  >([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 4,
      }))
    )
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/40"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

/* ── Animated Title (character stagger) ── */
function AnimatedTitle({ text }: { text: string }) {
  const words = text.split(" ")
  const lastIdx = words.length - 1

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
  }

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <motion.h1
      className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-secondary dark:text-white leading-[1.1]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.3em]">
          {wi === lastIdx ? (
            <span className="inline-block bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              {word.split("").map((char, ci) => (
                <motion.span key={ci} className="inline-block" variants={childVariants}>
                  {char}
                </motion.span>
              ))}
            </span>
          ) : (
            word.split("").map((char, ci) => (
              <motion.span key={ci} className="inline-block" variants={childVariants}>
                {char}
              </motion.span>
            ))
          )}
        </span>
      ))}
    </motion.h1>
  )
}

/* ── Typing Subtitle ── */
function TypingSubtitle({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        setDone(true)
        clearInterval(timer)
      }
    }, 60)
    return () => clearInterval(timer)
  }, [text])

  return (
    <p className="mt-4 text-lg sm:text-xl font-medium text-muted dark:text-zinc-300">
      {displayed}
      {!done && <span className="typing-cursor" />}
    </p>
  )
}

/* ── Hero ── */
export default function Hero() {
  const { t } = useLang()

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px] animate-gradient" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/20 blur-[120px] animate-gradient" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] right-[20%] w-[35%] h-[35%] rounded-full bg-cyan-400/15 blur-[100px] animate-gradient" style={{ animationDelay: "4s" }} />
      </div>

      <FloatingParticles />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-2 md:order-1"
          >
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              <div className="profile-glow aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-white/5 animate-glow-pulse">
                <img
                  src="/foto.jpg"
                  alt={t.hero.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative blurs */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" />
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-cyan-400/20 rounded-full blur-lg" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 md:order-2"
          >
            <AnimatedTitle text={t.hero.title} />

            <TypingSubtitle text={t.hero.subtitle} />

            <motion.p
              className="mt-4 max-w-lg text-muted dark:text-zinc-400 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-start gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
