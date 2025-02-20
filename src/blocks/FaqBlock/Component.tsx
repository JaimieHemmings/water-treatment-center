import React from "react";
import SectionTitle from "@/components/SectionTitle";
import FAQBlockClient from "./client";
import Image from "next/image";
import { CustomLink } from "@/components/CustomLink";

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
          src="/splash.png"
          alt="Decorative splash"
          className="w-full h-full object-cover opacity-20"
          layout="fill"
        />
      </div>
      <div className="relative z-10">
        <SectionTitle title={title} />
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 basis-2/3">
              <FAQBlockClient questions={questions} />
            </div>
            <div className="basis-1/3 md:px-5">
              <h2 className="text-slate-700 text-2xl md:text-4xl font-semibold pb-5">
                {sideTitle}
              </h2>
              <p className="text-slate-700 pb-5">
                {sideContent}
              </p>
              <CustomLink theme="light" label={linkLabel} link={linkURL.slug} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqBlock;