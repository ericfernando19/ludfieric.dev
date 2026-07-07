"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const closeModal = useCallback(() => setSelectedImage(null), [])

  return (
    <>
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
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group block rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-border dark:border-zinc-800 overflow-hidden hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-xl dark:hover:shadow-primary/5 transition-all duration-300"
                >
                  {cert.image ? (
                    <div
                      className="aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900 cursor-pointer"
                      onClick={() => setSelectedImage(cert.image!)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          setSelectedImage(cert.image!)
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Perbesar sertifikat ${cert.title}`}
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
                      >
                        <span className="text-4xl md:text-5xl font-bold text-white/90 select-none">
                          {initials}
                        </span>
                      </div>
                    </div>
                  )}
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

                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white/80 hover:text-white z-10 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Sertifikat diperbesar"
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
