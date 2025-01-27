import type { Block } from 'payload'

import {
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TextWithImageBlock: Block = {
  slug: 'textWithImageBlock',
  interfaceName: 'TextWithImageBlock',
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
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  labels: {
    plural: 'Text with image Blocks',
    singular: 'Text with image Block',
  },
}