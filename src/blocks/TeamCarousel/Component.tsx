'use client';

import React, { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";

const TeamCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden bg-jet pb-[5rem]" ref={emblaRef}>
      <div className="embla__container flex h-full">
        {[1, 2, 3, 4, 5].map((item) => (
          <div className="embla__slide" key={item}>
            <div className="grid grid-cols-2 container mx-auto p-4">
              <div className="col-span-1">
                <Image src='/default-profile.avif' alt={`Team member ${item}`} width={500} height={500} className="w-full object-fit h-full" />
              </div>
              <div className="col-span-1 flex flex-col justify-center bg-argentinian p-5">
                <h3 className="text-xl font-bold">Team Member {item}</h3>
                <p className="text-sm">Description for team member {item}.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;