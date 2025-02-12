import React from 'react';
import { FaHandHoldingWater, FaWater } from "react-icons/fa";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { IoWaterSharp } from "react-icons/io5";
import { LuGlassWater } from "react-icons/lu";
import { GiWaterBottle, GiWaterGallon } from "react-icons/gi";
import { AnimateIn } from '@/components/Animations/AnimateIn';
import CustomLink from '@/components/CustomLink';
import Image from 'next/image';

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
    <div className={`container flex flex-col md:flex-row justify-between gap-10 ${shiftUp ? '-mt-40' : ''}`}>
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
            text-white
            relative"
          >
            <Image
              src="/dots.svg"
              alt="Decorative dots"
              className="absolute bottom-4 right-0 z-10 scale-x-[-1] w-20 h-29"
              height={150}
              width={100}
            />
            <Image
              src="/dots.svg"
              alt="Decorative dots"
              className="absolute top-4 left-0 z-10 w-20 h-29"
              height={150}
              width={100}
            />
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
            <CustomLink theme="white" label={item.linkLabel} link={item.link.slug} />
            </AnimateIn>
          </div>
        );
      })}
    </div>
  </section>
 )
}