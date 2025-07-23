'use client'

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './styles.css'
import Image from 'next/image'
import CustomLink from '@/components/CustomLink'
import { FaDroplet } from 'react-icons/fa6'

interface Slide {
  title: string
  titleHighlight?: string
  titleEnd?: string
  subtitle?: string
  paragraph: string
  video?: {
    url: string
  }
  image?: {
    alt: string
    url: string
  }
  linkLabel?: string
  supportLink?: {
    slug?: string
    association?: string
  }
  pageLink?: {
    slug?: string
  }
  lType: string
  trustElements?: boolean
}

interface HeroProps {
  slides: Slide[]
}

export const HighImpactHero: React.FC<HeroProps> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  return (
    <div className="w-full relative z-20">
      <div className="embla embla-hero overflow-hidden md:h-[944px]" ref={emblaRef}>
        <div className="embla__container embla__container-hero flex h-full w-full">
          {slides.map((slide, index) => (
            <div
              className="embla__slide embla__slide-hero relative min-w-full py-20 md:py-0"
              key={index}
            >
              {slide.video && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full z-0"
                >
                  <source src={slide.video.url} type="video/mp4" />
                </video>
              )}
              {slide.image && (
                <Image
                  src={slide.image.url}
                  alt={slide.image.alt}
                  width={1920}
                  height={1080}
                  priority
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full z-0"
                />
              )}
              <div className="container h-full flex items-center relative z-30">
                <div className="max-w-4xl space-y-6">
                  <div className="flex items-center gap-2 text-sm text-white/90 tracking-widest uppercase font-medium">
                    <FaDroplet className="text-selectiveyellow" />
                    <span>Water Treatment Centre</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
                    {slide.title}
                    {slide.titleHighlight && (
                      <span className="text-selectiveyellow"> {slide.titleHighlight}</span>
                    )}
                    {slide.titleEnd && <span> {slide.titleEnd}</span>}
                  </h1>

                  {slide.subtitle && (
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed max-w-3xl">
                      {slide.subtitle}
                    </h2>
                  )}

                  <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                    {slide.paragraph}
                  </p>

                  {slide.trustElements && (
                    <div className="flex flex-wrap gap-6 md:gap-8 text-white/80 text-sm md:text-base">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-selectiveyellow rounded-full flex-shrink-0"></div>
                        <span>Serving Irish families for 20+ years</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-selectiveyellow rounded-full flex-shrink-0"></div>
                        <span>1000+ satisfied customers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-selectiveyellow rounded-full flex-shrink-0"></div>
                        <span>Certified installation experts</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <CustomLink
                      theme="white"
                      label={slide.linkLabel || 'Get A Quote'}
                      link={
                        slide.lType === 'support'
                          ? `/products/${slide.supportLink?.association}/support/${slide.supportLink?.slug}` ||
                            '/contact'
                          : `/${slide.pageLink?.slug}` || '/contact'
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-jet/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-darkblue/80 via-darkblue/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
