'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import type { Header } from '@/payload-types'
import Image from 'next/image'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = () => {
  const [isNavVisible, setIsNavVisible] = useState(false)

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible)
  }
  return (
    <header id="navbar" className="w-full z-30 sticky top-0 left-0 bg-jet border-argentinian border-b-2">
      <nav className="flex flex-row justify-between container">
        <Link href="/" className="text-xs font-semibold px-3 py-2">
          <Image src="/logo.webp" alt="The Water Treatment Centre" width={212} height={55} className="max-h-[50px] w-auto" />
        </Link>
        <div className={`transition-all flex flex-col md:flex-row max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full max-md:h-screen max-md:bg-jet max-md:justify-center nav-items ${isNavVisible ? '' : 'max-md:hidden'}`}>
          <Link href="/about" className="px-5 py-3 uppercase flex flex-col justify-center border-t-4 border-t-jet hover:border-t-selectiveyellow transition-all hover:bg-[#141414] text-sm md:flex-1">
            About
            <span className="block uppercase font-semibold whitespace-nowrap">Who We Are</span>
          </Link>
          <Link href="/services" className="px-5 py-3 uppercase flex flex-col justify-center border-t-4 border-t-jet hover:border-t-selectiveyellow transition-all hover:bg-[#141414] text-sm md:flex-1">
            Services
            <span className="block uppercase font-semibold whitespace-nowrap">What We Do</span>
          </Link>
          <Link href="/products" className="px-5 py-3 uppercase flex flex-col justify-center border-t-4 border-t-jet hover:border-t-selectiveyellow transition-all hover:bg-[#141414] text-sm md:flex-1">
            Products
            <span className="block uppercase font-semibold whitespace-nowrap">Water Purification</span>
          </Link>
          <Link href="/news" className="px-5 py-3 uppercase flex flex-col justify-center border-t-4 border-t-jet hover:border-t-selectiveyellow transition-all hover:bg-[#141414] text-sm md:flex-1">
            News
            <span className="block uppercase font-semibold whitespace-nowrap">Latest Work</span>
          </Link>
          <Link href="/contact" className="px-5 py-3 uppercase bg-selectiveyellow flex flex-col justify-center text-sm text-jet md:flex-1">
            Contact
            <span className="block uppercase font-semibold whitespace-nowrap">Get In Touch</span>
          </Link>
        </div>
        <div className="menu-burger flex flex-col justify-center items-center md:hidden" onClick={toggleNavVisibility}>
        <svg
          className="hb"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          stroke="#eee"
          strokeWidth={0.6}
          fill="rgba(0,0,0,0)"
          strokeLinecap="round"
          style={{ cursor: "pointer", width: "50px", height: "50px", zIndex: "100" }}
        >
          <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
            <animate
              dur="0.2s"
              attributeName="d"
              values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
              fill="freeze"
              begin="start.begin"
            />
            <animate
              dur="0.2s"
              attributeName="d"
              values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
              fill="freeze"
              begin="reverse.begin"
            />
          </path>
          <rect width="10" height="10" stroke="none">
            <animate dur="2s" id="reverse" attributeName="width" begin="click" />
          </rect>
          <rect width="10" height="10" stroke="none">
            <animate
              dur="0.001s"
              id="start"
              attributeName="width"
              values="10;0"
              fill="freeze"
              begin="click"
            />
            <animate
              dur="0.001s"
              attributeName="width"
              values="0;10"
              fill="freeze"
              begin="reverse.begin"
            />
          </rect>
        </svg>
        </div>
      </nav>
    </header>
  )
}