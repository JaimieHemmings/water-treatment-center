import React from 'react';
import AnimateIn from '@/components/Animations/AnimateIn';
import { CiCircleCheck } from "react-icons/ci";
import Gallery from './Gallery';
import { FaDroplet } from "react-icons/fa6";
import VideoBlock from './VideoBlock';

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

interface Features {
  featuresTitle: string
  featuresSubtitle: string
  featuresList: Feature[]
  featuresListImage: ProductImage
  cardsSectionTitle: string
  fullWidthHighlightTitle: string
  fullWidthHighlightDescription: string
}

interface ProductData {
  title: string
  productImage: ProductImage
  content: {
    features: Features
    media: {
      gallery: ProductImage[]
    }
  }
  video: any
}

interface ProductFeaturesProps {
  productData: ProductData
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
  <li className="relative pl-[8px]">
    <CiCircleCheck className="absolute top-[5px] left-0 text-2xl text-selectiveyellow"/>
    <h4 className="text-xl md:text-2xl pl-8 pb-1">{title}</h4>
    <p className="pl-8">{description}</p>
  </li>
);

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ productData }) => {
  return (
    <>
      <section className="pt-20 md:py-[5rem] text-white bg-darkblue" id="features">
        <div className="container">
          <div className="w-full flex flex-col md:flex-row-reverse gap-4 pt-10 pb-10 md:pb-0">
            <div className="md:basis-1/2 h-full bg-selectiveyellow rounded-md p-2 md:sticky md:top-[120px]">
              {productData.content.media && (
                <Gallery productData={productData.content.media} />
              )}
            </div>

            <div className="basis-1/2 max-md:p-5 md:pr-5 md:pb-0">
              <h2 className="text-selectiveyellow inline-block px-2 py-1 mb-1 text-sm tracking-widest">
                <FaDroplet className="inline-block text-selectiveyellow relative -top-[2px] mr-2" />
                FEATURES
              </h2>
              <AnimateIn
                animation={{
                  y: 50,
                  opacity: 0,
                  duration: 0.8,
                }}
              >
                <p className="text-2xl md:text-4xl pb-5">
                  {productData.content.features.featuresTitle}
                </p>
              </AnimateIn>
              <AnimateIn
                animation={{
                  y: 50,
                  opacity: 0,
                  duration: 0.8,
                }}
              >
                <h3 className="text-xl md:text-2xl pb-5 mt-5 md:mt-0">
                  {productData.content.features.featuresSubtitle}
                </h3>
              </AnimateIn>
              <ul className="py-5 pb-0 flex flex-col gap-4">
                {productData.content.features.featuresList.map((feature, index) => (
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
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
          
      {productData.video?.video?.url && (
        <VideoBlock video={productData.video} />
      )}
    </>
  );
};

export default ProductFeatures;