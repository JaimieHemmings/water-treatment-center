'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import { IoPhonePortraitSharp } from "react-icons/io5";
import { Logo } from '@/components/Logo/Logo'
import CustomLink from '@/components/CustomLink';
import { HeaderNav } from './Nav';
import SearchForm from './SearchForm';
import { Fade as Hamburger } from 'hamburger-react'

const NavBar = ({docs, supportingDocs, data}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-full py-1 sticky top-0 z-[999] bg-darkblue">
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
        <HeaderNav docs={docs} supDocs={supportingDocs} isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
      </div>
    </div>
  )
}

export default NavBar
