'use client';
import React from 'react'
import CustomLink from '@/components/CustomLink'
import { useCallback } from 'react'

const ProductNav = () => {
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])
  return (
    <div className="w-full bg-antiflashwhite p-3 text-jet shadow-[0px_4px_6px_0px_rgba(74,_144,_226,_0.4)]">
      <div className="container flex flex-row gap-4 justify-between align-middle items-center">
        <ul className="flex flex-row gap-4 text-azul">
          <li>
            <a 
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="font-semibold text-lg text-jet hover:text-azul hover:border-b-2 hover:border-azul transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a 
              href="#details"
              onClick={(e) => scrollToSection(e, 'details')}
              className="font-semibold text-lg text-jet hover:text-azul hover:border-b-2 hover:border-azul transition-colors"
            >
              Details
            </a>
          </li>
          <li>
            <a 
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="font-semibold text-lg text-jet hover:text-azul hover:border-b-2 hover:border-azul transition-colors"
            >
              Services
            </a>
          </li>
        </ul>
        <CustomLink label="Contact Us For A Quote" link="/products" theme="light" className='m-0' />
      </div>
    </div>
  )
}

export default ProductNav
