import React from 'react'
import ReviewCarousel from './ReviewCarousel'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import { FaDroplet } from 'react-icons/fa6'

interface ReviewBlockProps {
  title: string
  subtitle?: string
  reviews: Array<{
    review: string
    reviewer: string
  }>
  youtubeEmbed: string
}

const ReviewBlock: React.FC<ReviewBlockProps> = ({ title, subtitle, reviews, youtubeEmbed }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-darkblue via-darkblue to-teal relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-selectiveyellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-teal/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-sm tracking-widest mb-4 uppercase font-semibold text-selectiveyellow flex items-center gap-2">
                <FaDroplet className="text-selectiveyellow animate-pulse" />
                {title}
              </h2>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  {subtitle}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal"></div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                target="_blank"
                href="https://www.google.com/search?client=firefox-b-d&q=thewatertreatment+centre+ireland#lrd=0x485daf9cb276c2eb:0x6d324757580b9ad2,1,,,,"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-selectiveyellow hover:border-selectiveyellow hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FaGoogle className="text-xl group-hover:scale-110 transition-transform duration-300" />
                <span>Read More Reviews</span>
              </Link>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="relative">
            {/* Background logo with improved styling */}
            <div className="absolute -top-8 -right-8 opacity-5 pointer-events-none">
              <Image
                src="/logo-image.png"
                width={200}
                height={200}
                alt="Logo"
                className="w-48 h-auto rotate-12"
              />
            </div>

            {/* Reviews carousel with modern container */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
              <ReviewCarousel reviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewBlock
