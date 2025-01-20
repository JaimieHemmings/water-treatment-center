'use client';

import React, { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import './styles.css'

export const ProductsHome: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })]
  )

  const products = {
    1: {
      name: 'Water Softeners',
      description: 'Eliminate hard water issues for softer skin, and longer lasting appliances.',
      image: '/products/1.png'
    },
    2: {
      name: 'Reverse Osmosis Filters',
      description: 'Achieve ultra-pure drinking water by removing harmful contaminants effectively.',
      image: '/products/2.png'
    },
    3: {
      name: 'Bacteria Filters',
      description: 'Safeguard your family&apos;s health by removing harmful bacteria from your water supply.',
      image: '/products/3.png'
    },
    4: {
      name: 'Iron Filters',
      description: 'Prevent stains and odor caused by excess iron in your water with powerful filtration.',
      image: '/products/4.png'
    },
    5: {
      name: 'Flouride Filters',
      description: 'Remove harmful fluoride from your water supply for a healthier lifestyle.',
      image: '/products/5.png'
    },
    6: {
      name: 'Water Softeners',
      description: 'Eliminate hard water issues for softer skin, and longer lasting appliances.',
      image: '/products/1.png'
    },
    7: {
      name: 'Reverse Osmosis Filters',
      description: 'Achieve ultra-pure drinking water by removing harmful contaminants effectively.',
      image: '/products/2.png'
    },
    8: {
      name: 'Bacteria Filters',
      description: 'Safeguard your family&apos;s health by removing harmful bacteria from your water supply.',
      image: '/products/3.png'
    },
    9: {
      name: 'Iron Filters',
      description: 'Prevent stains and odor caused by excess iron in your water with powerful filtration.',
      image: '/products/4.png'
    },
  }

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [emblaApi])

  return (
    <section className="bg-jet py-5 md:py-[5rem] products">
      <div className="container flex flex-col md:flex-row justify-between mx-auto gap-4">
        <div className="basis-3/4">
          <h2 className="block text-selectiveyellow font-semibold pb-5">Our Products</h2>
          <p className="text-4xl md:text-6xl">Best Water Purification Systems</p>
          <p className="text-md pt-3">Explore our range of products designed to meet your unique water purification needs.</p>
        </div>
        <div className="basis-1/4 h-[100%] flex flex-col justify-end md:pt-[5rem]">
          <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border bg-selectiveyellow text-jet hover:bg-jet hover:text-selectiveyellow text-lg hover:border-selectiveyellow">Learn More</Link>
        </div>
      </div>

      <div className="embla py-5">
        <div className="embla__viewport mx-auto" ref={emblaRef}>
          <div className="embla__container">
            {Object.entries(products).map(([key, product]) => (
              <div className="embla__slide" key={key}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={340}
                  height={340}
                  className="w-full md:max-w-full h-auto rounded-xl"
                />
                <div className="flex flex-col justify-start py-5 gap-3">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProductsHome;