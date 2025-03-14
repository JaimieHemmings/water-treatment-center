'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { FaSearch } from "react-icons/fa";

interface SearchFormProps {
  setIsOpen?: (value: boolean) => void;
  isOpen?: boolean;
}

const SearchForm:React.FC<SearchFormProps> = ({setIsOpen, isOpen}) => {

  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  const handleMenuClick = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lg:w-[200px] my-auto">
      <div className="relative flex items-center">
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..." 
          className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-200 ring-0 focus:ring-0 focus:outline-none focus:border-gray-300 transition-all duration-300"
        />
        <button 
          type="submit"
          className="absolute right-2 text-gray-500 hover:text-gray-700"
          onClick={handleMenuClick}
        >
          <FaSearch className="w-8 h-8 p-2" />
        </button>
      </div>
    </form>
  )
}

export default SearchForm
