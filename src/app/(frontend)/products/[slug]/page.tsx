import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import Image from 'next/image'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const categories = await payload.find({
    collection: 'product-categories',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })
  const params = categories.docs.map(({ slug }) => {
    return { slug }
  })
  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function CategoryPage({ params: { slug } }: { params: { slug: string } }) {
  const { category, products } = await queryCategoryAndProducts({ slug })

  if (!category) {
    return null // Or your 404 component
  }

  return (
    <article className="pt-16 pb-16 bg-darkblue relative z-0">
      <PageClient />
      <div className="flex flex-col items-center gap-4 pt-8 bg-darkblue">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">{category.title}</h1>
          {category.description && (
            <div className="mb-8">
              
              <p>{category.description}</p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded">
                {product.featuredImage && (
                  <Image
                  // @ts-ignore
                    src={product.featuredImage.url}
                  // @ts-ignore
                    alt={product.featuredImage.alt || ''}
                    width={500}
                    height={500}
                  />
                )}
                <h2 className="text-xl font-semibold">{product.name}</h2>
                {product.description && (
                  <p className="mt-2">{product.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const { category } = await queryCategoryAndProducts({ slug })
  return generateMeta({ doc: category })
}

const queryCategoryAndProducts = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })
  
  // First, get the category
  const categoryResult = await payload.find({
    collection: 'product-categories',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  
  const category = categoryResult.docs[0] || null

  // Then, get all products in this category
  const productsResult = await payload.find({
    collection: 'products',
    pagination: false,
    where: {
      category: {
        equals: category?.id,
      },
    },
  })

  return {
    category,
    products: productsResult.docs || [],
  }
})