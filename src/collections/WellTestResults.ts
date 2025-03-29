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

          const resultsTable = `
            | Test           | Result         |
            |----------------|----------------|
            | Aluminium      | ${doc.aluminium || 'No data provided'}              |
            | Ammonium       | ${doc.ammonium || 'No data provided'}              |
            | Total Coliforms| ${doc.coliformsTotal || 'No data provided'}              |
            | Apparent Color | ${doc.colourApparent || 'No data provided'}              |
            | Conductivity   | ${doc.conductivity || 'No data provided'}              |
            | E.Coli         | ${doc.eColi || 'No data provided'}              |
            | Total Hardness | ${doc.hardnessTotal || 'No data provided'}              |
            | Iron           | ${doc.iron || 'No data provided'}              |
            | Manganese      | ${doc.manganese || 'No data provided'}              |
            | Nitrite        | ${doc.nitrite || 'No data provided'}              |
            | pH             | ${doc.pH || 'No data provided'}              |
            | TBC @ 22°C     | ${doc.tbc22c || 'No data provided'}              |
            | Turbidity      | ${doc.turbidity || 'No data provided'}              |
          `.replace(/^\s+/gm, ''); 

          const sendEmail = await req.payload.sendEmail({
            to: 'info@thewatertreatmentcentre.ie',
            subject: 'New Well Test Results Submission',
            text: `
              New Well Test Results Submission from ${doc.fullname}
              Email: ${doc.email}
              Phone: ${doc.phone || 'Not provided'}
              
              Test Results:
              ${resultsTable}
            `,
          })
        }
      }
    ],
  },
}

export default WellTestResults