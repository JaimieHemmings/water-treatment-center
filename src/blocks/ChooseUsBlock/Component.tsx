import React from 'react'
import { AnimateIn } from '@/components/Animations/AnimateIn'
import {
  FaUsers,
  FaCertificate,
  FaTools,
  FaStar,
  FaShieldAlt,
  FaAward,
  FaClock,
  FaPhone,
} from 'react-icons/fa'
import { FaDroplet } from 'react-icons/fa6'

export interface ChooseUsBlock {
  blockType: 'chooseUsBlock'
  blockName?: string
  sectionTitle: string
  mainHeading: string
  valuePropositions: Array<{
    icon: 'users' | 'certificate' | 'tools' | 'shield' | 'star' | 'award' | 'clock' | 'phone'
    title: string
    description: string
  }>
  ctaSection: {
    enable: boolean
    smallTitle?: string
    mainTitle?: string
    description?: string
    primaryButton?: {
      label?: string
      link?: string
    }
    secondaryButton?: {
      label?: string
      link?: string
    }
  }
}

interface ChooseUsBlockProps {
  sectionTitle?: string
  mainHeading?: string
  valuePropositions?: Array<{
    icon: 'users' | 'certificate' | 'tools' | 'shield' | 'star' | 'award' | 'clock' | 'phone'
    title: string
    description: string
  }>
  ctaSection?: {
    enable?: boolean
    smallTitle?: string
    mainTitle?: string
    description?: string
    primaryButton?: {
      label?: string
      link?: string
    }
    secondaryButton?: {
      label?: string
      link?: string
    }
  }
}

// Icon mapping
const iconMap = {
  users: FaUsers,
  certificate: FaCertificate,
  tools: FaTools,
  shield: FaShieldAlt,
  star: FaStar,
  award: FaAward,
  clock: FaClock,
  phone: FaPhone,
}

// Default value propositions
const valuePropositions: Array<{
  icon: 'users' | 'certificate' | 'tools' | 'shield' | 'star' | 'award' | 'clock' | 'phone'
  title: string
  description: string
}> = []

// Default values
const defaultProps: Required<ChooseUsBlockProps> = {
  sectionTitle: 'Why Choose Us',
  mainHeading: "Ireland's Trusted Water Treatment Experts",
  valuePropositions,
  ctaSection: {
    enable: true,
    smallTitle: 'Ready to Get Started?',
    mainTitle: "Experience the difference with Ireland's water treatment specialists",
    description:
      'Contact us today for your free water quality assessment and discover why thousands of Irish families trust us with their water treatment needs.',
    primaryButton: {
      label: 'Get Free Quote',
      link: '/contact',
    },
    secondaryButton: {
      label: 'Call Now: (057) 933 3942',
      link: 'tel:0579333942',
    },
  },
}

const ChooseUsBlock: React.FC<ChooseUsBlockProps> = (props) => {
  // Merge props with defaults
  const { sectionTitle, mainHeading, valuePropositions, ctaSection } = { ...defaultProps, ...props }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-selectiveyellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-teal/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-widest mb-6 uppercase font-semibold text-teal">
            <FaDroplet className="mr-2 relative inline-block -top-[2px] text-teal" />
            {sectionTitle}
          </h2>

          <AnimateIn
            animation={{
              y: 60,
              opacity: 0,
              duration: 1,
              delay: 0.2,
              ease: 'power2.out',
            }}
          >
            <h3 className="text-3xl md:text-5xl font-semibold text-textblue mb-6 max-w-4xl mx-auto">
              {mainHeading}
            </h3>
          </AnimateIn>

          <AnimateIn
            animation={{
              y: 40,
              opacity: 0,
              duration: 0.8,
              delay: 0.4,
              ease: 'power2.out',
            }}
          >
            <div className="w-16 h-0.5 bg-selectiveyellow mx-auto" />
          </AnimateIn>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuePropositions.map((proposition, index) => {
            const IconComponent = iconMap[proposition.icon]
            return (
              <AnimateIn
                key={index}
                animation={{
                  y: 80,
                  opacity: 0,
                  duration: 0.8,
                  delay: 0.1 * index,
                  ease: 'power2.out',
                }}
              >
                <div className="group relative h-full bg-white">
                  {/* Main card */}
                  <div className="relative p-8 h-full flex flex-col bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500">
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-selectiveyellow/5 to-teal/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-selectiveyellow/10 to-teal/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-2xl text-teal group-hover:text-selectiveyellow transition-colors duration-300" />
                      </div>

                      {/* Decorative accent line */}
                      <div className="w-12 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="relative flex-grow">
                      <h4 className="text-xl font-bold text-textblue mb-4 group-hover:text-darkblue transition-colors duration-300">
                        {proposition.title}
                      </h4>
                      <p className="text-textblue/80 leading-relaxed group-hover:text-textblue transition-colors duration-300">
                        {proposition.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-selectiveyellow/20 to-teal/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </AnimateIn>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        {ctaSection.enable && (
          <div className="bg-gradient-to-r from-darkblue to-teal rounded-2xl p-8 md:p-12 text-white shadow-2xl max-w-4xl mx-auto mt-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaDroplet className="text-selectiveyellow text-xl animate-pulse" />
              <span className="text-sm tracking-widest uppercase font-semibold">
                {ctaSection.smallTitle}
              </span>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              {ctaSection.mainTitle}
            </h4>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">{ctaSection.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {ctaSection.primaryButton?.label && ctaSection.primaryButton?.link && (
                <a
                  href={ctaSection.primaryButton.link}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-textblue font-semibold rounded-lg hover:bg-selectiveyellow hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  {ctaSection.primaryButton.label}
                </a>
              )}
              {ctaSection.secondaryButton?.label && ctaSection.secondaryButton?.link && (
                <a
                  href={ctaSection.secondaryButton.link}
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-textblue transition-all duration-300 transform hover:scale-105"
                >
                  {ctaSection.secondaryButton.label}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ChooseUsBlock
