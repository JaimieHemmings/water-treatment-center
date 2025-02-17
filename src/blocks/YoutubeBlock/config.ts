import type { Block } from 'payload'

import {
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const YoutubeBlock: Block = {
  slug: 'youtubeBlock',
  interfaceName: 'YoutubeBlock',
  imageURL: '/block-images/youtube-block.jpg',
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
      name: 'youtubeEmbed',
      type: 'text',
      label: 'Youtube Embed URL',
    },
  ],
  labels: {
    plural: 'Youtube Blocks',
    singular: 'Youtube Block',
  },
}