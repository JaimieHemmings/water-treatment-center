import { CollectionConfig } from 'payload';

const Banner: CollectionConfig = {
  slug: 'banners',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'text',
      required: true,
    },
    {
      name: 'linkText',
      type: 'text',
      required: true,
    },
    {
      name: 'linkUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'displayDelay',
      type: 'number',
      required: true,
      defaultValue: 5,
      label: 'Display Delay (in seconds)',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: false,
      required: true,
    },
  ],
};

export default Banner;