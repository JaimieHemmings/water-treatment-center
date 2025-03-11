import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { CallToAction } from '@/blocks/CallToAction/config'
import { FaqBlock } from '@/blocks/FaqBlock/config'
import { ImageGrid } from '@/blocks/ImageGrid/config'
import { ImageList } from '@/blocks/ImageList/config'
import { StatsBlock } from '@/blocks/StatsBlock/config'
import { TwoColumnBlock } from '@/blocks/TwoColumnBlock/config'
import { VideoBlock } from '@/blocks/VideoBlock/config'
import { YoutubeBlock } from '@/blocks/YoutubeBlock/config'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'
import { TextWithImageBlock } from '@/blocks/TextWithImageBlock/config'

export const ProductCategories: CollectionConfig = {
  slug: 'product-categories',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
    heroImage: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'updatedAt'],
    useAsTitle: 'title',
    group: 'Product Admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'New Product Category',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      defaultValue: 'Enter a brief description of the product category',
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'hero',
          label: 'Hero',
          fields: [
            {
              name: 'heroImage',
              label: 'Hero Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ]
        },
        {
          name: 'content',
          label: 'Content',
          fields: [
            {
              name: 'content',
              label: 'Content',
              type: 'blocks',
              blocks: [CallToAction, FaqBlock, ImageGrid, ImageList, StatsBlock, TextWithImageBlock, TwoColumnBlock, VideoBlock, YoutubeBlock ],
              required: true,
            }],
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
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
    maxPerDoc: 50,
  },
}
