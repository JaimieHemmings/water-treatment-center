import Link from 'next/link';
import React from 'react';
import { FaHandHoldingWater } from "react-icons/fa";

export const BlockRow: React.FC = () => {
 return (
  <section className="bg-darkblue py-[5rem] relative z-20">
    <div className="container flex flex-col md:flex-row justify-around gap-10 -mt-[10rem]">
      <div className="bg-azul p-10 text-center flex flex-col gap-10 md:basis-1/3">
        <FaHandHoldingWater className="mx-auto text-8xl" />
        <h2 className="text-2xl md:text-4xl">This is a test</h2>
        <Link href="/about">
          Learn More
        </Link>
      </div>
      <div className="bg-azul p-10 text-center flex flex-col gap-10 md:basis-1/3">
        <FaHandHoldingWater className="mx-auto text-8xl" />
        <h2 className="text-2xl md:text-4xl">This is a test</h2>
        <Link href="/about">
          Learn More
        </Link>
      </div>
      <div className="bg-azul p-10 text-center flex flex-col gap-10 md:basis-1/3">
        <FaHandHoldingWater className="mx-auto text-8xl" />
        <h2 className="text-2xl md:text-4xl">This is a test</h2>
        <Link href="/about">
          Learn More
        </Link>
      </div>
    </div>
  </section>
 )
}