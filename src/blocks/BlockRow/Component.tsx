import React from 'react';
import { FaHandHoldingWater, FaWater } from "react-icons/fa";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { IoWaterSharp } from "react-icons/io5";
import { LuGlassWater } from "react-icons/lu";
import { GiWaterBottle, GiWaterGallon } from "react-icons/gi";
import { CMSLink } from '@/components/Link';

interface BlockRowProps {
  items: Array<{
    text: string;
    link: string;
    linkLabel: string;
    icon: 'water' | 'filter' | 'test' | 'plant';
  }>;
}

export const BlockRow: React.FC<BlockRowProps> = ({ items }) => {
 return (
  <section className="bg-darkblue py-[5rem] relative z-20">
    <div className="container flex flex-col md:flex-row justify-around gap-10 -mt-[10rem]">
      {items.map((item, index) => {
        const Icon = {
          water: FaHandHoldingWater,
          filter: FaWater,
          test: FaGlassWaterDroplet,
          plant: IoWaterSharp,
        }[item.icon];

        return (
          <div key={index} className="bg-azul p-10 text-center flex flex-col md:basis-1/3 justify-between">
            <Icon className="mx-auto text-8xl pb-5" />
            <h2 className="text-2xl pb-5">{item.text}</h2>
            <CMSLink url={item.link} appearance="link"
              className="inline-flex
                        items-center
                        justify-center
                        whitespace-nowrap
                        font-medium
                        transition-colors
                        disabled:pointer-events-none
                        disabled:opacity-50
                        h-11 px-8 mt-3
                        bg-white 
                        text-azul
                        border-2
                        border-selectiveyellow
                        hover:bg-darkblue
                        hover:text-white
                        text-lg
                        relative
                        z-30
                        no-underline
                        hover:no-underline"
              >
              {item.linkLabel}
            </CMSLink>
          </div>
        );
      })}
    </div>
  </section>
 )
}