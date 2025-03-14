import React from 'react'
import ReviewCarousel from './ReviewCarousel'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import { FaDroplet } from "react-icons/fa6";

interface ReviewBlockProps {
  title: string
  subtitle?: string
  reviews: Array<{
    review: string
    reviewer: string
  }>
  youtubeEmbed: string
}

const ReviewBlock: React.FC<ReviewBlockProps> = ({title, subtitle, reviews, youtubeEmbed}) => {
  return (
    <div className="py-[5rem] relative bg-darkblue z-20">
      <div className="container flex flex-col lg:flex-row gap-10 py-5 pt-[3rem]">
        <div className="lg:basis-1/2">
          <div className="relative w-full rounded-lg overflow-hidden">
            <div className="pb-5 text-white border-l-[5px] border-selectiveyellow pl-5 mb-5">
              <h2 className="text-sm md:text-sm text-selectiveyellow m-0 pb-5 tracking-widest uppercase">
                <FaDroplet className="inline-block text-selectiveyellow mr-2 -top-[4px]" />
                {title}
              </h2>
              <p className="text-2xl md:text-4xl">{subtitle}</p>
            </div>
          </div>
          <div className="flex-row items-center justify-center mt-5">
            <Link
              target="_blank"
              href="https://www.google.com/search?client=firefox-b-d&q=thewatertreatment+centre+ireland#lrd=0x485daf9cb276c2eb:0x6d324757580b9ad2,1,,,,"
              className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 bg-white border border-selectiveyellow text-jet hover:bg-selectiveyellow hover:text-white text-lg"
              >
              <span className="flex flex-row items-center justify-center gap-2">
                <FaGoogle className="text-xl" />
                Read More Reviews
              </span>
            </Link>
          </div>
        </div>
        <div className="lg:basis-1/2 relative">
          <Image 
            src="/logo-image.png" 
            width={150} 
            height={150} 
            alt="Logo" 
            className="opacity-10 w-[50%] h-auto -z-1 right-0 bottom-0 absolute" 
          />
          
          <ReviewCarousel reviews={reviews} />
        </div>
      </div>
    </div>
  )
}

export default ReviewBlock
