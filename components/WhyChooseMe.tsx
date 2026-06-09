"use client"

import { motion } from "framer-motion"
import {
  Smartphone,
  Zap,
  Search,
  FileCode,
  Palette,
  Shield,
  Layers,
  Headphones,
  type LucideIcon,
} from "lucide-react"
import { WHY_CHOOSE_ME } from "@/lib/data"
import SectionHeading from "./SectionHeading"

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Zap,
  Search,
  FileCode,
  Palette,
  Shield,
  Layers,
  Headphones,
}

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Mengapa Saya Layak Dipilih"
          subtitle="Nilai lebih yang saya bawa sebagai calon karyawan yang siap berkontribusi dalam tim Anda."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_ME.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  {Icon && <Icon className="w-5 h-5 text-primary" />}
                </div>
                <h3 className="text-base font-semibold text-secondary dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
