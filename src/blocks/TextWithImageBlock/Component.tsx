import React from "react";
import RichText from "@/components/RichText";
import { AnimateIn } from "@/components/Animations/AnimateIn";
import { FaDroplet } from "react-icons/fa6";
import { Media } from "@/components/Media";

interface TextWithImageBlockProps {
  darkmode: boolean;
  title: string;
  intro: string;
  content: any;
  image: any;
  linkLabel: string;
  cropImage?: boolean;
  quote: string;
}

export const TextWithImageBlock: React.FC<TextWithImageBlockProps> = ({ 
  darkmode,
  content, 
  title, 
  intro,
  image,
  cropImage,
  quote,
}) => {
  return (
    <div className={`py-[5rem] ${darkmode ? 'bg-darkblue' : 'bg-white'}`}>
      <div className="container flex flex-col md:flex-row">
        <div className="md:w-1/2 h-auto relative mb-5 md:mb-0">
          {cropImage ? (
              <Media
                resource={image}
                fill
                imgClassName="rounded-xl object-cover w-full h-auto"
                loading='lazy'
                className="min-h-[500px]"
              />
          ) : (
            <AnimateIn
              animation={{
                y: 60,
                opacity: 0,
                duration: 1,
                rotate: -5,
                ease: 'power2.out',
              }}
            >
              <Media
                resource={image}
                className="rounded-xl"
                imgClassName="w-full h-auto rounded-xl"
                loading='lazy'
              />
            </AnimateIn>
          )}
        </div>
        {/* Text Column */}
        <div className="md:w-1/2 px-6 flex flex-col justify-center">
          <div className="max-w-prose mx-auto">
            <AnimateIn
              animation={{
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
              }}
            >
              <h2 className="text-sm tracking-widest mb-4 text-selectiveyellow uppercase">
                <FaDroplet className="mr-2 relative inline-block -top-[2px]" />
                {title}
              </h2>
            </AnimateIn>
            <div className="space-y-4 text-white">
              <AnimateIn
                animation={{
                  y: 60,
                  opacity: 0,
                  duration: 1,
                  ease: 'power2.out',
                }}
              >
                <p className={`leading-relaxed mb-3 text-xl md:text-2xl ${darkmode ? 'text-white' : 'text-textblue'}`}>
                  {intro}
                </p>
              </AnimateIn>
            </div>
            {quote && (
              <AnimateIn
                animation={{
                  y: 60,
                  opacity: 0,
                  duration: 1,
                  ease: 'power2.out',
                }}
              >
                <p className={`pl-3 border-l-2 my-5 border-selectiveyellow text-lg ${darkmode ? 'text-white' : 'text-textblue'}`}>
                  {quote}
                </p>
              </AnimateIn>
            )}
          </div>
        </div>
      </div>  
      <div className="container">
      {content && (
        <AnimateIn
          animation={{
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
          }}
        >
          <RichText 
            data={content}
            enableGutter={false}
            className={`md:columns-2 max-w-none ${darkmode ? '[&_strong]:text-white text-white' : '[&_strong]:text-text-blue text-textblue'} my-5 leading-relaxed font-base`}
          />
        </AnimateIn>
      )}
      </div>            
    </div>
  );
};