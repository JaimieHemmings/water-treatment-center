'use client';
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { cn } from '@/utilities/cn'
import { FaDroplet } from "react-icons/fa6";

const FAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white text-jet py-[5rem] faq-section">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="md:basis-1/2 md:p-5">
          <p className="tracking-widest text-selectiveyellow uppercase text-sm mb-5">
            <FaDroplet className="inline-block text-selectiveyellow relative -top-[1px] mr-1" />
            FAQ
          </p>
          <h2 className="text-2xl md:text-4xl mb-5 text-selectiveyellow">
            Frequently Asked Questions
          </h2>
          <p className="prose md:prose-md">{data.content}</p>
        </div>
        <div className="md:basis-1/2 md:p-5">
          {data.faq.map((faq, index) => (
            <div key={index} className="mb-5 border-b border-selectiveyellow">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <h3 className="text-xl">
                  {faq.question}
                </h3>
                <IoIosArrowDown
                  className={cn(
                    "transition-transform duration-200 text-2xl",
                    openIndex === index ? "rotate-180" : ""
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === index ? "max-h-96 mb-4" : "max-h-0"
                )}
              >
                <p className="prose md:prose-md">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