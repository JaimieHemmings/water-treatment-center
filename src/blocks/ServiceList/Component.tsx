import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function ServicesListBlock() {
  const payload = await getPayload({ config: configPromise })

  const response: any = await payload.find({
    collection: 'services',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      description: true,
      image: true,
      features: true,
    },
  } as any)

  const services = response.docs

  return (
    <div className="container mx-auto px-4 flex flex-col gap-10">
      {services.map((service, index) => (
        <div 
          key={service.id} 
          className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 py-5`}
        >
          <div className="basis-1/2">
            <Image
              src={service.image.url}
              alt={service.image.alt || service.title}
              className="w-full h-auto rounded-xl z-10 object-cover inset-0"
              height={service.image.height || 300}
              width={service.image.width || 400}
            />
          </div>
          <div className="basis-1/2">
            <h2 className="text-2xl md:text-4xl text-selectiveyellow font-semibold mb-2">
              {service.title}
            </h2>
            {service.description && (
              <RichText
                className="text-white"
                data={service.description}
                enableGutter={false}
              />
            )}
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
          </div>
        </div>
      ))}
    </div>
  )
}
