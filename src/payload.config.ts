// @ts-nocheck

import { s3Storage } from '@payloadcms/storage-s3'
import { postgresAdapter } from '@payloadcms/db-postgres'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { Supporting } from './collections/Supporting'
import { Services } from './collections/Services'
import { ProductCategories } from './collections/ProductCategories'
import { subcategories } from './collections/ProductSubCategories'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import Banner from './collections/Banners'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import TestSubmissions from './collections/TestSubmissions'
import TestKitRequests from './collections/TestKitRequests'
import HardnessResults from './collections/water-hardness-results'
import WellTestResults from './collections/WellTestResults'

import { resendAdapter } from '@payloadcms/email-resend'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    meta: {
      description: 'The Water Treatment Centre | Water Softener & Filter Specialists',
      keywords: 'water softener, water filter, water treatment, hardness test, water hardness',
      title: 'The Water Treatment Centre | Water Softener & Filter Specialists',
      ogDescription: 'The Water Treatment Centre | Water Softener & Filter Specialists',
      ogTitle: 'The Water Treatment Centre | Water Softener & Filter Specialists',
      ogType: 'website',
      ogUrl: 'https://www.thewatertreatmentcentre.ie',
      titleImage: '/logo.png',
    },
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  collections: [Pages, Posts, Media, Users, Products, Supporting, Services, ProductCategories, subcategories, TestSubmissions, TestKitRequests, HardnessResults, WellTestResults, Banner],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  plugins: [
    ...plugins,
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: process.env.S3_REGION,
      },
    }),
  ],
  email: resendAdapter({
    defaultFromAddress: process.env.EMAIL_FROM_ADDRESS,
    defaultFromName: process.env.EMAIL_FROM_NAME,
    apiKey: process.env.RESEND_API || '',
  })
})
