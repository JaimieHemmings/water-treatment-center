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
      type: 'text',
      required: true,
    },
    {
      name: 'ammonium',
      type: 'text',
      required: true,
    },
    {
      name: 'coliformsTotal',
      type: 'text',
      required: true,
    },
    {
      name: 'colourApparent',
      type: 'text',
      required: true,
    },
    {
      name: 'conductivity',
      type: 'text',
      required: true,
    },
    {
      name: 'eColi',
      type: 'text',
      required: true,
    },
    {
      name: 'hardnessTotal',
      type: 'text',
      required: true,
    },
    {
      name: 'iron',
      type: 'text',
      required: true,
    },
    {
      name: 'manganese',
      type: 'text',
      required: true,
    },
    {
      name: 'nitrite',
      type: 'text',
      required: true,
    },
    {
      name: 'pH',
      type: 'text',
      required: true,
    },
    {
      name: 'tbc22c',
      type: 'text',
      required: true,
    },
    {
      name: 'turbidity',
      type: 'text',
      required: true,
    },
  ],
  timestamps: true,
}

export default WellTestResults