import type { Block } from 'payload'

export const ContentBlock2: Block = {
  slug: 'contentBlock2',
  interfaceName: 'ContentBlock2',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      label: 'Section Title',
      defaultValue: 'Who Are We?',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
      defaultValue: 'The Water Treatment Centre',
    },
    {
      name: 'introText',
      type: 'textarea',
      label: 'Intro Text',
      defaultValue:
        "As a proud family-run business, we deliver exceptional water filtration systems tailored to every property's unique needs.",
      required: true,
    },
    {
      name: 'showQuote',
      type: 'checkbox',
      label: 'Show Quote',
      defaultValue: true,
    },
    {
      name: 'quoteText',
      type: 'text',
      label: 'Quote Text',
      defaultValue: "Pure water isn't a luxury—it's essential for your home and health.",
      required: true,
      admin: {
        condition: (_, { showQuote }) => showQuote,
      },
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Content',
      defaultValue: `Founded by an Irish family, The Water Treatment Centre puts people first through our core values of Respect, Value, and Support. We build lasting relationships with generations of satisfied customers by respecting your time, delivering on promises, and providing exceptional service.`,
      required: true,
    },
    {
      name: 'imageSrc',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      defaultValue: '/technician.png',
      required: true,
      admin: {
        description: 'Image relating to text body',
      },
    },
    {
      name: 'imgCaption',
      type: 'text',
      label: 'Image Caption',
      defaultValue: 'Certified Specialists',
      required: true,
    },
  ],
  labels: {
    plural: 'Content v2 Blocks',
    singular: 'Content v2 Block',
  },
}
