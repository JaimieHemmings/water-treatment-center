import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getSupportingDocsSitemap = unstable_cache(
  async (): Promise<any[]> => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const results: any = await payload.find({
      collection: 'supporting-documents',
      overrideAccess: false,
      draft: false,
      depth: 1, // Changed to 1 to include supportingDocsLink data
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
    })

    const dateFallback = new Date().toISOString()

    const sitemap = results.docs
      ? results.docs
          .filter((post) => 
            Boolean(post?.slug && post?.supportingDocsLink?.pageAssociation && post?.supportingDocsLink?.slug))
          .map((post) => ({
            loc: `${SITE_URL}/products/${post.supportingDocsLink.pageAssociation}/support/${post.supportingDocsLink.slug}`,
            lastmod: post.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['supportingDocs-sitemap'],
  {
    tags: ['supportingDocs-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getSupportingDocsSitemap()
  return getServerSideSitemap(sitemap)
}