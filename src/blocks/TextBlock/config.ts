import type { Block } from 'payload'

import {
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TextBlock: Block = {
  imageURL: '/block-images/text-block.webp',
  slug: 'textBlock',
  interfaceName: 'TextBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
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
      required: true
    },
  ],
  labels: {
    plural: 'Text Blocks',
    singular: 'Text Block',
  },
}