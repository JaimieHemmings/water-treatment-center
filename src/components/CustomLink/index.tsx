import React from "react";
import Link from "next/link";
import { cn } from "@/utilities/cn";

interface CustomLinkProps {
  theme: 'light' | 'dark' | 'white';
  type?: string;
  label?: string;
  link: string;
  className?: string;
  form?: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  theme, 
  type, 
  label, 
  link,
  className,
  form
}) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const themeClasses = {
    light: "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border-2 bg-selectiveyellow text-white border-selectiveyellow hover:bg-white hover:text-selectiveyellow text-lg hover:border-selectiveyellow no-underline",
    dark: "no-underline bg-darkblue text-base px-10 py-3 uppercase hover:bg-white text-white hover:text-darkblue border-2 border-darkblue tracking-widest",
    white: "no-underline bg-white text-base px-10 py-3 uppercase hover:bg-selectiveyellow text-jet hover:text-white"
  };

  return (
    <Link
      {...(type ? { type } : {})}
      {...(form ? { form } : {})}
      href={link}
      className={cn(
        baseClasses,
        themeClasses[theme],
        className
      )}
    >
      {label}
    </Link>
  );
};

export default CustomLink;