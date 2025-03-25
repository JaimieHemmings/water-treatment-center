import React from 'react';
import Image from 'next/image';
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { AnimateIn } from '@/components/Animations/AnimateIn'
import RichText from '@/components/RichText'
import { IoIosInformationCircleOutline } from "react-icons/io";

export const dynamic = 'force-static'
export const revalidate = 600

export default async function ServicesBlock() {
  const payload = await getPayload({ config: configPromise })
  
  const response:any = await payload.find({
    collection: 'services',
    depth: 1,
    overrideAccess: false,
  })

  const { docs } = response
  return (
    <div className="w-full bg-white text-textblue py-[2rem] relative">
      <div  className="container pt-[5rem] flex flex-col justify-normal gap-10 relative z-10">
        {docs.map((service, index) => (
          <div key={index} className={`flex flex-col gap-10 py-[2rem] ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="basis-1/2">
            <AnimateIn
              animation={{
                x: index % 2 === 1 ? 60 : -60,
                duration: 0.6,
                delay: 0.1 * index,
              }}
            >
              <div
                className="mb-3 pl-4 border-l-4 border-selectiveyellow"
              >
                <h3 className="text-2xl md:text-4xl py-2 text-selectiveyellow font-bold mb-2">
                  {service.title}
                </h3>
                {service.intro && (
                  <RichText data={service.intro} enableGutter={false} className="max-w-none mb-10 text-md md:xl mr-0 [&_strong]:font-bold" />
                )}
              </div>
              <RichText data={service.description} enableGutter={false} className="max-w-none mb-10 text-md md:xl mr-0 [&_strong]:font-bold" />
              {service.features && (
                <ul className="list-none list-inside mt-4">
                  {service.features.map((feature) => (
                    <li key={feature.id} className="text-base my-2">
                      <p className="relative pl-8">
                        <IoIosInformationCircleOutline className="absolute top-[3px] left-0 text-2xl text-selectiveyellow" />
                        {feature.description}
                      </p>
                      <span className="bg-selectiveyellow/60 h-[1px] w-1/3 block mt-2" />
                    </li>
                  ))}
                </ul>
              )}
            </AnimateIn>
            </div>
            <div className="basis-1/2 relative min-h-[500px]"> {/* Added fixed height and relative positioning */}
            <AnimateIn
              animation={{
                x: index % 2 === 1 ? -60 : 60,
                duration: 0.6,
                delay: 0.1 * index,
              }}
              className="h-full" // Added full height to animation container
            >
              {service.image && (
                <Image 
                  fill // Changed to fill property
                  src={service.image.url} 
                  alt={service.image.alt} 
                  className="absolute inset-0 object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              )}
            </AnimateIn>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};