import type { Block } from 'payload'

export const ProblemBlock: Block = {
  slug: 'problemBlock',
  interfaceName: 'ProblemBlock',
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Items',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Warning', value: 'FaExclamationTriangle' },
            { label: 'Cogs', value: 'FaCogs' },
            { label: 'Check Circle', value: 'FaCheckCircle' },
          ],
          defaultValue: 'FaExclamationTriangle',
          required: true,
        },
        {
          name: 'iconColor',
          type: 'select',
          label: 'Icon Color',
          required: true,
          options: [
            { label: 'Red', value: 'text-red-500' },
            { label: 'Teal', value: 'text-selectiveyellow' },
            { label: 'Green', value: 'text-green-600' },
          ],
        },
        {
          name: 'listItems',
          type: 'array',
          label: 'List Items',
          maxRows: 10,
          minRows: 1,
          fields: [
            {
              name: 'item',
              type: 'text',
              label: 'Item',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'ctaTitle',
      type: 'text',
      label: 'CTA Title',
      required: true,
      defaultValue: 'Ready to Transform Your Water?',
      admin: {
        description: 'The title for the call-to-action section.',
      },
    },
    {
      name: 'ctaSubtitle',
      type: 'text',
      label: 'CTA Subtitle',
      required: true,
      defaultValue: 'Get Your Free Water Quality Assessment Today',
      admin: {
        description: 'The subtitle for the call-to-action section.',
      },
    },
    {
      name: 'ctaParagraph',
      type: 'text',
      label: 'CTA Paragraph',
      defaultValue:
        "Don't let hard water damage your home and health. Our experts will analyze your water and recommend the perfect treatment solution for your specific needs.",
      admin: {
        description: 'The paragraph for the call-to-action section.',
      },
    },
    {
      name: 'ctaLinkText',
      type: 'text',
      label: 'CTA Link Text',
      defaultValue: 'Schedule Free Assessment',
      admin: {
        description: 'The text for the call-to-action link.',
      },
    },
  ],
}
