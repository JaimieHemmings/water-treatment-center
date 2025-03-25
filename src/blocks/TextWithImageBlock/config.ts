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
      type: 'textarea',
      label: 'Quote',
    },
    {
      name: 'sideContent',
      type: 'richText'
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
    {
      name: 'cropImage',
      type: 'checkbox',
      label: 'Crop Image',
      defaultValue: true,
    },
  ],
  labels: {
    plural: 'Text with image Blocks',
    singular: 'Text with image Block',
  },
}