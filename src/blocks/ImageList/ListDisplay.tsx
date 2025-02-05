'use client';
import React, { useEffect, useRef } from 'react';
import { cn } from 'src/utilities/cn';

interface SectionTitleProps {
  image: {
    id: string;
    image: {
      url: string;
    };
    title: string;
    description: string;
  };
  className?: string;
  overlayOpacity?: {
    initial: number;
    final: number;
  };
  height?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  image,
  className,
  overlayOpacity = { initial: 0.8, final: 0.5 },
  height = "min-h-[33svh]"
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    const overlay = overlayRef.current;
    const text = textRef.current;

    if (!section || !overlay || !text) return;

    const loadImages = async () => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.image.url;
        img.onload = resolve;
      });
    };

    const initAnimation = async () => {
      await loadImages();
      const { gsap, ScrollTrigger } = await import('gsap/all');
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
          toggleActions: 'play none none reverse',
        }
      });

      tl.fromTo(overlay,
        { opacity: overlayOpacity.initial },
        { opacity: overlayOpacity.final, duration: 1 }
      ).fromTo(text,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '<'
      );

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    };

    const cleanup = initAnimation();
    return () => {
      cleanup.then(cleanupFn => cleanupFn?.());
    };
  }, [image.image.url, overlayOpacity]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "border-b border-selectiveyellow text-black bg-center bg-cover bg-no-repeat relative flex flex-col justify-center",
        height,
        className
      )}
      style={{ backgroundImage: `url(${image.image.url})` }}
    >
      <div
        ref={overlayRef}
        className="bg-darkblue/80 absolute inset-0 z-10"
      />
      <div
        ref={textRef}
        className="container relative z-20 opacity-0"
      >
        <h2 className="text-white text-2xl md:text-4xl font-semibold pb-5 border-b border-selectiveyellow mb-5">
          {image.title}
        </h2>
        <p className="text-white text-lg md:text-xl">
          {image.description}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;