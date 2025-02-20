import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaYoutube, FaFacebookSquare } from "react-icons/fa";
import type { Footer } from '@/payload-types'

export async function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-azul bg-jet text-white">
      <div className="container py-[5rem] gap-8 flex flex-col md:flex-row md:justify-between">
        <div>
          <Link className="flex items-center" href="/">
          <Image 
              src="/logo.png" 
              alt="The Water Treatment Centre" 
              width={2560}
              height={663}
              className="max-w-[200px] h-auto"
            />
          </Link>
          <ul className="flex gap-5 pt-5 text-4xl">
            <Link href="https://www.youtube.com/channel/UCrZ_V32WasPvf6MpT5aBtwQ" className="">
              <FaYoutube className="text-selectiveyellow" />
            </Link>
            <Link href="https://www.facebook.com/www.thewatertreatmentcentre.ie/timeline/">
            <FaFacebookSquare className="text-selectiveyellow" />
            </Link>
          </ul>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-selectiveyellow">Quick Links</h2>
            <Link className="hover:text-selectiveyellow transition-colors duration-200" href="/">Home</Link>
            <Link className="hover:text-selectiveyellow transition-colors duration-200" href="/about">About</Link>
            <Link className="hover:text-selectiveyellow transition-colors duration-200" href="/services">Services</Link>
            <Link className="hover:text-selectiveyellow transition-colors duration-200" href="/news">News</Link>
            <Link className="hover:text-selectiveyellow transition-colors duration-200" href="/contact">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-selectiveyellow">Useful Links</h2>
            <Link className="hover:text-selectiveyellow transition-colors duration-200" href="/payment plans">Payment Plans</Link>
            <Link className="hover:text-selectiveyellow transition-colors duration-200" href="/">Home Water Test</Link>
            <Link className="hover:text-selectiveyellow transition-colors duration-200" href="/well-test-calculator">Well Water Test</Link>
            <Link className="hover:text-selectiveyellow transition-colors duration-200" href="/free-test-kit">Free Test Kit</Link>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
