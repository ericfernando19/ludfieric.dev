"use client"

import { useCallback, useSyncExternalStore } from "react"
import { Sun, Moon } from "lucide-react"

function getSnapshot() {
  return document.documentElement.classList.contains("dark")
}

function subscribe(cb: () => void) {
  const observer = new MutationObserver(cb)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
  return () => observer.disconnect()
}

function getServerSnapshot() {
  return false
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggle = useCallback(() => {
    const next = !dark
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }, [dark])

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg text-muted hover:text-primary hover:bg-black/5 transition-colors dark:text-steel dark:hover:text-primary-light dark:hover:bg-white/5"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
