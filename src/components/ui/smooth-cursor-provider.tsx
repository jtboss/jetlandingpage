"use client"

import React, { createContext, useContext, useState } from 'react'
import { SmoothCursor } from './smooth-cursor'

type CursorVariant = 'default' | 'sm'

interface CursorContextType {
  cursorVariant: CursorVariant
  cursorText: string
  setCursorVariant: (variant: CursorVariant) => void
  setCursorText: (text: string) => void
}

const CursorContext = createContext<CursorContextType>({
  cursorVariant: 'default',
  cursorText: '',
  setCursorVariant: () => {},
  setCursorText: () => {},
})

export const useCursor = () => useContext(CursorContext)

interface SmoothCursorProviderProps {
  children: React.ReactNode
}

export function SmoothCursorProvider({ children }: SmoothCursorProviderProps) {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default')
  const [cursorText, setCursorText] = useState('')
  
  return (
    <CursorContext.Provider
      value={{
        cursorVariant,
        cursorText,
        setCursorVariant,
        setCursorText,
      }}
    >
      <SmoothCursor variant={cursorVariant} text={cursorText} />
      {children}
    </CursorContext.Provider>
  )
} 