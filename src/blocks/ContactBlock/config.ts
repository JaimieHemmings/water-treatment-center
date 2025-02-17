import type { Block } from 'payload'
import { FormBlock } from '@/blocks/Form/config'

export const ContactBlock: Block = {
  slug: 'contactBlock',
  interfaceName: 'ContactBlock',
  imageURL: '/block-images/contact-block.jpg',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'subtitleStart',
      type: 'text',
      label: 'Subtitle Start',
      required: true,
    },
    {
      name: 'subtitleHighlight',
      type: 'text',
      label: 'Subtitle Highlight',
      required: true,
    },
    {
      name: 'subtitleEnd',
      type: 'text',
      label: 'Subtitle End',
      required: true,
    },
    {
      name: 'showRoomAddresses',
      type: 'array',
      label: 'Showroom Addresses',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'showRoomAddress',
          type: 'text',
          label: 'Showroom Address',
          required: true,
        },
        {
          name: 'showRoomOpeningHours',
          type: 'text',
          label: 'Showroom Opening Hours',
          required: true,
        },
      ],
    },
    {
      name: 'warehouseAddresses',
      type: 'array',
      label: 'Warehouse Addresses',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'warehouseAddress',
          type: 'text',
          label: 'Warehouse Address',
          required: true,
        },
      ],
    },
    {
      name: 'phoneNumbers',
      type: 'array',
      label: 'Phone Numbers',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'phoneNumber',
          type: 'text',
          label: 'Phone Number',
          required: true,
        },
      ],
    },
    {
      name: 'emailAddresses',
      type: 'array',
      label: 'Email Addresses',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'emailAddress',
          type: 'text',
          label: 'Email Address',
          required: true,
        },
      ],
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        FormBlock
      ],
      required: true,
    }
  ],
  labels: {
    plural: 'Contact Blocks',
    singular: 'Contact Block',
  },
}