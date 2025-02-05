import { Block } from 'payload'

export const ThreeColBlock: Block = {
  slug: 'threeColBlock',
  interfaceName: 'ThreeColBlock',
  fields: [
    {
      name: 'columns',
      type: 'array',
      label: 'Columns',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'content',
          type: 'text',
          label: 'Content',
          required: true,
        },
      ],
    }
  ],
  labels: {
    plural: 'Three Column Blocks',
    singular: 'Three Column Block',
  },
}