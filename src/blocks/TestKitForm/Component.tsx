'use client';
import React, { useState } from 'react'
import { AnimateIn } from '@/components/Animations/AnimateIn'

const TestKitForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    address: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/test-submissions', {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <section className="py-[5rem]">
        <div className="container max-w-2xl mx-auto text-center">
          <AnimateIn animation={{ y: 60, opacity: 0 }}>
            <h2 className="text-2xl md:text-4xl text-white mb-4">Thank You!</h2>
            <p className="text-white text-lg">
              We&apos;ll be in touch soon with your free test kit.
            </p>
          </AnimateIn>
        </div>
      </section>
    )
  }

  return (
    <section className="py-[5rem]">
      <div className="container max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-white mb-8">Free Test Kit</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-selectiveyellow"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-selectiveyellow"
            />
          </div>

          <div>
            <label htmlFor="telephone" className="block text-white mb-2">
              Telephone
            </label>
            <input
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
            <label htmlFor="address" className="block text-white mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows={4}
              value={formData.address}
              onChange={handleChange as any}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-selectiveyellow resize-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange as any}
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-selectiveyellow resize-none"
            />
          </div>

          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-selectiveyellow text-white rounded-lg font-semibold hover:bg-selectiveyellow/90 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Request Free Test Kit'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default TestKitForm