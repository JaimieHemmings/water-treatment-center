import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

const HardnessResults: CollectionConfig = {
  slug: 'hardness-test-results',
  access: {
    create: anyone,
    delete: authenticated,
    read: authenticated,
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
      name: 'telephone',
      type: 'text',
      required: true,
    },
    {
      name: 'hardness',
      type: 'text',
      required: true,
    },
  ],
  timestamps: true,
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation === 'create') {
          const sendEmail = await req.payload.sendEmail({
            to: 'info@thewatertreatmentcentre.ie',
            subject: 'New Water HArdness Test Submission',
            text: `
              New water hardness test submission from ${doc.name},
              Email: ${doc.email},
              Telephone: ${doc.telephone || 'Not provided'},
              Hardness: ${doc.hardness || 'Not provided'},
            `,
          })
        }
      }
    ]
  }
}

export default HardnessResults