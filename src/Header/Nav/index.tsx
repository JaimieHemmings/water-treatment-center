'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import Link from 'next/link'

export const HeaderNav: React.FC<{ data: HeaderType }> = () => {

  return (
    <nav className="flex flex-row gap-3 items-center">
      <div>
        <Link href="/">
          Home
        </Link>
      </div>
      <div>
        <Link href="/">
          Home
        </Link>
      </div>
      <div>
        <Link href="/">
          Home
        </Link>
      </div>
      <div>
        <Link href="/">
          Home
        </Link>
      </div>
      <div>
        <Link href="/">
          Home
        </Link>
      </div>
      <div>
        <Link href="/">
          Home
        </Link>
      </div>
    </nav>
  )
}
