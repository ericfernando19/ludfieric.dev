const LOGOS = [
  { src: "/skills/html5.svg", alt: "HTML5" },
  { src: "/skills/css3.svg", alt: "CSS3" },
  { src: "/skills/javascript.svg", alt: "JavaScript" },
  { src: "/skills/typescript.svg", alt: "TypeScript" },
  { src: "/skills/react.svg", alt: "React" },
  { src: "/skills/nextjs.svg", alt: "Next.js", darkInvert: true },
  { src: "/skills/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "/skills/bootstrap.svg", alt: "Bootstrap" },
  { src: "/skills/php.svg", alt: "PHP" },
  { src: "/skills/laravel.svg", alt: "Laravel" },
  { src: "/skills/mysql.svg", alt: "MySQL" },
  { src: "/skills/postgresql.svg", alt: "PostgreSQL" },
  { src: "/skills/kotlin.svg", alt: "Kotlin" },
  { src: "/skills/git.svg", alt: "Git" },
  { src: "/skills/github.svg", alt: "GitHub", darkInvert: true },
  { src: "/skills/figma.svg", alt: "Figma" },
]

export default function LogoStrip() {
  return (
    <section
      aria-label="Tech stack"
      className="band-alt border-y border-border py-6 overflow-hidden dark:border-white/10"
    >
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-10 sm:gap-14 pr-10 sm:pr-14">
          {LOGOS.map((logo) => (
            <img
              key={`${logo.alt}-a`}
              src={logo.src}
              alt={logo.alt}
              width={28}
              height={28}
              className={`h-6 w-auto sm:h-7 ${logo.darkInvert ? "dark:invert" : ""}`}
            />
          ))}
          {LOGOS.map((logo) => (
            <img
              key={`${logo.alt}-b`}
              src={logo.src}
              alt=""
              aria-hidden="true"
              width={28}
              height={28}
              className={`h-6 w-auto sm:h-7 ${logo.darkInvert ? "dark:invert" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
