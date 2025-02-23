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
    defaultColumns: ['title', 'status', 'category'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
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
                    },
                    {
                      name: 'featuresSubtitle',
                      type: 'text',
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
                      name: 'featuresListOneImage',
                      type: 'upload',
                      relationTo: 'media',
                    },
                  ],
                },
                {
                  name: 'details',
                  label: 'Details',
                  fields: [
                    {
                      name: 'intro',
                      type: 'richText',
                      required: true,
                      label: 'Intro Text',
                    },
                    {
                      name: 'mainBody',
                      type: 'richText',
                      required: true,
                      label: 'Main Body',
                    },
                    {
                      name: 'description',
                      type: 'richText',
                      required: true,
                      label: 'Description',
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
                      name: 'technicalSpecs',
                      type: 'array',
                      label: 'Technical Specs',
                      fields: [
                        {
                          name: 'title',
                          type: 'text',
                          required: true,
                        },
                        {
                          name: 'value',
                          type: 'text',
                          required: true,
                        },
                      ],
                    },
                    {
                      name: 'numberOfUsers',
                      type: 'number',
                    },
                    {
                      name: 'warranties',
                      type: 'textarea',
                      label: 'Warranties',
                      required: false,
                    },
                    {
                      name: 'serviceText',
                      type: 'textarea',
                      label: 'Service Information',
                      required: false,
                    },
                    {
                      name: 'sku',
                      type: 'text',
                      unique: true,
                    },
                    {
                      name: 'category',
                      type: 'relationship',
                      relationTo: 'product-categories',
                      required: true,
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