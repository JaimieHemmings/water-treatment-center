import React from 'react'
import AnimateIn from '@/components/Animations/AnimateIn'
import Bounded from '@/utilities/Bounded'
import CustomLink from '@/components/CustomLink'

const ProductCTA = () => {
  return (
    <section className="w-full bg-jet py-20 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
      >
        <source src="/water-drop.mp4" type="video/mp4" />
      </video>
      <div className="w-full h-full absolute z-1 bg-gradient-to-br from-teal to-azul opacity-70 top-0 left-0" />
      <Bounded>
        <div className="p-4">
          <AnimateIn
            animation={{
              y: 60,
              opacity: 0,
              duration: 1,
              ease: 'power2.out',}}
          >
            <h2 className="border-b-2 border-selectiveyellow text-white inline-block px-2 py-1 mb-5 text-sm">
              Get In Touch
            </h2>
          </AnimateIn>
          <AnimateIn
            animation={{
              y: 60,
              opacity: 0,
              duration: 1,
              ease: 'power2.out',}}
          >
            <div>
              <p className="text-2xl md:text-4xl font-semibold text-white">
              Get in touch to find out more about our products and services.
              </p>
            </div>
          </AnimateIn>
          <div className="flex justify-end space-x-4">
            <AnimateIn
              animation={{
                opacity: 0,
                duration: 1,
                ease: 'power2.out',}}
            >
              <CustomLink theme="light" label="Get In Touch" link="/contact" />
            </AnimateIn>
          </div>
        </div>
      </Bounded>
    </section>
  )
}

export default ProductCTA
