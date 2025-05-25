"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check } from 'lucide-react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  // Reset subscription status after delay
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isSubscribed) {
      timer = setTimeout(() => {
        setIsSubscribed(false)
      }, 3000) 
    }
    return () => clearTimeout(timer)
  }, [isSubscribed])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Error subscribing:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section className="border-t bg-gradient-to-b from-background to-muted/20">
      <div className="container flex flex-col items-center gap-6 py-20 text-center md:py-28">
        <motion.div 
          className="w-full max-w-4xl mx-auto space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="font-bold text-3xl leading-[1.1] sm:text-4xl md:text-5xl"
            variants={item}
          >
            Poftă de gust autentic și natural?
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground"
            variants={item}
          >
            Alătură-te celor ce aleg zilnic Lactate de la Teaca pentru prospețimea și tradiția care definesc mesele în familie.
          </motion.p>

          <motion.div 
            className="pt-2 w-full max-w-2xl mx-auto space-y-4"
            variants={item}
          >
            {isSubscribed ? (
              <motion.div 
                className="inline-flex items-center gap-2 px-6 py-4 text-base font-medium text-green-600 bg-green-100 rounded-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <Check className="w-5 h-5" />
                Vă mulțumim pentru abonare!
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 w-full">
                <div className="relative w-full">
                  <Mail className="absolute w-6 h-6 -translate-y-1/2 text-muted-foreground left-6 top-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Adresa ta de email"
                    className="w-full h-16 pl-16 pr-6 text-lg transition-all border-2 rounded-full shadow-sm bg-background border-border placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-48 mx-auto py-2.5 text-base gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Se încarcă...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      Alătură-te
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.p 
            className="text-sm text-muted-foreground/80"
            variants={item}
          >
            Primesti noutăți proaspete, rețete delicioase și oferte speciale direct în inbox.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
