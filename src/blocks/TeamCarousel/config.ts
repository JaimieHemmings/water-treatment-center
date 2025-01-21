import type { Block } from 'payload'

export const TeamCarousel: Block = {
  slug: 'teamCarousel',
  interfaceName: 'TeamCarousel',
  fields: [
    {
      name: 'slides',
      type: 'array',
      label: 'Slides',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'quote',
          type: 'textarea',
          label: 'Quote',
          required: true,
        },
      ],
    }
  ],
  labels: {
    plural: 'Team Carousels',
    singular: 'Team Carousel',
  },
}