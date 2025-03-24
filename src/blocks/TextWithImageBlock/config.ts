import type { Block } from 'payload'
import { ThreeColBlock } from '@/blocks/ThreeCol/config';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const TextWithImageBlock: Block = {
  slug: 'textWithImageBlock',
  interfaceName: 'TextWithImageBlock',
  imageURL: '/block-images/text-with-image-block.jpg',
  fields: [
    {
      name: 'darkmode',
      type: 'checkbox',
      label: 'Enable Dark Mode',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'intro',
      type: 'text',
      label: 'Intro',
    },
    {
      name: 'quote',
      type: 'text',
      label: 'Quote',
    },
    {
      name: 'contentSide',
      label: 'Content Side',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
          ]
        },
      }),
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
      label: 'Content',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    { name: 'link',
      relationTo: 'pages',
      type: 'relationship',
      label: 'Link',
    },
    {
      name: 'linkLabel',
      type: 'text',
      label: 'Link Label',
    },
    {
      name: 'cropImage',
      type: 'checkbox',
      label: 'Crop Image',
      defaultValue: true,
    },
    {
      name: 'additionalSettings',
      type: 'group',
      fields: [
        {
          name: 'ShowThreeColBlock',
          type: 'checkbox',
          defaultValue: false,
          label: 'Show Three Column Block',
        }
      ]
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        ThreeColBlock
      ],
      required: false,
      maxRows: 1,
      admin: {
        condition: (_, siblingData) => {
          return siblingData?.additionalSettings?.ShowThreeColBlock === true;
        }
      }
    },
  ],
  labels: {
    plural: 'Text with image Blocks',
    singular: 'Text with image Block',
  },
}