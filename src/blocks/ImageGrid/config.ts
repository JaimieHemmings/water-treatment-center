import type { Block } from 'payload'

export const ImageGrid: Block = {
  slug: 'imageGrid',
  interfaceName: 'ImageGrid',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'gridItems',
      label: 'Grid Items',
      type: 'array',
      minRows: 9,
      maxRows: 9,
      fields: [
        {
          name: 'link',
          label: 'Link',
          type: 'relationship',
          relationTo: 'pages',
          hasMany: false,
          required: true,
        },
        {
          name: 'backgroundImage',
          label: 'Background Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'paragraph',
          label: 'Paragraph',
          type: 'textarea',
          required: true,
          maxLength: 100,
        },
      ]
    }
  ],
  labels: {
    plural: 'Image Grid',
    singular: 'Image Grid',
  },
}