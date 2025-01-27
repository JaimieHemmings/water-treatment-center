'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RichText from "@/components/RichText";

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
        start: "top 90%",
        end: "top 60%",
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
    <section className="w-full bg-jet py-5 md:py-[5rem]" ref={containerRef}>
      
      <div className="container">
        <h2 className="block text-selectiveyellow font-semibold pb-5 animate-text-af29">
          {title}
        </h2>
        {mainContent && <RichText data={mainContent} enableGutter={false} className="max-w-none prose md:prose-md mb-5 text-2xl md:text-5xl text-white mr-0 animate-text-af29" />}
      </div>
      <div className="container pb-5 flex flex-col md:flex-row justify-between md:border-b-8 border-azul">
        <div className="md:basis-1/3 pt-5 md:p-5">
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