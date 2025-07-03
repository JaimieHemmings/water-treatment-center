import type { Block } from 'payload'

export const CountyDisplayBlock: Block = {
  slug: 'countyDisplayBlock',
  interfaceName: 'CountyDisplayBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
    },
  ],
  labels: {
    plural: 'County Display Blocks',
    singular: 'County Display Block',
  },
}
