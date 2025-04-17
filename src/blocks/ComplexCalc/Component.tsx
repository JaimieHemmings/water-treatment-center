'use client';
import React, { useState } from 'react'
import RichText from '@/components/RichText';
import { FaDroplet } from "react-icons/fa6";

const formatNumber = (num: number) => {
  return num.toLocaleString('en-IE', { 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2 
  });
}

const householdProducts = [
  'Calgon',
  'Limescale Removers',
  'General Cleaning Products',
  'Self Care (Hygiene Products)',
  'Washing Powder',
  'Energy Bills',
  'New Kettles',
  'Bottled Water',
  'Britta filters',
  'Appliance/Plumbing repairs and maintenance',
]

const defaultHouseholdExpenses = {
  'Calgon': 2.50,
  'Limescale Removers': 3.00,
  'General Cleaning Products': 5.00,
  'Self Care (Hygiene Products)': 6,
  'Washing Powder': 4.00,
  'Energy Bills': 10.00,
  'New Kettles': 1.00,
  'Bottled Water': 20.00,
  'Britta filters': 15.00,
  'Appliance/Plumbing repairs and maintenance': 5.00,
}

const householdProductsSavings = {
  'Calgon': 100,
  'Limescale Removers': 100,
  'General Cleaning Products': 50,
  'Self Care (Hygiene Products)': 50,
  'Washing Powder': 25,
  'Energy Bills': 30,
  'New Kettles': 100,
  'Bottled Water': 100,
  'Britta filters': 100,
  'Appliance/Plumbing repairs and maintenance': 100,
}

interface ComplexCalcBlockProps {
  introText?: any
  title: string
  SoftenerCalcText?: any
}

