import { getPayload } from 'payload'
import React, { cache } from 'react'
import configPromise from '@payload-config'
import { generateMeta } from '@/utilities/generateMeta'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import PageClient from './page.client'
import Image from 'next/image'
import ProductsList from './ProductsList'

// Updated Props type: params is now a Promise
type Props = {
  params: Promise<{
    category: string
  }>
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function page({ params }: Props) {
  // Await params before destructuring
  const resolvedParams = await params
  const { category: slug } = resolvedParams

  if (!slug) {
    // If the slug is missing, show a 404 page.
    return notFound()
  }

  const categories = await queryCategoryBySlug({ slug })
  const category = categories[0]

  if (!category) {
    return notFound()
  }

  // Render your page with the fetched category data
  return (
    <article className="bg-darkblue relative z-0">
      <PageClient />
      <div className="relative w-full min-h-[600px] azul-overlay py-[2rem] z-20">
        {category?.hero?.heroImage && (
          <Image
            // @ts-ignore
            src={category.hero.heroImage.url}
            alt="background Image"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
        )}
        <div className="container mx-auto my-auto h-full flex flex-row justify-start relative z-10">
          <div className="md:basis-1/2 flex flex-col justify-center items-start h-full pt-[5rem]">
            {category?.title && (
              <h1 className="text-4xl md:text-[72px] md:leading-[80px] text-white">
                {category.title}
              </h1>
            )}
            {category?.excerpt && <p className="my-5 text-lg text-white">{category.excerpt}</p>}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-jet opacity-60 pointer-events-none"></div>
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-full bg-gradient-to-r from-darkblue to-transparent" />
      </div>
      <div className="flex flex-col bg-darkblue">
        <RenderBlocks blocks={category.content.content} />
        <ProductsList category={category} />
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
        equals: slug,
      },
    },
    depth: 1,
  })

  return result.docs || []
})

export const generateMetadata = async ({ params }: Props) => {
  // Await params here as well
  const resolvedParams = await params
  const { category: slug } = resolvedParams

  if (!slug) {
    return {}
  }

  const categories = await queryCategoryBySlug({ slug })
  const category = categories[0]

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The page you are looking for does not exist.',
    }
  }

  return generateMeta({ doc: category })
}
