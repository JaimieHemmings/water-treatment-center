import type { Block } from 'payload'

export const SplitTextBlock: Block = {
  slug: 'splitTextBlock',
  interfaceName: 'splitTextBlock',
  fields: [
    {
      name: 'items',
      label: 'Items',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          label: 'Text',
          type: 'richText',
          required: true,
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        }
      ]
    }
  ],
  labels: {
    plural: 'Split Text Blocks',
    singular: 'Split Text Block',
  },
}