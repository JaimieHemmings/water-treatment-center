import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { TextBlock } from '@/blocks/TextBlock/config'
import { TwoColumnBlock } from '@/blocks/TwoColumnBlock/config'
import { BlogFeed } from '@/blocks/BlogFeed/config'
import { ServicesBlock } from '@/blocks/Services/config'
import { ContactBlock } from '@/blocks/ContactBlock/config'
import { hero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'
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
import { CostCalculatorBlock } from '@/blocks/CostCalculator/config'
import { WideTextBlock } from '@/blocks/WideText/config'
import { ComplexCalcBlock } from '@/blocks/ComplexCalc/config'
import { CountyDisplayBlock } from '@/blocks/CountyDisplayBlock/config'
import { ImageGalleryBlock } from '@/blocks/ImageGalleryBlock/config'
import { ProblemBlock } from '@/blocks/ProblemBlock/config'
import { ServicesOverviewBlock } from '@/blocks/ServicesOverviewBlock/config'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { ChooseUsBlock } from '@/blocks/ChooseUsBlock/config'
import { ContentBlock2 } from '@/blocks/ContentBlock/config'
import { TimelineBlock } from '@/blocks/TimelineBlock/config'
import { ExpertiseBlock } from '@/blocks/ExpertiseBlock/config'
import { PhilosophyBlock } from '@/blocks/PhilosophyBlock/config'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
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
                CostCalculatorBlock,
                WideTextBlock,
                ComplexCalcBlock,
                CountyDisplayBlock,
                ImageGalleryBlock,
                ProblemBlock,
                ServicesOverviewBlock,
                ChooseUsBlock,
                ContentBlock2,
                TimelineBlock,
                ExpertiseBlock,
                PhilosophyBlock,
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
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    beforeDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
