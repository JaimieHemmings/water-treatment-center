import React, { cache } from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { FaDroplet } from "react-icons/fa6"
import Link from 'next/link'
import { Media } from '@/components/Media'

interface Product {
  title: string
  excerpt: string
  slug: string
  featuredImage: any
  category: {
    title: string
    slug: string
  }
  parent: {
    slug: string
  }
}

interface SubCategory {
  slug: string
  title: string
}

interface ProductsListProps {
  title: string
  subcategory: SubCategory
  slug: string
}

export const ProductsList: React.FC<ProductsListProps> = async ({
  subcategory
}) => {
  const products = await queryProductsBySubcategory({ subcategory })
  
  if (products.length === 0) {
    return null
  }

  return (
    <section className="bg-white relative z-20 w-full py-[2rem]">
      <div className="container mb-1">
        <p className="text-sm text-selectiveyellow m-0 mb-1 tracking-widest uppercase">
          <FaDroplet className="inline-block text-selectiveyellow relative -top-[2px] mr-2" />
          View The Range
        </p>
        <h2 className="text-textblue text-2xl md:text-4xl">
          {products.length !== 0 && (
            products[0].category.title
          )}
        </h2>
      </div>
      <div className="container py-[2rem]">
        <div className="flex flex-wrap justify-start">
            {products.map((product: Product, index: number) => (
          <div className="w-[50%] lg:w-[33%] xl:w-[25%] flex-shrink-0 h-[400px] mb-4 group px-2" key={index}>
              <div className="bg-white h-full">
                <Link
                  className="flex flex-col relative overflow-hidden h-full"
                  href={`/products/${product.parent.slug}/${product.category.slug}/${product.slug}`}
                >
                  <Media
                    resource={product.featuredImage}
                    fill
                    imgClassName="w-full h-full transition-transform duration-300 object-cover"
                    loading='lazy'
                    className="h-64"
                  />
                  <div className="absolute z-20 p-2 md:p-4 bg-darkblue/90 w-full flex flex-col py-3 transition-all duration-300 h-full top-[50%] group-hover:top-0">
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-medium line-clamp-1 md:line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="w-1/4 h-[2px] bg-selectiveyellow my-2" />
                    <p className="text-white text-sm md:text-base line-clamp-3 overflow-hidden group-hover:line-clamp-none">
                      {product.excerpt}
                    </p>
                  </div>
                </Link>
              </div>
          </div>
            ))}
        </div>
      </div>
    </section>
  )
}

const queryProductsBySubcategory = cache(async ({ subcategory }: { subcategory: any }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'products',
    where: {
      'category.slug': {
        equals: subcategory.slug
      },
    },
    depth: 1
  })
  return result.docs as Product[] || []
})

export default ProductsList