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
    localStorage.setItem('bannerDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-darkblue text-white p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-bold mb-1">{title}</h3>
          <p className="text-sm">{message}</p>
        </div>
        <div className="flex items-center gap-4">
          <div 
            onClick={handleDismiss}
          >
            <CustomLink
              theme="white"
              label={linkText}
              link={linkUrl}
            />
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-selectiveyellow"
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