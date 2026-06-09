"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Layout,
  Palette,
  Database,
  Building2,
  Search,
  type LucideIcon,
} from "lucide-react"
import { SERVICES } from "@/lib/data"
import SectionHeading from "./SectionHeading"

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Palette,
  Database,
  Building2,
  Search,
}

export default function Services() {
  return (
    <section id="keahlian" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Bidang Keahlian"
          subtitle="Kompetensi yang saya kuasai di bidang pengembangan perangkat lunak dan teknologi informasi."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {Icon && <Icon className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold text-secondary dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
