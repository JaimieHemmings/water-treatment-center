import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { TextBlock } from '@/blocks/TextBlock/Component'
import { TwoColumnBlock } from '@/blocks/TwoColumnBlock/Component'
import TeamCarousel from '@/blocks/TeamCarousel/Component'
import ProductsHome from '@/blocks/ProductsHome/Component'
import { ServicesBlock } from '@/blocks/Services/Component'
import { BlogFeed } from '@/blocks/BlogFeed/Component'
import { ContactBlock } from '@/blocks/ContactBlock/Component'
import { AllBlogPosts } from '@/blocks/AllBlogPosts/Component'
import { TextWithImageBlock } from '@/blocks/TextWithImageBlock/Component'
import { StatsBlock } from '@/blocks/StatsBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  textBlock: TextBlock,
  twoColumn: TwoColumnBlock,
  teamCarousel: TeamCarousel,
  productsHome: ProductsHome,
  servicesBlock: ServicesBlock,
  blogFeed: BlogFeed,
  contactBlock: ContactBlock,
  allBlogPosts: AllBlogPosts,
  textWithImageBlock: TextWithImageBlock,
  statsBlock: StatsBlock,
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
