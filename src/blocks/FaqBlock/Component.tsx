import React from 'react'
import FAQBlockClient from './client'
import Image from 'next/image'
import CustomLink from '@/components/CustomLink'
import { FaDroplet } from 'react-icons/fa6'

interface FaqBlockProps {
  title: string
  questions: {
    question: string
    answer: string
  }
  sideTitle: string
  sideContent: string
  linkLabel: string
  linkURL: {
    slug: string
  }
}

export const FaqBlock: React.FC<FaqBlockProps> = ({
  title,
  questions,
  sideTitle,
  sideContent,
  linkLabel,
  linkURL,
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-antiflashwhite via-white to-antiflashwhite relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-selectiveyellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-teal/5 rounded-full blur-3xl"></div>

      {/* Background image with improved overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ripples.jpg"
          alt="Decorative water ripples"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-antiflashwhite/90"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-sm tracking-widest mb-4 uppercase font-semibold text-selectiveyellow flex items-center gap-2">
                <FaDroplet className="text-selectiveyellow animate-pulse" />
                {title}
              </h2>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-bold text-textblue leading-tight">
                  {sideTitle}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal"></div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
              <p className="text-textblue/90 leading-relaxed text-lg">{sideContent}</p>

              <div className="pt-6">
                <CustomLink
                  link={`/${linkURL.slug}`}
                  theme="dark"
                  label={linkLabel}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-selectiveyellow to-teal text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl">
            <FAQBlockClient questions={questions} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqBlock
