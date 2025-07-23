import type { BannerBlock as BannerBlockProps } from 'src/payload-types'
import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'
import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa'

type Props = {
  className?: string
} & BannerBlockProps

const getIconForStyle = (style: string) => {
  switch (style) {
    case 'info':
      return <FaInfoCircle className="text-teal animate-pulse" />
    case 'success':
      return <FaCheckCircle className="text-green-500 animate-pulse" />
    case 'warning':
      return <FaExclamationTriangle className="text-yellow-500 animate-pulse" />
    case 'error':
      return <FaExclamationCircle className="text-red-500 animate-pulse" />
    default:
      return <FaInfoCircle className="text-teal animate-pulse" />
  }
}

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn('mx-auto my-12 w-full', className)}>
      <div
        className={cn(
          'relative overflow-hidden backdrop-blur-sm border rounded-2xl p-6 flex items-start gap-4 shadow-lg transition-all duration-300 hover:shadow-xl group',
          {
            'border-teal/30 bg-gradient-to-r from-teal/10 to-teal/5 hover:from-teal/15 hover:to-teal/10':
              style === 'info',
            'border-red-500/30 bg-gradient-to-r from-red-500/10 to-red-500/5 hover:from-red-500/15 hover:to-red-500/10':
              style === 'error',
            'border-green-500/30 bg-gradient-to-r from-green-500/10 to-green-500/5 hover:from-green-500/15 hover:to-green-500/10':
              style === 'success',
            'border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 hover:from-yellow-500/15 hover:to-yellow-500/10':
              style === 'warning',
          },
        )}
      >
        {/* Background decorative element */}
        <div
          className={cn('absolute top-2 right-2 w-16 h-16 rounded-full blur-xl opacity-20', {
            'bg-teal': style === 'info',
            'bg-red-500': style === 'error',
            'bg-green-500': style === 'success',
            'bg-yellow-500': style === 'warning',
          })}
        />

        {/* Icon */}
        <div className="flex-shrink-0 text-xl group-hover:scale-110 transition-transform duration-300">
          {getIconForStyle(style || 'info')}
        </div>

        {/* Content */}
        <div className="flex-1 relative z-10">
          <RichText data={content} enableGutter={false} enableProse={false} />
        </div>

        {/* Accent line */}
        <div
          className={cn(
            'absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r transition-all duration-500 group-hover:h-1',
            {
              'from-teal to-teal/50': style === 'info',
              'from-red-500 to-red-500/50': style === 'error',
              'from-green-500 to-green-500/50': style === 'success',
              'from-yellow-500 to-yellow-500/50': style === 'warning',
            },
          )}
        />
      </div>
    </div>
  )
}
