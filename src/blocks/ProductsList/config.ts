import type { Block } from 'payload'

export const ProductsList: Block = {
  slug: 'productsList',
  interfaceName: 'productsList',
  fields: [
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