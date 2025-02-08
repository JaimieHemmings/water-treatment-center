import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import Image from 'next/image'

type Props = {
  params: Promise<{
    slug?: string
    product: string
  }>
}

export default async function Product({ params }: Props) {
  const { slug = '', product = '' } = await params
  const [productData]: any[] = await queryProductBySlug({ slug: product })


  console.log(`Category slug: ${slug}`)
  console.log(`Product slug: ${product}`)

  return (
    <article className="pt-16 pb-16 bg-darkblue relative z-0">
      <PageClient />
      <div className="flex flex-col items-center gap-4 pt-8 bg-darkblue">
        <div className="container">
            <div className={`flex flex-col gap-10 justify-between`}>
              <div className="basis-1/2">
                <Image
                  className='inset-0 w-full h-full object-cover rounded-lg'
                  src={productData.featuredImage.url}
                  alt={productData.featuredImage.alt || 'No alt text available'}
                  width={500}
                  height={500}
                />
              </div>
              <div className="basis-1/2">
                <h3 className="text-2xl md:text-4xl font-semibold text-selectiveyellow">
                  {productData.title}
                </h3>
                <p className="text-white">
                  {productData.description}
                </p>
              </div>
            </div>
        </div>
      </div>
    </article>
  )
}

const queryProductBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'products',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return result.docs
})