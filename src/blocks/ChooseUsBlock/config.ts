import type { Block } from 'payload'

export const ChooseUsBlock: Block = {
  slug: 'chooseUsBlock',
  interfaceName: 'ChooseUsBlock',
  labels: {
    singular: 'Choose Us Block',
    plural: 'Choose Us Blocks',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'Why Choose Us',
      required: true,
      admin: {
        description: 'The small title that appears above the main heading.',
      },
    },
    {
      name: 'mainHeading',
      type: 'text',
      label: 'Main Heading',
      defaultValue: "Ireland's Trusted Water Treatment Experts",
      required: true,
      admin: {
        description: 'The main heading for the section.',
      },
    },
    {
      name: 'valuePropositions',
      type: 'array',
      label: 'Value Propositions',
      minRows: 1,
      maxRows: 6,
      defaultValue: [
        {
          icon: 'users',
          title: 'Family-Run Irish Business',
          description: 'Serving local communities for over two decades with personalized service',
        },
        {
          icon: 'certificate',
          title: 'Certified Installation Team',
          description:
            'Fully trained specialists handle every water softener installation with precision',
        },
        {
          icon: 'tools',
          title: 'Comprehensive Service',
          description: 'From free water testing to ongoing maintenance, we support you completely',
        },
        {
          icon: 'shield',
          title: 'Premium Quality Systems',
          description:
            'Only the highest-grade water filtration systems designed for Irish water conditions',
        },
        {
          icon: 'star',
          title: 'Customer Satisfaction Guarantee',
          description: 'Join 1000+ happy customers enjoying pure, soft water every day',
        },
      ],
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          required: true,
          defaultValue: 'users',
          options: [
            { label: 'Users/Family', value: 'users' },
            { label: 'Certificate', value: 'certificate' },
            { label: 'Tools/Service', value: 'tools' },
            { label: 'Shield/Quality', value: 'shield' },
            { label: 'Star/Satisfaction', value: 'star' },
            { label: 'Award', value: 'award' },
            { label: 'Clock/Time', value: 'clock' },
            { label: 'Phone/Support', value: 'phone' },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
      ],
    },
    {
      name: 'ctaSection',
      type: 'group',
      label: 'Call to Action Section',
      fields: [
        {
          name: 'enable',
          type: 'checkbox',
          label: 'Enable CTA Section',
          defaultValue: true,
        },
        {
          name: 'smallTitle',
          type: 'text',
          label: 'Small Title',
          defaultValue: 'Ready to Get Started?',
          admin: {
            condition: (_, { enable } = {}) => Boolean(enable),
          },
        },
        {
          name: 'mainTitle',
          type: 'text',
          label: 'Main Title',
          defaultValue: "Experience the difference with Ireland's water treatment specialists",
          admin: {
            condition: (_, { enable } = {}) => Boolean(enable),
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          defaultValue:
            'Contact us today for your free water quality assessment and discover why thousands of Irish families trust us with their water treatment needs.',
          admin: {
            condition: (_, { enable } = {}) => Boolean(enable),
          },
        },
        {
          name: 'primaryButton',
          type: 'group',
          label: 'Primary Button',
          admin: {
            condition: (_, { enable } = {}) => Boolean(enable),
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Button Label',
              defaultValue: 'Get Free Quote',
            },
            {
              name: 'link',
              type: 'text',
              label: 'Button Link',
              defaultValue: '/contact',
            },
          ],
        },
        {
          name: 'secondaryButton',
          type: 'group',
          label: 'Secondary Button',
          admin: {
            condition: (_, { enable } = {}) => Boolean(enable),
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Button Label',
              defaultValue: 'Call Now: (057) 933 3942',
            },
            {
              name: 'link',
              type: 'text',
              label: 'Button Link',
              defaultValue: 'tel:0579333942',
            },
          ],
        },
      ],
    },
  ],
}
