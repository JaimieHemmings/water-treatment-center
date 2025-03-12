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
}

export default HardnessResults