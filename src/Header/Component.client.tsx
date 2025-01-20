'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import type { Header } from '@/payload-types'
import Image from 'next/image'
import MenuBurger from './menuBurger'

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
          <MenuBurger />
        </div>
      </nav>
    </header>
  )
}