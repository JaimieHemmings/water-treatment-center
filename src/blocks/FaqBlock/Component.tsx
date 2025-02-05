import React from "react";
import SectionTitle from "@/components/SectionTitle";
import FAQBlockClient from "./client";
import Link from "next/link";
import Image from "next/image";

interface FaqBlockProps {
  title: string;
  questions: {
    question: string;
    answer: string;
  },
  sideTitle: string;
  sideContent: string;
  linkLabel: string;
  linkURL: string;
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
    <section className="py-[5rem] bg-darkblue text-white relative">
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
      <SectionTitle title={title} />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 basis-2/3">
            <FAQBlockClient questions={questions} />
          </div>
          <div className="basis-1/3 md:px-5">
            <h2 className="text-white text-2xl md:text-4xl font-semibold pb-5">
              {sideTitle}
            </h2>
            <p className="text-white">
              {sideContent}
            </p>
            <Link href={linkURL}>
                {linkLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqBlock;