import type { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faqblock',
  interfaceName: 'FaqBlock',
  imageURL: '/block-images/faq-block.jpg',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'questions',
      label: 'Questions',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'sideTitle',
      label: 'Side Title',
      type: 'text',
      required: true,
    },
    {
      name: 'sideContent',
      label: 'Side Content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'linkLabel',
      label: 'Link Label',
      type: 'text',
      required: true,
    },
    {
      name: 'linkURL',
      type: 'relationship',
      relationTo: 'pages',
      label: 'Link URL',
      required: true,
    },
  ],
  labels: {
    plural: 'FAQ Blocks',
    singular: 'FAQ Block',
  },
}