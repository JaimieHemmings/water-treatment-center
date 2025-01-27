'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import RichText from "@/components/RichText";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger)

interface TextWithImageBlockProps {
  title: string;
  content: any;
  image: {
    url: string;
    alt: string;
  }
}

export const TextWithImageBlock: React.FC<TextWithImageBlockProps> = ({ content, title, image }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if(!container) return;

    const animatedElements = container.querySelectorAll(".animate-text-a989");

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      }
    });

    animation.fromTo(
      animatedElements,
      { 
        opacity: 0,
        y: 50
      },
      { 
        opacity: 1,
        y: 0,
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    window.onload = () => {
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full py-[5rem] bg-selectiveyellow text-jet">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="basis-1/2">
          <Image src={image.url} alt={image.alt} width={1080} height={1080} layout="responsive" className="rounded-full" />
        </div>
        <div className="basis-1/2">
          <h2 className="text-4xl md:text-5xl font-bold pb-5 text-white animate-text-a989">{title}</h2>
          {content && <RichText data={content} enableGutter={false} className="max-w-none prose md:prose-md mb-5 text-md md:xl mr-0 animate-text-a989 [&_strong]:font-bold" />}
        </div>
      </div>
    </section>
  );
};