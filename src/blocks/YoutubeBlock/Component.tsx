import React from 'react';
import RichText from "@/components/RichText";
import './youtube.css';

interface YoutubeBlockProps {
  title: string;
  youtubeEmbed: string;
  content: any;
}

const YoutubeBlock: React.FC<YoutubeBlockProps> = ({ title, youtubeEmbed, content }) => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-darkblue text-jet relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center justify-between gap-6 lg:gap-12">
          {/* Video Container */}
          <div className="lg:basis-1/2">
            <div className="relative w-full rounded-lg overflow-hidden">
              <div 
                className="youtube-container"
                dangerouslySetInnerHTML={{
                  __html: youtubeEmbed
                }}
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="lg:basis-1/2 flex flex-col">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
              {title}
            </h2>
            {content && (
              <RichText 
                data={content}
                enableGutter={false}
                className="
                  prose prose-sm sm:prose-base lg:prose-lg
                  max-w-none mb-5
                  text-white
                  [&_strong]:font-bold 
                  [&_strong]:text-white
                  [&_p]:mb-4
                  [&_a]:text-white 
                  [&_a]:underline
                  [&_a:hover]:opacity-80
                  [&_ul]:list-disc 
                  [&_ul]:pl-5
                  [&_ol]:list-decimal 
                  [&_ol]:pl-5
                "
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeBlock;