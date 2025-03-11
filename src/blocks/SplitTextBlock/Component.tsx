import React from 'react'
import SplitText from '@/components/SplitText'

const SplitTextBlock = ({ items }) => {
  return (
    <section className="py-[2rem] bg-darkblue text-white">
      <div className="container">
        {items.map((item, index) => (
          <SplitText key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default SplitTextBlock
