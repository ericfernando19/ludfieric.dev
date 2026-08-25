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
    { label: t.nav.certificates, href: "#certificates" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <footer className="border-t border-border dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted dark:text-zinc-500">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. {t.footer.copyright}
          </p>

          <div className="flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted dark:text-zinc-500 hover:text-primary transition-colors"
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
