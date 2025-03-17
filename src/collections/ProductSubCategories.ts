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
import { TextWithImageBlock } from '@/blocks/TextWithImageBlock/config'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const subcategories: CollectionConfig = {
  slug: 'subcategories',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    category: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'category', 'updatedAt'],
    useAsTitle: 'title',
    group: 'Product Admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'New Subcategory',
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'product-categories',
      required: true,
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
          ],
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
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        }
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