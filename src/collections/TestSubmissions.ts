import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

const TestSubmissions: CollectionConfig = {
  slug: 'test-submissions',
  access: {
    create: anyone,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt'],
    group: 'Form Submissions',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: {
          contains: 'image',
        },
      },
    },
  ],
  timestamps: true,
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation === 'create') {
          const sendEmail = await req.payload.sendEmail({
            to: 'info@thewatertreatmentcentre.ie',
            subject: 'New Test Submission',
            text: `
              New test submission from ${doc.name},
              Email: ${doc.email},
              Image: ${doc.image || 'Not provided'},
            `,
          })
        }
      }
    ]
  }
}

export default TestSubmissions