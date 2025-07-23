import React from 'react'
import Image from 'next/image'
import { FaDroplet, FaQuoteLeft } from 'react-icons/fa6'

interface ContentBlock2Props {
  title?: string
  content?: string
  imageSrc?: string
  imageAlt?: string
  showQuote?: boolean
  quoteText?: string
  className?: string
}

const ContentBlock2: React.FC<ContentBlock2Props> = ({
  title = 'The Water Treatment Centre',
  content,
  imageSrc = '/technician.png',
  imageAlt = 'Water treatment specialist',
  showQuote = true,
  quoteText = "Pure water isn't a luxury—it's essential for your home and health.",
  className = '',
}) => {
  const defaultContent = `Founded by an Irish family, The Water Treatment Centre puts people first through our core values of Respect, Value, and Support. We build lasting relationships with generations of satisfied customers by respecting your time, delivering on promises, and providing exceptional service.

Our certified specialists handle every aspect of your water treatment journey. From initial consultation—by phone, online, or in our showroom—to seamless whole house water filtration installation by our trained team. You'll join our community of happy customers supported by friendly service experts who handle all maintenance needs, year after year.

Our Process: We listen to understand your situation before recommending the ideal residential water filtration solution. We demonstrate Value by providing reliable water softener systems designed for long-term benefits, protecting your home and investment. Our team offers continuous Support with expert advice and assistance whenever needed.`

  return (
    <section className={`py-20 bg-white relative overflow-hidden ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-selectiveyellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-teal/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 items-center">
          {/* Content Section */}
          <div className="space-y-8 lg:col-span-4">
            <div className="space-y-6">
              <h2 className="text-sm tracking-widest mb-4 uppercase font-semibold text-selectiveyellow flex items-center gap-2">
                <FaDroplet className="text-selectiveyellow animate-pulse" />
                Who Are We?
              </h2>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-bold text-textblue leading-tight">
                  {title}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal"></div>
              </div>

              <p className="text-lg text-textblue/90 leading-relaxed font-medium">
                As a proud family-run business, we deliver exceptional water filtration systems
                tailored to every property&apos;s unique needs.
              </p>
            </div>

            {/* Quote Section */}
            {showQuote && (
              <div className="relative bg-gradient-to-r from-selectiveyellow/10 to-teal/10 backdrop-blur-sm rounded-2xl p-6 border border-selectiveyellow/20">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-selectiveyellow rounded-full flex items-center justify-center">
                  <FaQuoteLeft className="text-white text-sm" />
                </div>
                <blockquote className="text-textblue font-semibold text-xl italic leading-relaxed">
                  &apos;{quoteText}&apos;
                </blockquote>
              </div>
            )}

            {/* Main Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <div className="text-textblue/90 leading-relaxed space-y-4">
                  {(content || defaultContent).split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative lg:col-span-2">
            {/* Background decorative element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-selectiveyellow/20 to-teal/20 rounded-full blur-2xl"></div>

            {/* Main image container */}
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkblue/20 via-transparent to-transparent"></div>
              </div>

              {/* Image caption/badge */}
              <div className="absolute -bottom-4 left-8 right-8 bg-gradient-to-r from-selectiveyellow to-teal rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center gap-2 text-white">
                  <FaDroplet className="text-white animate-pulse" />
                  <span className="font-semibold text-sm tracking-widest uppercase">
                    Certified Specialists
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentBlock2
