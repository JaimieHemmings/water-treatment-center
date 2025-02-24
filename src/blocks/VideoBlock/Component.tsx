import React from 'react'
import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'
import AnimateIn from '@/components/Animations/AnimateIn'
import RichText from '@/components/RichText'

interface VideoBlockProps {
  title: string
  subtitle: string
  contentleft: any
  contentright?: any
  video: {
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
  contentright,
  video,
}) => {
  return (
    <section className="relative overflow-hidden py-20 w-screen">
      <DecorativeDots position="top" />
      <DecorativeDots position="bottom" />

      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <div className="fixed inset-0">
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video.url} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-darkblue/80" />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-white">
          <SectionTitle title={title} subtitle={subtitle} />
        </div>
      </div>

      <div className="container flex flex-col md:flex-row justify-between">
        {/* Left Content */}
        <div className="md:basis-1/3 pt-5">
          <AnimateIn animation={ANIMATION_CONFIG}>
            <p className="prose mb-5 text-2xl md:text-md text-white font-light pt-3">
              {contentleft}
            </p>
          </AnimateIn>
        </div>

        {/* Right Content */}
        <div className="md:basis-2/3 md:p-5">
          <AnimateIn animation={ANIMATION_CONFIG}>
            <RichText 
              data={contentright}
              enableGutter={false}
              className="prose md:prose-md mb-5 text-md md:xl mr-0 text-white [&_strong]:font-bold [&_strong]:text-white"
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

export default VideoBlock