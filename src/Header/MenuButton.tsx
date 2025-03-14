'use client';
import React, { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Hamburger 
      color="#ffffff" 
      toggled={isOpen}
      toggle={setIsOpen}
      onToggle={() => setIsOpen(!isOpen)}
    />
  )
}

export default MenuButton
