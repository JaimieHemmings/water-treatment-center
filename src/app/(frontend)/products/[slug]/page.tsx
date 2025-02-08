import CustomLink from '@/components/CustomLink'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import Image from 'next/image'

type Props = {
  params: {
    slug?: string
  }
}

interface Product {
  name: string
  description: string
  featuredImage: {
    url: string
    alt: string
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug = '' } = params
  const products = await queryPostBySlug({ slug })

  return (
    <article className="pt-16 pb-16 bg-darkblue relative z-0">
      <PageClient />
      <div className="flex flex-col items-center gap-4 pt-8 bg-darkblue">
        <div className="container">
          {products.map((product: Product, index: number) => (
            <div 
              key={index} 
              className={`flex flex-col gap-10 justify-between ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="basis-1/2">
                <Image
                  className="inset-0 w-full h-full object-cover rounded-lg"
                  src={product.featuredImage.url}
                  alt={product.featuredImage.alt || 'No alt text available'}
                  width={500}
                  height={500}
                />
              </div>
              <div className="basis-1/2">
                <h3 className="text-2xl md:text-4xl font-semibold text-selectiveyellow">
                  {product.name}
                </h3>
                <p className="text-white">
                  {product.description}
                </p>
                <CustomLink label="Read More" link="/products" type="white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'products',
    where: {
      'category.slug': {
        equals: slug
      },
    },
  })
  return result.docs as Product[]
})