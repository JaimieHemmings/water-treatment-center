'use client';

import React, { useEffect } from "react";
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";

interface Slide {
  image: {
    url: string;
  };
  name: string;
  title: string;
  quote: string;
}

interface TeamCarouselProps {
  slides: Slide[];
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  useEffect(() => {
    if (emblaApi) {
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden bg-jet" ref={emblaRef}>
      <div className="embla__container flex h-full">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto p-4">
              <div className="col-span-1">
                <Image src={slide.image.url} alt={slide.name} width={500} height={500} className="w-full object-cover h-full" />
              </div>
              <div className="col-span-1 flex flex-col justify-start bg-azul p-5">
                <p className="text-4xl font-semibold py-5">{slide.quote}</p>
                <h3 className="text-xl pb-1 text-selectiveyellow font-semibold">{slide.name}</h3>
                <p className="text-md">{slide.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;