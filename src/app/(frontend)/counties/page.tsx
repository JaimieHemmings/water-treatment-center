import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import Link from 'next/link'

import type { County } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'

export default async function CountiesPage() {
  const counties = await getAllCounties()

  return (
    <article className="container mx-auto px-4 py-8">
      <PageClient />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Counties We Serve</h1>

        {counties.length === 0 ? (
          <p className="text-center text-gray-600">No counties found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {counties.map((county) => (
              <div
                key={county.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200"
              >
                <h2 className="text-xl font-semibold mb-3 text-gray-800">{county.title}</h2>

                {county.meta?.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {county.meta.description}
                  </p>
                )}

                {county.slug && (
                  <Link
                    href={`/counties/${county.slug}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    Learn More
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    doc: {
      title: 'Counties We Serve',
      meta: {
        title: 'Counties We Serve - Water Treatment Services',
        description:
          'Explore all the counties where we provide water treatment services. Find your local area for professional water treatment solutions.',
      },
    },
  })
}

const getAllCounties = cache(async (): Promise<County[]> => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'counties',
    draft,
    limit: 1000,
    pagination: false,
    overrideAccess: draft,
    sort: 'title', // Sort alphabetically by title
  })

  return result.docs || []
})
