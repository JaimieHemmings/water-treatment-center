import { MediaBlock } from '@/blocks/MediaBlock/Component'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
} from '@payloadcms/richtext-lexical'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as RichTextWithoutBlocks,
} from '@payloadcms/richtext-lexical/react'

import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component'

import type {
  BannerBlock as BannerBlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'

import CTABlockProps from '@/blocks/CallToAction/Component'

import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { cn } from '@/utilities/cn'

import VideoBlock from '@/blocks/VideoBlock/Component'
import { TextWithImageBlock } from '@/blocks/TextWithImageBlock/Component'
import { TwoColumnBlock } from '@/blocks/TwoColumnBlock/Component'
import { ImageList } from '@/blocks/ImageList/Component'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<typeof CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    imageList: ({ node }) => <ImageList images={node.fields.images} />,
    twoColumn: ({ node }) => <TwoColumnBlock {...node.fields} />,
    textWithImageBlock: ({ node }) => <TextWithImageBlock {...node.fields} />,
    videoBlock: ({ node }) => <VideoBlock {...node.fields} />,
    banner: ({ node }) => <BannerBlock className="col-start-2 mb-4" {...node.fields} />,
    mediaBlock: ({ node }) => (
      <MediaBlock
        className="col-start-1 col-span-3"
        imgClassName="m-0"
        {...node.fields}
        captionClassName="mx-auto"
        enableGutter={false}
        disableInnerContainer={true}
      />
    ),
    code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
    cta: ({ node }) => <CallToActionBlock {...node.fields} />,
  },
})

type Props = {
  data: SerializedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props
  return (
    <RichTextWithoutBlocks
      converters={jsxConverters}
      className={cn(
        {
          'container ': enableGutter,
          'max-w-none w-full': !enableGutter,
          'prose md:prose-md': enableProse,
        },
        className,
      )}
      {...rest}
    />
  )
}
