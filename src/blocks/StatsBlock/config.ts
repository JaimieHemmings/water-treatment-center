import type { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'statsBlock',
  interfaceName: 'StatsBlock',
  fields: [
    {
      name: 'titleStart',
      type: 'text',
      label: 'Title Start',
    },
    {
      name: 'titleHighlight',
      type: 'text',
      label: 'Title Highlight',
    },
    {
      name: 'titleEnd',
      type: 'text',
      label: 'Title End',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
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