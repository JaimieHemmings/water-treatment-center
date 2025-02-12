import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { generateMeta } from '@/utilities/generateMeta'

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
      <div className="flex flex-col items-center gap-4 pt-8 bg-darkblue pb-[5rem]">
        <div className="container">

          <div className="flex flex-col md:flex-row-reverse gap-4">
            <div className="md:basis-1/2 flex flex-col gap-4">
              <RichText 
                data={productData.intro} 
                className="prose prose-lg prose-invert max-w-none"
              />
              <RichText 
                data={productData.mainBody} 
                className="prose prose-lg prose-invert max-w-none"
              />
            </div>
            <div className="md:basis-1/2">
              <h2 className="text-2xl font-semibold text-white">
                {productData.title}
              </h2>
              {productData.productImage && (
                <Image
                  src={productData.productImage.url}
                  alt={productData.productImage.alt || 'No alt text available'}
                  width={productData.productImage.width}
                  height={productData.productImage.height}
                />
              )}
            </div>
          </div>
          <RichText 
            data={productData.description} 
            className="prose prose-lg prose-invert max-w-none py-5"
          />
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