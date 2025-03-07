import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import Image from 'next/image'
import CustomLink from '@/components/CustomLink'
import AnimateIn from '@/components/Animations/AnimateIn'
import Bounded from '@/utilities/Bounded'
import { FaDroplet } from "react-icons/fa6";

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
      <div className="relative w-full min-h-[600px] azul-overlay py-20">
        <Image
          src="/glass-of-water.webp"
          alt="background Image"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="container mx-auto h-full flex flex-row justify-start items-center relative z-10">
          <div className="md:basis-2/3">
            <p className="mb-5 text-sm text-white tracking-widest flex flex-row gap-2 items-center uppercase">
              <FaDroplet className="inline-block text-selectiveyellow" />
              Water Treatment Centre
            </p>
            <h1 className="text-4xl md:text-[72px] md:leading-[80px] text-white">
              A Filter For Every Application
            </h1>
            <p className="my-5 pt-5 text-lg text-white">
            Pure, clean water shouldn&apos;t be a luxury - it&apos;s essential for your family&apos;s health and well-being. Our wide range of water filtration products are designed to meet the needs of every home and business, no matter the size or application.
            </p>
          </div>
        </div>
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-full bg-gradient-to-r from-darkblue to-transparent" />
      </div>
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
        left-0" />
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
                <FaDroplet className="inline-block text-white text-base relative -top-[1px] mr-1 tracking-widest" /> Get In Touch
              </h2>
              <p
                className="text-2xl md:text-4xl font-semibold'} mb-5 text-white"
              >We&apos;re here to help! Connect with our experts and find the perfect solution for your needs!</p>
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
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Products - Latest News and Updates',
  }
}