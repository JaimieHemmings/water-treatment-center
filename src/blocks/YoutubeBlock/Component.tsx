import React from 'react'
import RichText from "@/components/RichText";

interface YoutubeBlockProps {
  title: string;
  youtubeEmbed: string;
  content: any;
}

const YoutubeBlock: React.FC<YoutubeBlockProps> = ({ title, youtubeEmbed, content }) => {
  return (
    <div className="w-full py-20 bg-darkblue text-jet relative overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="md:basis-1/2">
          <div 
            className="w-full h-full"
            dangerouslySetInnerHTML={{ 
              __html: youtubeEmbed 
            }} 
          />
        </div>
        <div className="md:basis-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{title}</h2>
           {content && <RichText data={content} enableGutter={false} className="max-w-none prose md:prose-md mb-5 text-md md:xl mr-0 [&_strong]:font-bold [&_strong]:text-white text-white" />}
        </div>
      </div>
    </div>
  )
}

export default YoutubeBlock
