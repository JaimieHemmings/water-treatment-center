'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

import type { Page } from '@/payload-types'
import Link from 'next/link'

export const HighImpactHero: React.FC<Page['hero']> = () => {

  const [emblaRef] = useEmblaCarousel()

  return (
  <div className="w-full">
    <div className="embla overflow-hidden h-[50vh] md:h-[70vh]" ref={emblaRef}>    
      <div className="embla__container flex h-full">
        <div className="embla__slide">
          <video
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full z-0">
            <source src="/hero-videos/hero-water.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-azul opacity-50 z-10" />
          <div className="container h-full flex flex-col justify-center items-center relative z-10">
            <h1 className="text-4xl md:text-[72px] text-center md:leading-[80px]">
              Experience the <span className="text-selectiveyellow">purest water</span> for a healthier life
            </h1>
            <p className="my-5 pt-5 text-lg text-center md:mx-auto md:max-w-[60%]">Enjoy crystal-clear, impurity-free water with our advanced treatment systems. Essential for your families health &amp; wellbeing</p>
            <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 bg-jet border border-selectiveyellow text-selectiveyellow hover:bg-selectiveyellow hover:text-jet text-lg">Get A Quote</Link>
          </div>
        </div>
        <div className="embla__slide">
          Slide 2
        </div>
        <div className="embla__slide">
          Slide 3
        </div>
      </div>
    </div>
    <Image
      src="/dots.svg"
      alt="decorative image of dots"
      className="absolute bottom-60 right-0 z-20 scale-x-[-1]"
      height="300"
      width="200"
    />
  </div>
  )
}
