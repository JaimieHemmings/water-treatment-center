'use client';

import React, { useEffect } from "react";
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";

const TeamCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  const teamMembers = {
    1: {
      name: 'Alison Gunning',
      title: 'CEO',
      quote: 'Our unwavering committment to quality and service is the cornerstone of our success.',
      image: '/default-profile.avif'
    },
    2: {
      name: 'Michael Smith',
      title: 'CTO',
      quote: "I've seen firsthand how access to clean water transforms lives and businesses. We don't just sell filtration systems; we deliver peace of mind.",
      image: '/default-profile-man.avif'
    },
    3: {
      name: 'John Smith',
      title: 'Head of Marketing',
      quote: 'Our cutting-edge technology ensures every drop of water meets the highest standards of purity.',
      image: '/default-profile-man-2.avif'
    },
    4: {
      name: 'Jane Smith',
      title: 'Head of Marketing',
      quote: 'Description for team member 4.',
      image: '/default-profile.avif'
    },
    5: {
      name: 'John Doe Jr.',
      title: 'Installation Engineer',
      quote: 'Description for team member 5.',
      image: '/default-profile.avif'
    }
  };

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden bg-jet" ref={emblaRef}>
      <div className="embla__container flex h-full">
        {Object.entries(teamMembers).map(([key, member]) => (
          <div className="embla__slide" key={key}>
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto p-4">
              <div className="col-span-1">
                <Image src={member.image} alt={`Team member ${member.name}`} width={500} height={500} className="w-full object-cover h-full" />
              </div>
              <div className="col-span-1 flex flex-col justify-start bg-azul p-5">
                <p className="text-4xl font-semibold py-5">{member.quote}</p>
                <h3 className="text-xl pb-1 text-selectiveyellow font-semibold">{member.name}</h3>
                <p className="text-md">{member.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;