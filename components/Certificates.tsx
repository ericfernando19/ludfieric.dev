"use client"

import { useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { CERTIFICATES } from "@/lib/data"
import { useLang } from "./LanguageProvider"
import SectionHeading from "./SectionHeading"

const categoryColors: Record<string, string> = {
  "Mobile Development": "bg-blue-500",
  "Studi Independen": "bg-emerald-500",
  Programming: "bg-purple-500",
  Database: "bg-pink-500",
  AI: "bg-violet-500",
}

export default function Certificates() {
  const { t } = useLang()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const closeModal = useCallback(() => setSelectedImage(null), [])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = 320
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <>
      <section id="certificates" className="relative py-24 md:py-32 bg-zinc-50/50 dark:bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t.certificates.heading}
            subtitle={t.certificates.subtitle}
          />

          <div className="relative">
            <div className="flex justify-end gap-2 mb-4">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-lg border border-border dark:border-zinc-800 text-muted dark:text-zinc-400 hover:text-primary hover:border-primary/30 transition-colors"
                aria-label={t.certificates.prev}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-lg border border-border dark:border-zinc-800 text-muted dark:text-zinc-400 hover:text-primary hover:border-primary/30 transition-colors"
                aria-label={t.certificates.next}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {CERTIFICATES.map((cert, i) => {
                const dotColor = categoryColors[cert.category] || "bg-zinc-400"

                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex-none w-[280px] snap-start rounded-2xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800 overflow-hidden hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300"
                  >
                    {cert.image && (
                      <div
                        className="aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900 cursor-pointer"
                        onClick={() => setSelectedImage(cert.image!)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault()
                            setSelectedImage(cert.image!)
                          }
                        }}
                        aria-label={`${t.certificates.enlarge} ${cert.title}`}
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 pointer-events-none"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
                        <span className="text-xs text-muted dark:text-zinc-500">
                          {cert.category}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-secondary dark:text-white mb-1 leading-snug line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-muted dark:text-zinc-500">
                        {cert.organization}
                      </p>
                      <p className="text-xs text-muted/70 dark:text-zinc-600 mt-1">
                        {cert.issueDate}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
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
