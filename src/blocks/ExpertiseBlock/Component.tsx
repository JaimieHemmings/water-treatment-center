import React from 'react'
import AnimateIn from '@/components/Animations/AnimateIn'
import { FaCogs, FaFlask, FaCheckCircle } from 'react-icons/fa'
import { FaDroplet, FaGears, FaWater, FaLocationDot } from 'react-icons/fa6'

interface ExpertiseColumn {
  title: string
  icon: string
  items: { item: string }[]
}

interface ExpertiseBlockProps {
  mainHeading?: string
  sectionTitle?: string
  expertiseColumns?: ExpertiseColumn[]
}

// Icon mapping for dynamic icon selection
const iconMap = {
  FaGears,
  FaWater,
  FaLocationDot,
  FaCogs,
  FaFlask,
  FaDroplet,
}

const defaultExpertiseColumns: ExpertiseColumn[] = [
  {
    title: 'Technical Expertise',
    icon: 'FaGears',
    items: [
      { item: 'Certified water treatment installers' },
      { item: 'Advanced water quality testing' },
      { item: 'Custom water filtration design' },
      { item: 'Ongoing system maintenance' },
      { item: 'Emergency repair services' },
    ],
  },
  {
    title: 'Product Knowledge',
    icon: 'FaWater',
    items: [
      { item: 'Premium water softener systems' },
      { item: 'Whole house filtration units' },
      { item: 'Drinking water purification' },
      { item: 'Commercial water treatment' },
      { item: 'Latest filtration technology' },
    ],
  },
  {
    title: 'Local Understanding',
    icon: 'FaLocationDot',
    items: [
      { item: 'Irish water condition expertise' },
      { item: 'Regional water quality variations' },
      { item: 'Local authority compliance' },
      { item: 'Community-focused service' },
      { item: '20+ years local experience' },
    ],
  },
]

const ExpertiseBlock: React.FC<ExpertiseBlockProps> = ({
  mainHeading = 'Certified Water Filtration Professionals',
  sectionTitle = 'Our Expertise',
  expertiseColumns = defaultExpertiseColumns,
}) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-selectiveyellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-teal/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimateIn
            animation={{
              y: 60,
              opacity: 0,
              duration: 1,
              ease: 'power2.out',
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaDroplet className="text-selectiveyellow text-xl animate-pulse" />
              <span className="text-sm tracking-widest uppercase font-semibold text-teal">
                {sectionTitle}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-textblue mb-6">{mainHeading}</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal mx-auto"></div>
          </AnimateIn>
        </div>

        {/* Expertise Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseColumns.map((column, index) => {
            const IconComponent = iconMap[column.icon as keyof typeof iconMap] || FaGears
            return (
              <AnimateIn
                key={index}
                animation={{
                  y: 80,
                  opacity: 0,
                  duration: 0.8,
                  delay: 0.2 * index,
                  ease: 'power2.out',
                }}
              >
                <div className="group relative h-full">
                  {/* Main card */}
                  <div className="relative p-8 h-full flex flex-col bg-white rounded-2xl border border-gray-100 shadow-lg transition-all duration-500 hover:shadow-xl">
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
                      <h3 className="text-xl font-bold text-textblue mb-6 group-hover:text-darkblue transition-colors duration-300">
                        {column.title}
                      </h3>

                      {/* Expertise list */}
                      <ul className="space-y-4">
                        {column.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-textblue/80 leading-relaxed group-hover:text-textblue transition-colors duration-300"
                          >
                            <FaCheckCircle className="text-selectiveyellow text-sm mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-base font-medium">
                              {typeof item === 'string' ? item : item.item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom decorative accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-selectiveyellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseBlock
