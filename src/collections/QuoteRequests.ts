import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

const QuoteRequests: CollectionConfig = {
  slug: 'quoteRequests',
  access: {
    create: anyone,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt', 'sent'],
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
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'model',
      type: 'text',
      required: true,
    }
  ],
  timestamps: true,
  hooks: {
    afterChange: [
      async ({doc, operation, req}) => {
        if (operation === 'create') {
          const sendEmail = await req.payload.sendEmail({
            to: 'info@thewatertreatmentcentre.ie',
            subject: 'New Quote Request Submission',
            text: `
              New quote request from ${doc.name}
              Email: ${doc.email}
              Phone: ${doc.phone || 'Not provided'}
              Product Model: ${doc.model || 'Not provided'}
            `,
          })
        }
      }
    ],
  },
}

export default QuoteRequests