'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RichText from "@/components/RichText";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface TextWithImageBlockProps {
  title: string;
  content: any;
  image: {
    url: string;
    alt: string;
  };
}

export const TextWithImageBlock: React.FC<TextWithImageBlockProps> = ({ 
  content, 
  title, 
  image 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  useEffect(() => {
    if (!imageLoaded) return;
    const container = containerRef.current;
    const imageContainer = imageRef.current;

    if (!container || !imageContainer) return;

    const textElements = container.querySelectorAll(".animate-text-6578");
    const imageElement = imageContainer.querySelectorAll(".animate-img-6578");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(
      textElements,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
      }
    );

    tl.fromTo(
      imageElement,
      {
        scale: 0.8,
        opacity: 0,
        rotate: -10,
      },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
      },
      "-=0.5"
    );
    
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [imageLoaded]);

  return (
    <section 
      ref={containerRef} 
      className="w-full py-20 bg-selectiveyellow text-jet relative overflow-hidden"
    >
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute bottom-4 right-0 z-10 scale-x-[-1] w-48 h-72"
        height={300}
        width={200}
        priority={false}
      />
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute top-4 left-0 z-10 w-48 h-72"
        height={300}
        width={200}
        priority={false}
      />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
        <div ref={imageRef} className="basis-1/2">
          <Image
            onLoad={() => setImageLoaded(true)}
            src={image.url} 
            alt={image.alt} 
            width={1080} 
            height={1080} 
            className="rounded-full transform-gpu animate-img-6578" 
            priority
          />
        </div>
        <div className="basis-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white animate-text-6578">
            {title}
          </h2>
          {content && (
            <div className="animate-text-6578">
              <RichText 
                data={content}
                enableGutter={false}
                className="prose md:prose-lg text-white max-w-none [&_strong]:text-white"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};