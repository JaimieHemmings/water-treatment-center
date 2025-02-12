import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { generateMeta } from '@/utilities/generateMeta'
import AnimateIn from '@/components/Animations/AnimateIn'
import Bounded from '@/utilities/Bounded'
import CustomLink from '@/components/CustomLink'

type Props = {
  params: Promise<{
    slug?: string
    product: string
  }>
}

export default async function Product({ params }: Props) {
  const { product = '' } = await params
  const [productData]: any[] = await queryProductBySlug({ slug: product })
  return (
    <>
    <article className="bg-darkblue relative z-0">
      <div className="relative w-full min-h-[600px] azul-overlay dots-overlay py-20">
        <Image
          src={productData.heroImage.heroImage.url}
          alt={productData.heroImage.heroImage.alt || 'No alt text available'}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-[72px] text-center md:leading-[80px] text-white">
            {productData.title}
          </h1>
          <p className="my-5 pt-5 text-lg text-center md:mx-auto md:max-w-[60%] text-white">
            {productData.excerpt}
          </p>
        </div>
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-full bg-jet opacity-30" />
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-darkblue to-transparent" />
      </div>
      <PageClient />
      <div className="flex flex-col items-center gap-4 py-[5rem]">
        <div className="container">
          <div className="px-[2rem]">
            <AnimateIn animation={{
              y: 50,
              opacity: 0,
              duration: 0.8,
            }}>
              <h2 className="text-2xl md:text-4xl font-semibold text-white pb-5 border-b-2 border-selectiveyellow">
                {productData.title}
              </h2>
            </AnimateIn>
          </div> 
          <div className="flex flex-col md:flex-row gap-4 px-[1rem]">
            <div className="md:basis-1/2">
                <AnimateIn
                  animation={{
                    y: 50,
                    opacity: 0,
                    rotate: -5,
                    duration: 0.8,
                  }}>
                    {productData.productImage && (
                      <Image
                        src={productData.productImage.url}
                        alt={productData.productImage.alt || 'No alt text available'}
                        className="inset-0 w-full object-cover"
                        width={productData.productImage.width}
                        height={productData.productImage.height}
                        priority
                      />
                    )}
                  </AnimateIn>
            </div>
            <div className="md:basis-1/2 flex flex-col gap-4">
              <AnimateIn animation={{
                y: 50,
                opacity: 0,
                duration: 0.8,
              }}>
                <RichText 
                  data={productData.intro} 
                  className="prose prose-lg prose-invert max-w-none p-0"
                />
              </AnimateIn>
              <AnimateIn animation={{
                y: 50,
                opacity: 0,
                duration: 0.8,
              }}>
                <RichText 
                  data={productData.mainBody} 
                  className="prose prose-lg prose-invert max-w-none p-0"
                />
              </AnimateIn>
            </div>
          </div>
          <AnimateIn animation={{
            y: 50,
            opacity: 0,
            duration: 0.8,
          }}>
            <RichText 
              data={productData.description} 
              className="prose prose-lg prose-invert max-w-none py-5"
            />
          </AnimateIn>
          <div className="flex md:flex-row flex-col gap-4">
            <div className="basis-1/2 py-5 px-5">
              <h2 className="text-2xl font-semibold text-white pb-5">
                Technical Specifications
              </h2>
              {productData.technicalSpecs && (
                <ul className="list-none list-inside text-white mt-4">
                  {productData.technicalSpecs.map((technicalSpec: any, index: number) => (
                    <li key={index} className="text-base border-b border-selectiveyellow py-2 flex flex-row justify-between">
                      <span className="font-semibold">
                        {technicalSpec.title}
                      </span>
                      <span>
                        {technicalSpec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="basis-1/2 px-5 prose prose-lg prose-invert max-w-none py-5 text-white">  
              <h2 className="text-2xl font-semibold text-white">
                Warranty Information
              </h2>  
              <p>
                {productData.warranties}
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Service Information
              </h2> 
              <p>
                {productData.serviceText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
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
            <div>
              <p className="text-2xl md:text-5xl font-semibold text-white">
              Get in touch to find out more about our products and services.
              </p>
            </div>
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
    </>
  )
}

const queryProductBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'products',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return result.docs
})

export const generateMetadata = async ({ params }: Props) => {
  const { product = '' } = await params
  const [productData]: any[] = await queryProductBySlug({ slug: product })
  return generateMeta({ doc: productData })
}