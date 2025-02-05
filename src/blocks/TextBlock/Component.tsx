'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import RichText from "@/components/RichText";

gsap.registerPlugin(ScrollTrigger)

interface TextBlockProps {
  title: string;
  content: any;
}

export const TextBlock: React.FC<TextBlockProps> = ({ content, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if(!container) return;

    const animatedElements = container.querySelectorAll(".animate-text-af29");

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 50%",
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
    <section ref={containerRef} className="w-full bg-darkblue py-[5rem] bg-gradient-to-br from-argentinian to-azul">
      <div className="container pb-5">
        <h2 className="block text-selectiveyellow font-semibold pb-5 animate-text-af29">
          {title}
        </h2>
        {content && <RichText data={content} enableGutter={false} className="max-w-none prose md:prose-md mb-5 text-2xl md:text-5xl text-white mr-0 animate-text-af29" />}
      </div>
    </section>
  );
};