import React from "react";

interface ThreeColBlockProps {
  columns: {
    title: string;
    content: string;
  }[];
}

export const ThreeColBlock: React.FC<ThreeColBlockProps> = ({
  columns,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-4 pt-5">
      {columns.map((column, index) => (
        <div key={index} className="flex flex-col justify-start gap-4 text-white">
          <h2 className="text-2xl md:text-4xl font-bold">{column.title}</h2>
          <p className="prose md:prose-md md:prose-lg text-white max-w-none">{column.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ThreeColBlock;