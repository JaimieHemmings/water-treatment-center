import type { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'statsBlock',
  interfaceName: 'StatsBlock',
  imageURL: '/block-images/stats-block.jpg',
  fields: [
    {
      name: 'titleStart',
      type: 'text',
      label: 'Title Start',
      required: true,
    },
    {
      name: 'titleHighlight',
      type: 'text',
      label: 'Title Highlight',
      required: true,
    },
    {
      name: 'titleEnd',
      type: 'text',
      label: 'Title End',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Value',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
      ],
    },
  ],
  labels: {
    plural: 'Stats Blocks',
    singular: 'Stats Block',
  },
}