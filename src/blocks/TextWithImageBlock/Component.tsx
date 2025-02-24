import React from "react";
import RichText from "@/components/RichText";
import Image from "next/image";
import { ThreeColBlock } from "@/blocks/ThreeCol/Component";
import { AnimateIn } from "@/components/Animations/AnimateIn";

interface Column {
  title: string;
  content: string;
}

interface TextWithImageBlockProps {
  title: string;
  content: any;
  image: {
    originalWidth: number;
    originalHeight: number;
    url: string;
    alt: string;
  };
  cropImage?: boolean;
  blocks?: {
    blockType: 'threeColBlock';
    columns: Column[];
  }[];
  additionalSettings?: {
    ShowThreeColBlock: boolean;
  };
}

export const TextWithImageBlock: React.FC<TextWithImageBlockProps> = ({ 
  content, 
  title, 
  image,
  blocks,
  additionalSettings,
  cropImage
}) => {
  return (
    <section 
      className="w-full py-20 bg-darkblue text-jet relative overflow-hidden"
    >
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute bottom-4 right-0 z-10 scale-x-[-1] w-48 h-72"
        height={300}
        width={200}
        priority={false}
      />
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute top-4 left-0 z-10 w-48 h-72"
        height={300}
        width={200}
        priority={false}
      />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10 relative z-20">
        <div className="basis-1/2 h-full relative">
          <AnimateIn
            animation={{
              y: 60,
              opacity: 0,
              duration: 0.8,
              rotate: -10,
              scale: 0.8,
            }}
            className="relative h-full w-full m-0"
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={500}
              height={500}
              sizes="(max-width: 768px)"
              className={`${cropImage ? 'rounded-full' : 'rounded-xl'} object-cover h-full w-full m-0 min-h-[500px]`}
              loading="lazy"
            />
          </AnimateIn>
        </div>
        <div className="basis-1/2 space-y-6">
        <AnimateIn
          animation={{
            y: 60,
            opacity: 0,
            duration: 0.8,
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white m-0 pb-5">
            {title}
          </h2>
          {content && (
            <div className="animate-text-6578">
              <RichText 
                data={content}
                enableGutter={false}
                className="prose md:prose-lg text-white max-w-none [&_strong]:text-white"
              />
            </div>
          )}
          </AnimateIn>
          <AnimateIn
          animation={{
            y: 60,
            opacity: 0,
            duration: 0.8,
          }}
        >
            {additionalSettings?.ShowThreeColBlock && blocks?.map((block, index) => {
              if (block.blockType === 'threeColBlock') {
                return (
                  <ThreeColBlock
                    key={index}
                    columns={block.columns}
                  />
                );
              }
              return null;
            })}
          </AnimateIn>
        </div>
      </div>
      
    </section>
  );
};