"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/lib/icons"
import { SITE_CONFIG } from "@/lib/data"
import { useLang } from "./LanguageProvider"
import { SectionHeading } from "./SectionHeading"

const socials = [
  { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${SITE_CONFIG.whatsapp}` },
  { icon: Mail, label: "Email", href: `mailto:${SITE_CONFIG.email}` },
  { icon: GithubIcon, label: "GitHub", href: SITE_CONFIG.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: SITE_CONFIG.linkedin },
]

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="band-alt relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(30,114,234,0.10),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_20%_80%,rgba(47,134,255,0.14),transparent_55%)]"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: statement */}
        <div>
          <SectionHeading
            title={
              <>
                {t.contact.titleA}
                <span className="text-primary dark:text-primary-light">{t.contact.titleB}</span>
              </>
            }
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 inline-flex max-w-full items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-[11px] font-semibold text-primary dark:border-primary-light/40 dark:bg-primary-light/10 dark:text-primary-light"
          >
            {t.hero.status}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 max-w-md text-base leading-relaxed text-muted dark:text-steel-dark"
          >
            {SITE_CONFIG.email}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <a href={`mailto:${SITE_CONFIG.email}`} className="btn-primary">
              {t.hero.ctaContact}
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right: channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-t border-border dark:border-white/10"
        >
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-border py-4 text-secondary transition-colors hover:text-primary dark:border-white/10 dark:text-steel dark:hover:text-primary-light"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-semibold">{s.label}</span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-colors group-hover:text-primary dark:text-steel-dark dark:group-hover:text-primary-light"
                />
              </a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
