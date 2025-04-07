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
  order?: number
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
      <div className="flex flex-wrap justify-start -mx-4">
            {products.sort((a, b) => (a.order || 0) - (b.order || 0)).map((product: Product, index: number) => (
          <div className="w-1/2 lg:w-1/3 xl:w-1/4 px-1 md:px-4 mb-8" key={index}>
              <div className="bg-white h-full rounded-lg overflow-hidden">
                <Link
                  className="block relative group"
                  href={`/products/${product.parent.slug}/${product.category.slug}/${product.slug}`}
                >
                  <div className="aspect-w-4 aspect-h-3 max-md:h-[400px]">
                    <Media
                      resource={product.featuredImage}
                      imgClassName="
                        md:object-cover
                        md:w-full
                        max-md:w-full
                        max-md:h-auto
                      "
                      className="md:h-[500px]"
                      alt={product.title}
                      loading='lazy'
                    />
                  </div>
                  <div className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    flex
                    flex-col
                    justify-end
                    p-6
                    bg-textblue/60
                  ">
                    <h3 className="text-md md:text-2xl text-white font-medium mb-3 md:min-h-[64px]">
                      {product.title}
                    </h3>
                    <div className="w-12 h-[2px] bg-selectiveyellow mb-3" />
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