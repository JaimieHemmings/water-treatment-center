import { getPayload } from 'payload'
import React, { cache } from 'react'
import Link from 'next/link'
import configPromise from '@payload-config'
import Image from 'next/image'

export const ProductsList = async ({ category }) => {
  const products = await queryProductsBySlug({ categoryId: category.id })
  console.log(`content: ${products[0].content.header?.mainFeatures}`)
  return (
    <div className="bg-darkblue relative z-20 w-full py-[5rem]">
      <div className="container pb-[2rem]">
        <div className="flex flex-wrap gap-4">
          {products
            .sort((a, b) => {
              const orderA = typeof a.order === 'number' ? a.order : 0
              const orderB = typeof b.order === 'number' ? b.order : 0
              return orderA - orderB
            })
            .map((product: any, index: any) => (
              <div key={index} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(20%-16px)]">
                <Link
                  className="flex flex-col gap-4"
                  href={`/products/${category.slug}/${product.slug}`}
                >
                  <Image
                    className="rounded-lg"
                    src={product.thumbnail.url}
                    alt={product.thumbnail.alt || 'No alt text available'}
                    width={500}
                    height={500}
                  />
                  <h3 className="text-2xl font-semibold text-white">{product.title}</h3>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsList

const queryProductsBySlug = cache(async ({ categoryId }: { categoryId: string | number }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'products',
    where: {
      parent: {
        equals: categoryId,
      },
    },
    depth: 1,
  })
  return result.docs || []
})
