import Navbar from "@/components/Navbar"
import MotionProvider from "@/components/MotionProvider"
import Hero from "@/components/Hero"
import LogoStrip from "@/components/LogoStrip"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Portfolio from "@/components/Portfolio"
import Education from "@/components/Education"
import Certificates from "@/components/Certificates"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <About />
        <Skills />
        <Portfolio />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  )
}
