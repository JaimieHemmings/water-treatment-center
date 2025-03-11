// @ts-nocheck
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { TextBlock } from '@/blocks/TextBlock/Component'
import { ImageList } from '@/blocks/ImageList/Component'
import { TwoColumnBlock } from '@/blocks/TwoColumnBlock/Component'
import { ProductsHome } from '@/blocks/ProductsHome/Component'
import ServicesBlock from '@/blocks/Services/Component'
import BlogFeed from '@/blocks/BlogFeed/Component'
import { ContactBlock } from '@/blocks/ContactBlock/Component'
import { TextWithImageBlock } from '@/blocks/TextWithImageBlock/Component'
import { StatsBlock } from '@/blocks/StatsBlock/Component'
import { BlockRow } from '@/blocks/BlockRow/Component'
import { FaqBlock } from '@/blocks/FaqBlock/Component'
import VideoBlock from '@/blocks/VideoBlock/Component'
import YoutubeBlock from '@/blocks/YoutubeBlock/Component'
import TestKitForm from '@/blocks/TestKitForm/Component'
import TestKitCalculator from '@/blocks/TestKitCalculator/Component'
import ReviewBlock from '@/blocks/ReviewBlock/Component'
import ImageGrid from '@/blocks/ImageGrid/component'
import SplitTextBlock from '@/blocks/SplitTextBlock/Component'

const blockComponents = {
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  textBlock: TextBlock,
  twoColumn: TwoColumnBlock,
  productsHome: ProductsHome,
  servicesBlock: ServicesBlock,
  blogFeed: BlogFeed,
  contactBlock: ContactBlock,
  textWithImageBlock: TextWithImageBlock,
  statsBlock: StatsBlock,
  blockRow: BlockRow,
  imageList: ImageList,
  faqblock: FaqBlock,
  videoBlock: VideoBlock,
  youtubeBlock: YoutubeBlock,
  testKitForm: TestKitForm,
  testKitCalculator: TestKitCalculator,
  reviewBlock: ReviewBlock,
  imageGrid: ImageGrid,
  splitTextBlock: SplitTextBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <Block {...block} key={index} disableInnerContainer />
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
