import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const payload = await getPayload({ config: configPromise })
    const baseUrl = 'https://thewatertreatmentcentre.ie'

    // Fetch all published content
    const [products, categories, supportingDocs, posts, pages] = await Promise.all([
      payload.find({
        collection: 'products'
      }),

      payload.find({
        collection: 'product-categories',
      }),

      payload.find({
        collection: 'supporting-documents',
      }),

      payload.find({
        collection: 'posts',
      }),

      payload.find({
        collection: 'pages',
        where: {
          _status: { equals: 'published' }
        }
      })
    ])

    const sitemapEntries: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1
      }
    ]

    // Add supporting documents
    supportingDocs.docs.forEach((doc: any) => {
      sitemapEntries.push({
        url: `${baseUrl}/products/${doc.association.slug}/support/${doc.slug}`,
        lastModified: new Date(doc.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.6
      })
    })

    // Add posts
    posts.docs.forEach((post: any) => {
      sitemapEntries.push({
        url: `${baseUrl}/news/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.7
      })
    })

    // Add products
    products.docs.forEach((product: any) => {
      if (product.category?.slug) {
        sitemapEntries.push({
          url: `${baseUrl}/products/${product.category.slug}/${product.slug}`,
          lastModified: new Date(product.updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8
        })
      }
    })

    // Add categories
    categories.docs.forEach((category: any) => {
      sitemapEntries.push({
        url: `${baseUrl}/products/${category.slug}`,
        lastModified: new Date(category.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.9
      })
    })

    // Add pages
    pages.docs.forEach((page: any) => {
      sitemapEntries.push({
        url: `${baseUrl}/${page.slug}`,
        lastModified: new Date(page.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.7
      })
    })
    return sitemapEntries

  } catch (error) {
    console.error('Error generating sitemap:', error)
    return [{
      url: 'https://thewatertreatmentcentre.ie',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    }]
  }
}