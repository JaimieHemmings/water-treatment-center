import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { hero } from '@/heros/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { Content } from '@/blocks/Content/config'
import { FormBlock } from '@/blocks/Form/config'
import { TextBlock } from '@/blocks/TextBlock/config'
import { TwoColumnBlock } from '@/blocks/TwoColumnBlock/config'
import { ServicesBlock } from '@/blocks/Services/config'
import { BlogFeed } from '@/blocks/BlogFeed/config'
import { ContactBlock } from '@/blocks/ContactBlock/config'
import { TextWithImageBlock } from '@/blocks/TextWithImageBlock/config'
import { StatsBlock } from '@/blocks/StatsBlock/config'
import { BlockRow } from '@/blocks/BlockRow/config'
import { ImageList } from '@/blocks/ImageList/config'
import { FaqBlock } from '@/blocks/FaqBlock/config'
import { VideoBlock } from '@/blocks/VideoBlock/config'
import { YoutubeBlock } from '@/blocks/YoutubeBlock/config'
import { TestKitForm } from '@/blocks/TestKitForm/config'
import { ReviewBlock } from '@/blocks/ReviewBlock/config'
import { ImageGrid } from '@/blocks/ImageGrid/config'
import { SplitTextBlock } from '@/blocks/SplitTextBlock/config'
import { WideTextBlock } from '@/blocks/WideText/config'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'

export const Counties: CollectionConfig = {
  slug: 'counties',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'updatedAt'],
    useAsTitle: 'title',
    group: 'Site Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CallToAction,
                Content,
                FormBlock,
                TextBlock,
                TwoColumnBlock,
                ServicesBlock,
                BlogFeed,
                ContactBlock,
                TextWithImageBlock,
                StatsBlock,
                BlockRow,
                ImageList,
                FaqBlock,
                VideoBlock,
                YoutubeBlock,
                TestKitForm,
                ReviewBlock,
                ImageGrid,
                SplitTextBlock,
                WideTextBlock,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
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
