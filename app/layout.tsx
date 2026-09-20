import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { LanguageProvider } from "@/components/LanguageProvider"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ludfi Eric Fernando | Web Developer",
  description:
    "Web Developer berfokus pada pengembangan web dengan React, Next.js, dan TypeScript. Menerima proyek freelance dan pencari peluang kerja dalam tim pengembangan yang dinamis.",
  keywords: [
    "web developer",
    "freelance web developer",
    "jasa pembuatan website",
    "react developer",
    "next.js developer",
    "typescript",
    "laravel",
    "portfolio",
    "ludfi eric fernando",
  ],
  authors: [{ name: "Ludfi Eric Fernando" }],
  openGraph: {
    title: "Ludfi Eric Fernando | Web Developer",
    description:
      "Web Developer berfokus pada pengembangan web dengan React, Next.js, dan TypeScript.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ludfi Eric Fernando | Web Developer",
    description:
      "Web Developer berfokus pada pengembangan web dengan React, Next.js, dan TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html
        lang="id"
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <body className="min-h-screen flex flex-col font-sans antialiased">
          <Script id="theme-init" strategy="beforeInteractive">
            {`
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `}
          </Script>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </body>
      </html>
  )
}
