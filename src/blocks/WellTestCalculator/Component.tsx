'use client';
import React, { useState } from 'react'
import { FaDroplet } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface WaterParameters {
  [key: string]: { value: number; limit: number; unit: string }
}

const WATER_PARAMETERS: WaterParameters = {
  aluminium: { value: 0, limit: 200, unit: 'ug/l' },
  ammonium: { value: 0, limit: 0.5, unit: 'mg/l' },
  coliformsTotal: { value: 0, limit: 0, unit: 'cfu/100ml' },
  colourApparent: { value: 0, limit: 20, unit: 'mg/l Pt/Co' },
  conductivity: { value: 0, limit: 2500, unit: 'uS/cm' },
  eColi: { value: 0, limit: 0, unit: 'cfu/100ml' },
  hardnessTotal: { value: 0, limit: 150, unit: 'mg/l' },
  iron: { value: 0, limit: 200, unit: 'ug/l' },
  manganese: { value: 0, limit: 50, unit: 'ug/l' },
  nitrite: { value: 0, limit: 0.5, unit: 'mg/l' },
  pH: { value: 0, limit: 9.5, unit: 'pH' },
  tbc22c: { value: 0, limit: 100, unit: 'cfu/ml' },
  turbidity: { value: 0, limit: 4, unit: 'NTU' }
}

interface FormResult {
  value: number;
  status: 'above' | 'below' | 'within';
  limit: number;
  unit: string;
}

interface AnalysisResults {
  [key: string]: FormResult;
}

const WellTestCalculator = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    parameters: { ...WATER_PARAMETERS }
  })
  const [results, setResults] = useState<AnalysisResults | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
  
    // Handle water parameters
    if (name in WATER_PARAMETERS) {
      setFormData(prev => ({
        ...prev,
        parameters: {
          ...prev.parameters,
          [name]: { ...prev.parameters[name], value: parseFloat(value) || 0 }
        }
      }))
      return
    }
  
    // Handle regular inputs (name, email, phone)
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
  
    try {

      const formattedData = {
        fullname: formData.fullname,
        email: formData.email,
        phone: formData.phone,
        aluminium: formData.parameters.aluminium.value,
        ammonium: formData.parameters.ammonium.value,
        coliformsTotal: formData.parameters.coliformsTotal.value,
        colourApparent: formData.parameters.colourApparent.value,
        conductivity: formData.parameters.conductivity.value,
        eColi: formData.parameters.eColi.value,
        hardnessTotal: formData.parameters.hardnessTotal.value,
        iron: formData.parameters.iron.value,
        manganese: formData.parameters.manganese.value,
        nitrite: formData.parameters.nitrite.value,
        pH: formData.parameters.pH.value,
        tbc22c: formData.parameters.tbc22c.value,
        turbidity: formData.parameters.turbidity.value
      }

      const response = await fetch('/api/well-test-results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      })

      if (!response.ok) throw new Error('Submission failed')
      // Create analyzed results before setting state
      const analyzedResults: AnalysisResults = Object.entries(formData.parameters).reduce((acc, [key, param]) => {
        const status = param.value > param.limit ? 'above' : 
                      param.value === param.limit ? 'within' : 'below';
        return {
          ...acc,
          [key]: {
            value: param.value,
            limit: param.limit,
            unit: param.unit,
            status
          }
        }
      }, {})

      setResults(analyzedResults)
      setIsSubmitted(true)
    } catch (err: any) {
      setError(`Something went wrong. Please try again. ${err.message}`)
      console.error('Submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-[5rem]">
      <div className="container max-w-4xl mx-auto text-white">
        <div className="pb-5">
          <div className="border-l-4 border-selectiveyellow pl-4 mb-4">
            <p className="text-sm tracking-widest mb-2">
              <FaDroplet className="inline-block text-selectiveyellow relative -top-[2px] mr-2" />
              Check your Well Water Quality
            </p>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Water Test Kit Calculator
            </h2>
            <p className="prose md:prose-md text-white mb-5">
              If you have a water test result, you can use this calculator to analyse your results and see if your water quality is within the recommended limits.
            </p>
          </div>
        </div>
        
        {!results && (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Your Name"
                required
                value={formData.fullname}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                required
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10,11}"
                placeholder="0123456789"
                value={formData.phone}
                required
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Water Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(WATER_PARAMETERS).map(([key, param]) => (
              <div key={key}>
                <label className="block mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()} ({param.unit})
                </label>
                <input
                  type="number"
                  name={key}
                  step="0.01"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20"
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <p className="text-sm text-white tracking-wide md:max-w-[50%] relative pl-8">
          <IoIosInformationCircleOutline
            className="text-selectiveyellow mr-2 inline-block absolute text-2xl top-0 left-0"
          />
            By submitting this form you consent to being contacted by one of our team using the contact methods provided to further discuss your test results and possible solutions.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-selectiveyellow text-white rounded-lg font-semibold hover:bg-selectiveyellow/90 disabled:opacity-50"
          >
            {isSubmitting ? 'Calculating...' : 'Calculate Results'}
          </button>
        </form>
        )}

{results && (
  <div className="mt-8 space-y-4">
    <h3 className="text-white text-xl md:text-4xl font-bold mb-4">
      Analysis Results
    </h3>
    
    {/* Results Summary */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 rounded bg-red-500/20">
        <h4 className="font-semibold text-lg mb-2">Critical Issues</h4>
        <p className="text-sm">
          Parameters above limits: {Object.values(results).filter(r => r.status === 'above').length}
        </p>
      </div>
      <div className="p-4 rounded bg-yellow-500/20">
        <h4 className="font-semibold text-lg mb-2">Warning Issues</h4>
        <p className="text-sm">
          Parameters near limits: {Object.values(results).filter(r => r.status === 'within').length}
        </p>
      </div>
      <div className="p-4 rounded bg-green-500/20">
        <h4 className="font-semibold text-lg mb-2">Acceptable</h4>
        <p className="text-sm">
          Parameters within limits: {Object.values(results).filter(r => r.status === 'below').length}
        </p>
      </div>
    </div>

    {/* Detailed Results */}
    <div className="mt-8">
      <h4 className="text-xl font-semibold mb-4">Detailed Analysis</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(results).map(([key, result]) => {
          const getStatusColor = (status: string) => {
            switch (status) {
              case 'above': return 'bg-red-500/20'
              case 'within': return 'bg-yellow-500/20'
              case 'below': return 'bg-green-500/20'
              default: return 'bg-gray-500/20'
            }
          }

          return (
            <div
              key={key}
              className={`p-4 rounded ${getStatusColor(result.status)}`}
            >
              <h4 className="font-semibold capitalize pb-3">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <p className="text-sm">Your Result: {result.value} {result.unit}</p>
              <p className="text-sm">Limit: {result.limit} {result.unit}</p>
              <p className="text-sm mt-2 capitalize">
                Status: {result.status}
              </p>
            </div>
          )
        })}
      </div>
    </div>

    {/* Recommendations */}
    <div className="mt-8 p-6 rounded bg-white/5">
      <h4 className="text-xl font-semibold mb-4">Recommendations</h4>
      <p className="text-sm mb-4">
        Based on your results, we recommend addressing the parameters that are above the recommended limits.
        Our team will be in touch shortly o discuss your results and possible solutions.
      </p>
    </div>
  </div>
)}
      </div>
    </section>
  )
}

export default WellTestCalculator