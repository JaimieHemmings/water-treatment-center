import type { Block } from 'payload'

export const TimelineBlock: Block = {
  slug: 'timelineBlock',
  interfaceName: 'TimelineBlock',
  fields: [
    {
      name: 'mainHeading',
      type: 'text',
      required: true,
      label: 'Main Heading',
      defaultValue: 'Our Water Treatment Journey',
    },
    {
      name: 'timelineItems',
      type: 'array',
      label: 'Timeline Items',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'year',
          type: 'text',
          label: 'Year',
          required: true,
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
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          defaultValue: 'FaCalendar',
          options: [
            { label: 'Calendar', value: 'FaCalendar' },
            { label: 'Users/Team', value: 'FaUsers' },
            { label: 'Location', value: 'FaLocationDot' },
            { label: 'Star', value: 'FaStar' },
            { label: 'Droplet', value: 'FaDroplet' },
          ],
        },
      ],
      defaultValue: [
        {
          year: '2003',
          title: 'Founded as a family business',
          description:
            'Started as a small water filtration company in Tullamore, driven by a passion for providing clean, safe water to Irish families.',
          icon: 'FaUsers',
        },
        {
          year: '2008',
          title: 'Expanded Across Ireland',
          description:
            'Became certified water softener installers and expanded our water treatment services throughout the country.',
          icon: 'FaLocationDot',
        },
        {
          year: '2015',
          title: 'Nationwide Coverage',
          description:
            'Grew to serve all of Ireland with our comprehensive residential water filtration solutions and expert installation team.',
          icon: 'FaLocationDot',
        },
        {
          year: '2024',
          title: 'Leading Water Filtration Specialists',
          description:
            "Now Ireland's premier water treatment company, with thousands of satisfied customers and cutting-edge filtration technology.",
          icon: 'FaStar',
        },
      ],
    },
  ],
}
