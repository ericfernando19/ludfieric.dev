"use client"

import { createContext, useContext, useState, useCallback, useSyncExternalStore } from "react"
import { translations, type Locale } from "@/lib/i18n"

type T = (typeof translations)["id"]

interface LanguageContextType {
  locale: Locale
  t: T
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function getSnapshot() {
  return (localStorage.getItem("lang") as Locale) || "id"
}

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb)
  return () => window.removeEventListener("storage", cb)
}

function getServerSnapshot() {
  return "id" as Locale
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [locale, setLocale] = useState<Locale>(stored)

  const toggle = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "id" ? "en" : "id"
      localStorage.setItem("lang", next)
      return next
    })
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale] as T, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLang must be used within LanguageProvider")
  return ctx
}
