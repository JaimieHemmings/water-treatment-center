import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import ReviewCarousel from './ReviewCarousel'
import CustomLink from '@/components/CustomLink'
import Image from 'next/image'

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
    <div className="py-[5rem]">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="container flex flex-col lg:flex-row-reverse gap-10 py-5 pt-[3rem]">
        <div className="lg:basis-1/2 relative">
          <Image 
            src="/logo-image.png" 
            width={150} 
            height={150} 
            alt="Logo" 
            className="opacity-10 w-[50%] h-auto -z-1 right-0 bottom-0 absolute" 
          />
          <ReviewCarousel reviews={reviews} />
          <CustomLink theme="white" label="Read More Reviews" link="https://www.google.com/search?client=firefox-b-d&q=thewatertreatment+centre+ireland#lrd=0x485daf9cb276c2eb:0x6d324757580b9ad2,1,,,," />
        </div>
        <div className="lg:basis-1/2">
          <div className="relative w-full rounded-lg overflow-hidden">
            <div 
              className="youtube-container"
              dangerouslySetInnerHTML={{
                __html: youtubeEmbed
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewBlock
