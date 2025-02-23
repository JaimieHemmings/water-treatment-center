import React from 'react'
import { GiAutoRepair } from "react-icons/gi";
import { FaGear } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import Image from 'next/image';

const ServiceDetails = ({ productData }) => {
  return (
    <section className="w-full bg-darkblue py-[5rem]" id="services">
      <div className="container flex flex-col md:flex-row gap-4">
        <div className="md:basis-1/2 relative p-5 min-h-[400px]">
          <Image
            src="/glass-of-water.webp"
            alt="Glass of water"
            className="object-cover rounded-xl transition-all duration-300"
            fill
          />
        </div>
        <div className="md:basis-1/2 p-5">
          <h2 className="border-b-2 border-azul text-white inline-block px-2 py-1 mb-5 text-sm">
            Installation &amp; Maintenance Service
          </h2>
          <h3 className="text-white text-2xl md:text-4xl">
            Here to help with everything you need
          </h3>
          <ul className="text-white py-5 prose md:prose-md lg:prose-lg pl-[30px] relative">
            <li className="relative">
              <GiAutoRepair className="absolute top-0 -left-10 text-azul text-4xl" />
              <h4>Installation</h4>
              <p>Our specialist engineers provide installation of our full range of water equipment, including water coolers, instant chilled & boiling taps, and drinking fountains. No job is too big or too small.</p>
            </li>
            <li className="relative">
              <FaGear className="absolute top-0 -left-10 text-azul text-4xl" />
              <h4>Maintenance</h4>
              <p>We believe in looking after your water equipment with regular maintenance. Depending on what product you choose, our service includes; replacing filters, regular sanitisation, and replacing parts.</p>
            </li>
            <li className="relative">
              <FaHeadset  className="absolute top-0 -left-10 text-azul text-4xl" />
              <h4>Call-outs</h4>
              <p>In the unlikely event you have any issues; just call us and we’ll either fix or replace your machine. We provide a fully managed customer support service to keep you up-and-running.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetails
