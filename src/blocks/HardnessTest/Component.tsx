import React from 'react'

interface HardnessTestProps {
  title: string
}

export const HardnessTest:React.FC<HardnessTestProps> = ({title}) => {
  return (
    <div className="py-[5rem]">
      <div className="container text-white">
        <h1 className="text-2xl md:text-4xl">
          {title || 'Error fetching title'}
        </h1>
      </div>
    </div>
  )
}
