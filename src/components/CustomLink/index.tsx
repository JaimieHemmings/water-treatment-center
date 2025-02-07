import React from "react";
import Link from "next/link";
import { cn } from "@/utilities/cn";

interface CustomLinkProps {
  type: 'light' | 'dark' | 'white';
  label: string;
  link: string;
  className?: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({ 
  type, 
  label, 
  link,
  className 
}) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const typeClasses = {
    light: "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border bg-selectiveyellow text-jet border-jet hover:bg-jet hover:text-selectiveyellow text-lg hover:border-selectiveyellow",
    dark: "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 bg-jet border border-selectiveyellow text-selectiveyellow hover:bg-selectiveyellow hover:text-jet text-lg",
    white: "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 underline-offset-4 inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border-2 text-white border-white hover:bg-white hover:text-azul text-lg relative z-30 no-underline hover:no-underline inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border-2 text-white border-white hover:bg-white hover:text-azul text-lg relative z-30 no-underline hover:no-underline"
  };

  return (
    <Link 
      href={link}
      className={cn(
        baseClasses,
        typeClasses[type],
        className
      )}
    >
      {label}
    </Link>
  );
};

export default CustomLink;