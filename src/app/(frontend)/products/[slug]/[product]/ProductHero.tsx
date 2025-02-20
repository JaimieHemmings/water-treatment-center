import React from 'react'
import Image from 'next/image'

interface ProductHeroProps {
  productData: {
    title: string
    excerpt: string
    heroImage: {
      heroImage: {
        url: string
        alt: string
      }
    }
  }
}

const ProductHero: React.FC<ProductHeroProps> = ({ productData }) => {
  return (
    <div className="relative w-full min-h-[600px] azul-overlay dots-overlay py-20">
        <Image
          src={productData.heroImage.heroImage.url}
          alt={productData.heroImage.heroImage.alt || 'No alt text available'}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-[72px] text-center md:leading-[80px] text-white">
            {productData.title}
          </h1>
          <p className="my-5 pt-5 text-lg text-center md:mx-auto md:max-w-[60%] text-white">
            {productData.excerpt}
          </p>
        </div>
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-full bg-jet opacity-30" />
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-darkblue to-transparent" />
      </div>
  )
}

export default ProductHero
