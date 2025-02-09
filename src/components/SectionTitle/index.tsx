import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="container">
      <h2 className="bg-selectiveyellow text-white rounded-xl font-semibold px-5 py-2 inline-block mb-5">{title}</h2>
      {subtitle && (
        <p className="text-4xl md:text-5xl font-semibold text-white">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionTitle
