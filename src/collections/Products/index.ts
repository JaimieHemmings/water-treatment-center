import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'
import { slugField } from '@/fields/slug'

import { Banner } from '@/blocks/Banner/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { VideoBlock } from '@/blocks/VideoBlock/config'
import { TwoColumnBlock } from '@/blocks/TwoColumnBlock/config'
import { TextWithImageBlock } from '@/blocks/TextWithImageBlock/config'

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
      name: 'description',
      type: 'textarea',
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
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [
                      Banner,
                      MediaBlock,
                      VideoBlock,
                      TwoColumnBlock,
                      TextWithImageBlock
                    ] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'product-categories',
              required: true,
            },
            {
              name: 'sku',
              type: 'text',
              unique: true,
            },
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
