import type { Block } from 'payload'

export const ImageList: Block = {
  slug: 'imageList',
  interfaceName: 'ImageList',
  fields: [
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          label: 'Image',
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
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
  labels: {
    plural: 'Image Lists',
    singular: 'Image List',
  },
}