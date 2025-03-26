import React from 'react'
import RichText from '@/components/RichText'

interface WideTextBlockProps {
  titleStart: string;
  titleHighlight?: string;
  titleEnd?: string;
  description: any;
  features: {
    title: string;
    description: any;
  }[];
  darkmode?: boolean;
}

export const WideTextBlock: React.FC<WideTextBlockProps> = ({ 
  titleStart, 
  titleHighlight,
  titleEnd,
  description, 
  features 
}) => {
  return (
    <div className="py-[5rem] bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-4xl text-textblue mb-4">
          {titleStart}{' '}
          <span className="text-selectiveyellow">{titleHighlight}</span>
          {' '}{titleEnd}
        </h2>
        {description && <RichText data={description} enableGutter={false} className="text-textblue" />}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-antiflashwhite p-6 rounded-lg">
              <h3 className="text-xl text-textblue mb-3">
                {feature.title}
              </h3>
              {feature.description && <RichText data={feature.description} enableGutter={false} className="text-textblue" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WideTextBlock