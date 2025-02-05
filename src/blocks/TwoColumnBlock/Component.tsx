'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RichText from "@/components/RichText";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface TwoColumnBlockProps {
  contentleft: string;
  contentright: any;
  title: string;
  mainContent?: any;
}

export const TwoColumnBlock: React.FC<TwoColumnBlockProps> = ({ contentleft, contentright, title, mainContent }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if(!container) return;

    const animatedElements = container.querySelectorAll(".animate-text-90b0");

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      }
    })

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
    )

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
    <section className="w-full bg-darkblue py-5 md:py-[5rem] text-white relative" ref={containerRef}>
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
      <SectionTitle title={title} subtitle={mainContent} />
      <div className="container pb-5 flex flex-col md:flex-row justify-between md:border-b-8 border-selectiveyellow">
        <div className="md:basis-1/3 pt-5">
          <p className="max-w-none md:prose-md prose mb-5 text-2xl md:text-md text-white font-light pt-3 animate-text-90b0">
            {contentleft}
          </p>
        </div>
        <div className="md:basis-2/3 md:p-5">
          {contentright && <RichText data={contentright} enableGutter={false} className="max-w-none prose md:prose-md mb-5 text-md md:xl mr-0 animate-text-90b0 [&_strong]:font-bold" />}
        </div>
      </div>
    </section>
  );
};