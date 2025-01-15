'use client'

import React, { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import './styles.css'

import type { Page } from '@/payload-types'
import Link from 'next/link'

export const HighImpactHero: React.FC<Page['hero']> = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  useEffect(() => {
      if (emblaApi) {
        // Embla API is ready
      }
    }, [emblaApi]);

  return (
  <div className="w-full relative">
    <div className="embla overflow-hidden h-[50vh] md:h-[70vh]" ref={emblaRef}>    
      <div className="embla__container flex h-full">

        <div className="embla__slide azul-overlay dots-overlay">
          <video
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full z-0">
            <source src="/hero-videos/hero-water.mp4" type="video/mp4" />
          </video>
          <div className="container h-full flex flex-col justify-center items-center relative z-30">
            <h1 className="text-4xl md:text-[72px] text-center md:leading-[80px]">
              Experience the <span className="text-selectiveyellow">purest water</span> for a healthier life
            </h1>
            <p className="my-5 pt-5 text-lg text-center md:mx-auto md:max-w-[60%]">Enjoy crystal-clear, impurity-free water with our advanced treatment systems. Essential for your families health &amp; wellbeing</p>
            <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 bg-jet border border-selectiveyellow text-selectiveyellow hover:bg-selectiveyellow hover:text-jet text-lg relative z-30">Get A Quote</Link>
          </div>
        </div>

        <div className="embla__slide azul-overlay dots-overlay">
          <video
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full z-0">
            <source src="/hero-videos/water-bubbles.mp4" type="video/mp4" />
          </video>
          <div className="container h-full flex flex-col justify-center items-center relative z-30">
            <h1 className="text-4xl md:text-[72px] text-center md:leading-[80px]">
              Experience the <span className="text-selectiveyellow">purest water</span> for a healthier life
            </h1>
            <p className="my-5 pt-5 text-lg text-center md:mx-auto md:max-w-[60%]">Enjoy crystal-clear, impurity-free water with our advanced treatment systems. Essential for your families health &amp; wellbeing</p>
            <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 bg-jet border border-selectiveyellow text-selectiveyellow hover:bg-selectiveyellow hover:text-jet text-lg">Get A Quote</Link>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}
