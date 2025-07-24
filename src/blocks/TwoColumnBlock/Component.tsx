import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RichText from '@/components/RichText'
import { FaDroplet } from 'react-icons/fa6'
import { AnimateIn } from '@/components/Animations/AnimateIn'

gsap.registerPlugin(ScrollTrigger)

interface TwoColumnBlockProps {
  contentleft: string
  contentright: any
  title: string
  mainContent?: any
}

export const TwoColumnBlock: React.FC<TwoColumnBlockProps> = ({
  contentleft,
  contentright,
  title,
  mainContent,
}) => {
  return (
    <section className="w-full bg-gradient-to-br from-darkblue via-darkblue to-teal py-[5rem] text-white relative z-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-selectiveyellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <AnimateIn
          animation={{
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
          }}
        >
          <div className="container">
            {/* Modern header section with glass effect */}
            <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl mb-12">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-selectiveyellow/5 to-teal/5 opacity-50 rounded-2xl"></div>

              <div className="relative">
                {/* Small title with icon */}
                <div className="flex items-center gap-2 text-sm text-white/90 tracking-widest uppercase font-medium mb-4">
                  <FaDroplet className="text-selectiveyellow animate-pulse" />
                  <span>{title}</span>
                </div>

                {/* Decorative accent line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal mb-6"></div>

                {/* Main content */}
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                  {mainContent}
                </h2>
              </div>
            </div>
          </div>
        </AnimateIn>

        <div className="container flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left column */}
          <div className="md:basis-1/3">
            <AnimateIn
              animation={{
                y: 60,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: 'power2.out',
              }}
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <p className="text-lg text-white/90 font-light leading-relaxed m-0">
                  {contentleft}
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Right column */}
          <div className="md:basis-2/3">
            <AnimateIn
              animation={{
                y: 60,
                opacity: 0,
                duration: 1,
                delay: 0.4,
                ease: 'power2.out',
              }}
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                {contentright && (
                  <RichText
                    data={contentright}
                    enableGutter={false}
                    className="prose prose-lg prose-invert max-w-none [&_p]:text-white/90 [&_p]:leading-relaxed [&_strong]:font-bold [&_strong]:text-white [&_h2]:text-selectiveyellow [&_h3]:text-white [&_ul]:text-white/90 [&_li]:text-white/90"
                  />
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
