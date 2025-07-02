import React from 'react'

import type { Page } from '@/payload-types'

type LowImpactHeroType = Page['hero']

export const LowImpactHero: React.FC<LowImpactHeroType> = () => {
  return (
    <div className="container mt-16">
      <div className="max-w-[48rem]"></div>
    </div>
  )
}
