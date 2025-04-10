import type { Block } from 'payload'

export const ComplexCalcBlock: Block = {
  slug: 'complexCalcBlock',
  interfaceName: 'ComplexCalculator',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'The True Cost of Hard Water',
    },
    {
      name: 'introText',
      type: 'richText',
      label: 'Intro Text',
    },
    {
      name: 'SoftenerCalcText',
      type: 'richText',
      label: 'Softener Calculator Intro',
    },
  ],
  labels: {
    singular: 'Complex Calculator Block',
    plural: 'Complex Calculator Blocks',  }
}
