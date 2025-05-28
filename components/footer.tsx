"use client"

import Link from "next/link"
import { InstagramLogo, TiktokLogo, FacebookLogo } from "phosphor-react"

export default function Footer() {
  return (
    <footer className="border-t py-4">
      <div className="container flex flex-col gap-6 py-6 md:flex-row md:py-8">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold text-base">Lactate de la Teaca</h2>
          <p className="text-xs text-muted-foreground">Gust autentic ardelenesc, tradiție și calitate de peste 30 de ani.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <p className="text-xs font-small">Mai multe despre noi</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="https://www.google.com/maps/place/Sinelli/@46.9105342,24.4873434,498m/data=!3m1!1e3!4m6!3m5!1s0x474a24118c40bd33:0xa4a3b5b03b7e86f5!8m2!3d46.9112546!4d24.4890616!16s%2Fg%2F11x9l4hjw?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" className="text-muted-foreground transition-colors hover:text-primary">
                Unde Ne Găsești 
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xs font-medium">Urmărește-ne</h3>
            <div className="flex space-x-3">
              <Link
                href="https://www.instagram.com/lactosinelli/"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <InstagramLogo className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>

              <Link
                href="https://www.tiktok.com/@lactatedelateaca/"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <TiktokLogo className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>

              <Link
                href="https://www.facebook.com/sinelli.ro"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <FacebookLogo className="h-5 w-5" />
                <span className="sr-only">https://www.facebook.com/sinelli.ro</span>
              </Link>
              

            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lactate de la Teaca, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
