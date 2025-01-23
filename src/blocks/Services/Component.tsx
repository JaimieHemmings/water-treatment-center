'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  description: string;
}

interface ImageType {
  url: string;
  alt?: string;
}

interface Row {
  title: string;
  description: string;
  features?: Feature[];
  image?: ImageType;
}

interface ServicesBlockProps {
  title: string;
  subtitle: string;
  rows?: Row[];
}

export const ServicesBlock: React.FC<ServicesBlockProps> = ({
  title,
  subtitle,
  rows,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    rowRefs.current.forEach((rowElement) => {
      if (!rowElement) return;

      const textElements = rowElement.querySelectorAll('.animate-text-services');
      const imageElement = rowElement.querySelectorAll('.animate-img-services');

      // Text animation
      gsap.fromTo(
        textElements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: rowElement,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Image scale animation
      if (imageElement) {
        gsap.fromTo(
          imageElement,
          { scaleX: 0.8, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: rowElement,
              start: 'top 80%',
              end: 'top 30%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-azul py-20 relative" ref={containerRef}>
      {/* Dot background images */}
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute bottom-4 right-0 z-10 scale-x-[-1] w-48 h-72 md:w-48 md:h-72"
        height={300}
        width={200}
      />
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute top-4 left-0 z-10 w-48 h-72 md:w-48 md:h-72"
        height={300}
        width={200}
      />

      <div className="container">
        <h2 className="text-selectiveyellow font-semibold pb-5">{title}</h2>
        <p className="text-5xl font-semibold">{subtitle}</p>
      </div>
     
      <div className="container flex flex-col gap-16 py-20">
        {rows?.map((row, index) => (
          <div 
            key={index} 
            ref={el => rowRefs.current[index] = el}
            className={`flex flex-col md:flex-row gap-8 items-center 
              ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="md:basis-1/2 px-5 flex justify-center flex-col">
              <h3 className="text-2xl md:text-4xl font-semibold pb-5 animate-text-services">
                {row.title}
              </h3>
              <p className="pb-5 animate-text-services">{row.description}</p>
              
              {row.features && (
                <ul className="space-y-2">
                  {row.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center animate-text-services"
                    >
                      <Image
                        src="/tick.png"
                        alt="Tick icon"
                        className="mr-3"
                        height={20}
                        width={15}
                      />
                      {feature.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {row.image && (
              <div className="md:basis-1/2">
                <Image 
                  src={row.image.url} 
                  alt={row.image.alt || ''} 
                  width={500} 
                  height={300}
                  className="w-full h-auto object-cover animate-img-services"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBlock;