import React from "react";
import { FaDroplet } from "react-icons/fa6";

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
    <div className={`flex flex-col lg:flex-row justify-center pt-5 ${darkmode ? 'bg-darkblue border-selectiveyellow text-white' : 'bg-white border-jet text-jet'} relative z-20 border-t-2`}>
      {columns.map((column, index) => (
        <div key={index} className="md:basis-1/3 flex flex-col justify-start gap-4 p-3">
          <p className="text-2xl md:text-4xl flex flex-col gap-2">
            <span className="flex flex-row gap-2 font-bold ">
              <FaDroplet className="inline-block text-selectiveyellow relative top-[4px]" />
              {column.title}
            </span>
            <span className="text-base leading-relaxed prose md:prose-md">
              {column.content}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ThreeColBlock;