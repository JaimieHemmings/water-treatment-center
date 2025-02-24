'use client';
import Image from 'next/image'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './embla.css'

interface Review {
  review: string
  reviewer: string
}

interface ReviewCarouselProps {
  reviews: Review[]
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
  }, [Autoplay({ delay: 5000 })]);

  return (
    <div className="embla select-none">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {reviews?.map((review, index) => (
            <div 
            key={index} 
            className="prose embla__slide"
            >
              <p className="text-antiflashwhite prose md:prose-xl max-w-none review">
                {review.review}
              </p>
              <p className="text-2xl mt-5 text-teal font-semibold">
                {review.reviewer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewCarousel