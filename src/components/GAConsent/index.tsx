'use client';

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ReactGA from "react-ga4";

const COOKIE_NAME = 'ga-consent';
const COOKIE_VALUE = 'accepted';
const COOKIE_DURATION = 365;
const GA_MEASUREMENT_ID = 'G-X6C6Y08K6N';

const GAConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check for existing cookie on mount
    const hasConsent = Cookies.get(COOKIE_NAME);
    
    if (hasConsent === COOKIE_VALUE) {
      // Initialize GA if consent was previously given
      ReactGA.initialize(GA_MEASUREMENT_ID);
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname + window.location.search
      });
    } else if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set(COOKIE_NAME, COOKIE_VALUE, { expires: COOKIE_DURATION });
    setShowBanner(false);
    
    // Initialize GA after consent
    ReactGA.initialize(GA_MEASUREMENT_ID);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search
    });
    
    // Optional: Track consent given as an event
    ReactGA.event({
      category: "Cookie Consent",
      action: "Accepted",
      label: "GA Consent"
    });
  };

  const handleDecline = () => {
    Cookies.set(COOKIE_NAME, 'declined', { expires: COOKIE_DURATION });
    setShowBanner(false);
    
    // Optional: Track consent declined as an event if GA was already initialized
    if (Cookies.get(COOKIE_NAME) === COOKIE_VALUE) {
      ReactGA.event({
        category: "Cookie Consent",
        action: "Declined",
        label: "GA Consent"
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-darkblue text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base">
            This website uses Google Analytics to analyze traffic and improve your experience. 
            By accepting, you consent to the use of cookies for analytics purposes.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleAccept}
            className="bg-azul hover:bg-azul/80 text-white px-6 py-2 rounded-md transition-colors duration-300"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="bg-transparent hover:bg-white/10 text-white px-6 py-2 rounded-md transition-colors duration-300"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default GAConsent;