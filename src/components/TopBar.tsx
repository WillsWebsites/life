import { Stages } from '@/types/stages'
import React from 'react'

const TopBar = ({ children, stage }: { children?: React.ReactNode; stage?: Stages }) => {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex justify-between w-[calc(100%-3rem)] items-center select-none">
      {stage && <h2 className="text-white text-2xl font-bold">{stage}</h2>}
      {children}
    </div>
  )
}

export default TopBar
