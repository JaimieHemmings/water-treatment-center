import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { FaDroplet } from 'react-icons/fa6'
import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import { AnimateIn } from '@/components/Animations/AnimateIn'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function BlogFeed() {
  const payload = await getPayload({ config: configPromise })

  const response = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 4,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      heroImage: true,
      publishedAt: true,
    },
  })
  const { docs } = response

  return (
    <section className="relative py-16 md:py-24 z-20 bg-white">
      <div className="container">
        {/* Modern Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm text-selectiveyellow tracking-widest uppercase font-medium mb-4">
            <FaDroplet className="text-selectiveyellow" />
            <span>News &amp; Updates</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-textblue leading-tight max-w-4xl mx-auto">
            Stay Informed About Water Quality and Solutions
          </h2>
        </div>

        {/* Featured Article + Grid Layout */}
        {docs.length > 0 && (
          <>
            {/* Featured Article (First Post) */}
            <AnimateIn
              animation={{
                y: 80,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
              }}
            >
              <article className="group bg-white rounded-3xl border-2 border-selectiveyellow/20 hover:border-selectiveyellow/40 hover:shadow-2xl transition-all duration-500 overflow-hidden mb-16">
                <div className="flex flex-col md:flex-row md:min-h-[500px]">
                  {/* Featured Image Container */}
                  {docs[0].heroImage &&
                    typeof docs[0].heroImage === 'object' &&
                    'url' in docs[0].heroImage &&
                    docs[0].heroImage.url && (
                      <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                        <Image
                          src={docs[0].heroImage.url}
                          alt={docs[0].heroImage.alt || 'Featured article image'}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Featured badge */}
                        <div className="absolute top-6 left-6 bg-selectiveyellow text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide">
                          Featured
                        </div>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    )}

                  {/* Featured Content Container */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    {/* Featured Date */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 bg-selectiveyellow rounded-full" />
                      <time className="text-base text-teal font-semibold">
                        {docs[0].publishedAt &&
                          new Date(docs[0].publishedAt).toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                      </time>
                    </div>

                    {/* Featured Title */}
                    <h3 className="text-2xl md:text-4xl font-bold text-textblue mb-6 leading-tight group-hover:text-darkblue transition-colors duration-300">
                      {docs[0].title}
                    </h3>

                    {/* Featured Description */}
                    {docs[0].meta?.description && (
                      <p className="text-textblue/80 leading-relaxed mb-8 text-lg">
                        {docs[0].meta.description.slice(0, 100)}...
                      </p>
                    )}

                    {/* Featured CTA Button */}
                    <div>
                      <CustomLink
                        theme="dark"
                        label="Read Article"
                        link={`/news/${docs[0].slug}`}
                      />
                    </div>
                  </div>
                </div>
              </article>
            </AnimateIn>

            {/* Remaining Articles Grid */}
            {docs.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {docs.slice(1).map((post: any, index) => {
                  return (
                    <AnimateIn
                      key={index + 1}
                      animation={{
                        y: 80,
                        opacity: 0,
                        duration: 0.8,
                        delay: 0.1 * index,
                        ease: 'power2.out',
                      }}
                    >
                      <article className="group bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                        {/* Image Container */}
                        {post.heroImage &&
                          typeof post.heroImage === 'object' &&
                          'url' in post.heroImage &&
                          post.heroImage.url && (
                            <div className="relative h-56 overflow-hidden">
                              <Image
                                src={post.heroImage.url}
                                alt={post.heroImage.alt || 'Article image'}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              {/* Gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          )}

                        {/* Content Container */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div className="flex-1">
                            {/* Date */}
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-2 h-2 bg-selectiveyellow rounded-full" />
                              <time className="text-sm text-teal font-medium">
                                {post.publishedAt &&
                                  new Date(post.publishedAt).toLocaleDateString('en-GB', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                  })}
                              </time>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-bold text-textblue mb-4 leading-tight group-hover:text-darkblue transition-colors duration-300">
                              {post.title}
                            </h3>

                            {/* Description */}
                            {post.meta?.description && (
                              <p className="text-textblue/80 leading-relaxed mb-6 text-sm">
                                {post.meta.description.length > 100
                                  ? `${post.meta.description.substring(0, 100)}...`
                                  : post.meta.description}
                              </p>
                            )}
                          </div>

                          {/* CTA Button */}
                          <div className="pt-4 border-t border-gray-100">
                            <CustomLink
                              theme="dark"
                              label="Read More"
                              link={`/news/${post.slug}`}
                            />
                          </div>
                        </div>
                      </article>
                    </AnimateIn>
                  )
                })}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
