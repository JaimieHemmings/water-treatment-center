'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function ScrollTriggerProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Refresh ScrollTrigger when the route changes
    // Small delay to ensure DOM is ready
    const refreshScrollTrigger = () => {
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    }

    refreshScrollTrigger()

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [pathname]) // Dependency on pathname ensures this runs on route changes

  return <>{children}</>
}