import React from "react";
import RichText from "@/components/RichText";
import Image from "next/image";
import { ThreeColBlock } from "@/blocks/ThreeCol/Component";
import { AnimateIn } from "@/components/Animations/AnimateIn";
import { FaDroplet } from "react-icons/fa6";
import CustomLink from "@/components/CustomLink";

interface Column {
  title: string;
  content: string;
}

interface TextWithImageBlockProps {
  darkmode: boolean;
  title: string;
  intro: string;
  content: any;
  image: {
    originalWidth: number;
    originalHeight: number;
    url: string;
    alt: string;
  };
  link: {
    slug: string
  };
  linkLabel: string;
  cropImage?: boolean;
  blocks?: {
    blockType: 'threeColBlock';
    columns: Column[];
  }[];
  additionalSettings?: {
    ShowThreeColBlock: boolean;
  };
  quote: string;
}

export const TextWithImageBlock: React.FC<TextWithImageBlockProps> = ({ 
  darkmode,
  content, 
  title, 
  intro,
  image,
  blocks,
  additionalSettings,
  link,
  cropImage,
  quote,
  linkLabel
}) => {
  return (
    <section 
      className={`w-full py-20 ${darkmode ? 'bg-darkblue text-white' : 'bg-white text-jet'} text-jet relative overflow-hidden`}
    >
      <div className={`container mx-auto px-4 flex ${darkmode ? 'lg:flex-row-reverse flex-col' : 'flex-col-reverse lg:flex-row'} justify-between gap-10 relative z-20`}>
        <div className={`${darkmode ? 'basis-1/3' : 'basis-1/2 '} h-full relative`}>
          <AnimateIn
            animation={{
              y: 60,
              opacity: 0,
              duration: 0.8,
              rotate: -10,
              scale: 0.8,
            }}
            className="relative h-full w-full m-0 p-5"
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={500}
              height={500}
              className={`${cropImage ? 'rounded-full' : 'rounded-xl'} object-cover h-auto w-full m-0 max-md:min-h-[200px]`}
              loading="lazy"
            />
          </AnimateIn>
        </div>
        <div className={`${darkmode ? 'basis-2/3' : 'basis-1/2 '} space-y-6`}>
        <AnimateIn
          animation={{
            y: 60,
            opacity: 0,
            duration: 0.8,
          }}
        >
          <div className={`${darkmode ? 'border-l-[5px] border-selectiveyellow pl-5' : ''} `}>
            <h2 className={`text-sm md:text-sm font-semibold text-selectiveyellow m-0 pb-5 tracking-widest`}>
              <FaDroplet className="inline-block text-selectiveyellow mr-2 relative -top-[2px]" />
              {title}
            </h2>
            <p className={`mb-3 ${darkmode ? 'md:text-5xl font-bold' : 'text-2xl md:text-4xl'}`}>{intro}</p>
          </div>
          {quote && (
            <p className="pl-3 border-l-2 my-5 border-selectiveyellow text-lg opacity-[65%]">
              {quote}
            </p>
          )}
          {content && (
            <RichText 
              data={content}
              enableGutter={false}
              className="prose md:prose-lg max-w-none [&_strong]:text-white my-5"
            />
          )}
          {link && (
            <CustomLink
              link={link.slug}
              theme="dark"
              label={linkLabel || "Get In Touch"}
            />
          )}
          </AnimateIn>
          {additionalSettings?.ShowThreeColBlock && blocks?.map((block, index) => {
            if (block.blockType === 'threeColBlock') {
              return (
                <AnimateIn
                  key={index}
                  animation={{
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                  }}
                >
                  <ThreeColBlock
                    key={index}
                    columns={block.columns}
                    darkmode={darkmode}
                  />
                </AnimateIn>
                );
              }
              return null;
            })}
        </div>
      </div>
      
    </section>
  );
};