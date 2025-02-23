import React from 'react'
import { IoIosCheckmark } from "react-icons/io";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaEuroSign } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import AnimateIn from '@/components/Animations/AnimateIn'
import Gallery from './Gallery';

const Header = ({ productData }) => {
  return (
    <div className="container flex flex-col md:flex-row gap-8 py-5">
          <div className="md:basis-1/2 flex flex-col md:pb-20">
            <AnimateIn
              animation={{
                y: 50,
                opacity: 0,
                duration: 0.8,
              }}>
              <Gallery productData={productData} />
            </AnimateIn>
          </div>
          <div className="md:basis-1/2 md:p-5">
            <AnimateIn animation={{
                y: 50,
                opacity: 0,
                duration: 0.8,
              }}>
                <h2 className="text-2xl md:text-4xl font-semibold text-white pb-5 border-b-2 border-azul mb-5 inline-block">
                  {productData.title}
                </h2>
              </AnimateIn>
              <p className="prose md:prose-md text-white">
              {productData.content.header.excerpt}
              </p>
              <ul className='list-none list-inside text-white mt-4 flex flex-col gap-4 px-0 pb-5'>
                {productData.content.header.mainFeatures.map((feature, index) => (
                  <li key={index} className="text-white relative pl-[20px]">
                    <IoIosCheckmark className="absolute top-[-5px] left-[-15px] p-0 m-0 text-4xl text-azul"/>
                    {feature.description}
                  </li>
                ))}
              </ul>
              <ul className="py-5 flex flex-col gap-4">
                {productData.content.specs.numberOfUsers && (
                  <li className="text-white relative pl-[20px]">
                    <FaPeopleRoof className="absolute top-[-2px] left-[-12px] p-0 m-0 text-2xl text-azul"/>
                    Suitable for households up to <strong>{productData.content.specs.numberOfUsers} people</strong>
                  </li>
                )}
                <li className="text-white relative pl-[20px]">
                  <FaEuroSign className="absolute top-[-2px] left-[-12px] p-0 m-0 text-2xl text-azul"/>
                  Get a FREE no obligation quote
                </li>
                <li className="text-white relative pl-[20px]">
                  <GrMoney className="absolute top-[-2px] left-[-12px] p-0 m-0 text-2xl text-azul"/>
                  Payment Plans Available
                </li>
                <li className="text-white relative pl-[20px]">
                  <GiAutoRepair className="absolute top-[-2px] left-[-12px] p-0 m-0 text-2xl text-azul"/>
                  Installation &amp; maintenance services available
                </li>
              </ul>
              
          </div>
        </div>
  )
}

export default Header
