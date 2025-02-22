import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { generateMeta } from '@/utilities/generateMeta'
import AnimateIn from '@/components/Animations/AnimateIn'
import Link from 'next/link'
import ProductCTA from './ProductCTA'
import { IoIosCheckmark } from "react-icons/io";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaEuroSign } from "react-icons/fa";
import CustomLink from '@/components/CustomLink'
import { GiAutoRepair } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { CiCircleCheck } from "react-icons/ci";

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
      <PageClient />
      <div className="flex flex-col items-center gap-4 py-[5rem]">
        <div className="container flex flex-col md:flex-row gap-8 py-5">
          <div className="md:basis-1/2">
            {productData.productImage && (
              <AnimateIn
                animation={{
                  y: 50,
                  opacity: 0,
                  rotate: -5,
                  duration: 0.8,
                }}>
                    <Image
                      src={productData.productImage.url}
                      alt={productData.productImage.alt || 'No alt text available'}
                      className="inset-0 w-full object-cover"
                      width={productData.productImage.width}
                      height={productData.productImage.height}
                      priority
                    />
              </AnimateIn>
            )}
          </div>
          <div className="md:basis-1/2">
            <AnimateIn animation={{
                y: 50,
                opacity: 0,
                duration: 0.8,
              }}>
                <h2 className="text-2xl md:text-4xl font-semibold text-white pb-5 border-b-2 border-azul mb-5 inline-block">
                  {productData.title}
                </h2>
              </AnimateIn>
              <p className="prose md:prose-md text-white">
              High performance countertop dispenser for demanding, hygiene-focused environments.
              </p>
              <ul className='list-none list-inside text-white mt-4 flex flex-col gap-4 px-0 pb-5'>
                <li className="text-white relative pl-[20px]">
                  <IoIosCheckmark className="absolute top-[-5px] left-[-15px] p-0 m-0 text-4xl text-azul"/>
                  Outstanding Firewall® UVC purification system
                </li>
                <li className="text-white relative pl-[20px]">
                  <IoIosCheckmark className="absolute top-[-5px] left-[-15px] p-0 m-0 text-4xl text-azul"/>
                  Compact and durable stainless steel build
                </li>
                <li className="text-white relative pl-[20px]">
                  <IoIosCheckmark className="absolute top-[-5px] left-[-15px] p-0 m-0 text-4xl text-azul"/>
                  Touch-free dispenser offering five water options
                </li>
              </ul>
              <ul className="py-5 flex flex-col gap-4">
                <li className="text-white relative pl-[20px]">
                  <FaPeopleRoof className="absolute top-[-2px] left-[-12px] p-0 m-0 text-2xl text-azul"/>
                  Suitable for households up to <strong>10 people</strong>
                </li>
                <li className="text-white relative pl-[20px]">
                  <FaEuroSign className="absolute top-[-2px] left-[-12px] p-0 m-0 text-2xl text-azul"/>
                  Get a FREE no obligation quote
                </li>
                <li className="text-white relative pl-[20px]">
                  <GrMoney className="absolute top-[-2px] left-[-12px] p-0 m-0 text-2xl text-azul"/>
                  Payment Plans Available
                </li>
                <li className="text-white relative pl-[20px]">
                  <GiAutoRepair className="absolute top-[-2px] left-[-12px] p-0 m-0 text-2xl text-azul"/>
                  Installation &amp; maintenance services available
                </li>
              </ul>
              <div className="py-5">
                {productData.brochure && (
                  <Link href={productData.brochure.url} target='_blank' className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 underline-offset-4 inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border-2 text-lg relative z-30 no-underline hover:no-underline      text-white border-white hover:bg-white hover:text-selectiveyellow">
                    Download the Brochure
                  </Link>
                )}
              </div>
          </div>
        </div>
        <div className="w-full bg-antiflashwhite p-3 text-jet shadow-[0px_4px_6px_0px_rgba(74,_144,_226,_0.4)]">
          <div className="container flex flex-row gap-4 justify-between align-middle items-center">
            <ul className="flex flex-row gap-4 text-azul">
              <li>
                <Link className="font-semibold text-lg hover:border-b-2 hover:border-azul" href="#features">
                  Features
                </Link>
              </li>
              <li>
                <Link className="font-semibold text-lg hover:border-b-2 hover:border-azul"  href="#features">
                  Details
                </Link>
              </li>
              <li>
                <Link className="font-semibold text-lg hover:border-b-2 hover:border-azul"  href="#features">
                  Services
                </Link>
              </li>
            </ul>
            <CustomLink label="Contact Us For A Quote" link="/products" theme="light" className='m-0' />
          </div>
        </div>
        <section className="container py-[5rem] text-white" id="features">
          <div className="flex-col align-middle items-center text-center">
            <h2 className="text-xl md:text-2xl mb-5 pb-2 border-b-2 border-azul inline-block text-center">FEATURES</h2>
            <p className="text-2xl md:text-4xl text-center">Enjoy glass after glass of safe, highly purified water</p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 py-[5rem]">
            <div className="basis-1/2">
              {productData.productImage && (
                <AnimateIn
                  animation={{
                    y: 50,
                    opacity: 0,
                    rotate: -5,
                    duration: 0.8,
                  }}>
                      <Image
                        src={productData.productImage.url}
                        alt={productData.productImage.alt || 'No alt text available'}
                        className="inset-0 w-full object-cover"
                        width={productData.productImage.width}
                        height={productData.productImage.height}
                        priority
                      />
                </AnimateIn>
              )}
            </div>
            <div className="basis-1/2">
              <h3 className="text-2xl md:text-4xl pb-5">Where safety meets innovation</h3>
              <ul className="py-5 flex flex-col gap-8">
                <li className="relative pl-[15px]">
                  <CiCircleCheck className="absolute top-[-5px] left-0 p-0 m-0 text-4xl text-azul"/>
                  <h4 className="text-xl md:text-2xl pl-[30px] pb-3">Unrivalled Performance</h4>
                  <p>Built from robust stainless steel, the C8 countertop cooler boasts durability and easy maintenance, built to thrive in demanding environments.</p>
                </li>
                <li className="relative pl-[15px]">
                  <CiCircleCheck className="absolute top-[-5px] left-0 p-0 m-0 text-4xl text-azul"/>
                  <h4 className="text-xl md:text-2xl pl-[30px] pb-3">Outstanding purification</h4>
                  <p>Powered by the patented Firewall® purification technology, it offers exceptional protection against bacteria, viruses, and cysts.</p>
                </li>
                <li className="relative pl-[15px]">
                  <CiCircleCheck className="absolute top-[-5px] left-0 p-0 m-0 text-4xl text-azul"/>
                  <h4 className="text-xl md:text-2xl pl-[30px] pb-3">Continuous protection</h4>
                  <p>Infused with BioCote® technology, key surfaces of the C8 ensure a constant defense against microbial growth.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-jet text-white py-[3rem] text-center w-full relative overflow-hidden">
          <Image src="/dots.svg" alt="Dots" width={100} height={100} className="absolute bottom-0 right-0 scale-x-[-1]" />
          <div className="container">
            <h2 className="text-xl md:text-2xl pb-5">Exceptional virus elimination</h2>
            <p className="text-lg md:text-xl">Harnessing Firewall® patented UVC technology, the C8 guarantees water purity, with up to 99.99% virus removal.</p>
          </div>
        </section>
        <section>
          <div className="container flex flex-col md:flex-row">
            <div className="md:basis-1/2">
              <h2>Smart dispensing for zero spills, fresh water anytime, and tailored hydration</h2>
              <ul className="py-5 flex flex-col gap-8">
                <li className="relative pl-[15px]">
                  <CiCircleCheck className="absolute top-[-5px] left-0 p-0 m-0 text-4xl text-azul"/>
                  <h3 className="text-xl md:text-2xl pl-[30px] pb-3">Advanced dispensing</h3>
                  <p>Designed to prevent leaks and spills, the C8 includes a comprehensive leak prevention system and drip tray overflow alarm.</p>
                </li>
                <li className="relative pl-[15px]">
                  <CiCircleCheck className="absolute top-[-5px] left-0 p-0 m-0 text-4xl text-azul"/>
                  <h3 className="text-xl md:text-2xl pl-[30px] pb-3">On-demand freshness</h3>
                  <p>Utilising your existing water supply, the C8 delivers an endless supply of freshly filtered water throughout the day.</p>
                </li>
                <li className="relative pl-[15px]">
                  <CiCircleCheck className="absolute top-[-5px] left-0 p-0 m-0 text-4xl text-azul"/>
                  <h3 className="text-xl md:text-2xl pl-[30px] pb-3">Customised hydration</h3>
                  <p>With a versatile selection of five water options, the C8 countertop caters to the unique preferences of your workforce and guests.</p>
                </li>
              </ul>
            </div>
            <div className="basis-1/2">
              {productData.productImage && (
                <AnimateIn
                  animation={{
                    y: 50,
                    opacity: 0,
                    rotate: -5,
                    duration: 0.8,
                  }}>
                      <Image
                        src={productData.productImage.url}
                        alt={productData.productImage.alt || 'No alt text available'}
                        className="inset-0 w-full object-cover"
                        width={productData.productImage.width}
                        height={productData.productImage.height}
                        priority
                      />
                </AnimateIn>
              )}
            </div>
          </div>

        </section>
        
        






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