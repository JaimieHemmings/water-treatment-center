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
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'heroImage',
          label: 'Hero Image',
          fields: [
            {
              name: 'heroImage',
              label: 'Hero Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'excerpt',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          fields: [
            {
              name: 'productImage',
              label: 'Product Image',
              type: 'upload',
              relationTo: 'media',
            },
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
              name: 'warranties',
              type: 'textarea',
              label: 'Warranties',
              required: false,
            },
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'product-categories',
              required: true,
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
              name: 'brochure',
              type: 'upload',
              relationTo: 'media',
              required: false,
            }
          ],
          label: 'Content',
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
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
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
  ]
};

export default Products;
