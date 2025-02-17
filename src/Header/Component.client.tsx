import Link from 'next/link'
import React from 'react'
import { MdPhone, MdEmail } from "react-icons/md";

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

export const HeaderClient: any = ({ data }) => {
  return (
    <>
    <div className="w-full bg-white hidden-sm md:block">
      <div className="container py-2 flex justify-end items-center gap-4">
        <div>
          <p className="text-sm text-jet">
            <a href="tel:0861715686" className="text-jet">
              <MdPhone className="inline-block" />
              <span className="hidden-sm">
                {' '}
                086 1715686
              </span>
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm text-jet">
            <a
            href="mailto:info@thewatertreatmentcentre.ie"
            className="text-jet">
              <MdEmail className="inline-block" />
              <span className="hidden-sm">
                {' '}
                info@thewatertreatmentcentre.ie
              </span> 
            </a>
          </p>
        </div>
      </div>
    </div>
    <header className="bg-darkblue text-white top-0 left-0 w-full z-[9999] border-b-2 border-azul sticky">
      <div className="flex justify-between container">
        <Link href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0 py-3" />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
    </>
  )
}