'use client'

import React, { useState, useEffect } from 'react'
import CustomLink from '@/components/CustomLink'
import { FaTimes, FaBell } from 'react-icons/fa'

interface BannerProps {
  title: string
  message: string
  linkText: string
  linkUrl: string
  displayDelay: number
}

const TimedBanner: React.FC<BannerProps> = ({
  title,
  message,
  linkText,
  linkUrl,
  displayDelay,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the banner has been dismissed before
    const isDismissed = localStorage.getItem('bannerDismissed')

    if (!isDismissed) {
      // Show banner after specified delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, displayDelay * 1000)

      return () => clearTimeout(timer)
    }
  }, [displayDelay])

  const handleDismiss = () => {
    setIsVisible(false)

    // Set expiration time to 24 hours from now
    const expirationTime = new Date()
    expirationTime.setHours(expirationTime.getHours() + 24)

    // Store both the dismissed state and expiration time
    localStorage.setItem('bannerDismissed', 'true')
    localStorage.setItem('bannerDismissedExpiry', expirationTime.toISOString())

    // Set up auto-removal after 24 hours
    setTimeout(
      () => {
        localStorage.removeItem('bannerDismissed')
        localStorage.removeItem('bannerDismissedExpiry')
      },
      24 * 60 * 60 * 1000,
    ) // 24 hours in milliseconds
  }

  // Check for expired banner dismissal on component mount
  useEffect(() => {
    const dismissedExpiry = localStorage.getItem('bannerDismissedExpiry')
    if (dismissedExpiry) {
      const expiryTime = new Date(dismissedExpiry)
      if (new Date() > expiryTime) {
        // Banner dismissal has expired, clear the storage
        localStorage.removeItem('bannerDismissed')
        localStorage.removeItem('bannerDismissedExpiry')
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-darkblue via-darkblue to-teal backdrop-blur-lg border-t border-selectiveyellow/30 shadow-2xl z-50 animate-slide-up">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-10 w-20 h-20 bg-selectiveyellow/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-10 w-16 h-16 bg-teal/10 rounded-full blur-2xl"></div>

      <div className="container relative z-10 mx-auto p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Content Section */}
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-selectiveyellow/20 rounded-xl">
                  <FaBell className="text-selectiveyellow animate-pulse" size={18} />
                </div>
                <h3 className="font-bold text-xl text-white">{title}</h3>
              </div>

              {/* Mobile close button */}
              <button
                onClick={handleDismiss}
                className="md:hidden p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-selectiveyellow hover:border-selectiveyellow transition-all duration-300 transform hover:scale-110"
                aria-label="Close banner"
              >
                <FaTimes size={14} />
              </button>
            </div>

            <p className="text-white/90 leading-relaxed max-w-2xl">{message}</p>

            {/* Accent line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal"></div>
          </div>

          {/* Actions Section */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div onClick={handleDismiss} className="flex-1 md:flex-initial">
              <CustomLink
                theme="white"
                label={linkText}
                link={linkUrl}
                className="w-full md:w-auto text-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-selectiveyellow hover:border-selectiveyellow text-white transition-all duration-300 transform hover:scale-105"
              />
            </div>

            {/* Desktop close button */}
            <button
              onClick={handleDismiss}
              className="hidden md:block p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-selectiveyellow hover:border-selectiveyellow transition-all duration-300 transform hover:scale-110 group"
              aria-label="Close banner"
            >
              <FaTimes
                className="group-hover:rotate-90 transition-transform duration-300"
                size={16}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimedBanner
