"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/lib/icons"
import { SITE_CONFIG } from "@/lib/data"
import SectionHeading from "./SectionHeading"

const socials = [
  { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${SITE_CONFIG.whatsapp}`, color: "hover:text-green-500" },
  { icon: Mail, label: "Email", href: `mailto:${SITE_CONFIG.email}`, color: "hover:text-primary" },
  { icon: GithubIcon, label: "GitHub", href: SITE_CONFIG.github, color: "hover:text-gray-900 dark:hover:text-white" },
  { icon: LinkedinIcon, label: "LinkedIn", href: SITE_CONFIG.linkedin, color: "hover:text-blue-600" },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-zinc-50/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Hubungi Saya"
          subtitle="Jangan ragu untuk menghubungi saya melalui platform di bawah."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="space-y-3">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800 ${s.color} transition-all duration-200 group`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium text-secondary dark:text-zinc-300 group-hover:text-inherit">
                    {s.label}
                  </span>
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
