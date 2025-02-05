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

const FAQBlockClient = () => {
  const questions: Question[] = [
    {
      id: 1,
      question: 'Question One',
      answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
    {
      id: 2,
      question: 'Fix problems & request removals',
      answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
    {
      id: 3,
      question: 'Question 3',
      answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
    {
      id: 4,
      question: 'Question 4',
      answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-4 basis-2/3">
        {questions.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
      <div className="basis-1/3 md:px-5">
        <h2 className="text-white text-2xl md:text-4xl font-semibold pb-5">Featured Guide</h2>
        <p className="text-white">
          Choosing the correct filters for purpose of use is important. We have a guide to help you choose the right filter for your needs.
        </p>
      </div>
    </div>
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
        <h3 className="text-lg font-medium">{item.question}</h3>
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
        <div className="p-4">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQBlockClient;