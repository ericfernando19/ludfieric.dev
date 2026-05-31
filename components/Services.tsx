"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Layout,
  Store,
  UserCheck,
  Database,
  Code2,
  type LucideIcon,
} from "lucide-react"
import { SERVICES } from "@/lib/data"
import SectionHeading from "./SectionHeading"

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Layout,
  Store,
  UserCheck,
  Database,
  Code2,
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Layanan"
          subtitle="Solusi pengembangan website profesional untuk kebutuhan bisnis dan personal branding Anda."
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
