import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function CountyDisplayBlock() {
  const payload = await getPayload({ config: configPromise })

  const response = await payload.find({
    collection: 'counties',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    sort: 'title',
    pagination: false,
  })
  const { docs } = response

  return (
    <section className="container py-[5rem]">
      {docs.length > 0 && (
        <>
          <h2 className="max-w-none md:prose-md prose mb-5 text-2xl md:text-md text-white font-light pt-3 m-0 pb-10">
            County Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols">
            {docs.map((county: any, index) => (
              <div
                key={index}
                className="p-5 border border-selectiveyellow/60 bg-antiflashwhite rounded-xl shadow-lg mb-5"
              >
                <h3 className="text-2xl text-textblue">{county.title}</h3>
                {county.meta?.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {county.meta.description}
                  </p>
                )}
                <div className="flex items-center justify-end">
                  <p className="text-sm bg-azul text-white hover:text-white/60 transition-colors duration-300 mt-3">
                    <a className="px-6 py-2 inline-block" href={`/counties/${county.slug}`}>
                      View Details
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
