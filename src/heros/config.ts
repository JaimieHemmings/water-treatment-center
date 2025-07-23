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
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'titleHighlight',
          type: 'text',
          label: 'Title Highlight',
        },
        {
          name: 'titleEnd',
          type: 'text',
          label: 'Title End',
        },
        {
          name: 'subtitle',
          type: 'text',
          admin: {
            condition: (data, siblingData, { path }) => {
              // Navigate up the path to find the hero type
              const pathArray = path as (string | number)[]
              const heroIndex = pathArray.findIndex((segment) => segment === 'hero')
              if (heroIndex !== -1 && data) {
                return data.hero?.type === 'highImpact'
              }
              return false
            },
            description: 'Optional subtitle for high impact slides',
          },
        },
        {
          name: 'paragraph',
          type: 'text',
          label: 'Paragraph',
          required: true,
        },
        {
          name: 'trustElements',
          type: 'checkbox',
          label: 'Show Trust Elements',
          defaultValue: false,
          admin: {
            condition: (data, siblingData, { path }) => {
              // Navigate up the path to find the hero type
              const pathArray = path as (string | number)[]
              const heroIndex = pathArray.findIndex((segment) => segment === 'hero')
              if (heroIndex !== -1 && data) {
                return data.hero?.type === 'highImpact'
              }
              return false
            },
            description: 'Show trust elements.',
          },
        },
        {
          name: 'lType',
          label: 'Link Type',
          type: 'radio',
          options: [
            {
              label: 'Supporting Document',
              value: 'support',
            },
            {
              label: 'Page',
              value: 'page',
            },
            {
              label: 'No Link',
              value: 'noLink',
            },
          ],
          defaultValue: 'noLink',
        },
        {
          name: 'pageLink',
          type: 'relationship',
          relationTo: 'pages',
          admin: {
            condition: (data, siblingData) => siblingData?.lType === 'page',
          },
        },
        {
          name: 'supportLink',
          type: 'relationship',
          relationTo: 'supporting-documents',
          admin: {
            condition: (data, siblingData) => siblingData?.lType === 'support',
          },
        },
        {
          name: 'linkLabel',
          type: 'text',
          label: 'Link Label',
          admin: {
            condition: (data, siblingData) => siblingData?.lType !== 'noLink',
          },
        },
      ],
    },
  ],
}
