import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'servicesBlock',
  interfaceName: 'ServicesBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'serviceOneTitle',
      type: 'text',
      label: 'Service One Title',
    },
    {
      name: 'serviceOneDescription',
      type: 'text',
      label: 'Service One Description',
    },
    {
      name: 'serviceOneImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Service One Image',
    },
    {
      name: 'serviceTwoTitle',
      type: 'text',
      label: 'Service Two Title',
    },
    {
      name: 'serviceTwoDescription',
      type: 'text',
      label: 'Service Two Description',
    },
    {
      name: 'serviceTwoImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Service Two Image',
    },
  ],
  labels: {
    plural: 'Services Blocks',
    singular: 'Services Block',
  },
}