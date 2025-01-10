import type { Block } from 'payload'

export const TwoColumnBlock: Block = {
  slug: 'twoColumn',
  interfaceName: 'TwoColumn',
  fields: [
    {
      name: 'contentleft',
      type: 'text',
      label: 'Left Column',
    },{
      name: 'contentright',
      type: 'text',
      label: 'Right Column',
    },
  ],
  labels: {
    plural: 'Two Column Blocks',
    singular: 'Two Column Block',
  },
}