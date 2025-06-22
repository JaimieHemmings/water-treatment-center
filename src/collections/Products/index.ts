import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'
import { slugField } from '@/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  defaultPopulate: {
    slug: true,
    category: true,
    parent: true,
    order: true,
  },
  admin: {
    defaultColumns: ['title', 'parent', 'category'],
    useAsTitle: 'title',
    group: 'Product Admin',
  },
  fields: [
    {
      name: 'order',
      label: 'Order',
      type: 'number',
      defaultValue: 0,
      min: 0,
      admin: {
        position: 'sidebar',
        description: 'Use this field to control the display order',
        step: 1,
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      defaultValue: 'Enter a short description',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'This image will be used as a thumbnail for the product.',
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'parent',
      label: 'Category',
      type: 'relationship',
      relationTo: 'product-categories',
      required: true,
    },
    {
      name: 'category',
      label: 'Subcategory',
      type: 'relationship',
      relationTo: 'subcategories',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          label: 'Content',
          fields: [
            {
              type: 'tabs',
              tabs: [
                {
                  name: 'header',
                  label: 'Header',
                  fields: [
                    {
                      name: 'mainFeatures',
                      type: 'array',
                      label: 'Main Features',
                      minRows: 1,
                      maxRows: 4,
                      fields: [
                        {
                          name: 'description',
                          type: 'textarea',
                          required: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'features',
                  label: 'Features',
                  fields: [
                    {
                      name: 'featuresTitle',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'featuresSubtitle',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'featuresList',
                      type: 'array',
                      label: 'Features List',
                      fields: [
                        {
                          name: 'title',
                          type: 'text',
                          required: true,
                        },
                        {
                          name: 'description',
                          type: 'text',
                          required: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'details',
                  label: 'Details',
                  fields: [
                    {
                      name: 'detailsImage',
                      type: 'upload',
                      relationTo: 'media',
                      required: true,
                    },
                    {
                      name: 'details',
                      type: 'array',
                      label: 'Details',
                      minRows: 1,
                      maxRows: 6,
                      fields: [
                        {
                          name: 'title',
                          type: 'text',
                          required: true,
                        },
                        {
                          name: 'description',
                          type: 'text',
                          required: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'media',
                  label: 'Media',
                  fields: [
                    {
                      name: 'gallery',
                      label: 'Gallery',
                      type: 'array',
                      minRows: 1,
                      maxRows: 4,
                      fields: [
                        {
                          name: 'image',
                          type: 'upload',
                          relationTo: 'media',
                          required: true,
                        },
                      ],
                    },
                    {
                      name: 'brochure',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Brochure',
                      required: false,
                    },
                  ],
                },
                {
                  name: 'specs',
                  label: 'Technical Specs',
                  fields: [
                    {
                      name: 'numberOfUsers',
                      type: 'number',
                      required: true,
                    },
                    {
                      name: 'sku',
                      type: 'text',
                      unique: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
        {
          name: 'video',
          label: 'Video',
          fields: [
            {
              name: 'video',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'preloadImage',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'models',
          label: 'Models',
          fields: [
            {
              name: 'models',
              type: 'array',
              label: 'Models',
              fields: [
                {
                  name: 'model',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'dimensions',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'maxUsers',
                  type: 'number',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    ...slugField(),
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'updatedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
}

export default Products
