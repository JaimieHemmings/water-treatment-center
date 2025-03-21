import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductListProps {
  title: string
  excerpt: string
  image: {
    url: string
    alt: string
  }
  category: any
  catSlug: any
  slug: string
}

const ProductList: React.FC<ProductListProps> = ({ 
  title, excerpt, image, category, catSlug, slug
}) => {
  return (
    <div className="w-full sm:w-[49%] md:w-[33%] lg:w-[32%] xl:w-[24%] flex-shrink-0 h-[400px] mb-4">
      <Link
        className="flex flex-col relative overflow-hidden rounded-lg h-full"
        href={`/products/${category}/${catSlug}/${slug}`}
      >
        <Image
          src={image.url}
          alt={image.alt || 'No alt text available'}
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute z-20 p-2 md:p-4 bottom-0 bg-darkblue/90 w-full flex flex-col py-3">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-medium line-clamp-1 md:line-clamp-2 md:min-h-[63px]">
            {title}
          </h3>
          <div className="w-1/4 h-[2px] bg-selectiveyellow my-2" />
          <p className="text-white text-sm md:text-base line-clamp-3 overflow-hidden min-h-[74px]">
            {excerpt}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default ProductList
