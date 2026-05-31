"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Mail, Send, CheckCircle } from "lucide-react"
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
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-zinc-50/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Hubungi Saya"
          subtitle="Tertarik bekerja sama? Jangan ragu untuk menghubungi saya."
        />

        <div className="grid lg:grid-cols-5 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-secondary dark:text-white mb-4">
                Informasi Kontak
              </h3>
              <p className="text-sm text-muted dark:text-zinc-400 leading-relaxed mb-6">
                Hubungi saya melalui platform berikut untuk diskusi proyek Anda.
              </p>
            </div>
            <div className="space-y-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800 ${s.color} transition-all duration-200 group`}
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama Anda"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800 text-secondary dark:text-white placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Anda"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800 text-secondary dark:text-white placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors text-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Subjek"
                required
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800 text-secondary dark:text-white placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
              <textarea
                placeholder="Pesan Anda"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800 text-secondary dark:text-white placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                disabled={sent}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold gradient-bg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 active:scale-95 disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Terkirim!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
