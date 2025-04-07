import type { Block } from 'payload'

export const ComplexCalcBlock: Block = {
  slug: 'complexCalcBlock',
  interfaceName: 'Complex Calculator',
  fields: [
    {
      name: 'introText',
      type: 'richText',
      label: 'Intro Text',
    }
  ],
}
