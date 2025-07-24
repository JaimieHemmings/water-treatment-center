import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import type { Post } from '@/payload-types'
import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import Bounded from '@/utilities/Bounded'
import CustomLink from '@/components/CustomLink'
import AnimateIn from '@/components/Animations/AnimateIn'
import { FaDroplet } from 'react-icons/fa6'
import Socials from './Components/Socials'
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })
  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })
  return params
}
type Args = {
  params: Promise<{
    slug?: string
  }>
}
export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/posts/' + slug
  const post = await queryPostBySlug({ slug })
  if (!post) return <PayloadRedirects url={url} />
  return (
    <article className="pt-16 bg-darkblue relative z-0">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <PostHero post={post} />
      <div className="flex flex-col items-center gap-4 pt-8 bg-darkblue">
        <div className="container py-[5rem]">
          <RichText
            className="max-w-none text-white prose md:prose-md"
            data={post.content}
            enableGutter={false}
          />
        </div>
      </div>
      <Socials />
      <section className="bg-darkblue">
        <div className="w-full py-[5rem] relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
          >
            <source src="/water-drop.mp4" type="video/mp4" />
          </video>
          <div
            className="w-full
        h-full
        absolute
        z-1
        bg-[#009290]/70
        top-0
        left-0"
          />
          <Bounded>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="basis-1/2">
                <AnimateIn
                  animation={{
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                  }}
                >
                  <h2 className="text-white inline-block px-2 py-1 mb-5 text-sm uppercase">
                    <FaDroplet className="inline-block text-white text-base relative -top-[1px] mr-1 tracking-widest" />{' '}
                    Get In Touch
                  </h2>
                  <p className="text-2xl md:text-4xl font-semibold'} mb-5 text-white">
                    We&apos;re here to help! Connect with our experts and find the perfect solution
                    for your needs!
                  </p>
                  <span className="w-1/2 h-1 border-b-2 relative block border-white mb-5" />
                </AnimateIn>
              </div>
              <div className="basis-1/2 flex flex-col items-centre max-w-[200px] justify-center">
                <AnimateIn
                  animation={{
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                  }}
                >
                  <CustomLink theme="white" label="Get In Touch" link="/contact" />
                </AnimateIn>
              </div>
            </div>
          </Bounded>
        </div>
      </section>
    </article>
  )
}
export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })
  return generateMeta({ doc: post })
}
const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return result.docs?.[0] || null
})
