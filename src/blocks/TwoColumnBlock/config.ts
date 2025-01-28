import type { Block } from 'payload'

export const TwoColumnBlock: Block = {
  imageURL: '/block-images/two-column.webp',
  slug: 'twoColumn',
  interfaceName: 'TwoColumn',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'mainContent',
      type: 'text',
      label: 'Main Content',
    },
    {
      name: 'contentleft',
      type: 'text',
      label: 'Left Column',
      required: true,
    },{
      name: 'contentright',
      type: 'richText',
      label: 'Right Column',
      required: true,
    },
  ],
  labels: {
    plural: 'Two Column Blocks',
    singular: 'Two Column Block',
  },
}