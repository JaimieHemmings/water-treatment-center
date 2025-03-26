import type { Block } from 'payload'

export const ProductsList: Block = {
  slug: 'productsList',
  interfaceName: 'productsList',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'subcategory',
      type: 'relationship',
      relationTo: 'subcategories',
      required: true,
      label: 'Products'
    }
  ],
  labels: {
    plural: 'Products Lists',
    singular: 'Products List',
  },
}