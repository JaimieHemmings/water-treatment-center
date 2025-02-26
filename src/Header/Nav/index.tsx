'use client';

import React from 'react';
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa6";

// Define proper types instead of using 'any'
interface NavItem {
  link: {
    slug: string;
    title: string;
  };
}

interface SubNavItem {
  slug: string;
  title: string;
}

interface HeaderNavProps {
  data: {
    navItems?: NavItem[];
  };
  subNav: SubNavItem[];
}

// Extract the link styles to a constant for reuse
const linkClasses = "text-antiflashwhite px-4 py-2 font-normal lg:text-xl h-full flex items-center hover:bg-azul hover:text-white transition-colors duration-300 max-sm:text-2xl";
const subLinkClasses = "text-antiflashwhite px-4 py-3 text-base font-normal hover:bg-azul hover:text-white transition-colors duration-300 block max-md:pl-10";

export const HeaderNav: React.FC<HeaderNavProps> = ({ data, subNav }) => {
  // Safely access navItems with a default empty array
  const navItems = data?.navItems || [];

  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="md:h-[73px] flex">

      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-white"
        aria-label="Toggle menu"
      >
        <svg 
          className="w-8 h-8" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      <ul className={`flex flex-col md:flex-row h-full md:items-center w-full max-md:absolute max-md:top-[59px] max-md:left-0 bg-darkblue max-md:h-screen max-md:justify-start max-md:py-10 ${isMenuOpen ? ('') : ('max-md:hidden')}`}>

        {/* Dynamic nav items */}
        {navItems.map((item: NavItem, index: number) => (
          <li className="md:h-full" key={`nav-item-${index}`}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href={`/${item.link.slug}`}
              className={linkClasses}
            >
              {item.link.title}
            </Link>
          </li>
        ))}
        
        {/* Products dropdown */}
        <li className="group relative md:h-full">
          <div className="flex items-center md:h-full">
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/products"
              className={`${linkClasses} max-md:w-full`}
            >
              Products <FaChevronDown className="ml-2 max-md:hidden" />
            </Link>
          </div>
          
          <ul 
            className={`
              md:absolute md:invisible group-hover:visible md:opacity-0 group-hover:opacity-100 
              transition-all duration-300 bg-darkblue w-64 md:left-0 md:top-full md:border-t-2 md:border-azul block max-md:w-full
            `}
          >
            {subNav.map((item: SubNavItem, index: number) => (
              <li key={`subnav-item-${index}`}>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href={`/products/${item.slug}`}
                  className={subLinkClasses}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        
        {/* Static nav items */}
        <li className="md:h-full">
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/news"
            className={linkClasses}
          >
            News
          </Link>
        </li>
        <li className="md:h-full">
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/contact"
            className={linkClasses}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};