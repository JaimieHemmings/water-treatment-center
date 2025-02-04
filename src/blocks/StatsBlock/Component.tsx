'use client';
import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Stat {
  value: string;
  title: string;
}

interface StatsBlockProps {
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  stats: Stat[];
  description?: string;
}

export const StatsBlock = React.memo(({
  titleStart,
  titleHighlight,
  titleEnd,
  stats,
  description
}: StatsBlockProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const statsRef = useRef<(HTMLLIElement | null)[]>([]);
  
  const setRef = useCallback((el: HTMLLIElement | null, index: number) => {
    statsRef.current[index] = el;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

    const animations: gsap.core.Tween[] = [];

    const ctx = gsap.context(() => {
      statsRef.current.forEach((stat, index) => {
        if (!stat) return;

        const animation = gsap.from(stat, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: stat,
            start: 'top 90%',
            end: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        });
        
        animations.push(animation);
      });
    }, containerRef);

    return () => {
      animations.forEach(anim => anim.kill());
      ctx.revert();
    };
  }, [stats.length]);

  return (
    <section
      ref={containerRef}
      className="py-20 bg-darkblue text-white"
      aria-labelledby="stats-title"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2
            id="stats-title"
            className="text-4xl md:text-5xl font-semibold text-white md:max-w-[85%]"
          >
            {titleStart}{' '}
            <span className="text-selectiveyellow">{titleHighlight}</span>{' '}
            {titleEnd}
          </h2>
          <p className="mt-5 text-white md:max-w-[85%]">
            {description}
          </p>
        </div>
        <ul className="space-y-4">
          {stats.map((stat, index) => (
            <li
              key={`${stat.title}-${index}`}
              ref={(el) => setRef(el, index)}
              className="flex items-center justify-between p-5 border-b border-white/20"
            >
              <span className="text-selectiveyellow text-2xl md:text-4xl font-semibold">
                {stat.value}
              </span>
              <span className="text-white text-lg">
                {stat.title}
              </span>
            </li>
          ))}            
        </ul>
      </div>
    </section>
  );
});

StatsBlock.displayName = 'StatsBlock';

export default StatsBlock;