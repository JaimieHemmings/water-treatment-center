import type { Block } from 'payload'

export const CostCalculatorBlock: Block = {
  slug: 'costCalculatorBlock',
  interfaceName: 'CostCalculatorBlock',
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
      required: true,
    },
    {
      name: 'paragraph',
      label: 'Paragraph',
      type: 'textarea',
      required: true,
    }
  ],
  labels: {
    plural: 'Cost Calculator Blocks',
    singular: 'Cost Calculator Block',
  },
}