import React from 'react';
import RichText from '@/components/RichText';
import CustomLink from '@/components/CustomLink';
import Bounded from '@/utilities/Bounded';
import AnimateIn from '@/components/Animations/AnimateIn';
import Image from 'next/image';
import { FaDroplet } from "react-icons/fa6";

interface CallToActionBlockProps {
  title?: string,
  subtitle?: string;
  link: {
    slug: string;
  };
  linkLabel: string;
  richText: any;
  backgroundImage?: { 
    url: string;
    alt: string;
  };
  lightMode?: boolean;
}

export const CallToActionBlock: React.FC<CallToActionBlockProps> = ({ link, linkLabel, richText, backgroundImage, title, subtitle, lightMode }) => {
  return (
    <section className="bg-darkblue">
      <div className="w-full py-[5rem] relative overflow-hidden">
        {backgroundImage && (
          <div className="absolute left-0 top-0 h-full w-full m-0">
            <Image
              src={backgroundImage.url}
              alt={backgroundImage.alt}
              className="absolute left-0 top-0 h-full w-full object-cover object-center m-0"
              width={800}
              height={600}
              priority
            />
            <div className="absolute inset-0 bg-darkblue/40" />
          </div>
        )}
        {!backgroundImage && (
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
        z-10
        ${backgroundImage && !lightMode ? 'bg-darkblue/80' : 'bg-[#009290]/70'}
        ${backgroundImage && lightMode ? 'bg-white/40' : ''} 
        top-0
        left-0`} />
        {lightMode && (
          <div className="absolute pointer-events-none left-0 bottom-0 w-1/2 h-full bg-gradient-to-r from-white to-transparent" />
        )}
      <Bounded>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="basis-1/2">
            <AnimateIn
              animation={{
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
              }}
            >
              <h2 className={`${backgroundImage ? 'text-selectiveyellow' : 'text-white'} tracking-widest inline-block px-2 py-1 mb-5 text-sm uppercase`}>
                <FaDroplet className={`inline-block ${backgroundImage ? 'text-selectiveyellow' : 'text-white'} text-base relative -top-[1px] mr-1`} /> {title || 'Get in touch!'}
              </h2>
              <div>
              {subtitle && (
                <p className={`text-white text-2xl md:text-4xl pb-4 border-b-2 border-selectiveyellow mb-5 inline-block font-semibold ${lightMode ? 'text-darkblue' : ''}`}>{subtitle}</p>
              )}
              </div>
              <RichText
                className={`${backgroundImage ? 'prose md:prose-md text-2xl md:text-4xl' : 'text-2xl md:text-4xl font-semibold'} mb-5 ${lightMode ? 'text-darkblue' : 'text-white'}`}
                data={richText}
                enableGutter={false}
              />
              {!backgroundImage && (
                <span className="w-1/2 h-1 border-b-2 relative block border-white mb-5" />
              )}
            </AnimateIn>
          </div>
          <div className="basis-1/2 flex flex-col items-centre max-w-[200px] justify-center">
            <AnimateIn
              animation={{
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
              }}
            >
              {lightMode && (
                <CustomLink theme="dark" label={linkLabel} link={link.slug} />
              )}
              {!lightMode && (
                <CustomLink theme="white" label={linkLabel} link={link.slug} /> 
              )}
            </AnimateIn>         
          </div>
        </div>
      </Bounded>
      </div>
    </section>
  );
};

export default CallToActionBlock;