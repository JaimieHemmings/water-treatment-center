import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import type { Post } from '@/payload-types'
import { cache } from 'react'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = params
  const blog = await queryBlog(slug)

  console.log('Blog:', blog)
  
  if (!blog) {
    notFound()
  }

  return (
    <article>
      <h1>{blog.title}</h1>
    </article>
  )
}

const queryBlog = cache(async (slug: string): Promise<Post | null> => {
  const payload = await getPayload({ config: configPromise })
  
  const result = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
    overrideAccess: true,
  })
  
  return result.docs[0] || null
})