'use client';
import React, { useState } from 'react'
import RichText from '@/components/RichText';

const householdProducts = [
  'Calgon',
  'Limescale Removers',
  'General Cleaning Products',
  'Shampoos',
  'Shower Gels',
  'Washing Powder',
  'Energy Bills',
  'New Kettles'
]

const limescaleDamage = [
  'Appliance repairs',
  'Plumbing Repairs',
  'Cylinders',
  'Gas Boilers',
  'Electric Showers'
]

const defaultHouseholdExpenses = {
  'Calgon': 2.50,
  'Limescale Removers': 3.00,
  'General Cleaning Products': 5.00,
  'Shampoos': 3.50,
  'Shower Gels': 2.50,
  'Washing Powder': 4.00,
  'Energy Bills': 10.00,
  'New Kettles': 1.00
}

const defaultLimescaleDamage = {
  'Appliance repairs': 5.00,
  'Plumbing Repairs': 7.50,
  'Cylinders': 3.00,
  'Gas Boilers': 8.00,
  'Electric Showers': 4.00
}

interface ComplexCalcBlockProps {
  introText?: any
}

const ComplexCalcBlock: React.FC<ComplexCalcBlockProps> = ({ introText }) => {
  const [expenses, setExpenses] = useState<{ [key: string]: number }>({
    ...defaultHouseholdExpenses,
    ...defaultLimescaleDamage
  })

  const handleExpenseChange = (item: string, value: string) => {
    setExpenses(prev => ({
      ...prev,
      [item]: parseFloat(value) || 0
    }))
  }

  const calculateAnnualCost = (weeklyAmount: number) => weeklyAmount * 52
  const calculate5YearCost = (weeklyAmount: number) => weeklyAmount * 52 * 5
  const calculate10YearCost = (weeklyAmount: number) => weeklyAmount * 52 * 10
  const calculate20YearCost = (weeklyAmount: number) => weeklyAmount * 52 * 20

  const calculateTotal20YearCost = () => {
    return Object.values(expenses).reduce((total, current) => 
      total + (current * 52 * 20), 0
    )
  }

  const calculateTotal1YearCost = () => {
    return Object.values(expenses).reduce((total, current) =>
      total + (current * 52), 0
    )
  }

  return (
    <div className="container text-textblue py-[5rem]">
      <div className="mb-5">

        <h2 className="text-2xl md:text-4xl font-bold mb-3 text-center text-white">Cost Calculator</h2>
        {introText && (
          <RichText
            className="px-5 md:pl-0 mb-5"
            data={introText}
            enableGutter={false}
          />
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Household Products Section */}
        <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">
            Household Products
          </h3>
          <div className="grid gap-4 sm:gap-6">
            {householdProducts.map(item => (
              <div key={item} className="border-b pb-4 last:border-b-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <label className="font-medium mb-2 sm:mb-0">
                    {item}:
                  </label>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">€/week:</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      className="w-16 border rounded p-1 text-right"
                      value={expenses[item] || ''}
                      onChange={(e) => handleExpenseChange(item, e.target.value)}
                    />
                  </div>
                </div>
                {expenses[item] > 0 && (
                  <div className="mt-2 text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-4 gap-2">
                    <div>
                      Annual:
                      <span className="block">
                        €{calculateAnnualCost(expenses[item]).toFixed(2)}
                      </span>
                    </div>
                    <div>
                      5 Years:
                      <span className="block">
                        €{calculate5YearCost(expenses[item]).toFixed(2)}
                      </span>
                    </div>
                    <div>
                      10 Years:
                      <span className="block">
                        €{calculate10YearCost(expenses[item]).toFixed(2)}
                      </span>
                    </div>
                    <div>
                      20 Years:
                      <span className="block">
                        €{calculate20YearCost(expenses[item]).toFixed(2)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Limescale Damage Section */}
        <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">Limescale Damage</h3>
          <div className="grid gap-4 sm:gap-6">
            {limescaleDamage.map(item => (
              <div key={item} className="border-b pb-4 last:border-b-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <label className="font-medium mb-2 sm:mb-0">
                    {item}:
                  </label>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">€/week:</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      className="w-24 border rounded p-1 text-right"
                      value={expenses[item] || ''}
                      onChange={(e) => handleExpenseChange(item, e.target.value)}
                    />
                  </div>
                </div>
                {expenses[item] > 0 && (
                  <div className="mt-2 text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-4 gap-2">
                    <div>Annual: €{calculateAnnualCost(expenses[item]).toFixed(2)}</div>
                    <div>5 Years: €{calculate5YearCost(expenses[item]).toFixed(2)}</div>
                    <div>10 Years: €{calculate10YearCost(expenses[item]).toFixed(2)}</div>
                    <div>20 Years: €{calculate20YearCost(expenses[item]).toFixed(2)}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Total 20 Year Cost */}
      <div className="mt-8 p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm">
        <p className="text-lg sm:text-xl font-semibold text-center text-textblue">
          Total 1 Year Cost: €{calculateTotal1YearCost().toFixed(2)}
        </p>
        <p className="text-lg sm:text-xl font-semibold text-center text-textblue">
          Total 5 Year Cost: €{calculateTotal1YearCost().toFixed(2)}
        </p>
        <p className="text-lg sm:text-xl font-semibold text-center text-textblue">
          Total 20 Year Cost: €{calculateTotal20YearCost().toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default ComplexCalcBlock