'use client'
import React, { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Stat {
  value: string
  title: string
}

interface StatsBlockProps {
  titleStart: string
  titleHighlight: string
  titleEnd: string
  stats: Stat[]
  description?: string
}

export const StatsBlock = React.memo(
  ({ titleStart, titleHighlight, titleEnd, stats, description }: StatsBlockProps) => {
    const containerRef = useRef<HTMLElement>(null)
    const statsRef = useRef<(HTMLDivElement | null)[]>([])

    const setRef = useCallback((el: HTMLDivElement | null, index: number) => {
      statsRef.current[index] = el
    }, [])

    useEffect(() => {
      if (typeof window === 'undefined') return
      gsap.registerPlugin(ScrollTrigger)

      const animations: gsap.core.Tween[] = []

      const ctx = gsap.context(() => {
        statsRef.current.forEach((stat, index) => {
          if (!stat) return

          const animation = gsap.from(stat, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          })

          animations.push(animation)
        })
      }, containerRef)

      return () => {
        animations.forEach((anim) => anim.kill())
        ctx.revert()
      }
    }, [stats.length])

    return (
      <section
        ref={containerRef}
        className="py-20 bg-gradient-to-br from-darkblue via-darkblue to-teal relative z-20 overflow-hidden"
        aria-labelledby="stats-title"
      >
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-selectiveyellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal/5 rounded-full blur-3xl"></div>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-white/90 tracking-widest uppercase font-medium">
              <div className="w-2 h-2 bg-selectiveyellow rounded-full animate-pulse"></div>
              <span>Our Impact</span>
            </div>

            <h2
              id="stats-title"
              className="text-4xl md:text-5xl font-bold text-white md:max-w-[85%] leading-tight"
            >
              {titleStart} <span className="text-selectiveyellow">{titleHighlight}</span> {titleEnd}
            </h2>

            <div className="w-12 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal"></div>

            <p className="text-lg text-white/80 leading-relaxed md:max-w-[85%]">{description}</p>
          </div>

          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div
                key={`${stat.title}-${index}`}
                ref={(el) => setRef(el, index)}
                className="group relative"
              >
                {/* Glass morphism card */}
                <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-xl">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-selectiveyellow/5 to-teal/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex-grow">
                      <div className="text-2xl md:text-4xl font-bold text-selectiveyellow mb-2 group-hover:scale-105 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-white/90 text-lg font-medium group-hover:text-white transition-colors duration-300">
                        {stat.title}
                      </div>
                    </div>

                    {/* Decorative accent */}
                    <div className="w-1 h-16 bg-gradient-to-b from-selectiveyellow to-teal opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-selectiveyellow to-teal group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  },
)

StatsBlock.displayName = 'StatsBlock'

export default StatsBlock
