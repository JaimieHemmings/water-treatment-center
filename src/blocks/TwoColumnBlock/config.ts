import type { Block } from 'payload'

export const TwoColumnBlock: Block = {
  imageURL: '/block-images/two-column.webp',
  slug: 'twoColumn',
  interfaceName: 'TwoColumn',
  fields: [
    {
      name: 'contentleft',
      type: 'text',
      label: 'Left Column',
    },{
      name: 'contentright',
      type: 'richText',
      label: 'Right Column',
    },
  ],
  labels: {
    plural: 'Two Column Blocks',
    singular: 'Two Column Block',
  },
}