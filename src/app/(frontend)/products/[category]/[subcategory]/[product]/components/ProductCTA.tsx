import React from 'react'
import AnimateIn from '@/components/Animations/AnimateIn'
import Bounded from '@/utilities/Bounded'
import CustomLink from '@/components/CustomLink'
import { FaDroplet } from "react-icons/fa6";

const ProductCTA = () => {
  return (
    
    <section className="bg-darkblue">
    <div className="w-full py-[5rem] relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
        >
        <source src="/water-drop.mp4" type="video/mp4" />
      </video>
    <div
      className={`w-full
      h-full
      absolute
      z-1
      bg-[#009290]/70
      top-0
      left-0`}
    />
      <Bounded>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="basis-1/2">
            <AnimateIn
              animation={{
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
              }}
            >
              <h2 className="text-white tracking-widest inline-block px-2 py-1 mb-5 text-sm uppercase">
                <FaDroplet className="inline-block text-white text-base relative -top-[2px] mr-1" /> Payment Plans!
              </h2>
                <div>
                </div>
                <p
                  className="text-2xl md:text-4xl font-semibold'} mb-5 text-white"
                >
                  View our 0% interest payment plans that help make your water equipment more affordable.
                </p>
                <span className="w-1/2 h-1 border-b-2 relative block border-white mb-5" />
              </AnimateIn>
            </div>
            <div className="basis-1/2 flex flex-col items-centre max-w-[200px] justify-center">
              <AnimateIn
                animation={{
                  y: 60,
                  opacity: 0,
                  duration: 1,
                  ease: 'power2.out',
                }}
              >
                <CustomLink theme="white" label="Payment Plans" link="/payment-plans" /> 
              </AnimateIn>         
            </div>
          </div>
        </Bounded>
        </div>
      </section>
  )
}

export default ProductCTA
