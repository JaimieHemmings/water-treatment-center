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
  return (
    <article className="bg-darkblue relative z-0">
      <div className="relative w-full min-h-[600px] azul-overlay dots-overlay py-20">
        <Image
          src={productData.featuredImage.url}
          alt={productData.featuredImage.alt || 'No alt text available'}
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
          {productData.description}
          </p>
        </div>
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-darkblue to-transparent" />
      </div>
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