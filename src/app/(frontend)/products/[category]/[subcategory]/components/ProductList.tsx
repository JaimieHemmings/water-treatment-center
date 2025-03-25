import React from 'react'
import Link from 'next/link'
import { Media } from "@/components/Media";

interface ProductListProps {
  title: string
  excerpt: string
  image: any
  category: any
  catSlug: any
  slug: string
}

const ProductList: React.FC<ProductListProps> = ({ 
  title, excerpt, image, category, catSlug, slug
}) => {
  return (
    <div className="w-[50%] lg:w-[33%] xl:w-[25%] flex-shrink-0 h-[400px] mb-4 group px-2">
      <div className="bg-white h-full">
        <Link
          className="flex flex-col relative overflow-hidden h-full"
          href={`/products/${category}/${catSlug}/${slug}`}
        >
          <Media
            resource={image}
            fill
            imgClassName="w-full h-full transition-transform duration-300 object-cover"
            loading='lazy'
            className="h-64"
          />
          <div className="absolute z-20 p-2 md:p-4 bg-darkblue/90 w-full flex flex-col py-3 transition-all duration-300 h-full top-[50%] group-hover:top-0">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-medium line-clamp-1 md:line-clamp-2">
              {title}
            </h3>
            <div className="w-1/4 h-[2px] bg-selectiveyellow my-2" />
            <p className="text-white text-sm md:text-base line-clamp-3 overflow-hidden group-hover:line-clamp-none">
              {excerpt}
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProductList
