import React from 'react'
import { AnimateIn } from '@/components/Animations/AnimateIn'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="container">
      <AnimateIn
        animation={{
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }}
      >
          <h2 className="bg-selectiveyellow text-white rounded-xl font-semibold px-5 py-2 inline-block mb-5">{title}</h2>
      </AnimateIn>
      <AnimateIn
        animation={{
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }}
      >
        {subtitle && (
          <p className="text-4xl md:text-5xl font-semibold text-white">{subtitle}</p>
        )}
      </AnimateIn>
    </div>
  )
}

export default SectionTitle
