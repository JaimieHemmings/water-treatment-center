import type { Block } from 'payload'

export const HardnessTest: Block = {
  slug: 'hardnessTest',
  interfaceName: 'HardnessTest',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
  ],
  labels: {
    plural: 'Hardness Test Form Blocks',
    singular: 'Hardness Test Form Block',
  },
}