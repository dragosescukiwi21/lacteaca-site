import Link from "next/link"
import { Instagram, Facebook, Linkedin } from "lucide-react"

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
            <h3 className="text-xs font-medium">Exemplu</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/ai-analytics" className="text-muted-foreground transition-colors hover:text-primary">
                  Exemplu 1
                </Link>
              </li>
              <li>
                <Link href="/cloud-services" className="text-muted-foreground transition-colors hover:text-primary">
                  Exemplu 2
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
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.facebook.com/sinelli.ro"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
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
