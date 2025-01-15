'use client'
import Link from 'next/link'
import React from 'react'
import type { Header } from '@/payload-types'
import Image from 'next/image'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = () => {

  return (
    <header id="navbar" className="w-full z-30 sticky top-0 left-0 bg-jet border-argentinian border-b-2">
      <nav className="flex flex-row justify-between container">
        <Link href="/" className="text-xs font-semibold px-3 py-2">
          <Image src="/logo.jpg" alt="The Water Treatment Centre" width={2560} height={663} className="max-h-[60px] w-auto" />
        </Link>
        <div className="flex flex-row max-md:hidden">
          <Link href="/about" className="px-5 py-3 uppercase flex flex-col justify-center border-t-4 border-t-jet hover:border-t-selectiveyellow transition-all hover:bg-[#141414] text-sm flex-1">
            About
            <span className="block uppercase font-semibold whitespace-nowrap">Who We Are</span>
          </Link>
          <Link href="/about" className="px-5 py-3 uppercase flex flex-col justify-center border-t-4 border-t-jet hover:border-t-selectiveyellow transition-all hover:bg-[#141414] text-sm flex-1">
            Services
            <span className="block uppercase font-semibold whitespace-nowrap">What We Do</span>
          </Link>
          <Link href="/about" className="px-5 py-3 uppercase flex flex-col justify-center border-t-4 border-t-jet hover:border-t-selectiveyellow transition-all hover:bg-[#141414] text-sm flex-1">
            News
            <span className="block uppercase font-semibold whitespace-nowrap">Latest Work</span>
          </Link>
          <Link href="/about" className="px-5 py-3 uppercase flex flex-col justify-center border-t-4 border-t-jet hover:border-t-selectiveyellow transition-all hover:bg-[#141414] text-sm flex-1">
            About
            <span className="block uppercase font-semibold whitespace-nowrap">Who We Are</span>
          </Link>
          <Link href="/" className="px-5 py-3 uppercase bg-selectiveyellow flex flex-col justify-center text-sm text-jet flex-1">
            Contact
            <span className="block uppercase font-semibold whitespace-nowrap">Get In Touch</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
