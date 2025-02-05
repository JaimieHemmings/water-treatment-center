import React from "react";
import TextBlockComponent from "./TextBlockComponent";

interface TextBlockProps {
  title: string;
  content: any;
}

export const TextBlock: React.FC<TextBlockProps> = ({ content, title }) => {

  return (
    <section className="w-full bg-darkblue py-[5rem] bg-gradient-to-br from-argentinian to-azul">
      <TextBlockComponent title={title} content={content} />
    </section>
  );
};