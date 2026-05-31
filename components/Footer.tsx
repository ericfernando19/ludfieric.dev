import { Mail, MessageCircle } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/lib/icons"
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from "@/lib/data"

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail: Mail as unknown as React.FC<React.SVGProps<SVGSVGElement>>,
  MessageCircle: MessageCircle as unknown as React.FC<React.SVGProps<SVGSVGElement>>,
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border dark:border-zinc-800 bg-white dark:bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-secondary dark:text-white mb-3">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm text-muted dark:text-zinc-400 leading-relaxed max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-secondary dark:text-white mb-4 uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-secondary dark:text-white mb-4 uppercase tracking-wider">
              Sosial Media
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-muted dark:text-zinc-400 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all"
                    aria-label={link.label}
                  >
                    {Icon && <Icon width={18} height={18} />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border dark:border-zinc-800 text-center">
          <p className="text-sm text-muted dark:text-zinc-500">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
