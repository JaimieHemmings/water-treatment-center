'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import { IoPhonePortraitSharp } from "react-icons/io5";
import { Logo } from '@/components/Logo/Logo'
import CustomLink from '@/components/CustomLink';
import { HeaderNav } from './Nav';
import SearchForm from './SearchForm';
import { Fade as Hamburger } from 'hamburger-react'
import { FaWhatsapp } from "react-icons/fa";

const NavBar = ({docs, supportingDocs, data, subDocs}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-full py-1 sticky top-0 z-[999] bg-darkblue border-b-2 border-white">
      <div className="container px-1 md:px-0">
        <div className="flex flex-row gap-4 w-full justify-between">
          <Link href="/" className="my-auto max-lg:basis:1/3 lg:w-[200px] shrink-0">
            <Logo loading="eager" priority="high" className="invert dark:invert-0 py-3" />
          </Link>
          <div className="lg:flex-1 flex flex-row gap-4 justify-end max-lg:basis-1/3">
            <div className="hidden md:flex">
              <SearchForm />
            </div>
            <CustomLink link="/contact" label="Contact" theme="light" className="my-auto hidden lg:flex" />
            <div className="hidden flex-col justify-center gap-0 my-auto lg:flex">
              <a href="tel:0579333942" className="flex items-center gap-2 text-white">
                <IoPhonePortraitSharp />
                <span>057 9333942</span>
              </a>
              <a href="tel:0861715686" className="flex items-center gap-2 text-white">
                <IoPhonePortraitSharp />
                <span>086 1715686</span>
              </a>
            </div>
            <div className="flex items-center max-lg:hidden">
              <Link
                className="text-white hover:text-selectiveyellow"
                href="https://wa.me/353861715686?text=Hi!%20I'd%20like%20some%20more%20infomation%20about%20water%20filtration%20systems."
                target="_blank"
              >
                <FaWhatsapp className="w-8 h-8" />
              </Link>
            </div>
            <div
              className="flex max-lg:basis-1/3 lg:hidden justify-between items-center gap-4"
            >
              <Hamburger 
                color="#ffffff" 
                toggled={isOpen}
                toggle={setIsOpen}
                onToggle={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <HeaderNav docs={docs} supDocs={supportingDocs} isOpen={isOpen} setIsOpen={setIsOpen} data={data} subDocs={subDocs} />
      </div>
    </div>
  )
}

export default NavBar
