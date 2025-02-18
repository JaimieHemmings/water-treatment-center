import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string | number
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const sanitizedPageNumber = Number(pageNumber)

  if (!Number.isInteger(sanitizedPageNumber)) notFound()

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 3,
    page: sanitizedPageNumber,
    overrideAccess: false,
  })

  return (
    <div className="pb-24">
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

      <CollectionArchive posts={posts.docs} />

      <div className="container">
        {posts?.page && posts?.totalPages > 1 && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `News and Updates page ${pageNumber || ''} | The Water Treatment Centre`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'posts',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / 10)

  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
