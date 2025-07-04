import type { Block } from 'payload'

export const ImageGalleryBlock: Block = {
  slug: 'imageGalleryBlock',
  interfaceName: 'ImageGalleryBlock',
  fields: [
    {
      name: 'Images',
      type: 'array',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
  labels: {
    plural: 'Image Gallery Blocks',
    singular: 'Image Gallery Block',
  },
}
