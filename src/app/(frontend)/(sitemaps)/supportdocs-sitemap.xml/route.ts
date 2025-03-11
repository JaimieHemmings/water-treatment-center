import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getSupportDocsSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const results = await payload.find({
      collection: 'supporting-documents',
      overrideAccess: false,
      draft: false,
      depth: 1, // Increased depth to get association data
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
          .filter((doc: any) => Boolean(doc?.slug && doc?.association?.slug))
          .map((doc: any) => {
            return {
              loc: `${SITE_URL}/products/${doc.association?.slug}/support/${doc.slug}`,
              lastmod: doc.updatedAt || dateFallback,
            }
          })
      : []

    return sitemap
  },
  ['supportDocs-sitemap'],
  {
    tags: ['supportDocs-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getSupportDocsSitemap()
  return getServerSideSitemap(sitemap)
}