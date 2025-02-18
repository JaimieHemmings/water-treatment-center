import React from 'react';
import RichText from '@/components/RichText';
import CustomLink from '@/components/CustomLink';
import Bounded from '@/utilities/Bounded';
import AnimateIn from '@/components/Animations/AnimateIn';
import Image from 'next/image';

interface CallToActionBlockProps {
  link: {
    slug: string;
  };
  linkLabel: string;
  richText: any;
  lightbgToggle: boolean;
  backgroundImage?: {  // Add this new prop
    url: string;
    alt: string;
  };
}

export const CallToActionBlock: React.FC<CallToActionBlockProps> = ({ link, linkLabel, richText, lightbgToggle, backgroundImage }) => {
  return (
    <div className="bg-darkblue">
      <div className={`w-full py-[5rem] relative overflow-hidden ${lightbgToggle ? 'bg-antiflashwhite' : ''}`}
      style={lightbgToggle ? {
        clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 100%)',
        paddingTop: 'calc(5rem + 4vw)',
        paddingBottom: 'calc(5rem + 4vw)',
      } : undefined}>
        {backgroundImage && (
          <div className="absolute left-0 top-0 h-full w-full md:w-1/2">
            <Image
              src={backgroundImage.url}
              alt={backgroundImage.alt}
              className="absolute left-0 top-0 h-full w-full object-cover object-center rounded-xl"
              width={800}
              height={600}
              priority
            />
            {/* White overlay */}
            <div className="absolute inset-0 bg-antiflashwhite/60 rounded-xl" />
            <div className='absolute inset-0 bg-gradient-to-l from-antiflashwhite to-transparent' />
          </div>
        )}
    <Image
      src="/dots.svg"
      alt="Decorative dots"
      className="absolute bottom-4 right-0 z-10 scale-x-[-1] w-48 h-72 md:w-48 md:h-72 max-md:hidden"
      height={300}
      width={200}
      style={{ filter: 'brightness(0)' }}
    />
      {!lightbgToggle && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
        >
          <source src="/water-drop.mp4" type="video/mp4" />
        </video>
      )}
      <div
        className={`w-full
        h-full
        absolute
        z-1
        ${lightbgToggle ? '' : 'bg-gradient-to-br from-teal to-azul opacity-70'}
        top-0
        left-0
        `} />
      <Bounded>
        <div className="p-4 relative z-20">
          {!lightbgToggle && (
          <AnimateIn
            animation={{
              y: 60,
              opacity: 0,
              duration: 1,
              ease: 'power2.out',}}
              >
            <h2 className="bg-selectiveyellow text-white inline-block px-5 py-2 rounded-xl font-semibold mb-5">
              Get In Touch
            </h2>
          </AnimateIn>
          )}
          <AnimateIn
            animation={{
              y: 60,
              opacity: 0,
              duration: 1,
              ease: 'power2.out',}}
          >
          {richText && !lightbgToggle && (
            <div>
              <RichText
              className={`text-2xl md:text-5xl font-semibold mb-5 ${lightbgToggle ? 'text-darkblue' : 'text-white'}`}
              data={richText}
              enableGutter={false}
              />
            </div>
          )}
          {richText && lightbgToggle && (
            <div className="container flex flex-col md:flex-row justify-between ">
              <div className="basis-1/2"></div>
              <div className="basis-1/2 md:pl-5">
              <AnimateIn
                animation={{
                  y: 60,
                  opacity: 0,
                  duration: 1,
                  ease: 'power2.out',}}
              >
                <h2 className="bg-selectiveyellow text-white inline-block px-5 py-2 rounded-xl font-semibold mb-5">
                  Get In Touch
                </h2>
              </AnimateIn>
                <RichText
                className={`text-xl md:text-2xl font-semibold mb-5 [&_strong]: ${lightbgToggle ? 'text-darkblue' : 'text-white'}`}
                data={richText}
                enableGutter={false}
                />
              </div>
            </div>
          )}

          </AnimateIn>
          <div className="flex justify-end space-x-4">
            <AnimateIn
              animation={{
                opacity: 0,
                duration: 1,
                ease: 'power2.out',}}
            >
              <CustomLink theme="light" label={linkLabel} link={link.slug} />
            </AnimateIn>
          </div>
        </div>
      </Bounded>
    </div>
    </div>
  );
};

export default CallToActionBlock;