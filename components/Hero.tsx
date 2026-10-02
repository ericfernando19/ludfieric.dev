"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/lib/icons"
import { SITE_CONFIG } from "@/lib/data"
import { useLang } from "./LanguageProvider"
import { RingArt, Sphere } from "./Decor"

const socials = [
  { icon: GithubIcon, label: "GitHub", href: SITE_CONFIG.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: SITE_CONFIG.linkedin },
  { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${SITE_CONFIG.whatsapp}` },
]

function lineVariants(delay: number): Variants {
  return {
    hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
    },
  }
}

export default function Hero() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-24 pb-16 bg-gradient-to-b from-[#eef4fd] to-surface dark:from-[#0a1f3d] dark:to-navy-950"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(30,114,234,0.10),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_75%_30%,rgba(47,134,255,0.22),transparent_55%)]"
      />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <span className="eyebrow-pill">{SITE_CONFIG.name}</span>
          </motion.div>

          <motion.h1
            className="mt-6 text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold uppercase tracking-tight leading-[1.02] text-secondary dark:text-white"
            initial={reduce ? false : "hidden"}
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
          >
            <motion.span className="block" variants={lineVariants(0)}>
              {t.hero.greeting}
            </motion.span>
            <motion.span className="block text-primary dark:text-primary-light" variants={lineVariants(0.12)}>
              {t.hero.subtitle}
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-5 text-base sm:text-lg leading-relaxed text-muted max-w-[52ch] mx-auto lg:mx-0 dark:text-steel"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <button onClick={() => handleScroll("#contact")} className="btn-primary">
              {t.hero.ctaContact}
              <ArrowRight size={16} />
            </button>
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label={s.label}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              )
            })}
          </motion.div>
        </div>

        {/* Right: photo + decorations */}
        <motion.div
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Light halo so the cutout figure reads against navy */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[50%] bg-[radial-gradient(ellipse_at_50%_42%,rgba(174,214,255,0.62)_0%,rgba(80,155,255,0.34)_52%,rgba(80,155,255,0.10)_72%,transparent_82%)]"
          />
          <RingArt className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] sm:w-[105%] text-primary/40 dark:text-primary-light/35" />
          <Sphere className="-left-2 top-8 sm:left-4" size={54} delay={0.4} />
          <Sphere className="right-0 top-1/3 sm:right-6" size={34} delay={1.1} />
          <Sphere className="left-6 bottom-10" size={22} delay={0.8} />

          <Image
            src="/fotoku.png"
            alt={SITE_CONFIG.name}
            width={408}
            height={612}
            priority
            className="relative mx-auto w-[78%] sm:w-[70%] lg:w-full max-w-[360px] h-auto object-contain drop-shadow-[0_30px_60px_rgba(3,10,22,0.6)]"
          />
        </motion.div>
      </div>
    </section>
  )
}
