import Image from "next/image";
import React from "react";

export const ServicesBlock: any = () => {
  return (
    <section className="bg-argentinian py-[5rem] relative">
      <Image
        src="/dots.svg"
        alt="decorative image of dots"
        className="absolute bottom-0 right-0 z-10 scale-x-[-1]"
        height="300"
        width="200"
      />
      <Image
        src="/dots.svg"
        alt="decorative image of dots"
        className="absolute top-0 left-0 z-10"
        height="300"
        width="200"
      />
      <div className="container text-center">
        <h1 className="text-6xl font-semibold md:max-w-[60%] mx-auto mb-3">
          Comprehensive Repairs and Maintenance
        </h1>
        <p>Keep your water systems running smoothly with our expert servicing solutions</p>
      </div>
      <div className="container flex flex-col md:flex-row justify-between mx-auto gap-4 py-[5rem]">
        <div className="md:basis-1/2 p-5">
          <h2 className="text-2xl md:text-4xl font-semibold pb-5">Repairs &amp; Maintenance</h2>
          <p className="pb-5">From minor adjustments to major repairs, our skilled technicians are here to fix any issues and maintain the integrity of your water treatment systems, ensuring they deliver the highest quality water.</p>
          <ul>
            <li>
              <Image
                src="/tick.png"
                alt="decorative image of dots"
                className="inline-block mr-3"
                height="20"
                width="15"
              />
              Expert technicians with years of experience</li>
            <li>
              <Image
                src="/tick.png"
                alt="decorative image of dots"
                className="inline-block mr-3"
                height="20"
                width="15"
              />
              Timely service to minimise downtime
            </li>
          </ul>
        </div>
        <div className="md:basis-1/2">
          <Image src="/technician.png" alt="Technician" width={500} height={500} className="mx-auto w-full h-auto" />
        </div>
      </div>
      <div className="container flex flex-col justify-between mx-auto gap-4 md:flex-row-reverse relative z-20">
        <div className="md:basis-1/2 px-5">
          <h2 className="text-2xl md:text-4xl font-semibold pb-5">UV System Servicing</h2>
          <p className="pb-5">Regular servicing of your UV system is crucial for effective bacteria and virus removal. We provide comprehensive checks to ensure it operates at peak performance, delivering safe, clean water for your home.</p>
          <ul>
            <li>
              <Image
                src="/tick.png"
                alt="decorative image of dots"
                className="inline-block mr-3"
                height="20"
                width="15"
              />
              Cost effective maintenance plans</li>
            <li>
              <Image
                src="/tick.png"
                alt="decorative image of dots"
                className="inline-block mr-3"
                height="20"
                width="15"
              />
              Preventative care to avoid future issues
            </li>
          </ul>
        </div>
        <div className="md:basis-1/2">
          <Image src="/uv-system.png" alt="Technician" width={500} height={500} className="mx-auto w-full h-auto" />
        </div>
      </div>
    </section>
  )
};