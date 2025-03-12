'use client';
import React, { useState } from 'react'
import { FaDroplet } from "react-icons/fa6";

const HardnessTest = ({ title, subtitle, paragraph}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    hardness: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/hardness-test-results', {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const getHardnessMessage = (hardness: string) => {
    switch (hardness) {
      case '0-100':
        return "Your water hardness is in the soft range. We'll contact you to discuss if any treatment is needed."
      case '100-150':
        return "Your water is moderately hard. We'll be in touch to discuss suitable treatment options."
      case '150-200':
        return "Your water is hard. We'll contact you soon to recommend appropriate water softening solutions."
      case '200-300':
        return "Your water is very hard. We'll be in touch shortly to discuss our most effective treatment systems."
      case '300+':
        return "Your water is extremely hard. We'll contact you immediately to discuss our advanced water softening solutions."
      default:
        return "We'll be in touch soon to discuss your results."
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-[5rem]">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl text-white mb-4">Thank You!</h2>
          <p className="text-white text-lg mb-4">
            Your hardness test results have been submitted successfully.
          </p>
          <p className="text-white text-lg">
            {getHardnessMessage(formData.hardness)}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-[5rem]">
      <div className="container flex flex-col md:flex-row gap-8">
        <div className="md:basis-1/2">
          <p className="text-sm tracking-widest uppercase mb-2 text-white">
            <FaDroplet className="inline-block text-selectiveyellow relative -top-[2px] mr-2" />
            {subtitle}
          </p>
          <h2 className="text-2xl md:text-4xl text-white mb-5">
            {title}
          </h2>
          <p className="text-white prose md:prose-md">
            {paragraph}
          </p>
        </div>
        <div className="md:basis-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-selectiveyellow"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email..."
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-selectiveyellow"
              />
            </div>

            <div>
              <label htmlFor="telephone" className="block text-white mb-2">
                Telephone*
              </label>
              <input
                placeholder="Enter your phone number..."
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-selectiveyellow"
              />
            </div>

            <div>
              <label htmlFor="telephone" className="block text-white mb-2">
                Hardness Results*
              </label>
              <select
                id="hardness"
                name="hardness"
                value={formData.hardness}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-selectiveyellow"
              >
                <option value="" disabled>Select your hardness result...</option>
                <option className="text-jet" value="0-100">0 - 100 PPM</option>
                <option className="text-jet" value="100-150">100 - 150 PPM</option>
                <option className="text-jet" value="150-200">150 - 200 PPM</option>
                <option className="text-jet" value="200-300">200 - 300 PPM</option>
                <option className="text-jet" value="300+">300 + PPM</option>
              </select>
            </div>

            {error && (
              <p className="text-red-500 mt-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-selectiveyellow text-white rounded-lg font-semibold hover:bg-selectiveyellow/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>        
        </div>
      </div>
    </section>
  )
}

export default HardnessTest
