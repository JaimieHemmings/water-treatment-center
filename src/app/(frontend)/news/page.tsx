import type { Metadata } from 'next/types'
import { CollectionArchive } from '@/components/CollectionArchive'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import Image from 'next/image'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function PostsPage() {
  const payload = await getPayload({ config: configPromise })
  
  const response:any = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 6,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      heroImage: true,
    },
  })

  const { docs, totalPages, page } = response

  return (
    <div className="pb-24 bg-darkblue">
      <PageClient />
      <div className="relative w-full min-h-[600px] azul-overlay dots-overlay py-20">
        <Image
          src="/face-in-water.webp"
          alt="A Lady in the Water"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
          <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10">
            <h1 className="text-4xl md:text-[72px] text-center md:leading-[80px] text-white">
              News
              {' '}
              <span className="text-selectiveyellow">&amp;</span>
              {' '}
              Updates
            </h1>
            <p className="my-5 pt-5 text-lg text-center md:mx-auto md:max-w-[60%] text-white">
              The latest news and updates from The Water Treatment Centre
            </p>
          </div>
          <div className="absolute pointer-events-none left-0 bottom-0 w-full h-full bg-darkblue opacity-70" />
          <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-darkblue to-transparent" />
        </div>
      <CollectionArchive posts={docs} />
      <div className="container">
        {totalPages > 1 && (
          <Pagination page={page} totalPages={totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'News - Latest News and Updates | The water Treatment Centre',
    description: 'Stay up to date with the latest news and updates from The Water Treatment Centre',
  }
}