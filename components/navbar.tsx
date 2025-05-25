"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Github, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-auto md:mr-6 flex items-center space-x-2">
          <span className="pluto font-medium">Lactate de la Teaca</span>
        </Link>
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
          <Link href="/solutions" className="transition-colors hover:text-primary">
            Despre noi 
          </Link>
          <Link href="/industries" className="transition-colors hover:text-primary">
            Produse
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            Despre Sinelli
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4 ml-6">
          <Link href="https://www.facebook.com/sinelli.ro" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
          </Link>
          <Button size="sm">
            Contact
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/40 shadow-lg z-40">
          <nav className="flex flex-col space-y-1 py-3 px-4">
            <Link href="/solutions" className="py-2 transition-colors hover:text-primary block" onClick={() => setIsMobileMenuOpen(false)}>
              Despre noi
            </Link>
            <Link href="/industries" className="py-2 transition-colors hover:text-primary block" onClick={() => setIsMobileMenuOpen(false)}>
              Produse
            </Link>
            <Link href="/about" className="py-2 transition-colors hover:text-primary block" onClick={() => setIsMobileMenuOpen(false)}>
              Despre Sinelli
            </Link>
            <div className="border-t border-border/40 mt-2 pt-2"> 
              <Link 
                href="https://www.facebook.com/sinelli.ro" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center py-2 transition-colors hover:text-primary" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Facebook className="h-4 w-4 mr-2" /> Facebook
              </Link>
              <Button 
                size="sm" 
                className="w-full text-left justify-start mt-1 py-2" 
                variant="ghost" 
                onClick={() => {
                  setIsMobileMenuOpen(false)
                }}
              >
                Contact
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
