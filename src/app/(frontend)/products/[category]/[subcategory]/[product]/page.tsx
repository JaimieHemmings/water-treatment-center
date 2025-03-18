import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import { generateMeta } from '@/utilities/generateMeta'
import ProductCTA from './components/ProductCTA'
import Header from './components/Header';
import ProductNav from './components/ProductNav'
import ProductFeatures from './components/ProductFeatures'
import ProductDetails from './components/ProductDetails'
import ServiceDetails from './components/ServiceDetails'
import { FaDroplet } from "react-icons/fa6";
import AnimateIn from '@/components/Animations/AnimateIn'
import Bounded from '@/utilities/Bounded'
import CustomLink from '@/components/CustomLink'
import FAQ from './components/FAQ'

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
    <article className="bg-darkblue relative z-0 md:pt-10">
      <PageClient />
      {productData && (
        <>
        <Header productData={productData} />
        <ProductNav />
        <ProductFeatures productData={productData} />
        <ProductCTA />
        <ProductDetails productData={productData} />
        {productData.content.faq && (
          <FAQ data={productData.content.faq} />
        )}
        <ServiceDetails />
        </>
      )}
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
    </article>
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