import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import Image from 'next/image'
import AnimateIn from '@/components/Animations/AnimateIn'
import RichText from '@/components/RichText'

interface VideoBlockProps {
  title: string
  subtitle: string
  contentleft: any
  contentright: any
  video: {
    url: string  }
}

const VideoBlock: React.FC<VideoBlockProps> = ({
  title,
  subtitle,
  contentleft,
  contentright,
  video
}) => {
  return (
    <div className="relative overflow-hidden py-[5rem]">
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute bottom-4 right-0 z-10 scale-x-[-1] w-48 h-72 md:w-48 md:h-72"
        height={300}
        width={200}
      />
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute top-4 left-0 z-10 w-48 h-72 md:w-48 md:h-72"
        height={300}
        width={200}
      />
      <div className="absolute inset-0 top-0 left-0 -z-10">
        <div className="fixed inset-0 w-full h-full">
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video.url} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-darkblue bg-opacity-50 z-0"
      >
      </div>
      <div className="relative z-10">
        <div className="text-white">
          <SectionTitle title={title} subtitle={subtitle} />
        </div>
      </div>
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="md:basis-1/3 pt-5">
                <AnimateIn
                  animation={{
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                  }}
                >
                    <p className="max-w-none md:prose-md prose mb-5 text-2xl md:text-md text-white font-light pt-3">
                      {contentleft}
                    </p>
                  </AnimateIn>
                </div>
                <div className="md:basis-2/3 md:p-5">
                  <AnimateIn
                    animation={{
                      y: 60,
                      opacity: 0,
                      duration: 1,
                      ease: "power2.out",
                    }}
                  >
                    {contentright && <RichText data={contentright} enableGutter={false} className="max-w-none prose md:prose-md mb-5 text-md md:xl mr-0 text-white [&_strong]:font-bold" />}
                  </AnimateIn>
                </div>
      </div>
    </div>
  )
}

export default VideoBlock