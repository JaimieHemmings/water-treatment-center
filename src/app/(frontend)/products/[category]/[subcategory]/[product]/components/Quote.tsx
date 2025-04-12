'use client';
import React, { useState } from 'react'
import { MdEuroSymbol } from "react-icons/md";

interface QuoteProps {
  product: string
}

const Quote: React.FC<QuoteProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    model: product
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/quoteRequests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

        if (!response.ok) throw new Error('Submission failed')
        setIsSubmitted(true)
      } catch (err) {
        setError(`Something went wrong. Please try again. ${err.message}`)
      } finally {
        setIsSubmitting(false)
      }
    }

  return (
    <div className="fixed left-0 top-[200px] -translate-y-1/2 z-50">
      {/* Tab Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-darkblue p-4 rounded-r-lg shadow-lg flex flex-col-reverse items-center gap-2 hover:bg-selectiveyellow/90 transition-all border-selectiveyellow border-r-2 border-b-2 border-t-2 group"
      >
        <MdEuroSymbol className="group-hover:text-white transition-all duration-300 ease-in-out [writing-mode:vertical-lr] -rotate-90" />
        <span className="[writing-mode:vertical-lr] rotate-180 group-hover:text-white transition-all duration-300 ease-in-out">
          Request Quote
        </span>
      </button>

      {/* Sliding Form Panel */}
      <div className={`fixed left-0 top-0 h-full w-[300px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out rounded-r-lg ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 bg-white border-t-2 border-r-2 border-b-2 border-textblue">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-semibold text-darkblue">Request Quote</h3>
              <p className="text-sm text-textblue">Get a personalised quote for installation of the {product}</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          {!isSubmitted && (
          <form onSubmit={handleSubmit} className="space-y-4">            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md text-jet"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md text-jet"
                required
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md text-jet"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-textblue text-white py-2 px-4 rounded-md hover:bg-selectiveyellow/90 transition-all"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}              
            </button>
          </form>
          )}
          {isSubmitted && (
            <div className="text-center text-jet">
              <p>Thank you! Your request has been submitted.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Quote