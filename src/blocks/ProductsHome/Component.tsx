'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './styles.css'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

interface Product {
  id: string;
  name: string;
  excerpt: string;
  featuredImage?: {
    url: string;
  };
}

interface ProductsResponse {
  docs: Product[];
}

const ProductsHome: React.FC = () => {
  const [products, setProducts] = useState<ProductsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })]
  )

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products?limit=12&sort=-createdAt');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ProductsResponse = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [emblaApi])

  if (loading) return <div className="min-h-[458px] bg-jet">Loading products...</div>;
  if (error) return <div className="h-screen bg-jet">Error loading products: {error.message}</div>;
  if (!products || !products.docs.length) {
    console.log('No products found');
    return <div className="h-screen bg-jet">No products found</div>;
  }

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
            {products.docs.map((product) => (
              <div className="embla__slide" key={product.id}>
                {product.featuredImage && (
                  <Image
                    src={product.featuredImage.url}
                    alt={product.name}
                    width={340}
                    height={340}
                    className="w-full md:max-w-full h-auto rounded-xl"
                  />
                )}
                <div className="flex flex-col justify-start py-5 gap-3">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="">{product.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHome;