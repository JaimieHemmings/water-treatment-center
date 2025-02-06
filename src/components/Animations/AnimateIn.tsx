'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/utilities/cn'

type AnimationProps = {
  children: React.ReactNode
  className?: string
  animation?: {
    y?: number
    x?: number
    scale?: number
    opacity?: number
    duration?: number
    delay?: number
    ease?: string
    stagger?: number
    rotate?: number
  }
  scrollTrigger?: {
    start?: string
    end?: string
    scrub?: boolean | number
    markers?: boolean
    toggleActions?: string
  }
}

export function AnimateIn({ 
  children, 
  className,
  animation = {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  },
  scrollTrigger = {
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
}: AnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const element = elementRef.current
    if (!element) return

    // Set initial state
    gsap.set(element, {
      y: animation.y,
      x: animation.x,
      rotate: animation.rotate,
      scale: animation.scale,
      opacity: animation.opacity ?? 0
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: scrollTrigger.start,
        end: scrollTrigger.end,
        scrub: scrollTrigger.scrub,
        markers: scrollTrigger.markers,
        toggleActions: scrollTrigger.toggleActions
      }
    })

    tl.to(element, {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration: animation.duration,
      delay: animation.delay,
      ease: animation.ease,
      stagger: animation.stagger,
      rotate: 0
    })

    return () => {
      // Cleanup
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animation, scrollTrigger])

  return (
    <div ref={elementRef} className={cn('will-change-transform', className)}>
      {children}
    </div>
  )
}

export default AnimateIn