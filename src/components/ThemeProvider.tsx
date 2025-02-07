'use client'

import React from "react"
import { useEffect, useState } from "react"

export const ThemeProvider: React.FC = () => {
  const [themeConfig, setThemeConfig] = useState({
    primaryColor: '#fdce08'
  })

  useEffect(() => {
    fetch('/api/globals/theme-config')
      .then(res => res.json())
      .then(data => {
        setThemeConfig(data)
      })
      .then(() => {
        document.documentElement.style.setProperty('--selectiveyellow', themeConfig.primaryColor)
      })
  }, [themeConfig.primaryColor])
    
  return (
    <style>{`
      :root {
        --selectiveyellow: ${themeConfig.primaryColor};
      }
    `}</style>
  )
}