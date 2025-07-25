import React from 'react'
import AnimateIn from '@/components/Animations/AnimateIn'
import { FaCheckCircle, FaHeart, FaHandshake } from 'react-icons/fa'
import { FaDroplet, FaLocationDot, FaStar } from 'react-icons/fa6'

interface PhilosophyValue {
  title: string
  description: string
  icon: string
}

interface PhilosophyBlockProps {
  mainHeading?: string
  sectionTitle?: string
  philosophyValues?: PhilosophyValue[]
}

// Icon mapping for dynamic icon selection
const iconMap = {
  FaCheckCircle,
  FaHeart,
  FaLocationDot,
  FaHandshake,
  FaStar,
  FaDroplet,
}

const defaultPhilosophyValues: PhilosophyValue[] = [
  {
    title: 'Quality First',
    description:
      'We only recommend premium water treatment systems that deliver long-term performance. Every water filtration installation meets our rigorous quality standards.',
    icon: 'FaCheckCircle',
  },
  {
    title: 'Customer-Focused Service',
    description:
      'From free water testing to ongoing maintenance, we prioritize your satisfaction. Our water softener specialists provide personalized solutions for every home.',
    icon: 'FaHeart',
  },
  {
    title: 'Local Expertise',
    description:
      'Understanding Irish water conditions is crucial. Our certified water treatment professionals know exactly what filtration solutions work best in each region.',
    icon: 'FaLocationDot',
  },
  {
    title: 'Honest Advice',
    description:
      'We provide transparent recommendations based on your actual needs. No overselling – just the right residential water filtration system for your situation.',
    icon: 'FaHandshake',
  },
]

const PhilosophyBlock: React.FC<PhilosophyBlockProps> = ({
  mainHeading = 'Our Commitment to Water Quality Excellence',
  sectionTitle = 'Service Philosophy',
  philosophyValues = defaultPhilosophyValues,
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-antiflashwhite to-white relative overflow-hidden">
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

        {/* Philosophy Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {philosophyValues.map((value, index) => {
            const IconComponent = iconMap[value.icon as keyof typeof iconMap] || FaCheckCircle
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
                  <div className="relative p-8 h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg transition-all duration-500 hover:shadow-xl hover:bg-white/90">
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-selectiveyellow/5 to-teal/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                    {/* Icon and check mark container */}
                    <div className="relative mb-6 flex items-start gap-4">
                      {/* Large check mark */}
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="text-3xl text-selectiveyellow group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Title and icon */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-xl md:text-2xl font-bold text-textblue group-hover:text-darkblue transition-colors duration-300">
                            {value.title}
                          </h3>
                          <div className="w-10 h-10 bg-gradient-to-br from-selectiveyellow/10 to-teal/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="text-lg text-teal group-hover:text-selectiveyellow transition-colors duration-300" />
                          </div>
                        </div>

                        {/* Decorative accent line */}
                        <div className="w-16 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal opacity-50 group-hover:opacity-100 transition-opacity duration-300 mb-4"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <p className="text-textblue/80 leading-relaxed text-lg group-hover:text-textblue transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>

                    {/* Bottom decorative accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-selectiveyellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>

        {/* Bottom Statement */}
        <AnimateIn
          animation={{
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: 1.0,
          }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-darkblue to-teal rounded-2xl p-8 md:p-12 text-white shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaDroplet className="text-selectiveyellow text-xl animate-pulse" />
              <span className="text-sm tracking-widest uppercase font-semibold">
                Excellence in Every Drop
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Experience the Difference Our Values Make
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              When you choose us for your water treatment needs, you're not just getting a service –
              you're partnering with a team that lives by these core values every single day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-textblue font-bold rounded-xl hover:bg-selectiveyellow hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-selectiveyellow/25 group"
              >
                <FaStar className="mr-2 group-hover:animate-bounce" />
                Experience Our Philosophy
              </a>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <FaCheckCircle className="text-selectiveyellow" />
                <span>Quality • Service • Expertise • Honesty</span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

export default PhilosophyBlock
