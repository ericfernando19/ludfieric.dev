"use client"

import { SITE_CONFIG } from "@/lib/data"
import { useLang } from "./LanguageProvider"

export default function Footer() {
  const { t } = useLang()

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.education, href: "#experience" },
    { label: t.nav.certificates, href: "#certificates" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <footer className="border-t border-border dark:border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-dark text-xs font-black text-white">
              LE
            </span>
            <p className="text-sm text-muted dark:text-steel-dark">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. {t.footer.copyright}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:text-primary dark:text-steel-dark dark:hover:text-primary-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
