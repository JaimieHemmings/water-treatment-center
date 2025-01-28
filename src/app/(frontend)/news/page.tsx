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
    limit: 12,
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
    <div className="pb-24 bg-jet">
      <PageClient />
      <div className="relative w-full azul-overlay dots-overlay py-20 overflow-hidden">
        <Image
          src="/news-banner.jpg"
          alt="Hero image"
          width={1920}
          height={1080}
          className="absolute inset-0 w-auto h-full object-cover"
          priority
        />
      <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10">
        <h1 className="text-4xl md:text-[72px] text-center md:leading-[80px] text-white">
          News <span className="text-selectiveyellow">&amp;</span> Updates
        </h1>
      </div>
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
    title: 'News - Latest News and Updates',
  }
}