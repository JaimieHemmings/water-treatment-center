'use client';
import React, { useState, useRef } from 'react';

interface AccordionItemContent {
  id: string
  title: string
  description: string
}

interface AccordionItemProps {
  item: AccordionItemContent
}

interface ProductAccordianProps {
  details: {
    details: AccordionItemContent[]
  }
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="border-b border-selectiveyellow">
      <button
        className="w-full p-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl text-slate-700 max-w-[95%]">{item.title}</h3>
        <span 
          className="transform transition-transform duration-300 ease-in-out text-slate-700"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ↓
        </span>
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out"
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight || 0}px` : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden'
        }}
      >
        <div className="p-4 max-w-[95%] text-slate-700">
          {item.description}
        </div>
      </div>
    </div>
  );
};

const ProductAccordian: React.FC<ProductAccordianProps> = ({ details }) => {
  return (
    <div className="flex flex-col gap-2 py-20">
      {details.details?.map((item, index) => (
        <AccordionItem key={item.id || index} item={item} />
      ))}
    </div>
  );
};

export default ProductAccordian;
