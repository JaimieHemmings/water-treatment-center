import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import Image from 'next/image'
import CustomLink from '@/components/CustomLink'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function PostsPage() {
  const payload = await getPayload({ config: configPromise })
  
  const response:any = await payload.find({
    collection: 'product-categories',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      image: true,
      description: true,
    },
  })
  const { docs } = response
  return (
    <div className="pb-24 bg-darkblue">
      <PageClient />
      <div className="relative w-full azul-overlay dots-overlay py-20 overflow-hidden">
        <Image
          src="/news-banner.jpg"
          alt="Hero image"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
      <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10">
        <h1 className="text-4xl md:text-[72px] text-center md:leading-[80px] text-white">
          Products
        </h1>
      </div>
    </div>
      {docs.length > 0 && (
        <div className="container mx-auto py-20 flex flex-col justify-between gap-10">
          {docs.map((doc: any, index: any) => (
            <div key={index} className={`flex flex-col gap-10 justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="basis-1/2">
                <Image
                  className='inset-0 w-full h-full object-cover rounded-lg'
                  src={doc.image.url}
                  alt={doc.image.alt || 'No alt text available'}
                  width={500}
                  height={500}
                />
              </div>
              <div className="basis-1/2">
                <h3 className="text-2xl md:text-4xl font-semibold text-selectiveyellow">
                  {doc.title}
                </h3>
                <p className="py-5 text-white">
                  {doc.description || 'No description available'}
                </p>
                <CustomLink
                  link={`/products/${doc.slug}`}
                  theme="white"
                  label="Read More"
                />
              </div>
            </div>
          ))}
        </div>
        )
      }
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'News - Latest News and Updates',
  }
}