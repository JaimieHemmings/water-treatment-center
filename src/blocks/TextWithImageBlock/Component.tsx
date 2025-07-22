import React from 'react'
import RichText from '@/components/RichText'
import { AnimateIn } from '@/components/Animations/AnimateIn'
import { FaDroplet } from 'react-icons/fa6'
import { Media } from '@/components/Media'

interface TextWithImageBlockProps {
  darkmode: boolean
  title: string
  intro: string
  content: any
  image: any
  linkLabel: string
  cropImage?: boolean
  quote: string
  sideContent: any
}

const fadeIn = {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
}

export const TextWithImageBlock: React.FC<TextWithImageBlockProps> = ({
  darkmode,
  content,
  title,
  intro,
  sideContent,
  image,
  cropImage,
  quote,
}) => {
  return (
    <section
      className={`pt-[5rem] pb-[5rem] relative overflow-hidden ${darkmode ? 'bg-darkblue' : 'bg-white'}`}
    >
      <div
        className={`container flex flex-col gap-8 ${darkmode ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-12`}
      >
        <div className="md:w-1/3 h-auto relative mb-8 md:mb-0">
          {cropImage ? (
            <div className="relative min-h-[500px] rounded-xl overflow-hidden">
              <Media
                resource={image}
                fill
                imgClassName="object-cover w-full h-auto"
                loading="lazy"
                className="min-h-[500px]"
              />
              {/* Subtle overlay for better text contrast when needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          ) : (
            <AnimateIn
              animation={{
                y: 60,
                opacity: 0,
                duration: 1,
                rotate: -3,
                scale: 0.95,
                ease: 'power2.out',
              }}
            >
              <div className="relative rounded-xl overflow-hidden group">
                <Media
                  resource={image}
                  className="rounded-xl"
                  imgClassName="w-full h-auto rounded-xl"
                  loading="lazy"
                />
                {/* Decorative border accent */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-selectiveyellow/20 to-azul/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </AnimateIn>
          )}
        </div>
        {/* Text Column */}
        <div className="md:w-2/3 flex flex-col justify-center relative">
          <div className="max-w-prose mx-auto px-6">
            <AnimateIn animation={fadeIn}>
              <h2
                className={`text-sm tracking-widest mb-6 uppercase font-semibold ${darkmode ? 'text-selectiveyellow' : 'text-azul'}`}
              >
                <FaDroplet className="mr-2 relative inline-block -top-[2px] text-base" />
                {title}
              </h2>
            </AnimateIn>

            <AnimateIn animation={fadeIn}>
              <p
                className={`leading-relaxed mb-6 text-xl md:text-2xl font-light ${darkmode ? 'text-white' : 'text-textblue'}`}
              >
                {intro}
              </p>
            </AnimateIn>

            {/* Decorative accent line consistent with site patterns */}
            <AnimateIn animation={fadeIn}>
              <div className="w-16 h-0.5 bg-selectiveyellow mb-6" />
            </AnimateIn>

            {quote && (
              <AnimateIn animation={fadeIn}>
                <blockquote
                  className={`relative pl-6 my-6 text-lg italic font-light ${darkmode ? 'text-white/90' : 'text-textblue/90'}`}
                >
                  <span className="absolute -left-2 -top-2 text-selectiveyellow text-2xl">"</span>
                  {quote}
                  <span className="absolute -right-1 -bottom-3 text-selectiveyellow text-2xl">
                    "
                  </span>
                </blockquote>
              </AnimateIn>
            )}

            {sideContent && (
              <AnimateIn animation={fadeIn}>
                <div
                  className={`prose prose-lg max-w-none ${darkmode ? '[&_strong]:text-white [&_p]:text-white/90 [&_a]:text-selectiveyellow hover:[&_a]:text-selectiveyellow/80' : '[&_strong]:text-textblue [&_p]:text-textblue/90 [&_a]:text-azul hover:[&_a]:text-azul/80'} my-6 leading-relaxed`}
                >
                  <RichText data={sideContent} enableGutter={false} />
                </div>
              </AnimateIn>
            )}
          </div>
        </div>
      </div>

      {/* Full-width content section with better visual separation */}
      {content && (
        <div className="container mt-12">
          <div className="max-w-4xl mx-auto">
            <AnimateIn animation={fadeIn}>
              <div
                className={`prose prose-lg max-w-none ${darkmode ? '[&_strong]:text-white [&_p]:text-white/90 [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_a]:text-selectiveyellow hover:[&_a]:text-selectiveyellow/80' : '[&_strong]:text-textblue [&_p]:text-textblue/90 [&_h1]:text-textblue [&_h2]:text-textblue [&_h3]:text-textblue [&_a]:text-azul hover:[&_a]:text-azul/80'} leading-relaxed`}
              >
                <RichText data={content} enableGutter={false} />
              </div>
            </AnimateIn>
          </div>
        </div>
      )}
    </section>
  )
}
