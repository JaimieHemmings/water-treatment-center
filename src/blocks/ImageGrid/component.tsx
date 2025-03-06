import AnimateIn from '@/components/Animations/AnimateIn'
import SectionTitle from '@/components/SectionTitle'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaDroplet } from "react-icons/fa6";

interface GridItem {
  theme: 'light' | 'dark'
  link: {
    slug: string
  }
  backgroundImage: {
    url: string
    alt: string
  }
  title: string
  paragraph: string
}

interface ImageGridProps {
  title: string
  subtitle: string
  gridItems: GridItem[]
}

// Extract card component to reduce repetition
const GridCard: React.FC<{
  item: GridItem
  index: number
  className?: string
}> = ({ item, index, className = "" }) => {
  return (
    <AnimateIn
      animation={{
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.1 * index,
      }}
      className={`relative ${className}`}
    >
      <Link 
        href={item.link.slug} 
        className="w-full h-full block"
      >
        {item.backgroundImage && (
          <Image 
            src={item.backgroundImage.url} 
            alt={item.backgroundImage.alt} 
            fill 
            className="rounded-xl object-cover absolute top-0 left-0 w-full h-full z-10"
            loading="lazy" 
          />
        )}
        <div 
          className={`
            relative z-20 inset-0 p-5 flex flex-col justify-end rounded-xl transition-all duration-300 ease-in-out h-full pt-[5rem]
            ${item.theme === 'light' 
              ? 'bg-antiflashwhite/90 md:bg-antiflashwhite/80 hover:bg-antiflashwhite/90'
              : 'bg-darkblue/90 md:bg-darkblue/80 hover:bg-darkblue/90 border-2 border-antiflashwhite'
            }`}
        >
          <div>
            <h3 className={`text-sm uppercase tracking-widest px-2 font-base mb-2 pb-2 border-b-2 inline-block font-semibold
              ${item.theme === 'light'
                ? 'border-azul text-jet'
                : 'text-antiflashwhite border-antiflashwhite'
              }`}
            >
              {item.title}
            </h3>
          </div>
          <p
            className={`text-xl
              ${item.theme === 'light'
                ? 'text-jet md:text-jet/90'
                : 'text-antiflashwhite md:text-antiflashwhite/90'
              }`}
          > 
            {item.paragraph}
          </p>
        </div>
      </Link>
    </AnimateIn>
  );
};

const ImageGrid: React.FC<ImageGridProps> = ({ title, subtitle, gridItems }) => {
  // Separate the grid into its sections for clarity
  const topRow = gridItems.slice(0, 2);
  const leftColumn = gridItems.slice(2, 4);
  const middleColumn = gridItems.slice(4, 6);
  const rightColumn = gridItems.slice(6, 9);

  return (
    <section className="py-[5rem] md:py-[10rem]">
      <div className="container text-white text-center pb-5 mb-5">
        <h2 className="text-sm uppercase text-selectiveyellow pb-5">
          <FaDroplet className="inline-block text-selectiveyellow mr-2 relative -top-[2px]" />
          {title}
        </h2>
        <p className="text-white text-2xl md:text-4xl md:max-w-[40%] mx-auto">{subtitle}</p>
      </div>
      <div className="container flex flex-col justify-between">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {topRow.map((item, index) => (
            <GridCard 
              key={index} 
              item={item} 
              index={index} 
              className="md:w-1/2" 
            />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column */}
          <div className="md:w-1/3 relative flex flex-col gap-4 md:min-h-[750px]">
            {leftColumn.map((item, index) => (
              <GridCard 
                key={index} 
                item={item} 
                index={index} 
                className={`w-full ${index % 2 === 0 ? 'md:h-1/3' : 'md:h-2/3'}`} 
              />
            ))}
          </div>

          {/* Middle Column */}
          <div className="md:w-1/3 relative flex flex-col gap-4 md:min-h-[750px]">
            {middleColumn.map((item, index) => (
              <GridCard 
                key={index} 
                item={item} 
                index={index} 
                className="w-full md:h-1/2" 
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="md:w-1/3 relative flex flex-col gap-4 md:min-h-[750px]">
            {rightColumn.map((item, index) => (
              <GridCard 
                key={index} 
                item={item} 
                index={index} 
                className={`w-full ${index % 2 !== 0 ? 'md:h-1/2' : 'md:h-1/4'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageGrid