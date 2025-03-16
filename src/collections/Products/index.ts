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
  },
  admin: {
    defaultColumns: ['title', 'category'],
    useAsTitle: 'title',
    group: 'Product Admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'category',
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
                      name: 'productImage',
                      label: 'Product Image',
                      type: 'upload',
                      relationTo: 'media',
                      required: true,
                    },
                    {
                      name: 'excerpt',
                      type: 'textarea',
                      label: 'Excerpt',
                      required: true,
                    },
                    {
                      name: 'mainFeatures',
                      type: 'array',
                      label: 'Main Features',
                      minRows: 1,
                      maxRows: 4,
                      fields: [
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
                  name: 'features',
                  label: 'Features',
                  fields: [
                    {
                      name: 'featuresTitle',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'featuresSubtitleOne',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'featuresListOne',
                      type: 'array',
                      label: 'Features List One',
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
                    {
                      name: 'featuresSubtitleTwo',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'featuresListTwo',
                      type: 'array',
                      label: 'Features List Two',
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
                    {
                      name: 'featuresListTwoImage',
                      type: 'upload',
                      relationTo: 'media',
                      required: true,
                    },
                    {
                      name: 'cardsSectionTitle',
                      type: 'text',
                      label: 'Cards Section Title',
                      required: true,
                    },
                    {
                      name: 'cards',
                      type: 'array',
                      label: 'Cards',
                      minRows: 3,
                      maxRows: 3,
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
                        {
                          name: 'image',
                          type: 'upload',
                          relationTo: 'media',
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
                      name: 'detailsTitle',
                      type: 'text',
                      required: true,
                    },
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
      ],
    },
    ...slugField(),
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      }
    },
    {
      name: 'updatedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      }
    }
  ],
}

export default Products