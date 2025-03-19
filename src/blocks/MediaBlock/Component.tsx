import { cn } from 'src/utilities/cn'
import React from 'react'
import Image from 'next/image'

type Props = {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: {
    src: string
    width: number
    height: number
  }
  disableInnerContainer?: boolean
  media?: {
    url: string
    width: number
    height: number
  }
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
  } = props

  return (
    <div
      className={cn(
        '',
        {
          container: enableGutter,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <Image
          src={media.url || staticImage?.src || ''}
          alt="Placeholder"
          width={media.width || staticImage?.width}
          height={media.height || staticImage?.height}
          className={`${className} ${imgClassName} mx-auto maz-w-full h-auto`}
        />
      )}
    </div>
  )
}
