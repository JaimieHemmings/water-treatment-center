import type { Block } from 'payload'
import { ThreeColBlock } from '@/blocks/ThreeCol/config';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

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