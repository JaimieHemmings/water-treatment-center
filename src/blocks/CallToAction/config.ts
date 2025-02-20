import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const CallToAction: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',
  imageURL: '/block-images/cta-block.jpg',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: false,
    },
    {
      name: 'lightbgToggle',
      label: 'Light Background',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        condition: (data, siblingData) => {
          return siblingData?.lightbgToggle === true
        },
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'link',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
    },
    {
      name: 'linkLabel',
      type: 'text',
      required: true,
    },
  ],
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
}
