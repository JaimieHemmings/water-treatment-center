import type { Block } from 'payload'

export const VideoBlock: Block = {
  slug: 'videoBlock',
  interfaceName: 'VideoBlock',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
    },
    {
      name: 'contentleft',
      label: 'Content Left',
      type: 'text',
    },
    {
      name: 'contentright',
      label: 'Content Right',
      type: 'richText',
    },
    {
      name: 'video',
      label: 'Video',
      type: 'upload',
      relationTo: 'media',
      required: true,
    }
  ],
  labels: {
    plural: 'Video Blocks',
    singular: 'Video Block',
  },
}