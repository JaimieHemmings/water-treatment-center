'use client';

import React from 'react';
import Link from 'next/link';
import { FaDroplet } from "react-icons/fa6";

// Define proper types instead of using 'any'
interface NavItem {
  link: {
    slug: string;
    title: string;
  };
  label: string;
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
  supDocs: any;
}

// Extract the link styles to a constant for reuse
const linkClasses = "text-antiflashwhite px-4 py-2 font-normal lg:text-xl md:h-full flex items-center hover:bg-azul hover:text-white transition-colors duration-300 max-sm:text-2xl";

export const HeaderNav: React.FC<HeaderNavProps> = ({ data, subNav, supDocs }) => {
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
      
      <ul className={`flex flex-col md:flex-row h-full md:items-center w-full max-md:absolute max-md:top-[57px] max-md:left-0 bg-darkblue max-md:h-screen max-md:justify-start max-md:py-10 ${isMenuOpen ? ('') : ('max-md:hidden')}`}>

        {/* Dynamic nav items */}
        {navItems.map((item: NavItem, index: number) => (
          <li className="md:h-full" key={`nav-item-${index}`}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href={`/${item.link.slug}`}
              className={linkClasses}
            >
              {item.label}
            </Link>
          </li>
        ))}
        
        {/* Static nav items */}
        <li className="md:hidden">
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/products"
            className={linkClasses}
          >
            Products
          </Link>
            <ul className="py-2 bg-darkblue pl-8 md:hidden">
              {subNav.map((item: SubNavItem, index: number) => {
                const hasDropdownItems = supDocs.docs.some(
                  (supItem: any) => supItem.association.slug === item.slug
                );
                return (
                <li
                  className="py-2"
                  key={`subnav-item-${index}`}>
                  <Link
                    className="text-lg text-white"
                    onClick={() => setIsMenuOpen(false)}
                    href={`/products/${item.slug}`}
                  >
                    - {item.title}
                  </Link>
                  {hasDropdownItems && (
                    <ul className="py-2 bg-darkblue">
                    {supDocs.docs
                      .filter((supItem: any) => supItem.association.slug === item.slug)
                      .map((supItem: any, supIndex: number) => (
                        <li key={`${supIndex}`}>
                          <Link
                            href={`/products/${item.slug}/support/${supItem.slug}`}
                            className="block px-2 pl-8 py-2 text-md text-white"
                            >
                            - {supItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )})}
            </ul>
        </li>
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