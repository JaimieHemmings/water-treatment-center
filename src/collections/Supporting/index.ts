// @ts-nocheck
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
import { CallToAction } from '@/blocks/CallToAction/config'
import { FaqBlock } from '@/blocks/FaqBlock/config'
import { ImageGrid } from '@/blocks/ImageGrid/config'
import { ImageList } from '@/blocks/ImageList/config'
import { StatsBlock } from '@/blocks/StatsBlock/config'
import { TextWithImageBlock } from '@/blocks/TextWithImageBlock/config'
import { TwoColumnBlock } from '@/blocks/TwoColumnBlock/config'
import { VideoBlock } from '@/blocks/VideoBlock/config'
import { YoutubeBlock } from '@/blocks/YoutubeBlock/config'
import { SplitTextBlock } from '@/blocks/SplitTextBlock/config'
import { TestKitForm } from '@/blocks/TestKitForm/config'
import { HardnessTest } from '@/blocks/HardnessTest/config'
import { WellTestCalculator } from '@/blocks/WellTestCalculator/config'
import { CostCalculatorBlock } from '@/blocks/CostCalculator/config'
import { LinkListBlock } from '@/blocks/LinkListBlock/config'

export const Supporting: CollectionConfig = {
  slug: 'supporting-documents',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    association: true,
    order: true,
  },
  admin: {
    defaultColumns: ['title', 'association', 'updatedAt'],
    useAsTitle: 'title',
    group: 'Product Admin',
  },
  fields: [
    {
      name: 'order',
      label: 'Order',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Use this field to control the display order',
        step: 1
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'association',
      type: 'relationship',
      relationTo: 'product-categories',
      required: true,
      hasMany: false,
      maxDepth: 1,
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'hero',
          label: 'Hero',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
            },
            {
              name: 'paragraph',
              label: 'Paragraph',
              type: 'textarea',
            },
            {
              name: 'image',
              label: 'Image',
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
              blocks: [CallToAction, FaqBlock, ImageGrid, ImageList, StatsBlock, TextWithImageBlock, TwoColumnBlock, VideoBlock, YoutubeBlock, SplitTextBlock, TestKitForm, HardnessTest, WellTestCalculator, CostCalculatorBlock,LinkListBlock],
              required: true,
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
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ]
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