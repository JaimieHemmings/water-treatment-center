import React from 'react'
import Image from 'next/image'
import AnimateIn from '@/components/Animations/AnimateIn'
import CustomLink from '@/components/CustomLink'
import { FaDroplet } from "react-icons/fa6";

interface VideoBlockProps {
  title: string
  subtitle: string
  contentleft: any
  contentright?: any
  video: {
    url: string
  }
  link: {
    slug: string
  }
  linkLabel: string;
  videoOnly?: boolean
  preloadImage?: {
    url: string
  }
}

const ANIMATION_CONFIG = {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
} as const

const DecorativeDots: React.FC<{ position: 'top' | 'bottom' }> = ({ position }) => (
  <Image
    src="/dots.svg"
    alt="Decorative dots"
    className={`absolute ${
      position === 'top' ? 'top-4 left-0' : 'bottom-4 right-0 scale-x-[-1]'
    } z-10 w-48 h-72`}
    height={300}
    width={200}
  />
)

const VideoBlock: React.FC<VideoBlockProps> = ({
  title,
  subtitle,
  contentleft,
  video,
  link,
  linkLabel,
  videoOnly,
  preloadImage
}) => {

  if (videoOnly) {
    return (
      <video
        className="w-full h-auto"
        loop
        playsInline
        controls
        poster={preloadImage?.url || '/video-poster.jpg'}
      >
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    )
  }

  return (
    <section className="relative overflow-hidden py-[5rem] w-full">
      <DecorativeDots position="top" />

      {/* Video Background */}
      <div className="z-0">
        <div className="fixed inset-0">
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-darkblue/80" />

      {/* Content */}
      <div className="relative z-10 container text-white">
        <h2 className={`text-sm md:text-sm font-semibold text-selectiveyellow m-0 pb-5 tracking-widest`}>
          <FaDroplet className="inline-block text-selectiveyellow mr-2 relative -top-[2px]" />
          {title}
        </h2>
        <p className="text-2xl md:text-4xl">{subtitle}</p>
      </div>

      <div className="container flex flex-col justify-between">
        <div className="w-full pt-5 flex flex-col md:flex-row">
          <div className="w-2/3">
            <AnimateIn animation={ANIMATION_CONFIG}>
              <p className="prose mb-5 text-xl md:text-md text-white font-light pt-3 w-full">
                {contentleft}
              </p>
            </AnimateIn>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-end justify-end">
          {link && (
            <AnimateIn animation={ANIMATION_CONFIG}>
              <CustomLink
                theme="light" link={`/${link.slug}`} label={linkLabel} />
            </AnimateIn>
          )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoBlock