import Image from 'next/image'
import React from 'react'
import AnimateIn from '@/components/Animations/AnimateIn'
import Link from 'next/link'
import ProductAccordian from './ProductAccordian'

const ProductDetails = ({ productData }) => {
  return (
    <section className="w-full py-[5rem] text-jet bg-antiflashwhite" id="details">
      <div className="container flex md:flex-row flex-col gap-4">
        <div className="md:basis-1/2">
          <h2 className="text-xl md:text-2xl border-b-2 border-azul inline-block mb-5">Details</h2>
          <h3 className="text-2xl md:text-4xl">The {productData.title}, at a glance</h3>
          <ProductAccordian productData={productData} />
          {productData.brochure && (
            <div className="py-5">
              <Link href={productData.brochure.url} target='_blank' className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 bg-white border border-selectiveyellow text-selectiveyellow hover:bg-selectiveyellow hover:text-white text-lg">
                Download the Brochure
              </Link>
            </div>
          )}
        </div>
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
      </div>      
    </section>
  )
}

export default ProductDetails
