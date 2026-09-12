"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/lib/icons"
import { SITE_CONFIG } from "@/lib/data"
import { useLang } from "./LanguageProvider"

const socials = [
  { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${SITE_CONFIG.whatsapp}` },
  { icon: Mail, label: "Email", href: `mailto:${SITE_CONFIG.email}` },
  { icon: GithubIcon, label: "GitHub", href: SITE_CONFIG.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: SITE_CONFIG.linkedin },
]

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="relative py-24 md:py-32">
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
                {t.contact.heading}
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
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary dark:text-white leading-tight mb-4">
                {t.contact.subtitle}
              </h2>
              <p className="text-muted dark:text-zinc-400 max-w-lg mb-10">
                {SITE_CONFIG.email}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-0 border-t border-border dark:border-zinc-800"
            >
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 border-b border-border dark:border-zinc-800 text-secondary dark:text-zinc-300 hover:text-primary dark:hover:text-terracotta transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{s.label}</span>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-muted dark:text-zinc-600 group-hover:text-primary dark:group-hover:text-terracotta transition-colors"
                    />
                  </a>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
