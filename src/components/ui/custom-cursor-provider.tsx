"use client"

import React, { createContext, useContext, useState } from 'react'
import { CustomCursor } from './custom-cursor'

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

interface CustomCursorProviderProps {
  children: React.ReactNode
}

export function CustomCursorProvider({ children }: CustomCursorProviderProps) {
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
      <CustomCursor variant={cursorVariant} text={cursorText} />
      <div className="cursor-none">{children}</div>
    </CursorContext.Provider>
  )
} 