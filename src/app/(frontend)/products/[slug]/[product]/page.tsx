import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import Image from 'next/image'
import RichText from '@/components/RichText'

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
          {productData.description}
          </p>
        </div>
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-darkblue to-transparent" />
      </div>
      <PageClient />
      <div className="flex flex-col items-center gap-4 pt-8 bg-darkblue">
        <RichText
          className="text-white"
          data={productData.content}
          enableGutter={false}
        />
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