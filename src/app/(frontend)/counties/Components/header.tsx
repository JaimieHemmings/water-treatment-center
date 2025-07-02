import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="relative w-full max-md:py-[5rem] md:min-h-[600px] azul-overlay py-20 z-20">
      <Image
        src="/ireland-bg.webp"
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
      <div className="container mx-auto h-full flex flex-col justify-start relative z-10">
        <h1 className="text-4xl md:text-[65px] md:leading-[4rem] text-white md:max-w-[70%]">
          Check your <span className="text-selectiveyellow">County</span>
          <span> Water Problems</span>
        </h1>
        <p className="my-5 pt-5 text-lg md:max-w-[75%] text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iure asperiores
          cupiditate aut error excepturi nihil expedita ea blanditiis dolorem, beatae sint enim
          ratione culpa nobis odit quidem officia earum!
        </p>
      </div>
      <div className="absolute pointer-events-none left-0 bottom-0 w-full h-full bg-gradient-to-r from-darkblue to-transparent" />
    </div>
  )
}

export default Header
