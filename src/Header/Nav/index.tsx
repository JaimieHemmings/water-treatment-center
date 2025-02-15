'use client';
import React, { useState } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = data?.navItems || []

  const linkClasses = "font-semibold no-underline hover:no-underline hover:bg-azul px-5 py-2 text-white text-sm flex items-center max-md:py-8"
  const mobileMenuClasses = `max-md:absolute max-md:top-full right-0 h-full w-full justify-centre md:flex-row flex bg-darkblue md:relative md:w-auto md:bg-transparent max-md:pt-5
    ${isMenuOpen ? 'flex flex-col' : 'hidden md:flex md:flex-row'}`

  return (
    <nav className="flex items-center">
      {/* Burger Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-white"
        aria-label="Toggle menu"
      >
        <svg 
          className="w-8 h-8" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation Items */}
      <div className={mobileMenuClasses}>
        {navItems.map(({ link }, i) => {
          return (
            <CMSLink 
              key={i} 
              {...link} 
              appearance="link"
              className={`${linkClasses} w-full md:w-auto bg-darkblue hover:bg-teal align-middle`}
            />
          )
        })}
        <Link 
          href="/contact" 
          className={`${linkClasses} bg-azul hover:bg-teal w-full md:w-auto`}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  )
}