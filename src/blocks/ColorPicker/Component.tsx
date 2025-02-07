'use client';
import React, { useState, useEffect } from 'react'

export const ColorPickerBlock = () => {
  const [color, setColor] = useState('#FCB900')
  const [hexInput, setHexInput] = useState('#FCB900')

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setColor(newColor)
    setHexInput(newColor)
    document.documentElement.style.setProperty('--selectiveyellow', newColor)
  }

  const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    setHexInput(input)
    
    // Validate hex code format
    const isValidHex = /^#[0-9A-Fa-f]{6}$/.test(input)
    if (isValidHex) {
      setColor(input)
      document.documentElement.style.setProperty('--selectiveyellow', input)
    }
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--selectiveyellow', color)
  }, [color])

  return (
    <div className="fixed top-[15vh] left-0 bg-jet/80 z-50" style={{ padding: '20px' }}>
      <h3 className="pb-5">Highlight Color Picker</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <input 
          type="color"
          value={color}
          onChange={handleColorChange}
          aria-label="Choose selective yellow color"
        />
        <input
          type="text"
          className="text-jet"
          value={hexInput}
          onChange={handleHexInput}
          placeholder="#000000"
          maxLength={7}
          style={{ width: '80px', padding: '2px 4px' }}
          aria-label="Enter hex color code"
        />
      </div>
    </div>
  )
}