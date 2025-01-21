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
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'quote',
          type: 'textarea',
          label: 'Quote',
        },
      ],
    }
  ],
  labels: {
    plural: 'Team Carousels',
    singular: 'Team Carousel',
  },
}