'use client';
import React, { useState } from 'react'

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

const TestKitCalculator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    parameters: { ...WATER_PARAMETERS }
  })
  const [results, setResults] = useState<null | any>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name in WATER_PARAMETERS) {
      setFormData(prev => ({
        ...prev,
        parameters: {
          ...prev.parameters,
          [name]: { ...prev.parameters[name], value: parseFloat(value) || 0 }
        }
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const analysisResults = Object.entries(formData.parameters).reduce((acc, [key, param]) => {
      acc[key] = {
        value: param.value,
        status: param.value > param.limit ? 'above' : param.value < param.limit ? 'below' : 'within',
        limit: param.limit,
        unit: param.unit
      }
      return acc
    }, {} as any)
    setResults(analysisResults)
  }

  return (
    <section className="py-[5rem]">
      <div className="container max-w-4xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-8">
          Water Test Kit Calculator
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
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
                required
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20"
                onChange={handleChange}
              />
            </div>
            <div>
              {/* Image Upload */}
              <label className="block mb-2">Upload Image</label>
              <input
                type="file"
                accept="image/*"
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

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-selectiveyellow text-white rounded-lg font-semibold hover:bg-selectiveyellow/90"
          >
            Calculate Results
          </button>
        </form>

        {results && (
          <div className="mt-8 space-y-4">
            <h3 className="text-2xl font-bold mb-4">Analysis Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(results).map(([key, result]: [string, any]) => (
                <div
                  key={key}
                  className={`p-4 rounded ${
                    result.status === 'above' 
                      ? 'bg-red-500/20' 
                      : 'bg-green-500/20'
                  }`}
                >
                  <h4 className="font-semibold capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <p>Value: {result.value} {result.unit}</p>
                  <p>Limit: {result.limit} {result.unit}</p>
                  <p className="capitalize">Status: {result.status} limit</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TestKitCalculator