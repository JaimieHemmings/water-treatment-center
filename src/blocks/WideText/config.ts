import type { Block } from 'payload'

export const WideTextBlock: Block = {
  slug: 'wideTextBlock',
  interfaceName: 'WideTextBlock',
  fields: [
    {
      name: 'darkmode',
      type: 'checkbox',
      label: 'Dark Mode',
      defaultValue: false,
    },
    {
      name: 'titleStart',
      type: 'text',
      required: true,
    },
    {
      name: 'titleHighlight',
      type: 'text',
    },
    {
      name: 'titleEnd',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'richText',
          required: true,
        },
      ],
    },


  ],
  labels: {
    plural: 'Wide Text Blocks',
    singular: 'Wide Text Block',
  },
}