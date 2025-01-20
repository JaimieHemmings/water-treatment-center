'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface ServicesBlockProps {
  title: string;
  subtitle: string;
  serviceOneTitle: string;
  serviceOneDescription: string;
  serviceOneImage: { url: string };
  serviceTwoTitle: string;
  serviceTwoDescription: string;
  serviceTwoImage: { url: string };
}

export const ServicesBlock: React.FC<ServicesBlockProps> = ({
  title,
  subtitle,
  serviceOneTitle,
  serviceOneDescription,
  serviceOneImage,
  serviceTwoTitle,
  serviceTwoDescription,
  serviceTwoImage,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      gsap.utils.toArray(".animate-text").forEach((text: any) => {
        gsap.fromTo(
          text,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: text,
              start: "top 99%",
              end: "top 90%",
              scrub: 1,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section className="bg-azul py-[5rem] relative" ref={containerRef}>
      <Image
        src="/dots.svg"
        alt="decorative image of dots"
        className="absolute bottom-[15px] right-0 z-10 scale-x-[-1] w-[200px] h-[300px] md:w-200px] md:h-[300px]"
        height="300"
        width="200"
      />
      <Image
        src="/dots.svg"
        alt="decorative image of dots"
        className="absolute top-[15px] left-0 z-10  w-[200px] h-[300px] md:w-[200px] md:h-[300px]"
        height="300"
        width="200"
      />
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-semibold md:max-w-[80%] lg:max-w-[60%] mx-auto mb-3">
          {title}
        </h1>
        <p>{subtitle}</p>
      </div>
      <div className="container flex flex-col md:flex-row justify-between mx-auto gap-4 py-[5rem]">
        <div className="md:basis-1/2 p-5">
          <h2 className="text-2xl md:text-4xl font-semibold pb-5 animate-text">{serviceOneTitle}</h2>
          <p className="pb-5 animate-text">
            {serviceOneDescription}
          </p>
          <ul>
            <li className="animate-text">
              <Image
                src="/tick.png"
                alt="decorative image of dots"
                className="inline-block mr-3"
                height="20"
                width="15"
              />
              Expert technicians with years of experience
            </li>
            <li className="animate-text">
              <Image
                src="/tick.png"
                alt="decorative image of dots"
                className="inline-block mr-3"
                height="20"
                width="15"
              />
              Timely service to minimise downtime
            </li>
          </ul>
        </div>
        <div className="md:basis-1/2">
          <Image src={serviceOneImage.url} alt="Technician" width={500} height={500} className="mx-auto w-full h-auto" />
        </div>
      </div>
      <div className="container flex flex-col justify-between mx-auto gap-4 md:flex-row-reverse relative z-20">
        <div className="md:basis-1/2 px-5">
          <h2 className="text-2xl md:text-4xl font-semibold pb-5 animate-text">
            {serviceTwoTitle}
          </h2>
          <p className="pb-5 animate-text">
            {serviceTwoDescription}
          </p>
          <ul>
            <li className="animate-text">
              <Image
                src="/tick.png"
                alt="decorative image of dots"
                className="inline-block mr-3"
                height="20"
                width="15"
              />
              Cost effective maintenance plans
            </li>
            <li className="animate-text">
              <Image
                src="/tick.png"
                alt="decorative image of dots"
                className="inline-block mr-3"
                height="20"
                width="15"
              />
              Preventative care to avoid future issues
            </li>
          </ul>
        </div>
        <div className="md:basis-1/2">
          <Image src={serviceTwoImage.url} alt="Technician" width={500} height={500} className="mx-auto w-full h-auto" />
        </div>
      </div>
    </section>
  );
};