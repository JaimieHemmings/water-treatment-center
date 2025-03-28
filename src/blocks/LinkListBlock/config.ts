import type { Block } from 'payload'
import RichText from '@/components/RichText';

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const LinkListBlock: Block = {
  slug: 'linkListBlock',
  interfaceName: 'LinkListBlock',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      defaultValue: 'New Link List',
    },
    {
      name: 'richText',
      label: 'Text',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    {
      name: 'section',
      label: 'Section',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'subtitle',
          label: 'Subtitle',
          type: 'text',
        },
        {
          name: 'richText',
          label: 'Text',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
        },
        {
          name: 'listItem',
          label: 'List Item',
          type: 'array',
          fields: [
            {
              name: 'text',
              label: 'Text',
              type: 'text',
            },
            {
              name: 'link',
              label: 'Link',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Link Lists',
    singular: 'Link List',
  },
}