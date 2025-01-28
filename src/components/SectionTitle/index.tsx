import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="container">
      <h2 className="text-selectiveyellow font-semibold pb-5">{title}</h2>
      <p className="text-4xl md:text-5xl font-semibold">{subtitle}</p>
    </div>
  )
}

export default SectionTitle
