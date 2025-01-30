import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function ServicesPage() {
  const payload = await getPayload({ config: configPromise })
  
  const response:any = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      heroImage: true,
    },
  })

  return (
    <div className="pb-24 bg-jet">
      <h1>Services</h1>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Services - Update this later',
  }
}