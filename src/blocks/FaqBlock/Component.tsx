import React from "react";
import FAQBlockClient from "./client";
import Image from "next/image";
import CustomLink from "@/components/CustomLink";
import { FaDroplet } from "react-icons/fa6";

interface FaqBlockProps {
  title: string;
  questions: {
    question: string;
    answer: string;
  },
  sideTitle: string;
  sideContent: string;
  linkLabel: string;
  linkURL: {
    slug: string;    
  };
}

export const FaqBlock: React.FC<FaqBlockProps> = ({
  title,
  questions,
  sideTitle,
  sideContent,
  linkLabel,
  linkURL,
}) => {
  return (
    <section className="py-[5rem] bg-antiflashwhite text-white relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/ripples.jpg"
          alt="Decorative splash"
          className="w-full h-full object-cover opacity-20"
          fill
        />
      </div>
      <div className="relative z-10">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 basis-1/2">
            <div className="pl-5 border-l-[5px] border-selectiveyellow mb-5">
              <h2 className="text-sm md:text-sm text-selectiveyellow m-0 pb-5 tracking-widest uppercase">
                <FaDroplet className="inline-block text-selectiveyellow mr-2" />
                {title}
              </h2>
              <p className="text-textblue text-2xl md:text-4xl font-semibold">
                {sideTitle}
              </p>
            </div>
              <p className="text-textblue pb-5 prose md:prose-lg">
                {sideContent}
              </p>
              <div className="w-full flex flex-row justify-start align-middle">
                <CustomLink
                  link={`/${linkURL.slug}`}
                  theme="dark"
                  label={linkLabel}
                />
              </div>
            </div>
            <div className="basis-1/2 md:px-5">
              <FAQBlockClient questions={questions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqBlock;