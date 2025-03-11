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
      <div className="container mb-16 text-white flex flex-col gap-4 py-[5rem]">
        {posts.docs.map((post: any, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-center gap-4 py-10">
            <div className="md:basis-1/2">
              {post.content.header.productImage && (
                <Image
                  className="rounded-2xl w-full h-auto"
                  src={post.content.header.productImage.url}
                  alt={post.title}
                  width={400}
                  height={400}
                />
              )}
            </div>
            <div className="md:basis-1/2 flex flex-col gap-4">
              <h3 className="tracking-widest text-white text-sm uppercase">
                <FaDroplet className="inline-block text-white relative -top-[2px] mr-2" />
                {post.content.specs.category.title}
              </h3>
              <h2 className="text-2xl md:text-4xl">{post.title}</h2>
              {post.meta.description && (
                <p className="prose md:prose-md">{post.meta.description}</p>
              )}
              {!post.meta.description && (
                <p className="prose md:prose-md">Description not available</p>
              )}
              <div>
                <CustomLink theme="white" label="View" link={`/products/${post.content.specs.category.slug}/${post.slug}`} />
              </div>
            </div>
          </div>
        ))}
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
