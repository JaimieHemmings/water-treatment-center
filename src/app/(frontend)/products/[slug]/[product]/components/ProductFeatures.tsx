import React from 'react';
import Image from 'next/image';
import AnimateIn from '@/components/Animations/AnimateIn';
import { CiCircleCheck } from "react-icons/ci";

interface Feature {
  title: string
  description: string
}

interface FeatureItemProps {
  title: string
  description: string
}

interface ProductImage {
  url: string
  alt: string
  width: number
  height: number
}

interface ProductData {
  title: string
  productImage: ProductImage
  content: {
    features: {
      featuresTitle: string
      featuresSubtitle: string
      featuresListOne: Feature[]
      featuresListOneImage: ProductImage
    }
  }
}

interface ProductFeaturesProps {
  productData: ProductData
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
  <li className="relative pl-[15px]">
    <CiCircleCheck className="absolute -top-1 left-0 text-4xl text-azul"/>
    <h4 className="text-xl md:text-2xl pl-8 pb-3">{title}</h4>
    <p>{description}</p>
  </li>
);

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ productData }) => {
  return (
    <>
      <section className="container py-20 text-white" id="features">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl mb-5 pb-2 border-b-2 border-azul inline-block">
            FEATURES
          </h2>
          <p className="text-2xl md:text-4xl">
            {productData.content.features.featuresTitle}
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4 py-20">
          <div className="md:basis-1/2 h-full aspect-square rounded-xl">
            {productData.content.features.featuresListOneImage && (
              <AnimateIn
                animation={{
                  y: 50,
                  opacity: 0,
                  rotate: -5,
                  duration: 0.8,
                }}
                className="h-full"
              >
                <Image
                  src={productData.content.features.featuresListOneImage.url}
                  alt={productData.content.features.featuresListOneImage.alt || 'Product image'}
                  className="object-cover rounded-xl transition-all duration-300"
                  fill
                />
              </AnimateIn>
            )}
          </div>

          <div className="basis-1/2 md:p-5">
            <h3 className="text-2xl md:text-4xl pb-5">
            {productData.content.features.featuresSubtitle}
            </h3>
            <ul className="py-5 flex flex-col gap-8">
              {productData.content.features.featuresListOne.map((feature, index) => (
                <FeatureItem
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-antiflashwhite text-jet py-12 text-center w-full relative overflow-hidden">
        <Image
          src="/dots.svg"
          alt="Decorative dots"
          width={100}
          height={100}
          className="absolute bottom-0 right-0 scale-x-[-1]"
        />
        <div className="container">
          <h2 className="text-xl md:text-2xl pb-5">
            Exceptional virus elimination
          </h2>
          <p className="text-lg md:text-xl">
            Harnessing Firewall® patented UVC technology, the C8 guarantees water purity, with up to 99.99% virus removal.
          </p>
        </div>
      </section> 
      <section className="py-[5rem]">
        <div className="container flex flex-col md:flex-row text-white">
          <div className="md:basis-1/2 md:p-5">
            <h2 className="text-2xl md:text-4xl pb-5">Smart dispensing for zero spills, fresh water anytime, and tailored hydration</h2>
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
      <section className="bg-antiflashwhite text-jet py-[5rem] w-full">
        <div className="container">
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-center pb-5">
              Enjoy great-teasting purified water with the {productData.title}
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className='flex flex-col rounded-xl bg-darkblue overflow-hidden md:basis-1/3'>
                <Image src="/glass-of-water.webp" alt="C8 CT Benefits 1" width={500} height={500} />
                <div className="p-5">
                  <span className="text-azul font-bold text-xl md:text-2xl">01</span>
                  <h3 className="text-xl md:text-2xl pb-3 text-antiflashwhite">Unrivalled Performance</h3>
                  <p className="text-antiflashwhite prose md:prose-md pb-5">The C8 interface features a vibrant full-colour LCD display with a machine status bar for an optimal user experience, enhancing the accessibility and usability of the dispenser.</p>
                </div>
              </div>
              <div className='flex flex-col rounded-xl bg-darkblue overflow-hidden md:basis-1/3'>
                <Image src="/glass-of-water.webp" alt="C8 CT Benefits 1" width={500} height={500} />
                <div className="p-5">
                  <span className="text-azul font-bold text-xl md:text-2xl">02</span>
                  <h3 className="text-xl md:text-2xl pb-3 text-antiflashwhite">Unrivalled hygiene</h3>
                  <p className="text-antiflashwhite prose md:prose-md pb-5">The C8 interface features a vibrant full-colour LCD display with a machine status bar for an optimal user experience, enhancing the accessibility and usability of the dispenser.</p>
                </div>
              </div>
              <div className='flex flex-col rounded-xl bg-darkblue overflow-hidden md:basis-1/3'>
                <Image src="/glass-of-water.webp" alt="C8 CT Benefits 1" width={500} height={500} />
                <div className="p-5">
                  <span className="text-azul font-bold text-xl md:text-2xl">03</span>
                  <h3 className="text-xl md:text-2xl pb-3 text-antiflashwhite">Keep your employees healthy</h3>
                  <p className="text-antiflashwhite prose md:prose-md pb-5">The C8 interface features a vibrant full-colour LCD display with a machine status bar for an optimal user experience, enhancing the accessibility and usability of the dispenser.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductFeatures;