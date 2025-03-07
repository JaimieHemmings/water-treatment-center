import React from 'react'
import Link from 'next/link'

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
          text-jet 
          font-medium 
          px-3 
          py-9 
          rounded-l-lg 
          shadow-lg 
          hover:bg-selectiveyellow/90 
          transition-all 
          duration-300 
          flex 
          items-center 
          justify-center
          writing-mode-vertical
        "
      >
        <span className="[writing-mode:vertical-rl] rotate-180 text-white tracking-widest">
          {label}
        </span>
      </Link>
    </div>
  )
}

export default StickyButton