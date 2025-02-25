import AnimateIn from '@/components/Animations/AnimateIn'
import SectionTitle from '@/components/SectionTitle'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface GridItem {
  link: {
    slug: string
  }
  backgroundImage: {
    url: string
    alt: string
  }
  imageAlt: string
  title: string
  paragraph: string
  widthClass: string
  customClasses?: string
  overlayClass: string
  imageZIndex?: number
  overlayZIndex?: number
  decorativeImage?: {
    src: string
    width: number
    height: number
    alt: string
    style?: React.CSSProperties
    className?: string
  }
  titleClass: string
  subtitleClass?: string
  paragraphClass: string
}

interface ImageGridProps {
  title: string
  subtitle: string
  gridItems: GridItem[]
}

const ImageGrid: React.FC<ImageGridProps> = ({ title, subtitle, gridItems }) => {
  return (
    <section className="py-[5rem]">
      <div className="container text-white text-center pb-5 mb-5">
        <SectionTitle
          title={title}
          subtitle={subtitle}
        />
      </div>
      <div className="container flex flex-col justify-between">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {gridItems.slice(0, 2).map((item, index) => (
            <AnimateIn
              key={index}
              animation={{
                x: 0,
                y: 60,
                opacity: 0,
                duration: 0.8,
                delay: 0.1 * index,
              }}
              className="relative min-h-[250px] md:w-1/2"
            >
              <Link 
                key={index} 
                href={item.link.slug} 
                className="w-full h-full"
              >
                <Image 
                  src={item.backgroundImage.url} 
                  alt={item.backgroundImage.alt} 
                  fill 
                  className="rounded-xl object-cover"
                  loading="lazy" 
                />
                <div 
                  className="absolute inset-0 p-5 flex flex-col justify-end rounded-xl bg-antiflashwhite/90 md:bg-antiflashwhite/80 hover:bg-antiflashwhite/90 transition-all duration-300 ease-in-out"
                >
                  <div>
                    <h3 className="text-sm font-base mb-2 pb-2 border-b-2 border-azul inline-block">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xl text-jet md:text-jet/90">{item.paragraph}</p>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/3 relative flex flex-col gap-4 min-h-[750px]">
            {gridItems.slice(2, 4).map((item, index) => (
              <AnimateIn
                key={index}
                animation={{
                  y: 60,
                  opacity: 0,
                  duration: 0.8,
                  delay: 0.1 * index,
                }}
                className={`relative w-full ${index % 2 === 0 ? 'h-1/3' : 'h-2/3'}`}
              >
                <Link
                  href={item.link.slug} 
                  className="w-full h-full block"
                >
                  <Image 
                    src={item.backgroundImage.url} 
                    alt={item.backgroundImage.alt} 
                    fill 
                    className="rounded-xl object-cover"
                    loading="lazy" 
                  />
                  <div 
                    className="absolute inset-0 p-5 flex flex-col justify-end rounded-xl bg-antiflashwhite/90 md:bg-antiflashwhite/80 hover:bg-antiflashwhite/90 transition-all duration-300 ease-in-out"
                  >
                    <div>
                      <h3 className="text-sm font-base mb-2 pb-2 border-b-2 border-azul inline-block">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xl text-jet md:text-jet/90">{item.paragraph}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <div className="md:w-1/3 relative flex flex-col gap-4 min-h-[750px]">
            {gridItems.slice(4, 6).map((item, index) => (
              <AnimateIn
                key={index}
                animation={{
                  y: 60,
                  opacity: 0,
                  duration: 0.8,
                  delay: 0.1 * index,
                }}
                className="relative w-full h-1/2"
              >
                <Link
                  href={item.link.slug} 
                  className="w-full h-full block"
                >
                  <Image 
                    src={item.backgroundImage.url} 
                    alt={item.backgroundImage.alt} 
                    fill 
                    className="rounded-xl object-cover"
                    loading="lazy" 
                  />
                  <div 
                    className={`
                      absolute inset-0 p-5 flex flex-col justify-end rounded-xl transition-all duration-300 ease-in-out
                      ${index % 2 === 0 ? (
                        'bg-antiflashwhite/90 md:bg-antiflashwhite/80 hover:bg-antiflashwhite/90'
                      ) : (
                        'bg-darkblue/90 md:bg-darkblue/80 hover:bg-darkblue/90 border-2 border-antiflashwhite'
                      )}`}
                  >
                    <div>
                      <h3 className={`text-sm font-base mb-2 pb-2 border-b-2 inline-block
                        ${index % 2 === 0 ? (
                          'border-azul text-jet'
                        ) : (
                          'text-antiflashwhite border-antiflashwhite'
                        )}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p
                      className={`text-xl md:text-jet/90
                        ${index % 2 === 0 ? (
                          'text-jet md:text-jet/90'
                        ) : (
                          'text-antiflashwhite md:text-antiflashwhite/90'
                        )}
                      `}
                    > 
                      {item.paragraph}
                    </p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>


          <div className="md:w-1/3 relative flex flex-col gap-4 min-h-[750px]">
            {gridItems.slice(6, 9).map((item, index) => (
              <AnimateIn
                key={index}
                animation={{
                  y: 60,
                  opacity: 0,
                  duration: 0.8,
                  delay: 0.1 * index,
                }}
                className={`relative w-full ${index % 2 !== 0 ? ('h-1/2') : ('h-1/4')}`}
              >
                <Link
                  href={item.link.slug} 
                  className="w-full h-full block"
                >
                  <Image 
                    src={item.backgroundImage.url} 
                    alt={item.backgroundImage.alt} 
                    fill 
                    className="rounded-xl object-cover"
                    loading="lazy" 
                  />
                  <div 
                    className="absolute inset-0 p-5 flex flex-col justify-end rounded-xl bg-antiflashwhite/90 md:bg-antiflashwhite/80 hover:bg-antiflashwhite/90 transition-all duration-300 ease-in-out"
                  >
                    <div>
                      <h3 className="text-sm font-base mb-2 pb-2 border-b-2 border-azul inline-block">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xl text-jet md:text-jet/90">{item.paragraph}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageGrid