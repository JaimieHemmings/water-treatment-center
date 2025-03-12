import React from 'react'
import Link from 'next/link';
import { IoIosMail } from "react-icons/io";

interface StickyButtonProps {
  label: string
  link: string
}

const StickyButton: React.FC<StickyButtonProps> = ({ label, link }) => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/4 z-50 uppercase border-[1px] border-selectiveyellow/90 rounded-l-lg border-r-0">
      <Link 
        href={link}
        className="
          bg-darkblue 
          text-white 
          font-medium 
          px-2
          py-4
          md:px-4 
          md:py-9 
          rounded-l-lg 
          shadow-lg 
          hover:bg-selectiveyellow 
          transition-all 
          duration-300 
          flex 
          flex-col 
          items-center
          gap-4
          writing-mode-vertical
        "
      >
        <span className="[writing-mode:vertical-rl] rotate-180 tracking-widest flex items-center gap-2">
          <IoIosMail className="rotate-90 text-2xl font-bold" />
          {label}
        </span>
      </Link>
    </div>
  )
}

export default StickyButton