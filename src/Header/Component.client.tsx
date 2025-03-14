import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import NavBar from './NavBar';

export default async function HeaderClient({ data }) {
  const payload = await getPayload({ config: configPromise })

  const response:any = await payload.find({
    collection: 'product-categories',
    depth: 1,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      excerpt: true,
    },
  })

  const { docs } = response

  const supportingDocs:any = await payload.find({
    collection: 'supporting-documents',
    depth: 1,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      association: true,
    },
  })

  return (
    <NavBar supportingDocs={supportingDocs} docs={docs} data={data} />
  )
}
