import type { Block } from 'payload'

export const PhilosophyBlock: Block = {
  slug: 'philosophyBlock',
  interfaceName: 'PhilosophyBlock',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      label: 'Section Title',
      defaultValue: 'Service Philosophy',
    },
    {
      name: 'mainHeading',
      type: 'text',
      required: true,
      label: 'Main Heading',
      defaultValue: 'Our Commitment to Water Quality Excellence',
    },
    {
      name: 'philosophyValues',
      type: 'array',
      label: 'Philosophy Values',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Value Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Value Description',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          defaultValue: 'FaCheckCircle',
          options: [
            { label: 'Check Circle (Quality)', value: 'FaCheckCircle' },
            { label: 'Heart (Service)', value: 'FaHeart' },
            { label: 'Location (Local)', value: 'FaLocationDot' },
            { label: 'Handshake (Trust)', value: 'FaHandshake' },
            { label: 'Star (Excellence)', value: 'FaStar' },
            { label: 'Droplet (Water)', value: 'FaDroplet' },
          ],
        },
      ],
      defaultValue: [
        {
          title: 'Quality First',
          description:
            'We only recommend premium water treatment systems that deliver long-term performance. Every water filtration installation meets our rigorous quality standards.',
          icon: 'FaCheckCircle',
        },
        {
          title: 'Customer-Focused Service',
          description:
            'From free water testing to ongoing maintenance, we prioritize your satisfaction. Our water softener specialists provide personalized solutions for every home.',
          icon: 'FaHeart',
        },
        {
          title: 'Local Expertise',
          description:
            'Understanding Irish water conditions is crucial. Our certified water treatment professionals know exactly what filtration solutions work best in each region.',
          icon: 'FaLocationDot',
        },
        {
          title: 'Honest Advice',
          description:
            'We provide transparent recommendations based on your actual needs. No overselling – just the right residential water filtration system for your situation.',
          icon: 'FaHandshake',
        },
      ],
    },
  ],
}
