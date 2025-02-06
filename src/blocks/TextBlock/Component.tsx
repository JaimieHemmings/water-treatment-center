import React from "react";
import RichText from "@/components/RichText";

interface TextBlockProps {
  title: string;
  content: any;
}

export const TextBlock: React.FC<TextBlockProps> = ({ content, title }) => {

  return (
    <section className="w-full bg-darkblue py-[5rem] bg-gradient-to-br from-argentinian to-azul">
      <div className="container pb-5">
        <h2 className="block text-selectiveyellow font-semibold pb-5 animate-text-af29">
          {title}
        </h2>
        {content && <RichText data={content} enableGutter={false} className="max-w-none prose md:prose-md mb-5 text-2xl md:text-5xl text-white mr-0 animate-text-af29" />}
      </div>
    </section>
  );
};