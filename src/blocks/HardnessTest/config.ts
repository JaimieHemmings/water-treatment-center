import type { Block } from 'payload'

export const HardnessTest: Block = {
  slug: 'hardnessTest',
  interfaceName: 'HardnessTest',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'paragraph',
      type: 'textarea',
      label: 'Paragraph',
    },
  ],
  labels: {
    plural: 'Hardness Test Form Blocks',
    singular: 'Hardness Test Form Block',
  },
}