'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaStar } from 'react-icons/fa'
import './embla.css'

interface Review {
  review: string
  reviewer: string
}

interface ReviewCarouselProps {
  reviews: Review[]
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000 })],
  )

  return (
    <div className="embla select-none">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {reviews?.map((review, index) => (
            <div key={index} className="prose embla__slide">
              <p className="text-antiflashwhite prose md:prose-xl max-w-none review">
                {review.review}
              </p>
              {/* 5 Star Rating */}
              <div className="flex flex-row gap-4 items-center justify-center mb-4 not-prose">
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className="text-[#FFDF00] text-xl"
                    style={{ animationDelay: `${starIndex * 0.1}s` }}
                  />
                ))}
              </div>
              <p className="text-2xl mt-5 text-teal font-semibold">
                {review.reviewer}
                <span className="block text-white text-base pt-1">Our Client</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewCarousel
