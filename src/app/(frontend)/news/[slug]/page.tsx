import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import type { Post } from '@/payload-types'
import { cache } from 'react'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })
  
  return posts.docs.map(({ slug }) => ({ slug }))
}

type Props = {
  params: {
    slug: string
  }
}

export default async function Post({ params }: Props) {
  const { slug } = params
  
  const blog = await queryBlog(slug)
  
  if (!blog) {
    notFound()
  }

  return (
    <article>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  )
}

const queryBlog = cache(async (slug: string) => {
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