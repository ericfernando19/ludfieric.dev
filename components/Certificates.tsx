"use client"

import { useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { CERTIFICATES } from "@/lib/data"
import { useLang } from "./LanguageProvider"

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
    const amount = 280
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <>
      <section id="certificates" className="relative py-24 md:py-32">
        <div className="w-full px-5 sm:px-6 lg:px-8">
          {/* Mobile: stacked layout */}
          <div className="md:hidden mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary dark:text-terracotta">
                {t.certificates.heading}
              </span>
              <p className="text-sm text-muted dark:text-zinc-500 mt-2">
                {t.certificates.subtitle}
              </p>
            </motion.div>
          </div>

          {/* Desktop: grid layout */}
          <div className="hidden md:grid md:grid-cols-12 md:gap-8 md:mb-16">
            <div className="md:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary dark:text-terracotta">
                  {t.certificates.heading}
                </span>
                <p className="text-sm text-muted dark:text-zinc-500 mt-3 max-w-[200px]">
                  {t.certificates.subtitle}
                </p>
              </motion.div>
            </div>
            <div className="md:col-span-9">
              <div className="flex justify-end gap-2 mb-6">
                <button
                  onClick={() => scroll("left")}
                  className="p-2.5 rounded-full border border-border dark:border-zinc-800 text-muted dark:text-zinc-400 hover:text-primary dark:hover:text-terracotta hover:border-primary/30 dark:hover:border-terracotta/30 transition-colors"
                  aria-label={t.certificates.prev}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="p-2.5 rounded-full border border-border dark:border-zinc-800 text-muted dark:text-zinc-400 hover:text-primary dark:hover:text-terracotta hover:border-primary/30 dark:hover:border-terracotta/30 transition-colors"
                  aria-label={t.certificates.next}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile scroll buttons */}
          <div className="flex md:hidden justify-end gap-2 mb-4">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-border dark:border-zinc-800 text-muted dark:text-zinc-400 hover:text-primary dark:hover:text-terracotta transition-colors"
              aria-label={t.certificates.prev}
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-border dark:border-zinc-800 text-muted dark:text-zinc-400 hover:text-primary dark:hover:text-terracotta transition-colors"
              aria-label={t.certificates.next}
            >
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
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
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex-none w-[240px] sm:w-[260px] md:w-[280px] snap-start overflow-hidden group"
                >
                  {cert.image && (
                    <div
                      className="aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-white/5 cursor-pointer mb-3"
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
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                    <span className="text-xs text-muted dark:text-zinc-500">
                      {cert.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-secondary dark:text-white leading-snug line-clamp-2 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted dark:text-zinc-500">
                    {cert.organization}
                  </p>
                  <p className="text-xs text-muted/60 dark:text-zinc-600 mt-0.5">
                    {cert.issueDate}
                  </p>
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
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
