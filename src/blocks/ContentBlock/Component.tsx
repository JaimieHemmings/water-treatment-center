import React from 'react'
import Image from 'next/image'
import { FaDroplet, FaQuoteLeft } from 'react-icons/fa6'
import { Media } from '@/components/Media'

interface ContentBlock2Props {
  sectionTitle: string
  title: string
  introText: string
  showQuote: boolean
  quoteText: string
  content?: string
  imageSrc?: string
  className?: string
  imgCaption?: string
}

const ContentBlock2: React.FC<ContentBlock2Props> = ({
  sectionTitle,
  imgCaption,
  title,
  introText,
  content,
  imageSrc = '/technician.png',
  showQuote,
  quoteText = "Pure water isn't a luxury—it's essential for your home and health.",
  className = '',
}) => {
  return (
    <section className={`py-20 bg-white relative overflow-hidden ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-selectiveyellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-teal/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 items-center">
          {/* Content Section */}
          <div className="space-y-8 lg:col-span-4">
            <div className="space-y-6">
              <h2 className="text-sm tracking-widest mb-4 uppercase font-semibold text-selectiveyellow flex items-center gap-2">
                <FaDroplet className="text-selectiveyellow animate-pulse" />
                {sectionTitle}
              </h2>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-bold text-textblue leading-tight">
                  {title}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal"></div>
              </div>

              <p className="text-lg text-textblue/90 leading-relaxed font-medium">{introText}</p>
            </div>

            {/* Quote Section */}
            {showQuote && (
              <div className="relative bg-gradient-to-r from-selectiveyellow/10 to-teal/10 backdrop-blur-sm rounded-2xl p-6 border border-selectiveyellow/20">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-selectiveyellow rounded-full flex items-center justify-center">
                  <FaQuoteLeft className="text-white text-sm" />
                </div>
                <blockquote className="text-textblue font-semibold text-xl italic leading-relaxed">
                  &apos;{quoteText}&apos;
                </blockquote>
              </div>
            )}

            {/* Main Content */}
            <div className="bg-white/80 rounded-2xl p-8">
              <div className="prose prose-lg max-w-none">
                <div className="text-textblue/90 leading-relaxed space-y-4">
                  {content?.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative lg:col-span-2">
            {/* Background decorative element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-selectiveyellow/20 to-teal/20 rounded-full blur-2xl"></div>

            {/* Main image container */}
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Media
                  resource={imageSrc}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkblue/20 via-transparent to-transparent"></div>
              </div>

              {/* Image caption/badge */}
              <div className="absolute -bottom-4 left-8 right-8 bg-gradient-to-r from-selectiveyellow to-teal rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center gap-2 text-white">
                  <FaDroplet className="text-white animate-pulse" />
                  <span className="font-semibold text-sm tracking-widest uppercase">
                    {imgCaption || 'Certified Specialists'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentBlock2
