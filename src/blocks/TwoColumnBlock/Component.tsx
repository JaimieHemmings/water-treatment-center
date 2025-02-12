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
    <section className="w-full bg-darkblue py-5 md:py-[5rem] text-white relative">
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute bottom-4 right-0 z-10 scale-x-[-1] w-48 h-72 md:w-48 md:h-72"
        height={300}
        width={200}
      />
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute top-4 left-0 z-10 w-48 h-72 md:w-48 md:h-72"
        height={300}
        width={200}
      />
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
      <div className="container pb-5 flex flex-col md:flex-row justify-between md:border-b-8 border-selectiveyellow">
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