const ComplexCalcBlock: React.FC<ComplexCalcBlockProps> = ({ introText, title,SoftenerCalcText }) => {
  const [expenses, setExpenses] = useState<{ [key: string]: number }>({
    ...defaultHouseholdExpenses,
  })

  const handleExpenseChange = (item: string, value: string) => {
    setExpenses(prev => ({
      ...prev,
      [item]: parseFloat(value) || 0
    }))
  }

  // Calculate Total Savings
  const calculateTotal20YearSavings = () => {
    const totalWithoutSoftener = Object.entries(expenses).reduce((total, [item, cost]) => {
      const annualCost = cost * 52;
      return total + annualCost;
    }, 0);
  
    const totalWithSoftener = Object.entries(expenses).reduce((total, [item, cost]) => {
      // Otherwise use householdProductsSavings percentage
      const savingsPercentage = householdProductsSavings[item] || 0;
      const annualCost = cost * 52 * (1 - (savingsPercentage / 100));
      return total + annualCost;
    }, 0);
  
    // Add annual softener cost (€119.90)
    const annualSoftenerCost = 119.90;
    
    // Return the difference (savings)
    return (totalWithoutSoftener - (totalWithSoftener + annualSoftenerCost)) * 20;
  }

  const calculateTotal5YearSavings = () => {
    const totalWithoutSoftener = Object.entries(expenses).reduce((total, [item, cost]) => {
      const annualCost = cost * 52;
      return total + annualCost;
    }, 0);
  
    const totalWithSoftener = Object.entries(expenses).reduce((total, [item, cost]) => {
      const savingsPercentage = householdProductsSavings[item] || 0;
      const annualCost = cost * 52 * (1 - (savingsPercentage / 100));
      return total + annualCost;
    }, 0);
  
    // Add annual softener cost (€119.90)
    const annualSoftenerCost = 119.90;
    
    // Return the difference (savings)
    return (totalWithoutSoftener - (totalWithSoftener + annualSoftenerCost)) * 5;
  }

  const calculateTotal1YearSavings = () => {
    const totalWithoutSoftener = Object.entries(expenses).reduce((total, [item, cost]) => {
      const annualCost = cost * 52;
      return total + annualCost;
    }, 0);
  
    const totalWithSoftener = Object.entries(expenses).reduce((total, [item, cost]) => {
      const savingsPercentage = householdProductsSavings[item] || 0;
      const annualCost = cost * 52 * (1 - (savingsPercentage / 100));
      return total + annualCost;
    }, 0);
  
    // Add annual softener cost (€119.90)
    const annualSoftenerCost = 119.90;
    
    // Return the difference (savings)
    return totalWithoutSoftener - (totalWithSoftener + annualSoftenerCost);
  }

  // Calculate Total Costs
  const calculateTotal20YearCost = () => {
    return Object.values(expenses).reduce((total, current) => 
      total + (current * 52 * 20), 0
    )
  }

  const calculateTotal5YearCost = () => {
    return Object.values(expenses).reduce((total, current) => 
      total + (current * 52 * 5), 0
    )
  }

  const calculateTotal1YearCost = () => {
    return Object.values(expenses).reduce((total, current) => 
      total + (current * 52), 0
    )
  }


  return (
    <div className="container text-textblue py-[3rem]">
      <div className="mb-5">
        <p className=" mb-5 text-sm text-white tracking-widest flex flex-row gap-2 items-center uppercase justify-center">
        <FaDroplet className="inline-block text-selectiveyellow" />
          Hard Water Cost Calculator
        </p>
        <h2
          className="text-2xl md:text-4xl font-bold mb-3 text-center text-white"
        >
          {title || 'The True Cost of Hard Water'}
        </h2>
        {introText && (
          <RichText
            className="px-5 md:pl-0 mb-5 text-center text-white"
            data={introText}
            enableGutter={false}
          />
        )}
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {/* Household Products Section */}
        <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">
            Household Spend (€/week)
          </h3>
          <div className="grid gap-4 sm:gap-6 grid-cols-2">
            {householdProducts.map(item => (
              <div key={item}>
                <div className="flex flex-col">
                  <label className="font-medium mb-1 sm:mb-0">
                    {item}:
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      className="w-full p-3 border border-gray-300 rounded-md mb-3"
                      value={expenses[item] || ''}
                      onChange={(e) => handleExpenseChange(item, e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Total 20 Year Cost */}
      <div className="mt-8 rounded-lg shadow-sm flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
        <p className="text-lg sm:text-xl text-center text-textblue bg-gray-100 px-5 py-5 rounded-md w-full md:w-1/3 mb-0">
          Total 1 Year Cost:
          <span className="block font-semibold">
            €{formatNumber(calculateTotal1YearCost())}
          </span>
        </p>
        <p className="text-lg sm:text-xl text-center text-textblue bg-gray-100 px-5 py-5 rounded-md w-full md:w-1/3 mb-0">
          Total 5 Year Cost:
          <span className="block font-semibold">
            €{formatNumber(calculateTotal5YearCost())}
          </span>
        </p>
        <p className="text-lg sm:text-xl text-center text-textblue bg-gray-100 px-5 py-5 rounded-md w-full md:w-1/3 mb-0">
          Total 20 Year Cost:
          <span className="block font-semibold">
            €{formatNumber(calculateTotal20YearCost())}
          </span>
        </p>
      </div>
      {/* Water Softener Costs */}
      <div className="container bg-white mt-8 py-8 rounded-lg shadow-md px-6">
        <h3 className="text-2xl font-bold mb-6 text-center text-textblue">
          <FaDroplet className="inline-block text-selectiveyellow relative -top-[2px] mr-2" />
          Water Softener Costs
        </h3>
        {SoftenerCalcText && (
          <RichText
            className="px-5 md:pl-0 mb-8 text-center text-gray-600 max-w-3xl mx-auto"
            data={SoftenerCalcText}
            enableGutter={false}
          />
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Monthly Costs */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-semibold mb-6 text-center text-textblue">
              Monthly Running Costs
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Salt</p>
                <p className="text-2xl font-bold text-textblue">€3.50</p>
              </div>
              <div className="text-center">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Servicing</p>
                <p className="text-2xl font-bold text-textblue">€3.50</p>
              </div>
            </div>
          </div>

          {/* Total Costs Over Time */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-semibold mb-6 text-center text-textblue">
              Total Costs Over Time
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Monthly</p>
                <p className="text-2xl font-bold text-textblue">€11.99</p>
              </div>
              <div className="text-center">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Yearly</p>
                <p className="text-2xl font-bold text-textblue">€119.90</p>
              </div>
              <div className="text-center">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">5 Years</p>
                <p className="text-2xl font-bold text-textblue">€1,199</p>
              </div>
              <div className="text-center md:col-span-3 lg:col-span-1">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">10 Years</p>
                <p className="text-2xl font-bold text-textblue">€2,398</p>
              </div>
              <div className="text-center md:col-span-3 lg:col-span-1">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">20 Years</p>
                <p className="text-2xl font-bold text-textblue">€4,796</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-white mt-8 py-8 rounded-lg shadow-md px-6">
        <h3 className="text-2xl font-bold mb-6 text-center text-textblue">
          <FaDroplet className="inline-block text-selectiveyellow relative -top-[2px] mr-2" />
          Water Softener Savings
        </h3>
        
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed">
            Based on the calculations above, by installing a water softener you could:
          </p>
          <ul className="mt-4 text-gray-700 space-y-2 mb-3">
            <li>Enjoy purer, safer, healthier water</li>
            <li>Protect your appliances from limescale damage</li>
            <li>Reduce your household cleaning costs</li>
            <li>Save money on repairs and replacements</li>
          </ul>
          <p className="opacity-60">
            Note: Savings are based on average household expenses and may vary based on individual usage. Up front cost of Water Softener is not included in savings calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm">
            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">1 Year Savings</h4>
            <p className="text-3xl font-bold text-textblue">
              €{formatNumber(calculateTotal1YearSavings())}
            </p>
            <p className="text-sm text-gray-500 mt-2">Per Year</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm">
            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">5 Year Savings</h4>
            <p className="text-3xl font-bold text-textblue">
              €{formatNumber(calculateTotal5YearSavings())}
            </p>
            <p className="text-sm text-gray-500 mt-2">Over 5 Years</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm">
            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">20 Year Savings</h4>
            <p className="text-3xl font-bold text-textblue">
              €{formatNumber(calculateTotal20YearSavings())}
            </p>
            <p className="text-sm text-gray-500 mt-2">Over 20 Years</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComplexCalcBlock