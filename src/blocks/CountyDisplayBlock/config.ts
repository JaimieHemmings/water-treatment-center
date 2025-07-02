import type { Block } from 'payload'

export const CountyDisplayBlock: Block = {
  slug: 'countyDisplayBlock',
  interfaceName: 'County Display Block',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
  ],
  labels: {
    plural: 'County Display Blocks',
    singular: 'County Display Block',
  },
}
