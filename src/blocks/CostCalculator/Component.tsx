'use client';
import React, { useState, useEffect } from 'react'
import { FaDroplet } from "react-icons/fa6";

interface CostData {
  bottlePrice: number
  filterPrice: number
  bottlesPerWeek: number
  filtersPerWeek: number
}

interface CostCalculatorBlockProps {
  title: string
  subtitle: string
  paragraph: string
}

const CostCalculatorBlock:React.FC<CostCalculatorBlockProps> = ({title, paragraph, subtitle}) => {
  const [costs, setCosts] = useState<CostData>({
    bottlePrice: 0.85,
    filterPrice: 4.50,
    bottlesPerWeek: 18,
    filtersPerWeek: 1
  })

  const [totalCosts, setTotalCosts] = useState({
    weekly: 0,
    monthly: 0,
    yearly: 0,
    tenYears: 0,
    twentyYears: 0
  })

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-IE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

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
    <div className="py-[5rem] bg-white">
      <div className="container">
        <div className="pb-5 mb-5">
          <h2 className="text-sm tracking-widest text-selectiveyellow uppercase mb-5">
            <FaDroplet className="inline-block text-selectiveyellow -top-[2px] relative mr-2" />
            {title}
          </h2>
          <p className="text-2xl md:text-4xl mb-2 max-w-[50%] text-textblue">
            {subtitle}
          </p>
          <p className="mb-5 prose md:prose-lg max-w-none text-textblue">
            {paragraph}
          </p>
        </div>          
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:basis-2/3 flex flex-row gap-6 justify-around text-textblue">
            <div>
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
                  className="w-full p-3 border border-gray-300 rounded-md mb-3"
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
            </div>

            <div>
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
                  className="w-full p-3 border border-gray-300 rounded-md mb-3"
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
          </div>
          <div className="md:basis-1/3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-darkblue mb-4">Estimated Costs</h3>
              <div className="space-y-3 text-textblue">
                <p className="flex justify-between gap-4">
                  <span>Weekly Cost:</span>
                  <span className="font-semibold">€ {formatCurrency(totalCosts.weekly)}</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Monthly Cost:</span>
                  <span className="font-semibold">€ {formatCurrency(totalCosts.monthly)}</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Yearly Cost:</span>
                  <span className="font-semibold">€ {formatCurrency(totalCosts.yearly)}</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>10 Year Cost:</span>
                  <span className="font-semibold">€ {formatCurrency(totalCosts.tenYears)}</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>20 Year Cost:</span>
                  <span className="font-semibold">€ {formatCurrency(totalCosts.twentyYears)}</span>
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default CostCalculatorBlock