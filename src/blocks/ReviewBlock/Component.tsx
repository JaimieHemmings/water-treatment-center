import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import ReviewCarousel from './ReviewCarousel'

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
      <div className="container flex flex-col md:flex-row-reverse gap-10 py-5 pt-[3rem]">
        <div className="md:basis-1/2">
          <ReviewCarousel reviews={reviews} />
        </div>
        <div className="md:basis-1/2">
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
