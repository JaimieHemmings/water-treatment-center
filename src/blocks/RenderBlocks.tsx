// @ts-nocheck
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { TextBlock } from '@/blocks/TextBlock/Component'
import { ImageList } from '@/blocks/ImageList/Component'
import { TwoColumnBlock } from '@/blocks/TwoColumnBlock/Component'
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
import WellTestCalculator from '@/blocks/WellTestCalculator/Component'
import ReviewBlock from '@/blocks/ReviewBlock/Component'
import ImageGrid from '@/blocks/ImageGrid/component'
import SplitTextBlock from '@/blocks/SplitTextBlock/Component'
import HardnessTest from '@/blocks/HardnessTest/Component'
import CostCalculatorBlock from '@/blocks/CostCalculator/Component'
import ProductsList from '@/blocks/ProductsList/Component'
import WideTextBlock from '@/blocks/WideText/Component'
import LinkListBlock from '@/blocks/LinkListBlock/Component'
import ComplexCalcBlock from '@/blocks/ComplexCalc/Component'
import CountyDisplayBlock from './CountyDisplayBlock/Component'
import ImageGalleryBlock from '@/blocks/ImageGalleryBlock/Component'
import ProblemBlock from '@/blocks/ProblemBlock/Component'
import ServicesOverviewBlock from '@/blocks/ServicesOverviewBlock/Component'

const blockComponents = {
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  textBlock: TextBlock,
  twoColumn: TwoColumnBlock,
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
  wellTestCalculator: WellTestCalculator,
  reviewBlock: ReviewBlock,
  imageGrid: ImageGrid,
  splitTextBlock: SplitTextBlock,
  hardnessTest: HardnessTest,
  costCalculatorBlock: CostCalculatorBlock,
  productsList: ProductsList,
  wideTextBlock: WideTextBlock,
  linkListBlock: LinkListBlock,
  complexCalcBlock: ComplexCalcBlock,
  countyDisplayBlock: CountyDisplayBlock,
  imageGalleryBlock: ImageGalleryBlock,
  problemBlock: ProblemBlock,
  servicesOverviewBlock: ServicesOverviewBlock,
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
              return <Block {...block} key={index} disableInnerContainer />
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
