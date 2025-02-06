'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/utilities/cn'

type StaggerAnimationProps = {
  children: React.ReactNode
  className?: string
  itemClassName?: string
  animation?: {
    y?: number
    x?: number
    opacity?: number
    duration?: number
    stagger?: number
    ease?: string
  }
  scrollTrigger?: {
    start?: string
    end?: string
    markers?: boolean
    toggleActions?: string
  }
}

export function AnimateInStagger({
  children,
  className,
  itemClassName,
  animation = {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out'
  },
  scrollTrigger = {
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
}: StaggerAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    if (!container) return

    const items = container.children
    
    // Set initial state
    gsap.set(items, {
      y: animation.y,
      x: animation.x,
      opacity: animation.opacity ?? 0
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: scrollTrigger.start,
        end: scrollTrigger.end,
        markers: scrollTrigger.markers,
        toggleActions: scrollTrigger.toggleActions
      }
    })

    tl.to(items, {
      y: 0,
      x: 0,
      opacity: 1,
      duration: animation.duration,
      stagger: animation.stagger,
      ease: animation.ease
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animation, scrollTrigger])

  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child) => (
        <div className={cn('will-change-transform', itemClassName)}>
          {child}
        </div>
      ))}
    </div>
  )
}