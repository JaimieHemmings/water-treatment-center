import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function ServicesPage() {
  const payload = await getPayload({ config: configPromise })
 
  const response = await payload.find({
    collection: 'service-categories',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      description: true,
      image: true,
    },
  })

  const categories = response.docs as any

  return (
    <div className="pb-24 bg-jet">
      <h1 className="text-3xl font-bold text-center py-8">Services</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {category.image && (
                <div className="relative w-full h-48">
                  <Image 
                    src={category.image.url}
                    alt={category.image.alt || category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                <p className="text-slate-900">{category.slug}</p>
                {category.description && (
                  <p className="text-gray-600">{category.description}</p>
                )}
                <Link
                  href={`/services/${category.slug}`}
                  className="text-slate-950 border-2 rounded-lg border-slate-950 px-4 py-2 mt-4 inline-block"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Our Services | The Water Treatment Centre',
    description: 'Explore our comprehensive range of services designed to meet your needs.',
  }
}