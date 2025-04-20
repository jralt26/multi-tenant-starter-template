import React from 'react'

interface MaltaLogoProps {
  className?: string
}

export function MaltaLogo({ className }: MaltaLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="font-bold text-2xl">MALTA</span>
      <span className="text-xs ml-2 text-muted-foreground">Financial Leasing</span>
    </div>
  )
} 