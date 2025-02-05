import type { Block } from 'payload'

export const BlockRow: Block = {
  imageURL: '/block-row.jpg',
  slug: 'blockRow',
  interfaceName: 'BlockRow',
  fields: [
    {
      name: 'shiftUp',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 2,
      maxRows: 4,
      labels: {
        singular: 'Item',
        plural: 'Items',
      },
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
        {
          name: 'link',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
        },
        {
          name: 'linkLabel',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Water Gallon',
              value: 'gallon',
            },
            {
              label: 'Water Glass',
              value: 'glass',
            },
            {
              label: 'Water Droplet',
              value: 'droplet',
            },
            {
              label: 'Water Sharp',
              value: 'sharp',
            },
            {
              label: 'Water Bottle',
              value: 'bottle',
            },
            {
              label: 'Hand holding water',
              value: 'hand',
            },
            {
              label: 'Water',
              value: 'water',
            }
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Block Rows',
    singular: 'Block Row',
  },
}