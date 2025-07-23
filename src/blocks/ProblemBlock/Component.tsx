import React from 'react'
import AnimateIn from '@/components/Animations/AnimateIn'
import { FaExclamationTriangle, FaCogs, FaCheckCircle } from 'react-icons/fa'
import { FaDroplet, FaGlassWaterDroplet } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/dist/client/link'

interface ProblemBlockProps {
  items: {
    title: string
    icon: string
    iconColor: string
    listItems: { item: string }[]
  }[]
  ctaTitle?: string
  ctaSubtitle?: string
  ctaParagraph?: string
  ctaLinkText?: string
}

const icons = {
  FaExclamationTriangle,
  FaCogs,
  FaCheckCircle,
  FaDroplet,
  FaGlassWaterDroplet,
}

const ProblemBlock: React.FC<ProblemBlockProps> = ({
  items,
  ctaTitle,
  ctaSubtitle,
  ctaParagraph,
  ctaLinkText,
}) => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 opacity-10">
        <Image src="/dots.svg" alt="" width={200} height={200} className="scale-x-[-1]" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <Image src="/dots.svg" alt="" width={150} height={150} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <FaGlassWaterDroplet className="text-selectiveyellow text-2xl" />
          <span className="text-selectiveyellow text-sm tracking-widest uppercase font-semibold">
            Water Treatment Solutions
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-textblue mb-6 text-center">
          Hard Water Problems?{' '}
          <span className="text-selectiveyellow block">We Have the Solutions</span>
        </h2>
        <div className="w-24 h-1 bg-selectiveyellow mx-auto rounded-full mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4">
          {items.map((column, index) => {
            const IconComponent = icons[column.icon]
            return (
              <AnimateIn
                key={index}
                animation={{
                  y: 80,
                  opacity: 0,
                  duration: 0.8,
                  delay: 0.2 * index,
                }}
              >
                <div
                  className={`group relative bg-gradient-to-br bg-darkblue rounded-2xl p-8 h-full border-2 border-selectiveyellow/30 hover:shadow-2xl hover:shadow-selectiveyellow/10 transition-all duration-500`}
                >
                  {/* Card header with icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`text-2xl ${column.iconColor}`} />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6">
                    {column.title}
                  </h3>

                  <ul className="space-y-4">
                    {column.listItems.map((listItem, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-textblue/90 leading-relaxed group-hover:text-textblue transition-colors duration-300"
                      >
                        <FaDroplet className="text-selectiveyellow text-sm mt-2 flex-shrink-0 group-hover:animate-pulse" />
                        <span className="text-base text-white font-medium">{listItem.item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-selectiveyellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </AnimateIn>
            )
          })}
        </div>

        {/* Call-to-action section */}
        <AnimateIn
          animation={{
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: 0.8,
          }}
          className="text-center mt-4"
        >
          <div className="bg-gradient-to-r from-darkblue to-selectiveyellow rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaDroplet className="text-selectiveyellow text-xl animate-pulse" />
              <span className="text-sm tracking-widest uppercase font-semibold">{ctaTitle}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{ctaSubtitle}</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">{ctaParagraph}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-selectiveyellow text-white font-bold rounded-xl hover:bg-white hover:text-selectiveyellow transition-all duration-300 hover:shadow-lg hover:shadow-selectiveyellow/25 group"
              >
                <FaDroplet className="mr-2 group-hover:animate-bounce" />
                {ctaLinkText || 'Get Your Free Assessment'}
              </Link>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <FaCheckCircle className="text-green-300" />
                <span>No obligation • Expert consultation</span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

export default ProblemBlock
