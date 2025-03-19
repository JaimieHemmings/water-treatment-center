'use client';
import React, { useState, useEffect } from 'react'

interface CostData {
  bottlePrice: number
  filterPrice: number
  bottlesPerWeek: number
  filtersPerWeek: number
}

interface CostCalculatorBlockProps {
  title: string
  paragraph: string
}

const CostCalculatorBlock:React.FC<CostCalculatorBlockProps> = ({title, paragraph}) => {
  const [costs, setCosts] = useState<CostData>({
    bottlePrice: 0,
    filterPrice: 0,
    bottlesPerWeek: 0,
    filtersPerWeek: 0
  })

  const [totalCosts, setTotalCosts] = useState({
    weekly: 0,
    monthly: 0,
    yearly: 0,
    tenYears: 0,
    twentyYears: 0
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCosts(prev => ({
      ...prev,
      [name]: Number(value) || 0
    }))
  }

  useEffect(() => {
    const weeklyTotal = (costs.bottlePrice * costs.bottlesPerWeek) + 
                       (costs.filterPrice * costs.filtersPerWeek)
    
    setTotalCosts({
      weekly: weeklyTotal,
      monthly: weeklyTotal * 4.33, // Average weeks in a month
      yearly: weeklyTotal * 52,
      tenYears: weeklyTotal * 52 * 10,
      twentyYears: weeklyTotal * 52 * 20
    })
  }, [costs])

  return (
    <div className="py-[5rem] bg-antiflashwhite">
      <div className="container max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Water Cost Calculator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price per Bottle (€)
              </label>
              <input
                type="number"
                name="bottlePrice"
                value={costs.bottlePrice}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price per Filter (€)
              </label>
              <input
                type="number"
                name="filterPrice"
                value={costs.filterPrice}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bottles Used per Week
              </label>
              <input
                type="number"
                name="bottlesPerWeek"
                value={costs.bottlesPerWeek}
                onChange={handleInputChange}
                min="0"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filters Used per Week
              </label>
              <input
                type="number"
                name="filtersPerWeek"
                value={costs.filtersPerWeek}
                onChange={handleInputChange}
                min="0"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-darkblue mb-4">Estimated Costs</h3>
            <div className="space-y-3">
              <p className="flex justify-between">
                <span>Weekly Cost:</span>
                <span className="font-semibold">€{totalCosts.weekly.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>Monthly Cost:</span>
                <span className="font-semibold">€{totalCosts.monthly.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>Yearly Cost:</span>
                <span className="font-semibold">€{totalCosts.yearly.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>10 Year Cost:</span>
                <span className="font-semibold">€{totalCosts.tenYears.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>20 Year Cost:</span>
                <span className="font-semibold">€{totalCosts.twentyYears.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CostCalculatorBlock