import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

const WellTestResults: CollectionConfig = {
  slug: 'well-test-results',
  access: {
    create: anyone,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'fullname',
    defaultColumns: ['fullname', 'email', 'createdAt'],
    group: 'Form Submissions',
  },
  fields: [
    {
      name: 'fullname',
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
      required: false,
    },
    {
      name: 'aluminium',
      type: 'number',
      required: true,
    },
    {
      name: 'ammonium',
      type: 'number',
      required: true,
    },
    {
      name: 'coliformsTotal',
      type: 'number',
      required: true,
    },
    {
      name: 'colourApparent',
      type: 'number',
      required: true,
    },
    {
      name: 'conductivity',
      type: 'number',
      required: true,
    },
    {
      name: 'eColi',
      type: 'number',
      required: true,
    },
    {
      name: 'hardnessTotal',
      type: 'number',
      required: true,
    },
    {
      name: 'iron',
      type: 'number',
      required: true,
    },
    {
      name: 'manganese',
      type: 'number',
      required: true,
    },
    {
      name: 'nitrite',
      type: 'number',
      required: true,
    },
    {
      name: 'pH',
      type: 'number',
      required: true,
    },
    {
      name: 'tbc22c',
      type: 'number',
      required: true,
    },
    {
      name: 'turbidity',
      type: 'number',
      required: true,
    },
  ],
  timestamps: true,
  hooks: {
    afterChange: [
      async ({doc, operation, req}) => {
        if (operation === 'create') {
          const sendEmail = await req.payload.sendEmail({
            to: 'jaimie.j.hemmings@gmail.com',
            subject: 'New Well Test Results Submission',
            text: `
              New Well Test Results Submission from ${doc.fullname}
              Email: ${doc.email}
              Phone: ${doc.phone || 'Not provided'}
              
              Please log into the CMS to view the complete results.
            `,
          })
        }
      }
    ],
  },
}

export default WellTestResults