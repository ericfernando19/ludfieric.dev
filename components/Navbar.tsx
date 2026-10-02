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
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.education, href: "#experience" },
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
          ? "bg-surface/90 backdrop-blur-xl border-b border-border dark:bg-navy-950/90 dark:border-white/10"
          : "bg-surface/60 backdrop-blur-sm dark:bg-transparent"
      )}
    >
      <nav className="w-full px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 max-w-7xl mx-auto items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleClick("#home")}
            className="flex shrink-0 items-center gap-2.5"
            aria-label={t.nav.home}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-dark text-sm font-black text-white shadow-[0_8px_20px_-8px_rgba(30,114,234,0.9)]">
              LE
            </span>
            <span className="hidden sm:inline text-[13px] font-extrabold uppercase tracking-[0.14em] text-secondary dark:text-white">
              Ludfi Eric Fernando
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] text-muted hover:text-secondary transition-colors dark:text-steel dark:hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: toggles + CTA */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={toggle}
              className="px-2.5 py-1.5 text-[11px] font-bold rounded-full border border-secondary/20 text-muted hover:border-primary hover:text-primary transition-colors dark:border-white/15 dark:text-steel dark:hover:border-primary-light dark:hover:text-primary-light"
              aria-label="Toggle language"
            >
              {locale === "id" ? "EN" : "ID"}
            </button>
            <ThemeToggle />
            <button
              onClick={() => handleClick("#contact")}
              className="btn-primary hidden sm:inline-flex !px-5 !py-2.5 !text-[12px]"
            >
              {t.hero.ctaContact}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-secondary dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
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
            className="lg:hidden border-b border-border bg-surface/95 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/95"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left px-3 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted hover:text-primary hover:bg-black/5 rounded-lg transition-colors dark:text-steel dark:hover:text-primary-light dark:hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#contact")}
                className="btn-primary w-full mt-3"
              >
                {t.hero.ctaContact}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
