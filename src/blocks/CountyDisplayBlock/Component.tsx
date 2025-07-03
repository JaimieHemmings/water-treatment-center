import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { FaDroplet } from 'react-icons/fa6'
import { Media } from '@/components/Media'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function CountyDisplayBlock<T = any>({ title, description }) {
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
          <div className="container border-l-2 border-selectiveyellow pl-5">
            <h2 className={`text-sm text-selectiveyellow m-0 pb-5 tracking-widest uppercase`}>
              <FaDroplet className="inline-block text-selectiveyellow mr-2 relative -top-[2px]" />
              {title}
            </h2>
          </div>
          <p className="max-w-none md:prose-md prose mb-5 text-2xl md:text-md text-white font-light pt-3 m-0 pb-10">
            {description || 'Explore the water quality data for various counties.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols">
            {docs.map((county: any, index) => (
              <div
                key={index}
                className="border border-selectiveyellow/60 bg-antiflashwhite rounded-xl shadow-lg mb-5 relative overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <Media
                  resource={county.excerptImage}
                  className="w-full h-full object-cover rounded-lg mb-4 absolute top-0 left-0 right-0 z-10"
                  alt={county.title}
                  fill
                />
                <div className="relative z-20 p-5 pt-12 bg-gradient-to-br from-white/90 via-white/90 to-teal/40 rounded-lg">
                  <h3 className="text-2xl text-jet mb-3 pb-2 border-b border-teal uppercase font-semibold tracking-wide">
                    {county.title}
                  </h3>
                  {county.meta?.description && (
                    <p className="text-jet/90 mb-4 line-clamp-3">{county.meta.description}</p>
                  )}
                  <div className="flex items-center justify-end">
                    <p className="bg-azul text-white hover:text-white/60 transition-colors duration-300 mt-3">
                      <a className="px-6 py-2 inline-block" href={`/water-quality/${county.slug}`}>
                        View Details
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
