import type { Block } from 'payload'

export const ReviewBlock: Block = {
  imageURL: '/block-images/review-block.jpg',
  slug: 'reviewBlock',
  interfaceName: 'ReviewBlock',
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
      required: false,
    },
    {
      name: 'reviews',
      label: 'Reviews',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'review',
          label: 'Review',
          type: 'textarea',
          required: true,
        },
        {
          name: 'reviewer',
          label: 'Reviewer',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
  labels: {
    plural: 'Review Blocks',
    singular: 'Review Block',
  },
}