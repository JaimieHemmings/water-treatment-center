'use client'

import React, { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './styles.css'
import Image from "next/image";
import CustomLink from "@/components/CustomLink";

interface Slide {
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  paragraph: string;
  video?: {
    url: string;
  };
  image? : {
    alt: string;
    url: string;
  },
  linkLabel?: string;
  link?: {
    slug?: string;
  }
}

interface HeroProps {
  slides: Slide[];
}

export const HighImpactHero: React.FC<HeroProps> = ({ slides }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  useEffect(() => {
      if (emblaApi) {
        // Embla API is ready
      }
    }, [emblaApi]);

  return (
  <div className="w-full relative">
    <div className="embla overflow-hidden h-[90svh] md:h-[90svh]" ref={emblaRef}>    
      <div className="embla__container flex h-full">
        {slides.map((slide, index) => (
          <div className="embla__slide azul-overlay dots-overlay" key={index}>
            {slide.video && (
            <video
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full z-0">
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
            <div className="container h-full flex flex-row justify-start items-center relative z-30">
              <div className="md:basis-2/3">
                <h1 className="text-4xl md:text-[72px] md:leading-[4rem] text-white">
                  {slide.titleStart} <span className="text-white border-b-2 border-selectiveyellow inline-block pb-2 my-3">{slide.titleHighlight}</span> {slide.titleEnd}
                </h1>
                <p className="my-5 pt-3 text-lg text-white">
                  {slide.paragraph}
                </p>
                <CustomLink
                  theme="white"
                  label={slide.linkLabel || "Get A Quote"}
                  link={slide.link?.slug || "/contact"}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
