'use client';
import React, { useState, useRef } from 'react';

type Question = {
  id: number;
  question: string;
  answer: string;
};

type AccordionItemProps = {
  item: Question;
};

const FAQBlockClient = ({ questions }) => {
  return (
    <>
      {questions.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </>
  );
};

const AccordionItem = ({ item }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="border-b border-selectiveyellow">
      <button
        className="w-full p-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl text-white max-w-[95%]">{item.question}</h3>
        <span 
          className="transform transition-transform duration-300 ease-in-out"
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
        <div className="p-4 max-w-[95%] text-white">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQBlockClient;