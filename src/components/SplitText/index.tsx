import React from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'
import AnimateIn from '@/components/Animations/AnimateIn'
import CustomLink from '@/components/CustomLink'

export const SplitText: React.FC<any> = ({ item, index }) => {
  return (
    <div
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <div className="basis-1/2 relative max-md:min-h-[300px]">
        <AnimateIn
          animation={{
            opacity: 0,
            duration: 0.8,
            rotate: -5,
            scale: 0.8,
          }}
          className="w-full h-full max-md:min-h-[300px]"
        >
          <Image src={item.image.url}
            alt={item.image.alt}
            fill
            className={`object-cover rounded-xl h-full w-full`}
          />
        </AnimateIn>
      </div>
      <div className={`prose md:prose-md basis-1/2 ${index % 2 === 0 ? 'pl-0 pr-10 py-10' : 'md:p-10 py-10'} text-antiflashwhite`}>
        <AnimateIn
          animation={{
            opacity: 0,
            y: 60,
            duration: 0.8,
          }}
        >
          <h2 className="text-2xl md:text-4xl mb-2 mt-2">
            {item.title}
          </h2>
          <span className="relative w-1/2 h-[2px] bg-selectiveyellow block mb-3"></span>
          <RichText data={item.text} className="p-0 mb-10" />
          { item.lType == 'cms' && (
            <CustomLink link={item.CMSLink.slug} label="Read More" theme="white" />
          )}
          { item.lType == 'supporting' && (
            <CustomLink link={`/products/${item.supportingDocsLink.pageAssociation}/support/${item.supportingDocsLink.slug}`} label="Read More" theme="white" />
          )}
        </AnimateIn>
      </div>
    </div>
  )
}

export default SplitText
