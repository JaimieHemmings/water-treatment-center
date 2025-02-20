import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { generateMeta } from '@/utilities/generateMeta'
import AnimateIn from '@/components/Animations/AnimateIn'
import Link from 'next/link'
import ProductHero from './ProductHero'
import ProductCTA from './ProductCTA'

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
      <ProductHero productData={productData} />
      <PageClient />
      <div className="flex flex-col items-center gap-4 py-[5rem]">
        <div className="container">
          <div className="px-[2rem]">
            <AnimateIn animation={{
              y: 50,
              opacity: 0,
              duration: 0.8,
            }}>
              <h2 className="text-2xl md:text-4xl font-semibold text-white pb-5 border-b-2 border-selectiveyellow mb-5">
                {productData.title}
              </h2>
            </AnimateIn>
          </div> 
        </div>
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:basis-1/3">
              <div className="md:sticky top-[100px] pt-5">
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
                  <div className="py-5">
                    {productData.brochure && (
                      <Link href={productData.brochure.url} target='_blank' className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 underline-offset-4 inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border-2 text-lg relative z-30 no-underline hover:no-underline      text-white border-white hover:bg-white hover:text-selectiveyellow">
                        Download the Brochure
                      </Link>
                    )}
                  </div>
              </div>
            </div>
            <div className="basis-2/3 text-white">
              <AnimateIn animation={{y: 50,opacity: 0,duration: 0.8,}}>
                <RichText 
                  data={productData.intro} 
                  className="prose prose-lg prose-invert max-w-none p-0"
                />
              </AnimateIn>
              <AnimateIn animation={{y: 50,opacity: 0,duration: 0.8,}}>
                <RichText 
                  data={productData.mainBody} 
                  className="prose prose-lg prose-invert max-w-none p-0 py-5"
                />
              </AnimateIn>
              <AnimateIn animation={{y: 50,opacity: 0,duration: 0.8,}}>
                <RichText 
                  data={productData.description} 
                  className="prose prose-lg prose-invert max-w-none p-0"
                />
              </AnimateIn>
          </div>
        </div>
      </div>
      <div className="container text-white">
        <div className="flex flex-col md:flex-row gap-4 py-5">
          <div className="md:basis-2/3">
            <h2 className="text-2xl font-semibold text-white py-5">
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
          <div className="md:basis-1/3">
            <h2 className="text-2xl font-semibold text-white py-5">
              Warranty Information
            </h2>  
            <p>{productData.warranties}</p>
            <h2 className="text-2xl font-semibold text-white py-5">
              Service Information
            </h2> 
            <p>{productData.serviceText}</p>
          </div>
        </div>
      </div>
      </div>
    </article>
    <ProductCTA />
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