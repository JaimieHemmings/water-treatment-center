'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import type { Header } from '@/payload-types'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = () => {
  const [isNavVisible, setIsNavVisible] = useState(false)

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible)
  }

  const navItems = [
    { href: "/about", label: "About", subLabel: "Who We Are" },
    { href: "/services", label: "Services", subLabel: "& Maintenance" },
    { href: "/products", label: "Products", subLabel: "Water Purification" },
    { href: "/news", label: "News", subLabel: "Latest Work" },
    { href: "/contact", label: "Contact", subLabel: "Get In Touch", isSpecial: true }
  ]

  return (
    <header id="navbar" className="w-full z-50 sticky top-0 left-0 bg-jet border-argentinian border-b-2 text-white">
      <nav className="relative flex flex-row justify-between container">
        <Link href="/" className="z-50 text-xs font-semibold px-3 py-2">
          <Image 
            src="/logo.webp" 
            alt="The Water Treatment Centre" 
            width={212} 
            height={55} 
            priority 
            className="max-h-[50px] w-auto" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row">
          {navItems.map(({ href, label, subLabel, isSpecial }) => (
            <Link 
              key={href}
              href={href} 
              className={`
                px-5 py-3 
                uppercase 
                flex flex-col 
                justify-center 
                border-t-4 
                border-t-jet
                hover:border-t-argentinian 
                transition-all 
                hover:bg-[#141414] 
                text-sm 
                md:flex-1
                ${isSpecial ? 'bg-argentinian border-t-argentinian text-white hover:text-white' : ''}
              `}
            >
              {label}
              <span className="block uppercase font-semibold whitespace-nowrap">
                {subLabel}
              </span>
            </Link>
          ))}
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`
            fixed 
            z-40 
            top-0 
            left-0 
            w-full 
            h-screen 
            bg-jet 
            flex 
            flex-col 
            justify-center 
            items-center 
            md:hidden
            transition-opacity 
            duration-300 
            ${isNavVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
        >
          {navItems.map(({ href, label, subLabel, isSpecial }) => (
            <Link 
              key={href}
              href={href} 
              className={`
                px-5 py-3
                w-full 
                uppercase 
                flex flex-col 
                justify-center 
                border-t-4 
                border-t-jet 
                hover:border-t-selectiveyellow 
                transition-all 
                hover:bg-[#141414] 
                text-sm 
                ${isSpecial ? 'bg-selectiveyellow text-jet hover:text-white' : ''}
              `}
            >
              {label}
              <span className="block uppercase font-semibold whitespace-nowrap">
                {subLabel}
              </span>
            </Link>
          ))}
        </div>
        
        <button 
          className="z-50 menu-burger flex flex-col justify-center items-center md:hidden" 
          onClick={toggleNavVisibility}
          aria-label="Toggle Navigation Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            stroke="#eee"
            strokeWidth={0.6}
            fill="rgba(0,0,0,0)"
            strokeLinecap="round"
            className="cursor-pointer w-[50px] h-[50px]"
          >
            <path d={isNavVisible 
              ? "M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" 
              : "M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"} 
            />
          </svg>
        </button>
      </nav>
    </header>
  )
}