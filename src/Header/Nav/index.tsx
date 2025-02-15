import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  const linkClasses = "font-semibold no-underline hover:no-underline hover:bg-azul px-3 h-full text-white text-sm flex items-center"

  return (
    <nav className="flex items-center">
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink key={i} {...link} appearance="link" className={linkClasses} />
        )
      })}
      <Link href="/contact" className="font-semibold no-underline hover:no-underline px-3 h-full text-white text-sm flex items-center bg-azul hover:bg-teal">
        Contact Us
      </Link>
    </nav>
  )
}