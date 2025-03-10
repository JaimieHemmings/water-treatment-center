import Link from 'next/link'
import React from 'react'
import { IoPhonePortraitSharp } from "react-icons/io5";
import {  MdEmail } from "react-icons/md";
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FaDroplet } from "react-icons/fa6";

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { FaChevronDown } from 'react-icons/fa';

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

    const supportingDocs:any = await payload.find({
      collection: 'supporting-documents',
      depth: 1,
      overrideAccess: false,
      select: {
        title: true,
        slug: true,
        association: true,
      },
    })

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
        <HeaderNav data={data} subNav={docs} supDocs={supportingDocs} />
      </div>
      <div className="flex-row justify-between align-middle bg-white hidden md:flex tracking-widest border-b-[2px] border-darkblue">
        <ul className="container flex flex-row gap-4 justify-end w-full text-md text-selectiveyellow">
        {docs.map((item: any, index: number) => {
          const hasDropdownItems = supportingDocs.docs.some(
            (supItem: any) => supItem.association.slug === item.slug
          );

          return (
          <li key={`subnav-item-${index}`} className="group relative">
            <Link
              href={`/products/${item.slug}`}
              className="flex flex-row justify-center items-center hover:text-azul text-selectiveyellow transition-all duration-300 gap-2 text-xs lg:text-sm py-2"
            >
              <FaDroplet className="inline-block" />
              {item.title} {hasDropdownItems && <FaChevronDown className="inline-block" />}
            </Link>

            {/* Dropdown menu */}
            {hasDropdownItems && (
            <ul 
              className="absolute -left-2 top-6 lg:top-7 mt-2 hidden group-hover:block shadow-lg rounded-md min-w-[200px] border-t-2 border-jet"
            >
              {supportingDocs.docs
                .filter((supItem: any) => supItem.association.slug === item.slug)
                .map((supItem: any, supIndex: number) => (
                  <li key={`${supIndex}`}>
                    <Link
                      href={`/support/${supItem.slug}`}
                      className="block px-2 pl-8 py-2 text-xs md:text-sm text-selectiveyellow transition-all duration-300 bg-white relative"
                    >
                      <FaDroplet className="absolute top-3 left-2" />
                      {supItem.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
            )}
          </li>
        )})}
                
        </ul>
      </div>
    </header>
    </>
  )
}