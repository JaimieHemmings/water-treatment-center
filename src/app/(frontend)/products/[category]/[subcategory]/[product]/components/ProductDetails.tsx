import Image from 'next/image'
import React from 'react'
import AnimateIn from '@/components/Animations/AnimateIn'
import Link from 'next/link'
import ProductAccordian from './ProductAccordian'
import { FaDroplet } from 'react-icons/fa6'

const ProductDetails = ({ productData }) => {
  return (
    <section className="w-full py-[5rem] text-jet bg-antiflashwhite" id="details">
      <div className="container flex md:flex-row flex-col gap-4">
        <div className="md:basis-1/2">
          <h2 className="text-selectiveyellow inline-block px-2 py-1 mb-5 text-sm tracking-widest uppercase">
            <FaDroplet className="inline-block text-selectiveyellow relative -top-[2px] mr-2" />
            Details
          </h2>
          <h3 className="text-2xl md:text-4xl">
            {productData.content.details.detailsTitle}
          </h3>
          <ProductAccordian details={productData.content.details} />
          {productData.brochure && (
            <div className="py-5">
              <Link href={productData.brochure.url} target='_blank' className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 bg-white border border-selectiveyellow text-selectiveyellow hover:bg-selectiveyellow hover:text-white text-lg">
                Download the Brochure
              </Link>
            </div>
          )}
        </div>
        <div className="md:basis-1/2 md:p-5">
          {productData.content.details.detailsImage && (
            <Image
              src={productData.content.details.detailsImage.url}
              alt={productData.content.details.detailsImage.alt || 'No alt text available'}
              className="relative max-w-full h-auto mx-auto"
              width={800}
              height={1000}
              loading='lazy'
            />
          )}
        </div>
      </div>      
    </section>
  )
}

export default ProductDetails
