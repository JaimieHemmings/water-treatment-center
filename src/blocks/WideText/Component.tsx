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
  enableFeatures?: boolean;
}

export const WideTextBlock: React.FC<WideTextBlockProps> = ({ 
  titleStart, 
  titleHighlight,
  titleEnd,
  description, 
  features,
  darkmode,
  enableFeatures
}) => {
  return (
    <section className={`pt-[5rem] pb-[2rem] ${darkmode ? 'bg-darkblue' : 'bg-white'}`}>
      <div className="container">
        <h2
          className={`${darkmode ? 'text-white' : 'text-textblue'} text-2xl md:text-4xl mb-4`}>
          {titleStart}{' '}
          <span className="text-selectiveyellow">{titleHighlight}</span>
          {' '}{titleEnd}
        </h2>
          <div className={`${darkmode ? 'text-white' : 'text-textblue'} mb-8`}>
            {description && <RichText data={description} enableGutter={false} />}
          </div>
          {enableFeatures && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-textblue">
              {features.map((feature, index) => (
                <div key={index} className="bg-darkblue p-6 rounded-lg">
                  <h3 className="text-2xl mb-3 text-selectiveyellow">
                    {feature.title}
                  </h3>
                  {feature.description && <RichText data={feature.description} enableGutter={false} className="text-white" />}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
  )
}

export default WideTextBlock