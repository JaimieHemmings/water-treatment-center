import type { Field } from 'payload'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
    },
    {
      name: 'slides',
      type: 'array',
      label: 'Slides',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          admin: {
            condition: (_, siblingData) => !siblingData.video,
          },
        },
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          label: 'Video',
          admin: {
            condition: (_, siblingData) => !siblingData.image,
          },
        },
        {
          name: 'titleStart',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'titleHighlight',
          type: 'text',
          label: 'Title Highlight',
          required: true,
        },
        {
          name: 'titleEnd',
          type: 'text',
          label: 'Title End',
          required: true,
        },
        {
          name: 'paragraph',
          type: 'text',
          label: 'Paragraph',
          required: true,
        },
        {
          name: 'link',
          type: 'relationship',
          relationTo: 'pages',
        },
        {
          name: 'linkLabel',
          type: 'text',
          label: 'Link Label',
        },
      ],
    },
  ],
};