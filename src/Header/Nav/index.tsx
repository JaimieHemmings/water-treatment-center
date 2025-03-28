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
      order?: number;
      title: string;
      slug: string;
      association: {
        slug: string;
      };
    }>;
  };
  subDocs?: Array<{
    order?: number;
    category: {
      slug: string;
    };
    slug: string;
    title: string;
  }>;
  isOpen?: boolean;
  setIsOpen?: (value: boolean) => void;
  data: any;
}

export const HeaderNav = ({ docs, supDocs, isOpen, setIsOpen, data, subDocs }: HeaderNavProps) => {

  const [activeItem, setActiveItem] = useState<string | null>(null)

  const handleItemClick = (slug: string) => {
    setActiveItem(activeItem === slug ? null : slug)
  }

  const handleMenuClick = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };
  
  return (
    <nav className={`bg-darkblue max-lg:h-[calc(100vh-65px)] max-lg:py-5 max-lg:w-[300px] max-lg:px-5 lg:container lg:px-0 absolute lg:relative max-lg:border-r-2 left-0 max-md:top-[65px] max-lg:top-[76px] max-lg:overflow-y-scroll ${isOpen ? 'block' : 'hidden'} lg:block max-md:border-t-2 border-white`}>
      <ul className="flex flex-col lg:flex-row lg:justify-between align-middle lg:text-center">
        {docs.map((item) => {
          const hasDropdownItems = supDocs?.docs.some(
            (supItem) => supItem.association.slug === item.slug
          );
          
          const isActive = activeItem === item.slug
          
          return (
            <li key={item.slug} className="relative group">
              <button 
                aria-controls={`dropdown-${item.slug}`}
                aria-expanded={isActive}
                className="px-1 py-2 text-white hover:text-selectiveyellow tracking-wide font-semibold text-base lg:text-xs xl:text-base w-full flex gap-2 items-center"
                onClick={() => handleItemClick(item.slug)}
              >
                {item.title} 
                <GoChevronDown
                  aria-hidden="true"
                  className={`inline-block transition-transform ${isActive ? 'rotate-180' : ''}`} />
              </button>
              <ul
                role="menu" className={`
                lg:absolute 
                bg-white px-4 py-2 rounded-lg shadow-lg md:min-w-[300px]
                lg:hidden lg:group-hover:grid
                ${isActive ? 'grid' : 'hidden'}
              `}>
                  {subDocs
                    ?.filter((subItem) => subItem.category.slug === item.slug)
                    .sort((a, b) => (a.order || 0) - (b.order || 0))
                    .map((subItem) => (
                      <li key={subItem.slug}>
                        <Link
                          href={`/products/${item.slug}/${subItem.slug}`}
                          onClick={handleMenuClick}
                          className="block px-1 py-1 text-md text-gray-800 hover:text-selectiveyellow"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))
                  }
                
                {hasDropdownItems && 
                  supDocs.docs
                    .filter((supItem) => supItem.association.slug === item.slug)
                    .sort((a, b) => (a.order || 0) - (b.order || 0))
                    .map((supItem) => (
                      <li key={supItem.slug}>
                        <Link
                          href={`/products/${item.slug}/support/${supItem.slug}`}
                          onClick={handleMenuClick}
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
        {Array.isArray(data?.navItems) && data.navItems.map((item, index) => (
          <li key={`nav-item-${index}`}>
            <Link 
              href={`/${item.link.slug}`}
              onClick={handleMenuClick}
              className="px-1 py-2 text-white hover:text-selectiveyellow tracking-wide font-semibold text-base lg:text-xs xl:text-base w-full flex gap-2 items-center lg:justify-start"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
            <Link 
              href="/news"
              onClick={handleMenuClick}
              className="px-1 py-2 text-white hover:text-selectiveyellow tracking-wide font-semibold text-base lg:text-xs xl:text-base w-full flex gap-2 items-center lg:justify-start"
            >
              News
            </Link>
          </li>
        <li className="relative group lg:text-center lg:hidden" onClick={handleMenuClick}>
          <CustomLink label="Contact" link="/contact" theme="light" />
        </li>
        <li className="lg:hidden mt-5">
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
      <div className="lg:hidden mt-5 lg:mt-10">
        <SearchForm setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </nav>
  )
}