import React from 'react'
import Image from 'next/image'

const SupportHero = ({slideImage, slideTitle, slideParagraph}) => {
  return (
    <div className="relative w-full min-h-[600px] azul-overlay py-20 z-20">
        {slideImage && (
          <Image
            src={slideImage.url}
            alt={slideImage.alt}
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
        )}
        <div className="container mx-auto h-full flex flex-col justify-start relative z-10">
          <h1 className="text-4xl md:text-[72px] md:leading-[80px] text-white md:max-w-[75%]">
            {slideTitle}
          </h1>
          <p className="my-5 pt-5 text-lg md:max-w-[75%] text-white">
            {slideParagraph}
          </p>
        </div>
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-full bg-gradient-to-r from-darkblue to-transparent" />
      </div>
  )
}

export default SupportHero
