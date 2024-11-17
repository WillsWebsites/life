import { cn } from '@/lib/utils'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const StageLayout = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'w-full h-full animate-fade-in-3 relative flex flex-col items-center justify-center',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default StageLayout
