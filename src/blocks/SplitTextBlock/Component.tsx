import React from 'react'
import SplitText from '@/components/SplitText'
import { SplitTextBlock as SplitTextBlockProps } from '@/payload-types'

export const SplitTextBlock:React.FC<SplitTextBlockProps> = ({ items }) => {
  return (
    <section className="py-[2rem] pb-[5rem] bg-darkblue text-white">
      {items && (
      <div className="container">
          {items?.map((item, index) => (
            <SplitText key={index} item={item} index={index} />
          ))}
      </div>
      )}
    </section>
  )
}

export default SplitTextBlock
