import React from "react";

interface ThreeColBlockProps {
  columns: {
    title: string;
    content: string;
  }[];
  darkmode: boolean;
}

export const ThreeColBlock: React.FC<ThreeColBlockProps> = ({
  columns, darkmode
}) => {
  return (
    <div className={`flex flex-col lg:flex-row justify-center pt-5 ${darkmode ? 'bg-darkblue border-white/60 text-white' : 'bg-white border-jet text-jet'} relative z-20 border-t-2`}>
      {columns.map((column, index) => (
        <div key={index} className="flex flex-col justify-start gap-4 p-3">
          <h2 className="text-2xl md:text-4xl font-bold">{column.title}</h2>
          <p className="prose md:prose-md md:prose-lg max-w-none">{column.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ThreeColBlock;