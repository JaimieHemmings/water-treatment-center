'use client';
import React, {useState} from 'react'
import Link from 'next/link'
import { GoChevronDown } from "react-icons/go";
import SearchForm from '../SearchForm';
import CustomLink from '@/components/CustomLink';
import { IoPhonePortraitSharp } from "react-icons/io5";

type HeaderNavProps = {
  docs: Array<{
    title: string;
    slug: string;
    excerpt?: string;
  }>;
  supDocs: {
    docs: Array<{
      title: string;
      slug: string;
      association: {
        slug: string;
      };
    }>;
  };
  isOpen?: boolean;
}

export const HeaderNav = ({ docs, supDocs, isOpen }: HeaderNavProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const handleItemClick = (slug: string) => {
    setActiveItem(activeItem === slug ? null : slug)
  }
  return (
    <nav className={`bg-darkblue max-lg:h-screen max-lg:py-5 max-lg:w-[220px] max-lg:px-5 lg:container lg:px-0 absolute lg:relative left-0 max-lg:top-[65px] ${isOpen ? 'block' : 'hidden'} lg:block`}>
      <ul className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-0">
        {docs.map((item) => {
          const hasDropdownItems = supDocs?.docs.some(
            (supItem) => supItem.association.slug === item.slug
          );
          
          const isActive = activeItem === item.slug
          
          return (
            <li key={item.slug} className="relative group">
              <button 
                className="px-1 py-2 text-white hover:text-selectiveyellow tracking-wide font-semibold text-base w-full flex gap-2 items-center"
                onClick={() => handleItemClick(item.slug)}
              >
                {item.title} 
                <GoChevronDown className={`inline-block transition-transform ${isActive ? 'rotate-180' : ''}`} />
              </button>
              <ul className={`
                lg:absolute 
                bg-white px-4 py-2 rounded-lg shadow-lg lg:min-w-[200px]
                lg:hidden lg:group-hover:grid
                ${isActive ? 'grid' : 'hidden'}
              `}>
                <li>
                  <Link
                    href={`/products/${item.slug}`}
                    className="block px-1 py-1 text-md text-gray-800 hover:text-selectiveyellow"
                  >
                    {item.title}
                  </Link>
                </li>
                
                {hasDropdownItems && 
                  supDocs.docs
                    .filter((supItem) => supItem.association.slug === item.slug)
                    .map((supItem) => (
                      <li key={supItem.slug}>
                        <Link
                          href={`/products/${item.slug}/support/${supItem.slug}`}
                          className="block px-1 py-1 text-md text-gray-800 hover:text-selectiveyellow"
                        >
                          {supItem.title}
                        </Link>
                      </li>
                    ))
                }
              </ul>
            </li>
          )
        })}
        <li>
        <Link 
          href="/shopping-guide"
          className="px-1 py-2 text-white hover:text-selectiveyellow tracking-wide font-semibold text-base w-full flex gap-2"
        >
          Guide
        </Link>
        </li>
        <li className="relative group lg:text-center lg:hidden">
          <CustomLink label="Contact" link="/contact" theme="light" />
        </li>
        <li className="lg:hidden">
          <a href="tel:0579333942" className="flex items-center gap-2 text-white">
            <IoPhonePortraitSharp />
            <span>057 9333942</span>
          </a>
          <a href="tel:0861715686" className="flex items-center gap-2 text-white">
            <IoPhonePortraitSharp />
            <span>086 1715686</span>
          </a>
        </li>
      </ul>
      <div className="lg:hidden mt-10">
        <SearchForm />
      </div>
    </nav>
  )
}