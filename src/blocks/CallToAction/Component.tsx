'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { CallToActionBlock as CTABlockProps } from '@/payload-types';
import RichText from '@/components/RichText';
import { CMSLink } from '@/components/Link';
import Bounded from '@/utilities/Bounded';

gsap.registerPlugin(ScrollTrigger);

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animatedElements = container.querySelectorAll(".animate-text-2329");
    
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
        end: "top 70%",
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
    <section 
      className="w-full bg-jet py-20 relative overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
      >
        <source src="/water-drop.mp4" type="video/mp4" />
      </video>
      <div className="w-full h-full absolute z-1 bg-gradient-to-br from-argentinian to-azul opacity-70 top-0 left-0"></div>
      <Bounded>
        <div className="p-4" ref={containerRef}>
          <h2 className="text-selectiveyellow font-semibold pb-5">
            Get In Touch
          </h2>
          {richText && (
            <RichText
              className="text-5xl font-semibold"
              data={richText}
              enableGutter={false}
            />
          )}
          <div className="flex justify-end space-x-4">
            {(links || []).map((linkItem, i) => (
              <CMSLink 
                key={`cta-link-${i}`} 
                size="lg" 
                {...linkItem.link} 
              />
            ))}
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default CallToActionBlock;