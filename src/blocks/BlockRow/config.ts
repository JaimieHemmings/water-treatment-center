import type { Block } from 'payload'

export const BlockRow: Block = {
  slug: 'blockRow',
  interfaceName: 'BlockRow',
  fields: [
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
          type: 'text',
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
              label: 'Water Drop',
              value: 'water',
            },
            {
              label: 'Filter',
              value: 'filter',
            },
            {
              label: 'Test Tube',
              value: 'test',
            },
            {
              label: 'Treatment Plant',
              value: 'plant',
            },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Blog Rows',
    singular: 'Blog Row',
  },
}