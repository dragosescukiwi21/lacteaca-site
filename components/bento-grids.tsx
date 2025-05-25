"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import GridPattern from '@/components/ui/GridPattern';

export default function BentoGrid() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [isSelected, setIsSelected] = useState(false);
    
    return (
      <section id="bento-grids" ref={ref} className="border-t bg-white py-24 md:py-32 overflow-hidden">
        <motion.div 
          className="container space-y-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-gray-900">Fabrica de la Teaca</h2>
            <p className="mt-4 text-gray-600 sm:text-lg">
              La Teaca, pasiunea pentru calitate începe din inima producției. Fabrica noastră este locul unde dedicarea,
              experiența de decenii și standardele înalte se unesc pentru a crea gustul desăvârșit și produsele sigure pe care le îndrăgiți.
            </p>
          </div>
  
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[700px]">
              {/* Panel 1 - Large vertical panel */}
              <motion.div 
                onClick={() => setIsSelected(!isSelected)}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 backdrop-blur-sm border-[2px] border-gray-400/20 p-8 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 z-10">
                  <GridPattern dotColor={isSelected ? "rgba(255, 0, 0, 0.47)" : "rgba(100, 100, 100, 0.47)"} dotSize="1px" spacing="30px" idSuffix="blue" className="opacity-90" />
                </div>
                

                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img src="/images/logo_transparentv2.png" alt="Logo" className="w-1/2 h-auto" />
                </div>
                <img src="/images/factory.png" alt="Factory" className="absolute inset-0 object-cover w-full h-full opacity-100" />
                <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
              </motion.div>
  
              {/* Right column with two stacked panels */}
              <div className="flex flex-col gap-6">
                {/* Panel 2 - Top right panel */}
                <motion.div 
                  className="flex-1 relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50/80 via-teal-50/60 to-cyan-50/80 backdrop-blur-lg border-[2px] border-gray-400/20 p-8 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-green-400/50 to-teal-400/20">
                  <GridPattern dotColor="rgba(83, 83, 83, 0.29)" dotSize="1.25px" spacing="28px" idSuffix="orange" className="opacity-90" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-indigo-900 to-transparent h-[60%]"></div>
                  <div className="absolute bottom-10 left-8 max-w-[85%]">
                    <h1 className="text-white text-lg font-extrabold sm:text-xl md:text-2xl">Calitate Zilnica Asigurata</h1>
                    <p className="text-white text-sm sm:text-base md:text-lg">Standarde stricte și tehnologie modernă. Siguranța și prospețimea lactatelor tale garantate.</p>
                  </div>
                </motion.div>
  
                {/* Panel 3 - Bottom right panel */}
                <motion.div 
                  className="flex-1 relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-200 via-amber-200/60 to-white backdrop-blur-lg border-[2px] border-gray-400/20 p-8 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-800/20 via-red-500/5 to-pink-500/10">
                    <GridPattern dotColor="rgba(83, 83, 83, 0.29)" dotSize="1.25px" spacing="28px" idSuffix="orange" className="opacity-90" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-indigo-900 to-transparent h-[60%]"></div>
                  <div className="absolute bottom-10 left-10 max-w-[85%]">
                    <h3 className="text-white text-lg font-extrabold sm:text-xl md:text-2xl">Mostenire Vie Din Teaca</h3>
                    <p className="text-white text-sm sm:text-base md:text-lg">La Teaca tradiția prinde viață. Peste 30 de ani de măiestrie și grijă în fiecare produs.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    )
  }
