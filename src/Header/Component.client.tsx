import Link from 'next/link'
import React from 'react'
import { IoPhonePortraitSharp } from "react-icons/io5";
import {  MdEmail } from "react-icons/md";
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FaDroplet } from "react-icons/fa6";

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

export default async function HeaderClient({ data }) {

  const payload = await getPayload({ config: configPromise })
    
    const response:any = await payload.find({
      collection: 'product-categories',
      depth: 1,
      overrideAccess: false,
      select: {
        title: true,
        slug: true,
        heroImage: true,
        excerpt: true,
      },
    })

    const { docs } = response

  return (
    <>
    <div className="w-full bg-white hidden md:block relative z-[999]">
      <div className="container py-2 flex justify-between items-center gap-4">
        <div className="flex flex-row justify-between">
          <IoPhonePortraitSharp className="inline-block text-selectiveyellow -bottom-[2px] relative" />
          <div className="pl-2">
            <p className="text-sm text-jet">
              <a href="tel:0579333942" className="text-jet">
                <span className="hidden-sm">
                  {' '}
                  057 9333942
                </span>
              </a>
            </p>
          </div>
          <div>
            <p className="text-sm text-jet">
            <span className="px-2">-</span>
              <a href="tel:0861715686" className="text-jet">
                <span className="hidden-sm">
                  {' '}
                  086 1715686
                </span>
              </a>
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm text-jet">
            <a
            href="mailto:info@thewatertreatmentcentre.ie"
            className="text-jet">
              <MdEmail className="inline-block text-selectiveyellow text-xl relative -top-[2px]" />
              <span className="hidden-sm">
                {' '}
                info@thewatertreatmentcentre.ie
              </span> 
            </a>
          </p>
        </div>
      </div>
    </div>
    <header className="bg-darkblue text-white top-0 left-0 w-full z-[9990] sticky">
      <div className="flex flex-row justify-between container align-middle">
        <Link href="/" className="my-auto">
          <Logo loading="eager" priority="high" className="invert dark:invert-0 py-3" />
        </Link>
        <HeaderNav data={data} subNav={docs} />
      </div>
      <div className="flex-row justify-between align-middle bg-white py-2 hidden md:flex tracking-widest border-b-[2px] border-darkblue">
        <ul className="container flex flex-row gap-4 justify-end w-full text-md text-selectiveyellow">
        {data.subNavItems.map((item: any, index: number) => (
          <li className="md:h-full" key={`subnav-${index}`}>
            <Link
              href={`/${item.link.slug}`}
              className="flex flex-row justify-center items-center hover:text-azul text-selectiveyellow transition-all duration-300 gap-2"
            >

              <FaDroplet className="inline-block" />
              {item.title || item.label}
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </header>
    </>
  )
}