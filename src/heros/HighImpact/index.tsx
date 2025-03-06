'use client'

import React, { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './styles.css'
import Image from "next/image";
import CustomLink from "@/components/CustomLink";
import { FaDroplet } from "react-icons/fa6";

interface Slide {
  title: string;
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
    <div className="embla embla-hero overflow-hidden h-[744px]" ref={emblaRef}>    
      <div className="embla__container embla__container-hero flex h-full w-full">
        {slides.map((slide, index) => (
          <div className="embla__slide embla__slide-hero azul-overlay relative min-w-[100%]" key={index}>
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
              <div className="md:basis-3/4">
                <p className=" mb-5 text-sm text-white tracking-widest flex flex-row gap-2 items-center uppercase">
                  <FaDroplet className="inline-block text-selectiveyellow" />
                  Water Treatment Centre
                </p>
                <h1 className="text-4xl md:text-[65px] md:leading-[4rem] text-white">
                  {slide.title}
                </h1>
                <p className="mt-5 mb-10 pt-3 text-xl text-white max-w-[80%]">
                  {slide.paragraph}
                </p>
                <CustomLink
                  theme="white"
                  label={slide.linkLabel || "Get A Quote"}
                  link={slide.link?.slug || "/contact"}
                />
              </div>
            </div>
            <div className="absolute pointer-events-none left-0 bottom-0 w-2/3 h-full bg-gradient-to-r from-darkblue to-transparent" />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
