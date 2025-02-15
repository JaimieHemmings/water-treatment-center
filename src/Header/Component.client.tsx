import Link from 'next/link'
import React from 'react'
import { MdPhone, MdEmail, MdLocationOn, MdWarehouse } from "react-icons/md";

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {

  return (
    <>
    <div className="w-full bg-white hidden-sm md:block">
      <div className="container py-2 flex justify-end items-center gap-4">
        <div>
          <p className="text-sm text-jet">
            <MdPhone className="inline-block" />
            {' '}
            <a href="tel:0861715686" className="text-jet">
              086 1715686
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm text-jet"><MdEmail className="inline-block" />{' '}
            <a
            href="mailto:info@thewatertreatmentcentre.ie"
            className="text-jet">
              info@thewatertreatmentcentre.ie
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