import React from 'react'
import RichText from '@/components/RichText'

// Improved type definitions with more specific types
interface Link {
  text: string
  link: string
}

interface SectionItem {
  subtitle: string
  richText: any
  listItem: Link[]
}

interface LinkListBlockProps {
  title: string
  richText: any
  section: SectionItem[]
}

const LinkListBlock: React.FC<LinkListBlockProps> = ({
  title,
  richText,
  section,
}) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 text-textblue">
        <h2 className="text-2xl md:text-4xl text-selectiveyellow mb-3">
          {title}
        </h2>      
        
        <RichText
          className="mb-6"
          data={richText}
          enableGutter={false}
        />
        
        <div className="space-y-6">
          {section.map((item, index) => (
            <div key={index} className="border-b pb-6 last:border-b-0">
              <h3 className="text-sm text-selectiveyellow mb-3">
                {item.subtitle}
              </h3>
              
              {item.richText && (
                <RichText
                className="mb-4 text-textblue"
                data={item.richText}
                enableGutter={false}
                />
              )}
              
              {item.listItem.map((link, i) => (
                <div className="flex flex-col" key={i}>
                  {link.link ? (
                    <a 
                      href={link.link} 
                      className="text-textblue hover:text-selectiveyellow hover:underline transition-colors text-md font-semibold mb-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <p className="text-textblue">- {link.text}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default LinkListBlock