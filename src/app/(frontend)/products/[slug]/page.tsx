import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import Image from 'next/image'
import RichText from '@/components/RichText'
type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const products = await queryPostBySlug({ slug })
  const [category] = await queryCategoryBySlug({ slug })
  return (
    <article className="pb-16 bg-darkblue relative z-0">
      <PageClient />
      <div className="relative w-full min-h-[600px] azul-overlay dots-overlay py-20">
        {category.heroImage && (
          <Image
          // @ts-ignore
            src={category.heroImage.url}
            alt="background Image"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
        )}
        <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-[72px] text-center md:leading-[80px] text-white border-b-2 border-selectiveyellow">
            {category.title}
          </h1>
          <p className="my-5 pt-5 text-lg text-center md:mx-auto md:max-w-[60%] text-white">
            {category.excerpt}
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-jet opacity-20 pointer-events-none"></div>
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-darkblue to-transparent" />
      </div>
      <div className="flex flex-col items-center gap-4 pt-8 bg-darkblue">
        <RichText className="text-white" data={category.content} enableGutter={false} />
        <div className="container">
          <div className="flex flex-wrap gap-4">
            {products.map((product: any, index: any) => (
              <div key={index} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(20%-16px)]">
                <Link
                  className="flex flex-col gap-4"
                  href={`/products/${category.slug}/${product.slug}`}
                >
                  <Image
                    className='rounded-lg'
                    src={product.heroImage.heroImage.url}
                    alt={product.heroImage.heroImage.alt || 'No alt text available'}
                    width={500}
                    height={500}
                  />
                  <h3 className="text-2xl font-semibold text-white">
                    {product.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

const queryCategoryBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'product-categories',
    where: {
      slug: {
        equals: slug
      },
    },
  })
  
  return result.docs || []
})

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
  return result.docs || []
})