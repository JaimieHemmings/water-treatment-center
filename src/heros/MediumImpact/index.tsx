'use client'

import React, { useEffect } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"
import { FaDroplet } from "react-icons/fa6";

interface Slide {
  title: string
  titleHighlight?: string
  titleEnd?: string
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
  <div className="relative w-full max-md:py-[5rem] md:min-h-[600px] azul-overlay py-20 z-20">
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
    <div className="container mx-auto h-full flex flex-col justify-start relative z-10">
      <h1 className="text-4xl md:text-[65px] md:leading-[4rem] text-white md:max-w-[70%]">
        {slide.title}
        {slide.titleHighlight && (
          <span className="text-selectiveyellow">{' '}{slide.titleHighlight}{' '}</span>
        )}
        {slide.titleEnd && (
          <span>
            {slide.titleEnd}
          </span>
        )}
      </h1>
      <p className="my-5 pt-5 text-lg md:max-w-[75%] text-white">
        {slide.paragraph}
      </p>
    </div>
    <div className="absolute pointer-events-none left-0 bottom-0 w-full h-full bg-gradient-to-r from-darkblue to-transparent" />
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
    <div className="w-full relative max-md:py-[5rem] md:h-[600px] z-20">
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
              <p className=" mb-5 text-sm text-white tracking-widest flex flex-row gap-2 items-center uppercase">
                <FaDroplet className="inline-block text-selectiveyellow" />
                Water Treatment Centre
              </p>
              <h1 className="text-4xl md:text-[72px] md:leading-[80px] text-white md:max-w-[75%]">
                {slide.title}
              </h1>
              <p className="my-5 pt-5 text-lg md:max-w-[75%] text-white">
                {slide.paragraph}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}