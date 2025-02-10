import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import Image from 'next/image'
import CustomLink from '@/components/CustomLink'
import AnimateIn from '@/components/Animations/AnimateIn'
import Bounded from '@/utilities/Bounded'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function PostsPage() {
  const payload = await getPayload({ config: configPromise })
  
  const response:any = await payload.find({
    collection: 'product-categories',
    depth: 1,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      heroImage: true,
      excerpt: true,
    },
  })
  const { docs } = response
  return (
    <div className="bg-darkblue">
      <PageClient />
      {docs.length > 0 && (
        <div className="container mx-auto py-20 flex flex-col justify-between gap-10">
          {docs.map((doc: any, index: any) => (
            <div key={index} className={`flex flex-col gap-10 justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="basis-1/2">
                <AnimateIn
                  animation={{
                    x: index % 2 === 0 ? -60 : 60,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                  }}
                >
                  <h2 className="text-2xl md:text-4xl font-semibold text-selectiveyellow">
                    {doc.title}
                  </h2>
                  <p className="py-5 text-white">
                    {doc.excerpt || 'No description available'}
                  </p>
                  <CustomLink
                    link={`/products/${doc.slug}`}
                    theme="white"
                    label="Read More"
                  />
                </AnimateIn>
              </div>
              <div className="basis-1/2">
                <AnimateIn
                  animation={{
                    x: index % 2 === 0 ? 60 : -60,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                  }}
                >
                  <Image
                    src={doc.heroImage.url}
                    alt={doc.heroImage.alt}
                    width={doc.heroImage.width}
                    height={doc.heroImage.height}
                    className="object-cover rounded-xl"
                  />
                </AnimateIn>
              </div>
            </div>
          ))}
        </div>
        )
      }

      <section className="w-full bg-jet py-20 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
        >
          <source src="/water-drop.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-full absolute z-1 bg-gradient-to-br from-teal to-azul opacity-70 top-0 left-0" />
        <Bounded>
          <div className="p-4">
            <AnimateIn
              animation={{
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',}}
            >
              <h2 className="bg-selectiveyellow text-white inline-block px-5 py-2 rounded-xl font-semibold mb-5">
                Get In Touch
              </h2>
            </AnimateIn>
            <AnimateIn
              animation={{
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',}}
            >
              <p className="text-2xl md:text-5xl font-semibold text-white">
              Have questions about water filtration? We&apos;re here to help! Click below to connect with our experts and find the perfect solution for your needs.
              </p>
            </AnimateIn>
            <div className="flex justify-end space-x-4">
              <AnimateIn
                animation={{
                  opacity: 0,
                  duration: 1,
                  ease: 'power2.out',}}
              >
                <CustomLink theme="light" label="Get In Touch" link="/contact" />
              </AnimateIn>
            </div>
          </div>
        </Bounded>
      </section>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'News - Latest News and Updates',
  }
}