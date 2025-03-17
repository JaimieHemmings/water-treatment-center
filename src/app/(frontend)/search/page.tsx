import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import CustomLink from '@/components/CustomLink'
import { FaDroplet } from "react-icons/fa6";
import Image from 'next/image'
import Bounded from '@/utilities/Bounded'
import AnimateIn from '@/components/Animations/AnimateIn'
import Link from 'next/link'

type Args = {
  searchParams: Promise<{
    q: string
  }>
}
export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { q: query } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'products',
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      content: true,
      meta: true,
      parent: true,
      category: true,
    },
    // pagination: false reduces overhead if you don't need totalDocs
    pagination: false,
    ...(query
      ? {
          where: {
            or: [
              {
                title: {
                  like: query,
                },
              },
              {
                'meta.description': {
                  like: query,
                },
              },
              {
                'meta.title': {
                  like: query,
                },
              },
              {
                slug: {
                  like: query,
                },
              },
            ],
          },
        }
      : {}),
  })

  
  return (
    <div className="">
      <div className="w-full py-[5rem] relative" style={{backgroundImage: "url('/glass-of-water.webp')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="absolute pointer-events-none left-0 bottom-0 w-2/3 h-full bg-gradient-to-r from-darkblue to-transparent" />
        <div className="container text-white relative z-20">
          <p className=" mb-5 text-sm text-white tracking-widest flex flex-row gap-2 items-center uppercase">
            <FaDroplet className="inline-block text-selectiveyellow" />
            Water Treatment Centre
          </p>
          <h1 className="text-2xl md:text-4xl">Search Results for: <span className="tracking-widest">{query}</span></h1>
        </div>
      </div>
      <PageClient />
      <div className="container py-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.docs.map((post: any, index) => (
          <Link href={`/products/${post.parent.slug}/${post.category.slug}/${post.slug}`} key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-selectiveyellow/20">
            <div className="relative h-[250px]">
              {post.content.header.productImage && (
                <Image
                  className="object-cover p-5"
                  src={post.content.header.productImage.url}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
            <div className="p-6 flex flex-col gap-4">
              <h3 className="tracking-widest text-selectiveyellow text-sm uppercase">
                <FaDroplet className="inline-block text-selectiveyellow relative -top-[2px] mr-2" />
                {post.parent.title}
              </h3>
              <h2 className="text-xl text-jet font-semibold">{post.title}</h2>
              {post.meta.description ? (
                <p className="text-jet/70 line-clamp-2">{post.meta.description}</p>
              ) : (
                <p className="text-jet/50">Description not available</p>
              )}
            </div>
          </Link>
        ))}
      {posts.docs.length === 0 && (
        <div className="text-center py-[5rem] container">
          <p className="text-xl text-white/70">No results found for &apos;{query}&apos;</p>
        </div>
      )}
      </div>
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
        className="w-full h-full absolute z-1 bg-[#009290]/70 top-0 left-0" />
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
              <h2 className="text-white tracking-widest inline-block px-2 py-1 mb-5 text-sm uppercase">
                <FaDroplet className={`inline-block text-white text-base relative -top-[1px] mr-1`} /> Get in touch!
              </h2>
              
              <p className="mb-10 pt-3 text-2xl md:text-4xl text-white">
                Speak to one of our expert advisors today to find out how we can help you with your water treatment needs.
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
              <CustomLink theme="white" label="Speak to us!" link="/contact" /> 
            </AnimateIn>         
          </div>
        </div>
      </Bounded>
      </div>
    </section>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Search | The Water Treatment Centre`,
    description: `Search results | The Water Treatment Centre`,
  }
}
