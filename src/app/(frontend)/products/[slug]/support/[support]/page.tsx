import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import SupportHero from './Components/SupportHero'
import RichText from '@/components/RichText'
import { generateMeta } from '@/utilities/generateMeta'
import { notFound } from 'next/navigation'

type Args = {
  params: Promise<{
    slug?: string
    support?: string
  }>
}

export default async function Post({ params: paramsPromise }: any) {
  const { isEnabled: draft } = await draftMode()
  const { support = '' } = await paramsPromise
  const post = await querySupportBySlug({ support })

  if(!post) {
    notFound()
  }

  return (
    <article className="bg-darkblue relative z-0">
      <PageClient />
      {draft && <LivePreviewListener />}
      {post && (
      <>
        <SupportHero
        slideImage={post.hero.image}
        slideTitle={post.hero.title}
        slideParagraph={post.hero.paragraph}
        />

        {post.content && (
          <RichText
          className="text-white"
          data={post.content.content}
          enableGutter={false}
          />
        )}
      </>
      )}

    </article>
  )
}

const querySupportBySlug = cache(async ({ support }: { support: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'supporting-documents',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: support,
      },
    },
  })
  return result.docs?.[0] || null
})

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await querySupportBySlug({ slug })
  return generateMeta({ doc: post })
}