'use client';

import React, { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import './styles.css'

export const ProductsHome: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 3000 })])

  const products = {
    1: {
      name: 'Water Softeners',
      description: 'Eliminate hard water issues for softer skin, and longer lasting appliances.',
      image: '/default-product.avif'
    },
    2: {
      name: 'Product 2',
      description: 'Description for product 2.',
      image: '/default-product.avif'
    },
    3: {
      name: 'Product 3',
      description: 'Description for product 3.',
      image: '/default-product.avif'
    },
    4: {
      name: 'Product 4',
      description: 'Description for product 4.',
      image: '/default-product.avif'
    },
    5: {
      name: 'Product 5',
      description: 'Description for product 5.',
      image: '/default-product.avif'
    }
  }

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [emblaApi])

  return (
    <section className="bg-jet py-[5rem] products">
      <div className="container flex flex-row justify-between mx-auto gap-4">
        <div className="basis-3/4">
          <h2 className="block text-selectiveyellow font-semibold pb-5">Our Products</h2>
          <p className="text-6xl">Best Water Purification Systems</p>
          <p className="text-md pt-3">Explore our range of products designed to meet your unique water purification needs.</p>
        </div>
        <div className="basis-1/4 h-[100%] flex flex-col justify-end pt-[5rem]">
          <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border bg-selectiveyellow text-jet hover:bg-jet hover:text-selectiveyellow text-lg hover:border-selectiveyellow">Learn More</Link>
        </div>
      </div>

      <div className="embla py-5">
        <div className="embla__viewport container mx-auto" ref={emblaRef}>
          <div className="embla__container">
            {Object.entries(products).map(([key, product]) => (
              <div className="embla__slide" key={key}>
                <Image src='/product-image.png' alt={product.name} width={500} height={500} />
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