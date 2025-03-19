'use client'

import React, { useState, useEffect } from 'react';
import CustomLink from '@/components/CustomLink';

interface BannerProps {
  title: string;
  message: string;
  linkText: string;
  linkUrl: string;
  displayDelay: number;
}

const TimedBanner: React.FC<BannerProps> = ({
  title,
  message,
  linkText,
  linkUrl,
  displayDelay,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the banner has been dismissed before
    const isDismissed = localStorage.getItem('bannerDismissed');
    
    if (!isDismissed) {
      // Show banner after specified delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, displayDelay * 1000);

      return () => clearTimeout(timer);
    }
  }, [displayDelay]);

  const handleDismiss = () => {
    setIsVisible(false);
    
    // Set expiration time to 24 hours from now
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 24);
    
    // Store both the dismissed state and expiration time
    localStorage.setItem('bannerDismissed', 'true');
    localStorage.setItem('bannerDismissedExpiry', expirationTime.toISOString());
    
    // Set up auto-removal after 24 hours
    setTimeout(() => {
      localStorage.removeItem('bannerDismissed');
      localStorage.removeItem('bannerDismissedExpiry');
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
  };

  // Check for expired banner dismissal on component mount
  useEffect(() => {
    const dismissedExpiry = localStorage.getItem('bannerDismissedExpiry');
    if (dismissedExpiry) {
      const expiryTime = new Date(dismissedExpiry);
      if (new Date() > expiryTime) {
        // Banner dismissal has expired, clear the storage
        localStorage.removeItem('bannerDismissed');
        localStorage.removeItem('bannerDismissedExpiry');
      }
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-darkblue text-white p-4 z-50 border-t-2 border-selectiveyellow">
      <div className="container relative mx-auto flex flex-col items-start space-y-4 md:space-y-0 md:flex-row md:items-center justify-between max-md:pt-5">
        <div className="flex-1 w-full md:w-auto">
          <div className="flex flex-row items-center justify-between">
            <h3 className="font-bold mb-2 md:mb-1 text-xl">
              {title}
            </h3>  
            <button
              onClick={handleDismiss}
              className="text-white hover:text-selectiveyellow self-end md:self-auto md:hidden font-semibold border-2 border-white p-1 rounded-md absolute right-0 top-0"
              aria-label="Close banner"
            >
              ✕
            </button>
          </div>
          <p className="text-sm md:text-base mb-4 md:mb-0 max-w-prose">{message}</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
          <div 
            onClick={handleDismiss}
            className="w-full md:w-auto"
          >
            <CustomLink
              theme="white"
              label={linkText}
              link={linkUrl}
              className="w-full md:w-auto text-center"
            />
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-selectiveyellow self-end md:self-auto max-md:hidden"
            aria-label="Close banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimedBanner;