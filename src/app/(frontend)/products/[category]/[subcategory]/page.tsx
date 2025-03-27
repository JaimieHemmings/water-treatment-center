// @ts-nocheck
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import Image from 'next/image'
import { generateMeta } from '@/utilities/generateMeta'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import ProductList from './components/ProductList'
import { FaDroplet } from "react-icons/fa6";

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
        {categoryData.hero.heroType == "image" && (
          categoryData.hero.heroImage && (
            <Image
            // @ts-ignore
              src={categoryData.hero.heroImage.url}
              alt="background Image"
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover"
              priority
            />
          )
        )}
        {categoryData.hero.heroType == "video" && (
          categoryData.hero.heroVideo && (
            <video    
              muted
              autoPlay
              loop
              playsInline        
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src={categoryData.hero.heroVideo.url}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )
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
          {categoryData.video && (
          <section className="bg-white relative z-20 w-full py-[5rem]">
            <div className="container pt-[5rem]">
              <video
                className="w-full h-auto"
                loop
                playsInline
                controls
                poster={categoryData.preloadImage?.url || '/video-poster.jpg'}
                >
                <source src={categoryData.video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
          )}
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
  const { category, subcategory } = await paramsPromise
  const [categoryData] = await queryCategoryBySlug({ slug: subcategory })
  return generateMeta({ doc: categoryData })
}