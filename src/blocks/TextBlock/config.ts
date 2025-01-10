import type { Block } from 'payload'

import {
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TextBlock: Block = {
  slug: 'textBlock',
  interfaceName: 'TextBlock',
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
          ]
        },
      }),
      label: false,
    },
  ],
  labels: {
    plural: 'Text Block',
    singular: 'Text Blocks',
  },
}