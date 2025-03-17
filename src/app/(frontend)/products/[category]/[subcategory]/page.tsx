import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import Image from 'next/image'
import { generateMeta } from '@/utilities/generateMeta'
import { RenderBlocks } from '@/blocks/RenderBlocks'

type Params = {
  params: Promise<{
    category?: string
    subcategory: string
  }>
}

export default async function SubCategoryData({ params }: Params) {
  const { category, subcategory } = await params
  const products = await queryPostBySlug({ slug: subcategory })
  const [categoryData] = await queryCategoryBySlug({ slug: subcategory })
  return (
    <article className="bg-darkblue relative z-0">
      <PageClient />
      <div className="relative w-full min-h-[600px] azul-overlay py-[2rem] z-20">
        {categoryData.hero.heroImage && (
          <Image
          // @ts-ignore
            src={categoryData.hero.heroImage.url}
            alt="background Image"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
        )}
        <div className="container mx-auto my-auto h-full flex flex-row justify-start relative z-10">
          <div className="md:basis-2/3 flex flex-col justify-center items-start h-full pt-[5rem]">
            <h1 className="text-4xl md:text-[72px] md:leading-[80px] text-white">
              {categoryData.title}
            </h1>
            <p className="my-5 text-lg text-white">
            {categoryData.excerpt}
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-jet opacity-60 pointer-events-none"></div>
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-full bg-gradient-to-r from-darkblue to-transparent" />
      </div>
      <div className="flex flex-col bg-darkblue">
        <RenderBlocks blocks={categoryData.content.content} />
        <div className="bg-darkblue relative z-20 w-full py-[5rem]">
          <div className="container pb-[2rem]">
            <div className="flex flex-wrap gap-4">
              {products.map((product: any, index: any) => (
                <div key={index} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(20%-16px)]">
                  <Link
                    className="flex flex-col gap-4"
                    href={`/products/${category}/${categoryData.slug}/${product.slug}`}
                  >
                    <Image
                      className='rounded-lg'
                      src={product.content.header.productImage.url}
                      alt={product.content.header.productImage.alt || 'No alt text available'}
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
      </div>
    </article>
  )
}

const queryCategoryBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'subcategories',
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

export const generateMetadata = async ({ params: paramsPromise }: any) => {
  const { slug = '' } = await paramsPromise
  const [category] = await queryCategoryBySlug({ slug })
  return generateMeta({ doc: category })
}