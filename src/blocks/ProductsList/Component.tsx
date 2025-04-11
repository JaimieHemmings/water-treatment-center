import React, { cache } from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { FaDroplet } from "react-icons/fa6"
import Link from 'next/link'
import Image from 'next/image'

interface Product {
  title: string
  excerpt: string
  slug: string
  thumbnail: any
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
      <div className="container my-4">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.sort((a, b) => (a.order || 0) - (b.order || 0)).map((product: Product, index: number) => (
            <Link
              href={`/products/${product.parent.slug}/${product.category.slug}/${product.slug}`}
              className="group relative"
              key={index}
            >
              <Image
                src={product.thumbnail?.url || "/image-not-found.jpg" }
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                alt={product.title}
                width={600}
                height={600}
                loading='lazy'
              />
              <h3 className="mt-4 text-sm bg-textblue absolute bottom-0 left-0 right-0 text-center font-semibold py-3 text-white">
                {product.title}
              </h3>
            </Link>
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