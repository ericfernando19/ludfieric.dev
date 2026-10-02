"use client"

import { useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { CERTIFICATES } from "@/lib/data"
import { useLang } from "./LanguageProvider"
import { SectionHeading } from "./SectionHeading"

export default function Certificates() {
  const { t } = useLang()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const closeModal = useCallback(() => setSelectedImage(null), [])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = 300
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <>
      <section id="certificates" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t.certificates.heading}
              title={
                <>
                  {t.certificates.titleA}
                  <span className="text-primary dark:text-primary-light">
                    {t.certificates.titleB}
                  </span>
                </>
              }
              subtitle={t.certificates.subtitle}
            />
            <div className="mb-1 flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="btn-icon !h-10 !w-10"
                aria-label={t.certificates.prev}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="btn-icon !h-10 !w-10"
                aria-label={t.certificates.next}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CERTIFICATES.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="card-surface group w-[250px] flex-none snap-start overflow-hidden p-3 sm:w-[270px]"
              >
                {cert.image && (
                  <div
                    className="mb-3 aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-navy-900 dark:bg-navy-900"
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
                      className="pointer-events-none h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary dark:text-primary-light">
                  {cert.category}
                </span>
                <h3 className="mb-1 mt-1.5 line-clamp-2 text-sm font-semibold leading-snug text-secondary dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted dark:text-steel-dark">{cert.organization}</p>
                <p className="mt-0.5 text-xs text-muted/70 dark:text-steel-dark/80">
                  {cert.issueDate}
                </p>
              </motion.div>
            ))}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-2 text-white/80 transition-colors hover:bg-black/40 hover:text-white sm:right-6 sm:top-6"
              aria-label="Tutup"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Sertifikat diperbesar"
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
