import type { Block } from 'payload'

export const ExpertiseBlock: Block = {
  slug: 'expertiseBlock',
  interfaceName: 'ExpertiseBlock',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      label: 'Section Title',
      defaultValue: 'Our Expertise',
    },
    {
      name: 'mainHeading',
      type: 'text',
      required: true,
      label: 'Main Heading',
      defaultValue: 'Certified Water Filtration Professionals',
    },
    {
      name: 'expertiseColumns',
      type: 'array',
      label: 'Expertise Columns',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Column Title',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          defaultValue: 'FaGears',
          options: [
            { label: 'Gears (Technical)', value: 'FaGears' },
            { label: 'Water Drop', value: 'FaWater' },
            { label: 'Location', value: 'FaLocationDot' },
            { label: 'Cogs', value: 'FaCogs' },
            { label: 'Flask (Testing)', value: 'FaFlask' },
            { label: 'Droplet', value: 'FaDroplet' },
          ],
        },
        {
          name: 'items',
          type: 'array',
          label: 'Expertise Items',
          minRows: 1,
          maxRows: 8,
          fields: [
            {
              name: 'item',
              type: 'text',
              label: 'Expertise Item',
              required: true,
            },
          ],
        },
      ],
      defaultValue: [
        {
          title: 'Technical Expertise',
          icon: 'FaGears',
          items: [
            { item: 'Certified water treatment installers' },
            { item: 'Advanced water quality testing' },
            { item: 'Custom water filtration design' },
            { item: 'Ongoing system maintenance' },
            { item: 'Emergency repair services' },
          ],
        },
        {
          title: 'Product Knowledge',
          icon: 'FaWater',
          items: [
            { item: 'Premium water softener systems' },
            { item: 'Whole house filtration units' },
            { item: 'Drinking water purification' },
            { item: 'Commercial water treatment' },
            { item: 'Latest filtration technology' },
          ],
        },
        {
          title: 'Local Understanding',
          icon: 'FaLocationDot',
          items: [
            { item: 'Irish water condition expertise' },
            { item: 'Regional water quality variations' },
            { item: 'Local authority compliance' },
            { item: 'Community-focused service' },
            { item: '20+ years local experience' },
          ],
        },
      ],
    },
  ],
}
