import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <section className="w-full bg-jet py-10 pt-[10rem] relative overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
      >
        <source src="/water-drop.mp4" type="video/mp4" />
      </video>
      <div className="w-full h-full absolute z-1 bg-gradient-to-br from-argentinian to-azul opacity-70 top-0 left-0"></div>
      <div className="container relative z-1">
        <div className="p-4 flex flex-col md:justify-between gap-4">
          <div className="flex justify-end">
            <div className="md:w-[66%]">
              <h2 className="block text-selectiveyellow font-semibold pb-5">
                GET IN TOUCH
              </h2>
              {richText && <RichText className="mb-5 text-2xl md:text-5xl text-white mr-0" data={richText} enableGutter={false} />}
              <div className="flex justify-end">
                {(links || []).map(({ link }, i) => {
                  return <CMSLink key={i} size="lg" {...link} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
