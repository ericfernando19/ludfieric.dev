"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/lib/icons"
import { SITE_CONFIG } from "@/lib/data"
import { useLang } from "./LanguageProvider"
import SectionHeading from "./SectionHeading"

const socials = [
  { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${SITE_CONFIG.whatsapp}`, hoverColor: "hover:text-green-500 hover:border-green-500/30" },
  { icon: Mail, label: "Email", href: `mailto:${SITE_CONFIG.email}`, hoverColor: "hover:text-primary hover:border-primary/30" },
  { icon: GithubIcon, label: "GitHub", href: SITE_CONFIG.github, hoverColor: "hover:text-secondary dark:hover:text-white hover:border-secondary/30" },
  { icon: LinkedinIcon, label: "LinkedIn", href: SITE_CONFIG.linkedin, hoverColor: "hover:text-blue-600 hover:border-blue-600/30" },
]

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.contact.heading}
          subtitle={t.contact.subtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto grid grid-cols-2 gap-3"
        >
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800 text-muted dark:text-zinc-400 ${s.hoverColor} transition-all duration-200 group`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium text-secondary dark:text-zinc-300 group-hover:text-inherit">
                  {s.label}
                </span>
              </a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
