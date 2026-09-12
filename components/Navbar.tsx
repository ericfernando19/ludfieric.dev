"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLang } from "./LanguageProvider"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const { locale, t, toggle } = useLang()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.certificates, href: "#certificates" },
    { label: t.nav.contact, href: "#contact" },
  ]

  const handleClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/90 dark:bg-dark/90 backdrop-blur-xl border-b border-border/50 dark:border-zinc-800/50"
          : "bg-surface/60 dark:bg-dark/60 backdrop-blur-sm"
      )}
    >
      <nav className="w-full px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-sm text-muted dark:text-zinc-400 hover:text-secondary dark:hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: toggles + hamburger */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={toggle}
              className="px-2.5 py-1.5 text-xs font-semibold rounded-full border border-border dark:border-zinc-700 text-muted dark:text-zinc-400 hover:text-primary dark:hover:text-terracotta hover:border-primary/30 dark:hover:border-terracotta/30 transition-colors"
              aria-label="Toggle language"
            >
              {locale === "id" ? "EN" : "ID"}
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-secondary dark:text-white hover:bg-zinc-200/50 dark:hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border dark:border-zinc-800 bg-surface dark:bg-dark/95 backdrop-blur-xl"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left px-3 py-2.5 text-sm font-medium text-muted dark:text-zinc-400 hover:text-primary dark:hover:text-terracotta hover:bg-zinc-100 dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
