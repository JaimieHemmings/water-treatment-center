import type { Block } from 'payload'

export const CostCalculatorBlock: Block = {
  slug: 'costCalculatorBlock',
  interfaceName: 'CostCalculatorBlock',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'paragraph',
      label: 'Paragraph',
      type: 'textarea',
    }
  ],
  labels: {
    plural: 'Cost Calculator Blocks',
    singular: 'Cost Calculator Block',
  },
}