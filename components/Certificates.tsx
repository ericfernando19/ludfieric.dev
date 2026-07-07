"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { CERTIFICATES } from "@/lib/data"
import SectionHeading from "./SectionHeading"

const categoryGradients: Record<string, string> = {
  "Web Development": "from-blue-600 to-cyan-500",
  Programming: "from-purple-600 to-pink-500",
  Backend: "from-emerald-600 to-teal-500",
  Frontend: "from-orange-600 to-amber-500",
  Database: "from-pink-600 to-rose-500",
  Cloud: "from-cyan-600 to-blue-500",
  AI: "from-violet-600 to-purple-500",
}

function getInitials(title: string): string {
  return title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Sertifikat"
          subtitle="Sertifikasi profesional dan pencapaian yang menunjukkan komitmen saya dalam pembelajaran berkelanjutan di bidang pengembangan perangkat lunak."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => {
            const initials = getInitials(cert.title)
            const gradient = categoryGradients[cert.category]

            return (
              <motion.a
                key={cert.title}
                href={cert.certificateUrl || cert.credentialUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group block rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-border dark:border-zinc-800 overflow-hidden hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-xl dark:hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
                    >
                      <span className="text-4xl md:text-5xl font-bold text-white/90 select-none">
                        {initials}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-secondary dark:text-white mb-1 leading-snug group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted dark:text-zinc-400 mb-1">
                    {cert.organization}
                  </p>
                  <p className="text-xs text-muted/70 dark:text-zinc-500 mb-3">
                    Diterbitkan {cert.issueDate}
                  </p>
                  <p className="text-sm text-muted dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    Lihat Sertifikat
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
