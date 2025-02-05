'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RichText from "@/components/RichText";

interface TextBlockProps {
 title: string;
 content: any;
}

gsap.registerPlugin(ScrollTrigger)

export const TextBlockComponent: React.FC<TextBlockProps> = ({ content, title }) => {
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const container = containerRef.current;
  if (!container) return;
  
  const textElements = container.querySelectorAll('.animate-text-af29');
  const animations: gsap.core.Tween[] = [];

  textElements?.forEach(element => {
    const animation = gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      }
    );
    animations.push(animation);
  });

  return () => {
    animations.forEach(animation => animation.kill());
  };
}, []);

 return (
   <div className="container pb-5" ref={containerRef}>
     <h2 className="block text-selectiveyellow font-semibold pb-5 animate-text-af29">
       {title}
     </h2>
     {content && <RichText data={content} enableGutter={false} className="max-w-none prose md:prose-md mb-5 text-2xl md:text-5xl text-white mr-0 animate-text-af29" />}
   </div>
 );
}

export default TextBlockComponent;