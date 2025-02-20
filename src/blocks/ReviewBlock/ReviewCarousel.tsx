'use client';
import Image from 'next/image'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface Review {
  review: string
  reviewer: string
}

interface ReviewCarouselProps {
  reviews: Review[]
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  
  useEffect(() => {
      if (emblaApi) {
        // Embla API is ready
      }
    }, [emblaApi]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {reviews?.map((review, index) => (
          <div 
            key={index} 
            className="bg-antiflashwhite p-5 rounded-xl mb-5 relative prose w-full overflow-hidden embla__slide border-[5px] border-darkblue"
          >
            <div className='relative z-10 h-full'>
              <p className="text-gray-700 prose md:prose-xl max-w-none">
                {review.review}
              </p>
              <p className="text-2xl mt-5 text-teal font-semibold">
                {review.reviewer}
              </p>
              <div className="absolute w-full h-full bottom-[15px] right-[15px]">
                <Image src="/logo-image.png" width={150} height={150} alt="Logo" className="opacity-10 w-full h-auto -z-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewCarousel