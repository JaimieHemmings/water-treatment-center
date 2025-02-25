import React from 'react'
import { AnimateIn } from '@/components/Animations/AnimateIn'

interface SectionTitleProps {
  title: string
  subtitle?: string
  theme?: 'light' | 'dark'
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, theme }) => {
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
          <h2 className={`border-b-2 border-selectiveyellow ${theme == 'dark' ? 'text-jet' : 'text-white'} inline-block px-2 py-1 m-0 mb-5 text-sm`}>{title}</h2>
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
          <p className="m-0 text-4xl md:text-4xl font-semibold text-white">{subtitle}</p>
        )}
      </AnimateIn>
    </div>
  )
}

export default SectionTitle
