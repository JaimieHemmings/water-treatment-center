'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TwoColumnBlock: React.FC<{ contentleft: string; contentright: string }> = ({ contentleft, contentright }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      gsap.fromTo(
        container.querySelectorAll(".animate-text"),
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: container,
            start: "top 90%",
            end: "top 30%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="w-full bg-jet py-5 md:py-[5rem]" ref={containerRef}>
      <div className="container pb-5 flex flex-col md:flex-row justify-between md:border-b-8 border-azul">
        <div className="md:basis-1/3 pt-5 md:p-5">
          <p className="max-w-none md:prose-md prose mb-5 text-2xl md:text-md text-white font-light pt-3 animate-text">
            {contentleft}
          </p>
        </div>
        <div className="md:basis-2/3 md:p-5">
          <p className="mb-5 text-2xl md:text-4xl text-white md:leading-[60px] font-light animate-text">
            {contentright}
          </p>
        </div>
      </div>
    </section>
  );
};