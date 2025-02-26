import React from 'react';
import Image from 'next/image';
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { AnimateIn } from '@/components/Animations/AnimateIn'
import RichText from '@/components/RichText'

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
    <div className="w-full bg-darkblue py-[2rem] relative">
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute bottom-4 right-0 z-10 scale-x-[-1] w-48 h-72 md:w-48 md:h-72"
        height={300}
        width={200}
      />
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute top-4 left-0 z-10 w-48 h-72 md:w-48 md:h-72"
        height={300}
        width={200}
      />
      <div className="container pt-[5rem] flex flex-col justify-normal gap-10 relative z-10">
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
              <h3 className="text-2xl md:text-4xl text-white py-2">{service.title}</h3>
              <RichText data={service.description} enableGutter={false} className="max-w-none prose md:prose-md mb-5 text-md md:xl mr-0 [&_strong]:font-bold text-white" />
              {service.features && (
                <ul className="list-none list-inside text-white mt-4">
                  {service.features.map((feature) => (
                    <li key={feature.id} className="text-base border-b border-selectiveyellow py-2">
                      <span className="font-semibold">
                        {feature.description}
                      </span>
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