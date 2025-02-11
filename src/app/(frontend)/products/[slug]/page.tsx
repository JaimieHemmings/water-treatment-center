import CustomLink from '@/components/CustomLink'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import Image from 'next/image'
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
        <div className="absolute top-0 left-0 w-full h-full bg-jet opacity-50 pointer-events-none"></div>
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-darkblue to-transparent" />
      </div>
      <div className="flex flex-col items-center gap-4 pt-8 bg-darkblue">
        <div className="container">
          {products.map((product: any, index: any) => (
            <div key={index} className={`flex flex-col gap-10 justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="basis-1/2">
                <Image
                  className='inset-0 w-full h-full object-cover rounded-lg'
                  src={product.featuredImage.url}
                  alt={product.featuredImage.alt || 'No alt text available'}
                  width={500}
                  height={500}
                />
              </div>
              <div className="basis-1/2">
                <h3 className="text-2xl md:text-4xl font-semibold text-selectiveyellow">
                  {product.title}
                </h3>
                <p className="text-white">
                  {product.description}
                </p>
                <CustomLink
                  theme="white"
                  label="Read More"
                  link={`/products/${product.category.slug}/${product.slug}`}
                />
              </div>
            </div>
          ))}
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