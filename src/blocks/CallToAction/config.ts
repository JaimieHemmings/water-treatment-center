import type { Block } from 'payload'
import { FormBlock } from '@/blocks/Form/config'

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
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      admin: {
        condition: (data, siblingData) => {
          return Boolean(siblingData?.backgroundImage)
        },
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'lightMode',
      type: 'checkbox',
      label: 'Light Mode',
      admin: {
        condition: (data, siblingData) => {
          return Boolean(siblingData?.backgroundImage)
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
      label: 'Content',
    },
    {
      name: 'ctaType',
      type: 'radio',
      options: [
        {
          label: 'Link',
          value: 'link',
        },
        {
          label: 'Form',
          value: 'form',
        },
      ],
      defaultValue: 'link',
      required: true,
    },
    {
      name: 'link',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
      admin: {
        condition: (data, siblingData) => siblingData?.ctaType === 'link',
      },
    },
    {
      name: 'linkLabel',
      type: 'text',
      required: true,
      admin: {
        condition: (data, siblingData) => siblingData?.ctaType === 'link',
      },
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        FormBlock
      ],
      required: true,
      admin: {
        condition: (data, siblingData) => siblingData?.ctaType === 'form',
      },
    }
  ],
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
}
