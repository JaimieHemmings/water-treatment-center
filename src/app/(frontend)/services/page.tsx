import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'
import Bounded from '@/utilities/Bounded'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = 600

interface Feature {
  id: string;
  description: string;
}

interface ServiceImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface Service {
  id: string;
  title: string;
  description?: string;
  image: ServiceImage;
  features?: Feature[];
}

export default async function ServicesPage() {
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
    <div className="bg-jet pt-20">
      <div className="container mx-auto px-4 flex flex-col gap-10">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6`}
          >
            <div className="basis-1/2">
              <Image
                src={service.image.url}
                alt={service.image.alt || service.title}
                className="w-full h-auto rounded-t-lg z-10 object-cover"
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

      <section className="w-full bg-jet py-20 relative overflow-hidden mt-[5rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
        >
          <source src="/water-drop.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-full absolute z-1 bg-gradient-to-br from-argentinian to-azul opacity-70 top-0 left-0" />
        <Bounded>
          <div className="p-4">
            <h2 className="text-selectiveyellow font-semibold pb-5">
              Get In Touch
            </h2>
            <p className="text-2xl md:text-4xl font-semibold text-white">
              Book your service today!
            </p>
            <div className="flex justify-end space-x-4">
              <Link href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </Bounded>
      </section>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Our Services | The Water Treatment Centre',
    description: 'Explore our comprehensive range of services designed to meet your needs.',
  }
}