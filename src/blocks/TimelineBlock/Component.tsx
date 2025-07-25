import React from 'react'
import AnimateIn from '@/components/Animations/AnimateIn'
import { FaDroplet, FaCalendar, FaLocationDot, FaUsers, FaStar } from 'react-icons/fa6'
import Link from 'next/link'

interface TimelineItem {
  year: string
  title: string
  description: string
  icon?: string
}

interface TimelineBlockProps {
  mainHeading?: string
  timelineItems?: TimelineItem[]
}

// Icon mapping for dynamic icon selection
const iconMap = {
  FaCalendar,
  FaUsers,
  FaLocationDot,
  FaStar,
  FaDroplet,
}

const defaultTimelineItems: TimelineItem[] = [
  {
    year: '2003',
    title: "Founded by the O'Sullivan Family",
    description:
      'Started as a small water filtration company in Cork, driven by a passion for providing clean, safe water to Irish families.',
    icon: 'FaUsers',
  },
  {
    year: '2008',
    title: 'Expanded Across Munster',
    description:
      'Became certified water softener installers and expanded our water treatment services throughout the southern counties.',
    icon: 'FaLocationDot',
  },
  {
    year: '2015',
    title: 'Nationwide Coverage',
    description:
      'Grew to serve all of Ireland with our comprehensive residential water filtration solutions and expert installation team.',
    icon: 'FaLocationDot',
  },
  {
    year: '2024',
    title: 'Leading Water Filtration Specialists',
    description:
      "Now Ireland's premier water treatment company, with thousands of satisfied customers and cutting-edge filtration technology.",
    icon: 'FaStar',
  },
]

const TimelineBlock: React.FC<TimelineBlockProps> = ({
  mainHeading = 'Our Water Treatment Journey',
  timelineItems = defaultTimelineItems,
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
                Our Story
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-textblue mb-6">{mainHeading}</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal mx-auto"></div>
          </AnimateIn>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-selectiveyellow via-teal to-selectiveyellow hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap] || FaCalendar
              const isEven = index % 2 === 0

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
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Content Card */}
                    <div
                      className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}
                    >
                      <div className="group relative">
                        {/* Main card */}
                        <div className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl">
                          {/* Subtle gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-selectiveyellow/5 to-teal/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                          <div className="relative">
                            {/* Year badge */}
                            <div
                              className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-selectiveyellow to-teal text-white font-bold rounded-full text-lg mb-4`}
                            >
                              <IconComponent className="text-white" />
                              {item.year}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-textblue mb-4 group-hover:text-darkblue transition-colors duration-300">
                              {item.title}
                            </h3>

                            {/* Decorative accent line */}
                            <div
                              className={`w-16 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal mb-6 ${isEven ? 'lg:ml-auto' : ''}`}
                            ></div>

                            {/* Description */}
                            <p className="text-textblue/80 leading-relaxed group-hover:text-textblue transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline node - only visible on desktop */}
                    <div className="hidden lg:flex w-2/12 justify-center">
                      <div className="relative">
                        {/* Node circle */}
                        <div className="w-6 h-6 bg-white border-4 border-selectiveyellow rounded-full shadow-lg relative z-10"></div>

                        {/* Pulse effect */}
                        <div className="absolute inset-0 w-6 h-6 bg-selectiveyellow rounded-full animate-ping opacity-20"></div>
                      </div>
                    </div>

                    {/* Spacer for desktop layout */}
                    <div className="hidden lg:block w-5/12"></div>
                  </div>
                </AnimateIn>
              )
            })}
          </div>
        </div>

        {/* Bottom section */}
        <AnimateIn
          animation={{
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: 0.8,
          }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-darkblue to-teal rounded-2xl p-8 md:p-12 text-white shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaDroplet className="text-selectiveyellow text-xl animate-pulse" />
              <span className="text-sm tracking-widest uppercase font-semibold">
                Join Our Story
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Your Clean Water Journey Starts Here
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              From our humble beginnings to becoming Ireland&apos;s trusted water treatment
              specialists, we&apos;re here to serve your family with the same dedication and
              expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-textblue font-bold rounded-xl hover:bg-selectiveyellow hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-selectiveyellow/25 group"
              >
                <FaDroplet className="mr-2 group-hover:animate-bounce" />
                Get Free Expert Advice
              </Link>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <FaStar className="text-selectiveyellow" />
                <span>20+ Years of Excellence • Thousands of Happy Customers</span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

export default TimelineBlock
