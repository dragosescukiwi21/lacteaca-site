import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import BentoGrid from "@/components/bento-grids"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Global Subtle Background Gradient */}
      <div className="pointer-events-none fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <BentoGrid />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
