'use client';

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

gsap.registerPlugin(ScrollTrigger)

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  const richTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const richTextElement = richTextRef.current

    if (richTextElement) {
      gsap.fromTo(
        richTextElement,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: richTextElement,
            start: "top 99%",
            end: "top 60%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }
  }, [])

  return (
    <section className="w-full bg-jet py-10 pt-[10rem] relative overflow-hidden">
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
      <div className="container relative z-1">
        <div className="p-4 flex flex-col md:justify-between gap-4">
          <div className="flex justify-end">
            <div className="md:w-[66%]">
              <h2 className="block text-selectiveyellow font-semibold pb-5">
                GET IN TOUCH
              </h2>
              {richText && (
                <div ref={richTextRef}>
                  <RichText className="mb-5 text-2xl md:text-5xl text-white mr-0 animate-richtext" data={richText} enableGutter={false} />
                </div>
              )}
              <div className="flex justify-end">
                {(links || []).map(({ link }, i) => {
                  return <CMSLink key={i} size="lg" {...link} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}