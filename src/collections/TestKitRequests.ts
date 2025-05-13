import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

const TestKitRequests: CollectionConfig = {
  slug: 'test-kit-requests',
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
      name: 'telephone',
      type: 'text',
      required: true,
    },
    {
      name: 'address',
      type: 'textarea',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
    },
    {
      name: 'sent',
      type: 'checkbox',
    },
  ],
  hooks: {
    afterChange: [
      async ({doc, operation, req}) => {
        if (operation === 'create') {
          const sendEmail = await req.payload.sendEmail({
            to: 'info@thewatertreatmentcentre.ie',
            subject: 'New Test Kit Request Submission',
            replyTo: doc.email,
            text: `
              New test kit request from ${doc.name},
              Email: ${doc.email},
              Telephone: ${doc.telephone || 'Not provided'},
              Address: ${doc.address || 'Not provided'},
              Message: ${doc.message || 'Not provided'},
            `,
          })
        }
      }
    ],
  },
  timestamps: true,
}

export default TestKitRequests