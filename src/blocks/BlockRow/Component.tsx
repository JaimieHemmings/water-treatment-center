import React from 'react';
import { FaHandHoldingWater, FaWater } from "react-icons/fa";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { IoWaterSharp } from "react-icons/io5";
import { LuGlassWater } from "react-icons/lu";
import { GiWaterBottle, GiWaterGallon } from "react-icons/gi";
import { CMSLink } from '@/components/Link';
import { AnimateIn } from '@/components/Animations/AnimateIn';

interface BlockRowProps {
  shiftUp: boolean;
  items: Array<{
    text: string;
    link: {
      slug: string;
    };
    linkLabel: string;
    icon: 'water' | 'filter' | 'test' | 'plant';
  }>;
}

export const BlockRow: React.FC<BlockRowProps> = ({ shiftUp, items }) => {
 return (
  <section className="bg-darkblue pt-[5rem] relative z-20">
    <div className={`container flex flex-col md:flex-row justify-around gap-10 ${shiftUp ? '-mt-40' : ''}`}>
      {items.map((item, index) => {
        const Icon = {
          gallon: GiWaterGallon,
          bottle: GiWaterBottle,
          glass: LuGlassWater,
          droplet: FaGlassWaterDroplet,
          sharp: IoWaterSharp,
          hand: FaHandHoldingWater,
          water: FaWater,
        }[item.icon];

        return (
          <div key={index} className="
            bg-gradient-to-br
            from-azul/100
            to-teal/100
            p-10
            text-center
            flex
            flex-col
            md:basis-1/3
            justify-between
            text-white"
          >
            <AnimateIn
              animation={{
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
              }}
            >
            <Icon className="mx-auto text-8xl pb-5" />
            <h2 className="text-2xl pb-5">{item.text}</h2>
            <CMSLink url={item.link.slug}
              appearance="link"
              className="inline-flex
                        items-center
                        justify-center
                        whitespace-nowrap
                        font-medium
                        transition-colors
                        disabled:pointer-events-none
                        disabled:opacity-50
                        h-11 px-8 mt-3
                        border-2
                        text-white
                        border-white
                        hover:bg-white
                        hover:text-azul
                        text-lg
                        relative
                        z-30
                        no-underline
                        hover:no-underline"
              >
              {item.linkLabel}
            </CMSLink>
            </AnimateIn>
          </div>
        );
      })}
    </div>
  </section>
 )
}