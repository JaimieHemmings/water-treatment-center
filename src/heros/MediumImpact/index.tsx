'use client'

import React, { useEffect } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import Image from "next/image"

interface Slide {
  titleStart: string
  titleHighlight: string
  titleEnd: string
  paragraph: string
  video?: {
    url: string
  }
  image?: {
    alt: string
    url: string
  }
}

interface HeroProps {
  slides: Slide[]
}

const SingleSlide: React.FC<{ slide: Slide }> = ({ slide }) => (
  <div className="relative w-full min-h-[600px] azul-overlay dots-overlay py-20">
    {slide.video ? (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={slide.video.url} type="video/mp4" />
      </video>
    ) : slide.image && (
      <Image
        src={slide.image.url}
        alt={slide.image.alt}
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
    )}
    <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10">
      <h1 className="text-4xl md:text-[72px] text-center md:leading-[80px] text-white">
        {slide.titleStart}{' '}
        <span className="text-selectiveyellow">{slide.titleHighlight}</span>{' '}
        {slide.titleEnd}
      </h1>
      <p className="my-5 pt-5 text-lg text-center md:mx-auto md:max-w-[60%] text-white">
        {slide.paragraph}
      </p>
    </div><div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-darkblue to-transparent" />
  </div>
)

export const MediumImpactHero: React.FC<HeroProps> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  useEffect(() => {
    return () => {
      emblaApi?.destroy()
    }
  }, [emblaApi])

  if (slides.length === 1) {
    return <SingleSlide slide={slides[0]} />
  }

  return (
    <div className="w-full relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide, index) => (
            <div
              className="embla__slide flex-[0_0_100%] min-w-0 azul-overlay dots-overlay py-20"
              key={`slide-${index}`}
            >
              {slide.video ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={slide.video.url} type="video/mp4" />
                </video>
              ) : slide.image && (
                <Image
                  src={slide.image.url}
                  alt={slide.image.alt}
                  width={1920}
                  height={1080}
                  className="absolute inset-0 w-full h-full object-cover"
                  priority={index === 0}
                />
              )}
              <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10">
                <h1 className="text-4xl md:text-[72px] text-center md:leading-[80px] text-white">
                  {slide.titleStart}{' '}
                  <span className="text-selectiveyellow">
                    {slide.titleHighlight}
                  </span>{' '}
                  {slide.titleEnd}
                </h1>
                <p className="my-5 pt-5 text-lg text-center md:mx-auto md:max-w-[60%] text-white">
                  {slide.paragraph}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap font-medium 
                           ring-offset-background transition-colors focus-visible:outline-none 
                           focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                           disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 
                           bg-jet border border-selectiveyellow text-selectiveyellow 
                           hover:bg-selectiveyellow hover:text-jet text-lg relative z-30"
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}