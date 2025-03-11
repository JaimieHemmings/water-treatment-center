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

interface Card {
  title: string
  description: string
  image: ProductImage
}

interface Features {
  featuresTitle: string
  featuresSubtitleOne: string
  featuresSubtitleTwo: string
  featuresListOne: Feature[]
  featuresListOneImage: ProductImage
  featuresListTwo: Feature[]
  featuresListTwoImage: ProductImage
  cardsSectionTitle: string
  cards: Card[]
  fullWidthHighlightTitle: string
  fullWidthHighlightDescription: string
}

interface ProductData {
  title: string
  productImage: ProductImage
  content: {
    features: Features
  }
}

interface ProductFeaturesProps {
  productData: ProductData
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
  <li className="relative pl-[15px]">
    <CiCircleCheck className="absolute top-0 left-0 text-4xl text-selectiveyellow"/>
    <h4 className="text-xl md:text-2xl pl-8 pb-3">{title}</h4>
    <p className="pl-8">{description}</p>
  </li>
);

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ productData }) => {
  return (
    <>
      <section className="container py-20 text-white" id="features">
        <div className="text-center">
          <h2 className="border-b-2 border-selectiveyellow text-white inline-block px-2 py-1 mb-5 text-sm">
            FEATURES
          </h2>
          <AnimateIn
            animation={{
              y: 50,
              opacity: 0,
              duration: 0.8,
            }}
          >
            <p className="text-2xl md:text-4xl">
              {productData.content.features.featuresTitle}
            </p>
          </AnimateIn>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4 py-20">
          <div className="md:basis-1/2 h-full aspect-square rounded-xl max-h-[450px]">
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
            <AnimateIn
              animation={{
                y: 50,
                opacity: 0,
                duration: 0.8,
              }}
            >
              <h3 className="text-2xl md:text-4xl pb-5">
                {productData.content.features.featuresSubtitleOne}
              </h3>
            </AnimateIn>
            <ul className="py-5 flex flex-col gap-8">
              {productData.content.features.featuresListOne.map((feature, index) => (
                <>
                <AnimateIn
                  key={index}
                  animation={{
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                  }}
                >
                  <FeatureItem
                    title={feature.title}
                    description={feature.description}
                  />
                </AnimateIn>
                </>
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
          <h2 className="text-2xl md:text-4xl pb-5">
            {productData.content.features.fullWidthHighlightTitle}
          </h2>
          <p className="text-lg md:text-xl">
            {productData.content.features.fullWidthHighlightDescription}
          </p>
        </div>
      </section> 
      <section className="py-[5rem]">
        <div className="container flex flex-col md:flex-row text-white">
          <div className="md:basis-1/2 md:p-5">
          <AnimateIn
              animation={{
                y: 50,
                opacity: 0,
                duration: 0.8,
              }}
            >
              <h3 className="text-2xl md:text-4xl pb-5">
                {productData.content.features.featuresSubtitleTwo}
              </h3>
            </AnimateIn>
            <ul className="py-5 flex flex-col gap-8">
              {productData.content.features.featuresListTwo.map((feature, index) => (
                <>
                <AnimateIn
                  key={index}
                  animation={{
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                  }}
                >
                  <FeatureItem
                    title={feature.title}
                    description={feature.description}
                  />
                </AnimateIn>
                </>
              ))}
            </ul>
          </div>
          <div className="basis-1/2">
          {productData.content.features.featuresListTwoImage && (
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
                  src={productData.content.features.featuresListTwoImage.url}
                  alt={productData.content.features.featuresListTwoImage.alt || 'Product image'}
                  className="object-cover rounded-xl transition-all duration-300"
                  fill
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
              {productData.content.features.cardsSectionTitle}
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
            {productData.content.features.cards.map((card, index) => (
              <div key={index} className='flex flex-col rounded-xl bg-darkblue overflow-hidden md:basis-1/3'>
                <div className="relative w-full h-[400px]">
                  <Image 
                    src={card.image.url} 
                    alt={card.image.alt} 
                    fill 
                    className="object-cover inset-0"
                    sizes="(max-width: 768px)"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between">
                  <span className="text-selectiveyellow font-bold text-xl md:text-2xl">0{index + 1}</span>
                  <h3 className="text-xl md:text-2xl pb-3 text-antiflashwhite">
                    {card.title}
                  </h3>
                  <p className="text-antiflashwhite prose md:prose-md pb-5">{card.description}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductFeatures;