import React from 'react'
import { AnimateIn } from '@/components/Animations/AnimateIn'
import { FaTint, FaHome, FaFlask, FaShieldAlt } from 'react-icons/fa'
import { FaDroplet } from 'react-icons/fa6'

const services = [
  {
    title: 'Water Softener Installation',
    description:
      'Professional installation of premium water softener systems for homes across Ireland.',
    icon: FaTint,
    features: ['Hard water elimination', 'Scale prevention', 'Energy efficiency'],
    accent: 'from-teal/90 to-selectiveyellow/90',
  },
  {
    title: 'Whole House Water Filtration',
    description:
      'Comprehensive residential water filtration removing chemicals, sediment, and contaminants.',
    icon: FaHome,
    features: ['Complete home coverage', 'Multi-stage filtration', 'Chlorine removal'],
    accent: 'from-azul/90 to-teal/90',
  },
  {
    title: 'Drinking Water Systems',
    description: 'Under-sink and countertop filters providing pure, great-tasting water on demand.',
    icon: FaDroplet,
    features: ['Crystal clear water', 'Great taste', 'Instant access'],
    accent: 'from-selectiveyellow/90 to-azul/90',
  },
  {
    title: 'Water Testing & Maintenance',
    description:
      'Free water analysis and ongoing system maintenance to ensure optimal performance.',
    icon: FaFlask,
    features: ['Free water testing', '24/7 support', 'Regular maintenance'],
    accent: 'from-darkblue to-teal/90',
  },
]

const ServicesOverviewBlock = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-selectiveyellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-teal/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
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
              <FaDroplet className="text-selectiveyellow text-xl" />
              <span className="text-sm tracking-widest uppercase font-semibold text-teal">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-textblue mb-6">
              Complete Water Treatment
              <span className="text-selectiveyellow"> Solutions</span>
            </h2>
            <p className="text-xl text-textblue/80 max-w-3xl mx-auto leading-relaxed">
              Transform your home&apos;s water quality with our comprehensive range of professional
              services, backed by 20+ years of experience serving Irish families.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
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
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2">
                    {/* Gradient background overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                    ></div>

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
                      <h3 className="text-xl font-bold text-textblue mb-4 group-hover:text-darkblue transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-textblue/80 leading-relaxed mb-6 group-hover:text-textblue transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Feature list */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex flex-row items-start text-sm text-textblue/70"
                          >
                            <FaShieldAlt className="text-selectiveyellow text-xs mt-1 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Subtle glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-selectiveyellow/20 to-teal/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverviewBlock
