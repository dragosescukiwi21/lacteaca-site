"use client";

import { useState, useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Import the Autoplay plugin
import { BicepsFlexed, Bone, Milk, Zap, ChevronLeft, ChevronRight, Dessert, Wheat, HeartPulse, Sprout} from "lucide-react"
import { TiktokLogo } from 'phosphor-react';

import Image from "next/image"
import GridPattern from "@/components/ui/GridPattern"
import { motion, useInView } from 'framer-motion';

// const leftFeatures = [
//   {
//     name: "Puritate Naturală",
//     description: "Lapte de vacă pasteurizat, plin de calciu pentru oase puternice. Puritate naturală, respectând armonia organică a ingredientelor.",
//     icon: Milk,
//   },
//   {
//     name: "Gust Autentic, Energie Curată",
//     description: "Gust autentic din tradiția de 30 de ani. Sursă de energie naturală pentru o zi plină de vitalitate și stare de bine.",
//     icon: Zap,
//   },
// ];

// const rightFeatures = [
//   {
//     name: "Vitamine și Minerale",
//     description: "Lapte curat, prin procese atente ce păstrează vitaminele și mineralele. Pentru nutriție echilibrată și un organism puternic.",
//     icon: Bone,
//   },
//   {
//     name: "Sănătate din Natură, Zilnic",
//     description: "Bogat în proteine pentru mușchi și o bună dispoziție. Un aliment organic, pentru un stil de viață activ.",
//     icon: BicepsFlexed,
//   },
// ];

const products = [
  {
    id: 1,
    name: "Lapte Proaspăt",
    description: "Lapte de vacă pasteurizat, plin de calciu pentru oase puternice. Proaspăt zilnic de la ferma noastră.",
    image: "/images/tetrabrik.png",
    features: [
      {
        name: "Natural",
        description: "Lapte pur, fără aditivi, direct de la sursă.",
        icon: Sprout,
      },
      {
        name: "Gust",
        description: "Gust autentic și proaspăt, ca la țară.",
        icon: Milk,
      },
      {
        name: "Vitamine",
        description: "Îmbogățit cu vitamine esențiale pentru sănătate.",
        icon: BicepsFlexed,
      },
      {
        name: "Sanatate",
        description: "Contribuie la o dietă echilibrată și sănătoasă.",
        icon: HeartPulse,
      }
    ]
  },
  {
    id: 2,
    name: "Brânza frământată",
    description: "O delicatesă ardelenească din lapte proaspăt, este frământată manual pentru un gust autentic. Textura sa fină și cremoasă dezvăluie o savoare bogată, reflectând tradiția și calitatea pură a zonei Teaca.",
    image: "/images/branza-fr.png",
    features: [
      {
        name: "Gust",
        description: "Conține culturi vii pentru o digestie sănătoasă.",
        icon: Milk,
      },
      {
        name: "Cremozitate",
        description: "Textură fină și cremoasă, ideală pentru deserturi.",
        icon: Dessert,
      },
      {
        name: "Energie",
        description: "Oferă energie naturală pentru întreaga zi.",
        icon: Zap,
      }
    ]
  },
  {
    id: 3,
    name: "Smântână",
    description: "Smântâna fină și cremoasă concentrează bogăția laptelui, aducând un plus de savoare și textură rafinată. Un deliciu lactat versatil, ideal pentru a completa și îmbogăți gustul preparatelor culinare diverse.",
    image: "/images/smantana.png",
    features: [
      {
        name: "Gust",
        description: "Aromă bogată și textură cremoasă.",
        icon: Milk,
      },
      {
        name: "Bogat in Calciu",
        description: "Sursă excelentă de calciu pentru oase puternice.",
        icon: Bone,
      },
      {
        name: "Traditie",
        description: "Produs după rețete tradiționale.",
        icon: Wheat,
      }
    ]
  },
  {
    id: 4,
    name: "Sana",
    description: "Sana obținuta din smântână proaspătă. Perfect cu pâine proaspătă.",
    image: "/images/sana.png",
    features: [
      {
        name: "Probiotice",
        description: "Conține culturi vii pentru o digestie sănătoasă.",
        icon: Milk,
      },
      {
        name: "Cremozitate",
        description: "Textură fină și cremoasă, ideală pentru deserturi.",
        icon: Dessert,
      },
      {
        name: "Energie",
        description: "Oferă energie naturală pentru întreaga zi.",
        icon: Zap,
      }
    ]
  },
  {
    id: 5,
    name: "Unt",
    description: "Unt cremos și delicios, obținut din smântână proaspătă. Perfect pentru pâine proaspătă sau gătit.",
    image: "/images/butter.png",
    features: [
      {
        name: "Gust",
        description: "Aromă bogată și textură cremoasă.",
        icon: Milk,
      },
      {
        name: "Bogat in Calciu",
        description: "Sursă excelentă de calciu pentru oase puternice.",
        icon: Bone,
      },
    ]
  }
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const autoplay = useRef(Autoplay(
    { delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true }
  ));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [autoplay.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Start autoplay when component mounts and is in view
  useEffect(() => {
    if (isInView && emblaApi) {
      autoplay.current.play();
    }
    
    return () => {
      if (emblaApi) {
        autoplay.current.stop();
      }
    };
  }, [isInView, emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      autoplay.current.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      autoplay.current.reset();
    }
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Re-enable autoplay after user interaction
    const handlePointerDown = () => {
      autoplay.current.stop();
    };
    
    const handlePointerUp = () => {
      autoplay.current.play();
    };
    
    emblaApi.on('pointerDown', handlePointerDown);
    emblaApi.on('pointerUp', handlePointerUp);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('pointerDown', handlePointerDown);
      emblaApi.off('pointerUp', handlePointerUp);
    };
  }, [emblaApi, onSelect]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div id="features" className="border-t relative py-12 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Dot Pattern Background */} 
      <GridPattern dotColor="rgba(53, 53, 53, 0.21)" dotSize="1.05px" spacing="27px" className="absolute inset-0 z-[5] pointer-events-none" />

      {/* Blurry Circle Background */}
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
        }}
        className="absolute inset-0 flex justify-center items-center"
      >
        <div className="h-[50vw] w-[50vw] max-h-[500px] max-w-[500px] bg-gradient-to-r from-blue-400/20 to-cyan-400 rounded-full blur-3xl opacity-25"></div>
        <div className="h-[40vw] w-[40vw] max-h-[400px] max-w-[400px] bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-3xl opacity-25"></div>
      </motion.div>

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="space-y-4"
        >
          <motion.div 
            className="relative flex items-center"
            variants={item}
          >
          {/* Left Arrow */}
          <button 
            onClick={scrollPrev}
            className="hidden sm:block absolute left-2 sm:-left-8 md:-left-20 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-background/80 backdrop-blur-md border shadow-lg hover:bg-accent transition-colors"
            aria-label="Produsul anterior"
            style={{ minWidth: 48 }}
          > 
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
          
          <div className="w-full">
            <motion.section 
              className="relative space-y-8 sm:space-y-10 py-10 sm:py-12 md:py-16 px-2 sm:px-6 md:px-12
                         bg-background/80 backdrop-blur-lg rounded-2xl 
                         border border-border shadow-xl w-full max-w-[44rem] sm:max-w-[56rem] md:max-w-[72rem] mx-auto min-h-[40rem] sm:min-h-0"
              variants={item}
            >
              <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                  <motion.div 
                    className="flex w-full"
                    variants={item}
                  >
                    {products.map((product) => (
                      <div key={product.id} className="flex-[0_0_100%] min-w-0 px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-center max-w-[40rem] sm:max-w-[56rem] md:max-w-[84rem] w-full mx-auto flex-wrap">
                          {/* Left side - Product Image */}
                          <motion.div 
                            className="flex justify-center items-center"
                            variants={item}
                          >
                            <div className="relative h-64 sm:h-90 md:h-[32rem] w-full">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </motion.div>

                          {/* Right side - Content */}
                          <motion.div 
                            className="flex flex-col justify-between h-full sm:block sm:h-auto space-y-0 sm:space-y-4 md:space-y-6"
                            variants={item}
                          >
                            <div>
                              {/* Feature Icons Row */}
                              <div className="flex flex-wrap gap-1 sm:gap-2">
                                {product.features.map((feature, index) => (
                                  <div
                                    key={feature.name}
                                    className="flex items-center gap-1 sm:gap-2 bg-white/80 rounded-xl border-[1.5px] border-gray-200/60 p-1 sm:p-1.5 pr-2 sm:pr-3"
                                  >
                                    <div className="p-1 sm:p-1 rounded-lg text-sky-500">
                                      <feature.icon className="h-6 w-6 sm:h-4 sm:w-4" />
                                    </div>
                                    <span className="text-xs sm:text-xs font-medium text-gray-600">
                                      {feature.name.split(' ')[0]}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="mt-0 sm:mt-6 md:mt-6">
                              <h1 className="font-bold text-4xl sm:text-4xl md:text-4xl lg:text-4xl leading-[1.1] text-left px-2 pb-2 pt-4 sm:px-0 sm:pb-0 sm:pt-0 bg-background/80 sm:bg-transparent">
                                {product.name}
                              </h1>
                              <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed px-2 pb-4 sm:px-0 sm:pb-0 bg-background/80 sm:bg-transparent">
                                {product.description}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Dots Navigation */}
            <motion.div 
              className="flex justify-center gap-2 mt-8"
              variants={item}
            >
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === selectedIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Mergi la produsul ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <motion.button 
            onClick={scrollNext}
            className="hidden sm:block absolute right-2 sm:-right-8 md:-right-20 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-background/80 backdrop-blur-md border shadow-lg hover:bg-accent transition-colors"
            aria-label="Următorul produs"
            variants={item}
            style={{ minWidth: 48 }}
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
