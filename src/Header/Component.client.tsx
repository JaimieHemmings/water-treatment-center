'use client'
import Link from 'next/link'
import React from 'react'
import type { Header } from '@/payload-types'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = () => {

  return (
    <header className="container relative z-20">
      <nav className="container flex flex-row gap-3 justify-between">
      <div className="text-center py-5">
        <Link href="/">
        <span className="block uppercase">The Water</span>
        <span className="block uppercase">Treatment</span>
        <span className="block uppercase">Center</span>
        </Link>
      </div>
      <div className="text-center py-5 uppercase">
        <Link href="/about">
          About
          <span className="block uppercase">Who We Are</span>
        </Link>
      </div>
      <div className="text-center py-5 uppercase">
        <Link href="/">
          Services
          <span className="block uppercase">What We Do</span>
        </Link>
      </div>
      <div className="text-center py-5 uppercase">
        <Link href="/">
          News
          <span className="block uppercase">Latest Work</span>
        </Link>
      </div>
      <div className="text-center py-5 uppercase">
        <Link href="/">
          About
          <span className="block uppercase">Who We Are</span>
        </Link>
      </div>
      <div className="text-center py-5 uppercase">
        <Link href="/">
          Contact
          <span className="block uppercase">Get In Touch</span>
        </Link>
      </div>
    </nav>
    </header>
  )
}
