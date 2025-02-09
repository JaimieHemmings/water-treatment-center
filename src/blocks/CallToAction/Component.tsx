import React from 'react';
import type { CallToActionBlock as CTABlockProps } from '@/payload-types';
import RichText from '@/components/RichText';
import { CMSLink } from '@/components/Link';
import Bounded from '@/utilities/Bounded';
import AnimateIn from '@/components/Animations/AnimateIn';

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <section className="w-full bg-jet py-20 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
      >
        <source src="/water-drop.mp4" type="video/mp4" />
      </video>
      <div className="w-full h-full absolute z-1 bg-gradient-to-br from-teal to-azul opacity-70 top-0 left-0" />
      <Bounded>
        <div className="p-4">
          <AnimateIn
            animation={{
              y: 60,
              opacity: 0,
              duration: 1,
              ease: 'power2.out',}}
          >
            <h2 className="bg-selectiveyellow text-white inline-block px-5 py-2 rounded-xl font-semibold mb-2">
              Get In Touch
            </h2>
          </AnimateIn>
          <AnimateIn
            animation={{
              y: 60,
              opacity: 0,
              duration: 1,
              ease: 'power2.out',}}
          >
          {richText && (
            <div>
              <RichText
                className="text-2xl md:text-5xl font-semibold text-white animate-text-9090"
                data={richText}
                enableGutter={false}
              />
            </div>
          )}
          </AnimateIn>
          <div className="flex justify-end space-x-4">
            {(links || []).map((linkItem, i) => (
            <AnimateIn
              key={`cta-link-${i}`}
              animation={{
                opacity: 0,
                duration: 1,
                ease: 'power2.out',}}
            >
              <CMSLink
                size="lg"
                {...linkItem.link}
              />
            </AnimateIn>
            ))}
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default CallToActionBlock;