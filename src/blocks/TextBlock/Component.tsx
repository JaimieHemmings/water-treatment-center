import React from "react";
import RichText from "@/components/RichText";
import { AnimateIn } from "@/components/Animations/AnimateIn";
import { FaDroplet } from "react-icons/fa6";

interface TextBlockProps {
  title: string;
  content: any;
}

export const TextBlock: React.FC<TextBlockProps> = ({ content, title }) => {

  return (
    <section className="w-full bg-darkblue py-[5rem] bg-gradient-to-br from-argentinian to-azul">
      <div className="container pb-5">
        <AnimateIn
          animation={{
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          }}
        >
          <h2 className={`text-sm text-selectiveyellow m-0 pb-5 tracking-widest uppercase`}>
            <FaDroplet className="inline-block text-selectiveyellow mr-2 relative -top-[2px]" />
            {title}
          </h2>
        </AnimateIn>
        <AnimateIn
          animation={{
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          }}
        >
        {content && <RichText data={content} enableGutter={false} className="max-w-none prose md:prose-md mb-5 text-2xl md:text-5xl text-white mr-0 animate-text-af29" />}
        </AnimateIn>
      </div>
    </section>
  );
};