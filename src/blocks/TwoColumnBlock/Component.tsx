import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RichText from "@/components/RichText";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { AnimateIn } from "@/components/Animations/AnimateIn";

gsap.registerPlugin(ScrollTrigger);

interface TwoColumnBlockProps {
  contentleft: string;
  contentright: any;
  title: string;
  mainContent?: any;
}

export const TwoColumnBlock: React.FC<TwoColumnBlockProps> = ({ contentleft, contentright, title, mainContent }) => {

  return (
    <section className="w-full bg-darkblue py-5 md:py-[3rem] text-white relative">
      <AnimateIn
        animation={{
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }}
      >
        <SectionTitle title={title} subtitle={mainContent} />
      </AnimateIn>
      <div className="container pb-5 flex flex-col md:flex-row justify-between">
        <div className="md:basis-1/3 pt-5">
        <AnimateIn
          animation={{
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          }}
        >
            <p className="max-w-none md:prose-md prose mb-5 text-2xl md:text-md text-white font-light pt-3 animate-text-90b0">
              {contentleft}
            </p>
          </AnimateIn>
        </div>
        <div className="md:basis-2/3 md:p-5">
          <AnimateIn
            animation={{
              y: 60,
              opacity: 0,
              duration: 1,
              ease: "power2.out",
            }}
          >
            {contentright && <RichText data={contentright} enableGutter={false} className="max-w-none prose md:prose-md mb-5 text-md md:xl mr-0 animate-text-90b0 [&_strong]:font-bold [&_strong]:text-white" />}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};