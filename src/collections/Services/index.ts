import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'category'],
    useAsTitle: 'title',
    group: 'Product Admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'intro',
      type: 'richText',
      label: 'Breif Introduction'
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },{
      name: 'features',
      type: 'array',
      maxRows: 6,
      required: false,
      labels: {
        singular: 'Feature',
        plural: 'Features',
      },
      fields: [
        {
          name: 'description',
          type: 'text',
        },
      ]
    }
  ],
} 