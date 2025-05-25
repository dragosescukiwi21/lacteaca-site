"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [textVisible, setTextVisible] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)

  useEffect(() => {
    // Animate text first
    const textTimer = setTimeout(() => {
      setTextVisible(true)
    }, 285)

    // Then animate logo
    const logoTimer = setTimeout(() => {
      setLogoVisible(true)
    }, 1000)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(logoTimer)
    }
  }, [])

  return (
    <section id="hero" className="container relative flex min-h-[calc(100vh-3.5rem)] max-w-screen-xl flex-col items-center justify-center space-y-6 py-16 text-center md:py-24">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-[-100px] top-0 h-[400px] w-[400px] bg-fuchsia-500/10 blur-[80px]" />
        <div className="absolute bottom-0 left-[-100px] h-[400px] w-[400px] bg-blue-500/10 blur-[80px]" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Logo */}
        <div 
          className={`transition-opacity duration-1000 ease-in-out -mb-0 ${
            logoVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image 
            src="/images/logo_transparent.png" 
            alt="Lactate de la Teaca logo" 
            width={300} 
            height={300} 
            priority 
            className="mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-8">
          <div
            className={`space-y-4 transition-all duration-1000 ease-in-out ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="pluto font-medium bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
              Lactate de la
              <br />
              Teaca
            </h1>
            <p className="mx-auto max-w-[36rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Lactate de la Teaca oferă produse tradiționale din lapte, proaspete și naturale, obținute din ferme locale din inima Transilvaniei. Gustul autentic și rețetele curate aduc savoarea de odinioară direct pe masa ta
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`flex gap-4 justify-center transition-all duration-1000 ease-in-out delay-300 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button size="sm">
              Exploreaza Produsele
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              Vezi istoria
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
